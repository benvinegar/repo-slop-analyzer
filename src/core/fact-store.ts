import type { FactStoreReader } from "./types";

export class FactStore implements FactStoreReader {
  private readonly repoFacts = new Map<string, unknown>();
  private readonly directoryFacts = new Map<string, Map<string, unknown>>();
  private readonly fileFacts = new Map<string, Map<string, unknown>>();

  getRepoFact<T>(factId: string): T | undefined {
    return this.repoFacts.get(factId) as T | undefined;
  }

  setRepoFact(factId: string, value: unknown): void {
    this.repoFacts.set(factId, value);
  }

  hasRepoFact(factId: string): boolean {
    return this.repoFacts.has(factId);
  }

  getDirectoryFact<T>(directoryPath: string, factId: string): T | undefined {
    return this.directoryFacts.get(directoryPath)?.get(factId) as T | undefined;
  }

  setDirectoryFact(directoryPath: string, factId: string, value: unknown): void {
    let facts = this.directoryFacts.get(directoryPath);
    if (!facts) {
      facts = new Map<string, unknown>();
      this.directoryFacts.set(directoryPath, facts);
    }

    facts.set(factId, value);
  }

  hasDirectoryFact(directoryPath: string, factId: string): boolean {
    return this.directoryFacts.get(directoryPath)?.has(factId) ?? false;
  }

  getFileFact<T>(filePath: string, factId: string): T | undefined {
    return this.fileFacts.get(filePath)?.get(factId) as T | undefined;
  }

  setFileFact(filePath: string, factId: string, value: unknown): void {
    let facts = this.fileFacts.get(filePath);
    if (!facts) {
      facts = new Map<string, unknown>();
      this.fileFacts.set(filePath, facts);
    }

    facts.set(factId, value);
  }

  hasFileFact(filePath: string, factId: string): boolean {
    return this.fileFacts.get(filePath)?.has(factId) ?? false;
  }

  retainFileFacts(filePath: string, factIds: Iterable<string>): void {
    const facts = this.fileFacts.get(filePath);
    if (!facts) {
      return;
    }

    const keep = new Set(factIds);
    for (const factId of facts.keys()) {
      if (!keep.has(factId)) {
        facts.delete(factId);
      }
    }

    if (facts.size === 0) {
      this.fileFacts.delete(filePath);
    }
  }

  listFilePathsWithFact(factId: string): string[] {
    return [...this.fileFacts.entries()]
      .filter(([, facts]) => facts.has(factId))
      .map(([filePath]) => filePath)
      .sort((left, right) => left.localeCompare(right));
  }
}
