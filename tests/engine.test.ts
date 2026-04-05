import { afterEach, describe, expect, test } from "bun:test";
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { analyzeRepository } from "../src/core/engine";
import { createDefaultRegistry } from "../src/default-registry";
import { DEFAULT_CONFIG } from "../src/config";

const tempDirs: string[] = [];

afterEach(async () => {
  await Promise.all(tempDirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});

async function createTempRepo(): Promise<string> {
  const rootDir = await mkdtemp(path.join(os.tmpdir(), "repo-slop-analyzer-"));
  tempDirs.push(rootDir);
  await mkdir(path.join(rootDir, "src"), { recursive: true });
  await mkdir(path.join(rootDir, "dist"), { recursive: true });
  await writeFile(path.join(rootDir, "src", "index.ts"), "export const value = 1;\n");
  await writeFile(path.join(rootDir, "dist", "ignored.ts"), "export const ignored = true;\n");
  await writeFile(path.join(rootDir, "README.md"), "ignored by language detection\n");
  return rootDir;
}

describe("analysis engine", () => {
  test("discovers supported files and ignores configured paths", async () => {
    const rootDir = await createTempRepo();
    const result = await analyzeRepository(rootDir, DEFAULT_CONFIG, createDefaultRegistry());

    expect(result.files.map((file) => file.path)).toEqual(["src/index.ts"]);
    expect(result.directories.map((directory) => directory.path)).toEqual(["src"]);
    expect(result.findings).toHaveLength(0);
    expect(result.repoScore).toBe(0);
  });

  test("renders text and json reports via the registry", async () => {
    const rootDir = await createTempRepo();
    const registry = createDefaultRegistry();
    const result = await analyzeRepository(rootDir, DEFAULT_CONFIG, registry);

    const text = await registry.getReporter("text").render(result);
    const json = await registry.getReporter("json").render(result);

    expect(text).toContain("files scanned: 1");
    expect(json).toContain('"files"');
    expect(json).toContain('"src/index.ts"');
  });
});
