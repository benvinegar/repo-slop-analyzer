import { readdir } from "node:fs/promises";
import path from "node:path";
import type { AnalyzerConfig } from "../config";
import type { DirectoryRecord, FileRecord, LanguagePlugin } from "../core/types";

function normalizePath(filePath: string): string {
  return filePath.split(path.sep).join("/");
}

function escapeRegex(source: string): string {
  return source.replace(/[|\\{}()[\]^$+?.]/g, "\\$&");
}

function globToRegExp(pattern: string): RegExp {
  const normalized = normalizePath(pattern);
  let regex = "^";
  let startIndex = 0;

  if (normalized.startsWith("**/")) {
    regex += "(?:.*/)?";
    startIndex = 3;
  }

  for (let index = startIndex; index < normalized.length; index += 1) {
    const char = normalized[index];
    const next = normalized[index + 1];

    if (char === "*" && next === "*") {
      regex += ".*";
      index += 1;
      continue;
    }

    if (char === "*") {
      regex += "[^/]*";
      continue;
    }

    regex += escapeRegex(char);
  }

  regex += "$";
  return new RegExp(regex);
}

function shouldIgnore(relativePath: string, patterns: string[]): boolean {
  const normalized = normalizePath(relativePath);

  return patterns.some((pattern) => {
    const regex = globToRegExp(pattern);
    return regex.test(normalized) || regex.test(`${normalized}/`);
  });
}

export async function discoverSourceFiles(
  rootDir: string,
  config: AnalyzerConfig,
  languages: LanguagePlugin[],
): Promise<{ files: FileRecord[]; directories: DirectoryRecord[] }> {
  const files: FileRecord[] = [];

  async function walkDirectory(relativeDir: string): Promise<void> {
    const absoluteDir = path.join(rootDir, relativeDir);
    const entries = await readdir(absoluteDir, { withFileTypes: true });

    for (const entry of entries) {
      const relativePath = normalizePath(path.join(relativeDir, entry.name));

      if (relativePath !== "." && shouldIgnore(relativePath, config.ignores)) {
        continue;
      }

      if (entry.isDirectory()) {
        await walkDirectory(relativePath);
        continue;
      }

      const language = languages.find((plugin) => plugin.supports(relativePath));
      if (!language) {
        continue;
      }

      const absolutePath = path.join(rootDir, relativePath);
      files.push({
        path: relativePath,
        absolutePath,
        extension: path.extname(relativePath),
        lineCount: 0,
        logicalLineCount: 0,
        languageId: language.id,
      });
    }
  }

  await walkDirectory(".");

  const directoryMap = new Map<string, string[]>();
  for (const file of files) {
    const directoryPath = normalizePath(path.dirname(file.path));
    const list = directoryMap.get(directoryPath) ?? [];
    list.push(file.path);
    directoryMap.set(directoryPath, list);
  }

  const directories = [...directoryMap.entries()]
    .map(([directoryPath, filePaths]) => ({ path: directoryPath, filePaths: filePaths.sort() }))
    .sort((left, right) => left.path.localeCompare(right.path));

  return {
    files: files.sort((left, right) => left.path.localeCompare(right.path)),
    directories,
  };
}
