import { createHash } from "node:crypto";
import packageJson from "../package.json";
import type { AnalyzerConfig } from "./config";
import type { AnalysisResult, ReportMetadata, ReportPluginMetadata } from "./core/types";
import type { LoadedPlugin } from "./plugin";

export const REPORT_SCHEMA_VERSION = 1;
export const TOOL_NAME = "slop-scan";
export const TOOL_VERSION = typeof packageJson.version === "string" ? packageJson.version : "0.0.0";

function stableSerialize(value: unknown): string {
  if (value === null) {
    return "null";
  }

  if (Array.isArray(value)) {
    return `[${value.map(stableSerialize).join(",")}]`;
  }

  switch (typeof value) {
    case "bigint":
      return JSON.stringify(value.toString());
    case "boolean":
      return value ? "true" : "false";
    case "number":
      return Number.isFinite(value) ? JSON.stringify(value) : JSON.stringify(String(value));
    case "string":
      return JSON.stringify(value);
    case "undefined":
    case "function":
    case "symbol":
      return "null";
    case "object": {
      const entries = Object.entries(value)
        .filter(([, entryValue]) => entryValue !== undefined)
        .sort(([left], [right]) => left.localeCompare(right));

      return `{${entries
        .map(([key, entryValue]) => `${JSON.stringify(key)}:${stableSerialize(entryValue)}`)
        .join(",")}}`;
    }
  }
}

function buildPluginMetadata(plugins: LoadedPlugin[]): ReportPluginMetadata[] {
  return plugins
    .map((plugin) => ({
      namespace: plugin.namespace,
      name: plugin.plugin.meta.name,
      version: plugin.plugin.meta.version ?? null,
      source: plugin.source,
    }))
    .sort(
      (left, right) =>
        left.namespace.localeCompare(right.namespace) ||
        left.name.localeCompare(right.name) ||
        (left.version ?? "").localeCompare(right.version ?? "") ||
        left.source.localeCompare(right.source),
    );
}

export function createConfigHash(
  config: AnalyzerConfig,
  plugins: ReportPluginMetadata[] = [],
): string {
  return createHash("sha256")
    .update(
      stableSerialize({
        config,
        plugins: plugins.map((plugin) => ({
          namespace: plugin.namespace,
          name: plugin.name,
          version: plugin.version,
          source: plugin.source,
        })),
      }),
    )
    .digest("hex")
    .slice(0, 16);
}

export function buildReportMetadata(
  config: AnalyzerConfig,
  plugins: LoadedPlugin[] = [],
): ReportMetadata {
  const pluginMetadata = buildPluginMetadata(plugins);

  return {
    schemaVersion: REPORT_SCHEMA_VERSION,
    tool: {
      name: TOOL_NAME,
      version: TOOL_VERSION,
    },
    configHash: createConfigHash(config, pluginMetadata),
    plugins: pluginMetadata,
  };
}

export function getReportMetadata(result: AnalysisResult): ReportMetadata {
  return result.metadata ?? buildReportMetadata(result.config);
}
