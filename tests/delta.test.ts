import { describe, expect, test } from "bun:test";
import {
  buildFindingOccurrences,
  diffReports,
  formatDeltaText,
  parseFailOn,
  shouldFailDelta,
  type DeltaReport,
} from "../src/delta";
import type { AnalysisResult } from "../src/core/types";

function createBaseResult(): AnalysisResult {
  return {
    rootDir: "/tmp/example",
    config: { ignores: [], rules: {}, thresholds: {}, overrides: [] },
    summary: {
      fileCount: 4,
      directoryCount: 1,
      findingCount: 2,
      repoScore: 4,
      physicalLineCount: 40,
      logicalLineCount: 30,
      functionCount: 4,
      normalized: {
        scorePerFile: 1,
        scorePerKloc: 133.33,
        scorePerFunction: 1,
        findingsPerFile: 0.5,
        findingsPerKloc: 66.67,
        findingsPerFunction: 0.5,
      },
    },
    files: [],
    directories: [],
    findings: [
      {
        ruleId: "structure.duplicate-function-signatures",
        family: "structure",
        severity: "medium",
        scope: "file",
        message: "Found 2 duplicated function signatures",
        evidence: ["normalizeUser", "normalizeTeam"],
        score: 3,
        path: "src/a.ts",
        locations: [
          { path: "src/a.ts", line: 1, column: 1 },
          { path: "src/b.ts", line: 1, column: 1 },
        ],
      },
      {
        ruleId: "defensive.empty-catch",
        family: "defensive",
        severity: "weak",
        scope: "file",
        message: "Found 1 empty catch block",
        evidence: ["line 10"],
        score: 1,
        path: "src/error.ts",
        locations: [{ path: "src/error.ts", line: 10, column: 1 }],
      },
    ],
    fileScores: [],
    directoryScores: [],
    repoScore: 4,
    metadata: {
      schemaVersion: 1,
      tool: { name: "slop-scan", version: "0.2.0" },
      configHash: "same-config",
      plugins: [],
    },
  };
}

function createHeadResult(): AnalysisResult {
  return {
    rootDir: "/tmp/example",
    config: { ignores: [], rules: {}, thresholds: {}, overrides: [] },
    summary: {
      fileCount: 5,
      directoryCount: 1,
      findingCount: 2,
      repoScore: 5,
      physicalLineCount: 55,
      logicalLineCount: 42,
      functionCount: 5,
      normalized: {
        scorePerFile: 1,
        scorePerKloc: 119.05,
        scorePerFunction: 1,
        findingsPerFile: 0.4,
        findingsPerKloc: 47.62,
        findingsPerFunction: 0.4,
      },
    },
    files: [],
    directories: [],
    findings: [
      {
        ruleId: "structure.duplicate-function-signatures",
        family: "structure",
        severity: "medium",
        scope: "file",
        message: "Found 3 duplicated function signatures",
        evidence: ["normalizeUser", "normalizeTeam", "normalizeAccount"],
        score: 4.5,
        path: "src/a.ts",
        locations: [
          { path: "src/a.ts", line: 1, column: 1 },
          { path: "src/b.ts", line: 1, column: 1 },
          { path: "src/c.ts", line: 1, column: 1 },
        ],
      },
      {
        ruleId: "comments.placeholder-comments",
        family: "comments",
        severity: "weak",
        scope: "file",
        message: "Found 1 placeholder comment",
        evidence: ["TODO"],
        score: 0.5,
        path: "src/todo.ts",
        locations: [{ path: "src/todo.ts", line: 5, column: 1 }],
      },
    ],
    fileScores: [],
    directoryScores: [],
    repoScore: 5,
    metadata: {
      schemaVersion: 1,
      tool: { name: "slop-scan", version: "0.2.0" },
      configHash: "same-config",
      plugins: [],
    },
  };
}

describe("delta helpers", () => {
  test("buildFindingOccurrences splits grouped findings into per-path occurrences", () => {
    const occurrences = buildFindingOccurrences(createHeadResult());

    expect(
      occurrences
        .filter((occurrence) => occurrence.ruleId === "structure.duplicate-function-signatures")
        .map((occurrence) => occurrence.path)
        .sort(),
    ).toEqual(["src/a.ts", "src/b.ts", "src/c.ts"]);
  });

  test("diffReports classifies added, resolved, and worsened occurrences", () => {
    const delta = diffReports(createBaseResult(), createHeadResult());

    expect(delta.summary).toMatchObject({
      baseFindingCount: 2,
      headFindingCount: 2,
      netFindingCount: 0,
      addedCount: 2,
      resolvedCount: 1,
      worsenedCount: 2,
      improvedCount: 0,
      changedPathCount: 5,
      hasChanges: true,
    });
    expect(delta.paths.map((pathDelta) => pathDelta.path)).toEqual([
      "src/c.ts",
      "src/a.ts",
      "src/b.ts",
      "src/error.ts",
      "src/todo.ts",
    ]);
    expect(delta.rules).toEqual([
      {
        ruleId: "structure.duplicate-function-signatures",
        family: "structure",
        addedCount: 1,
        resolvedCount: 0,
        worsenedCount: 2,
        improvedCount: 0,
      },
      {
        ruleId: "comments.placeholder-comments",
        family: "comments",
        addedCount: 1,
        resolvedCount: 0,
        worsenedCount: 0,
        improvedCount: 0,
      },
      {
        ruleId: "defensive.empty-catch",
        family: "defensive",
        addedCount: 0,
        resolvedCount: 1,
        worsenedCount: 0,
        improvedCount: 0,
      },
    ]);
  });

  test("formatDeltaText renders a compact human-readable summary", () => {
    const text = formatDeltaText(diffReports(createBaseResult(), createHeadResult()));

    expect(text).toContain("slop-scan delta");
    expect(text).toContain("Occurrence changes:");
    expect(text).toContain("- src/c.ts  Δscore +4.50");
    expect(text).toContain("added  medium  Found 3 duplicated function signatures");
    expect(text).toContain("resolved  weak  Found 1 empty catch block");
  });

  test("diffReports warns when metadata changes between reports", () => {
    const head = createHeadResult();
    head.metadata = {
      ...head.metadata!,
      configHash: "different-config",
      tool: { ...head.metadata!.tool, version: "0.2.1" },
    };

    const delta = diffReports(createBaseResult(), head);

    expect(delta.warnings.map((warning) => warning.code)).toEqual([
      "tool-version-mismatch",
      "config-hash-mismatch",
    ]);
  });

  test("parseFailOn and shouldFailDelta support regression-oriented policies", () => {
    const delta: DeltaReport = diffReports(createBaseResult(), createHeadResult());

    expect(parseFailOn("added,worsened")).toEqual(["added", "worsened"]);
    expect(shouldFailDelta(delta, parseFailOn("worsened"))).toBe(true);
    expect(shouldFailDelta(delta, parseFailOn("improved"))).toBe(false);
    expect(shouldFailDelta(delta, parseFailOn("any"))).toBe(true);
  });
});
