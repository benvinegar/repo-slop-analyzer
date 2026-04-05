import type { AnalysisResult, ReporterPlugin } from "../core/types";

export const jsonReporter: ReporterPlugin = {
  id: "json",
  render(result: AnalysisResult): string {
    return JSON.stringify(result, null, 2);
  },
};
