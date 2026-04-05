import type { LanguagePlugin } from "../core/types";

const SUPPORTED_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);

export const javascriptLikeLanguage: LanguagePlugin = {
  id: "javascript-like",
  supports(filePath: string): boolean {
    const parts = filePath.split(".");
    if (parts.length < 2) {
      return false;
    }

    const extension = `.${parts.at(-1)}`;
    return SUPPORTED_EXTENSIONS.has(extension);
  },
};
