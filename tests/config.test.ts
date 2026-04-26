import { afterEach, describe, expect, test } from "bun:test";
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { loadConfig } from "../src/config";

const tempDirs: string[] = [];

afterEach(async () => {
  await Promise.all(tempDirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});

async function createTempRepo(): Promise<string> {
  const rootDir = await mkdtemp(path.join(os.tmpdir(), "slop-scan-config-"));
  tempDirs.push(rootDir);
  await mkdir(path.join(rootDir, "src"), { recursive: true });
  await writeFile(
    path.join(rootDir, "src", "comments.ts"),
    "function loadValue(input: string) {\n  return Promise.resolve(input);\n}\n\nexport async function fetchData(id: string) {\n  return await loadValue(id);\n}\n",
  );
  return rootDir;
}

describe("rule config support", () => {
  test("loadConfig reads slop-scan.config.json", async () => {
    const rootDir = await createTempRepo();
    await writeFile(
      path.join(rootDir, "slop-scan.config.json"),
      JSON.stringify({ ignores: ["src/comments.ts"] }),
    );

    const config = await loadConfig(rootDir);

    expect(config.ignores).toEqual(["src/comments.ts"]);
  });

  test("loadConfig invalidates cached module configs when the file changes", async () => {
    const rootDir = await createTempRepo();
    const configPath = path.join(rootDir, "slop-scan.config.ts");
    await writeFile(configPath, 'export default { ignores: ["src/comments.ts"] };\n');

    const first = await loadConfig(rootDir);
    expect(first.ignores).toEqual(["src/comments.ts"]);

    await Bun.sleep(5);
    await writeFile(configPath, 'export default { ignores: ["src/nested.ts"] };\n');

    const second = await loadConfig(rootDir);
    expect(second.ignores).toEqual(["src/nested.ts"]);
  });

  test("loadConfig reads path-scoped overrides", async () => {
    const rootDir = await createTempRepo();
    await writeFile(
      path.join(rootDir, "slop-scan.config.json"),
      JSON.stringify({
        overrides: [
          {
            files: ["src/comments.ts"],
            rules: {
              "defensive.error-obscuring": { enabled: false },
            },
          },
        ],
      }),
    );

    const config = await loadConfig(rootDir);

    expect(config.overrides).toEqual([
      {
        files: ["src/comments.ts"],
        rules: {
          "defensive.error-obscuring": { enabled: false },
        },
      },
    ]);
  });

  test("loadConfig falls back to repo-slop.config.json", async () => {
    const rootDir = await createTempRepo();
    await writeFile(
      path.join(rootDir, "repo-slop.config.json"),
      JSON.stringify({ ignores: ["src/comments.ts"] }),
    );

    const config = await loadConfig(rootDir);

    expect(config.ignores).toEqual(["src/comments.ts"]);
  });
});
