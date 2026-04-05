import { Registry } from "./core/registry";
import { javascriptLikeLanguage } from "./languages/javascript-like";
import { jsonReporter } from "./reporters/json";
import { textReporter } from "./reporters/text";

export function createDefaultRegistry(): Registry {
  const registry = new Registry();
  registry.registerLanguage(javascriptLikeLanguage);
  registry.registerReporter(textReporter);
  registry.registerReporter(jsonReporter);
  return registry;
}
