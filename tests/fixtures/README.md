# Test fixtures

These fixtures back the regression suite.

## Repos

- `repos/clean/` should remain quiet
- `repos/slop-heavy/` should trigger the initial heuristic pack broadly
- `repos/mixed/` should keep findings localized to the slop subtree

## Saved reports

- `reports/saved-delta/` contains a small base/head report pair plus an expected `delta --json` snapshot

They provide stable inputs for `bun test` and for manual CLI experiments.
