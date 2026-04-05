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
}
