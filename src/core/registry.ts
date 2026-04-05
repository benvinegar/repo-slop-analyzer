import type { FactProvider, LanguagePlugin, ReporterPlugin, RulePlugin } from "./types";

export class Registry {
  private readonly languages: LanguagePlugin[] = [];
  private readonly factProviders: FactProvider[] = [];
  private readonly rules: RulePlugin[] = [];
  private readonly reporters = new Map<string, ReporterPlugin>();

  registerLanguage(plugin: LanguagePlugin): void {
    this.languages.push(plugin);
  }

  registerFactProvider(plugin: FactProvider): void {
    this.factProviders.push(plugin);
  }

  registerRule(plugin: RulePlugin): void {
    this.rules.push(plugin);
  }

  registerReporter(plugin: ReporterPlugin): void {
    this.reporters.set(plugin.id, plugin);
  }

  getLanguages(): LanguagePlugin[] {
    return [...this.languages];
  }

  getFactProviders(): FactProvider[] {
    return [...this.factProviders];
  }

  getRules(): RulePlugin[] {
    return [...this.rules];
  }

  getReporter(id: string): ReporterPlugin {
    const reporter = this.reporters.get(id);

    if (!reporter) {
      throw new Error(`Unknown reporter: ${id}`);
    }

    return reporter;
  }

  detectLanguage(filePath: string): LanguagePlugin | null {
    return this.languages.find((plugin) => plugin.supports(filePath)) ?? null;
  }
}
