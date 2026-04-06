# Known AI repos vs older solid OSS repos

Date: 2026-04-06

## Goal

Check whether the analyzer's **normalized metrics** separate a small cohort of explicitly AI-generated JavaScript/TypeScript repos from a cohort of older, well-regarded OSS repos that are at least two years old.

## Selection rules

### AI cohort
Included only repos with an explicit AI-generated-code disclosure in the README or repo description.

Examples of provenance statements:
- `golusprasad12-arch/universal-pm` — README: **"This project is 100% AI-generated code."**
- `robinebers/openusage` — README: **"Not a single line of code in this project was read or written by hand. 100% AI-generated, AI-reviewed, AI-shipped"**
- `jiayun/DevWorkbench` — README: **"100% AI-Generated Code"**
- `ZeldOcarina/claude-code-voice-notifications` — README: **"This entire project was built from scratch using Claude Code with 100% AI-generated code!"**
- `FullAgent/fulling` — README: **"100% AI-generated code."**

### Solid OSS cohort
Included mature JS/TS repos created more than two years ago, with strong OSS reputations and no reason to suspect vibe-coded origins:
- `antfu-collective/ni` — created 2020-11-05
- `mikaelbr/node-notifier` — created 2012-12-02
- `egoist/tsup` — created 2020-03-19
- `sindresorhus/execa` — created 2015-12-05
- `vercel/hyper` — created 2016-07-01
- `umami-software/umami` — created 2020-07-17

## Commands used

```bash
bun run src/cli.ts scan <repo> --json
```

All comparisons below use the analyzer's normalized metrics:
- score / file
- score / KLOC (logical LOC)
- score / function
- findings / file
- findings / KLOC (logical LOC)
- findings / function

## AI cohort

| Repo | Age | Stars | Files | Logical LOC | Functions | Score/file | Score/KLOC | Score/function | Findings/file | Findings/KLOC | Findings/function |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `universal-pm` | 0.0y | 0 | 18 | 1295 | 149 | **4.93** | **68.49** | 0.60 | **1.28** | **17.76** | 0.15 |
| `voice-notifications` | 0.6y | 12 | 5 | 156 | 7 | **1.50** | **48.08** | **1.07** | **0.60** | **19.23** | **0.43** |
| `openusage` | 0.2y | 1715 | 139 | 22270 | 491 | **1.39** | 8.67 | 0.39 | **0.33** | 2.07 | 0.09 |
| `devworkbench` | 0.8y | 17 | 32 | 2986 | 147 | **0.98** | **10.52** | 0.21 | **0.44** | **4.69** | **0.10** |
| `fulling` | 0.5y | 2413 | 219 | 12154 | 574 | **0.77** | **13.79** | 0.29 | **0.25** | **4.52** | **0.10** |

## Older solid OSS cohort

| Repo | Age | Stars | Files | Logical LOC | Functions | Score/file | Score/KLOC | Score/function | Findings/file | Findings/KLOC | Findings/function |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `ni` | 5.4y | 8146 | 87 | 2138 | 99 | 0.72 | 29.41 | 0.64 | 0.16 | 6.55 | 0.14 |
| `node-notifier` | 13.3y | 5843 | 24 | 2114 | 42 | 0.20 | 2.32 | 0.12 | 0.08 | 0.95 | 0.05 |
| `tsup` | 6.0y | 11198 | 48 | 2813 | 140 | 0.22 | 3.72 | 0.07 | 0.08 | 1.42 | 0.03 |
| `execa` | 10.3y | 7481 | 581 | 20432 | 1008 | 0.24 | 6.82 | 0.14 | 0.08 | 2.30 | 0.05 |
| `hyper` | 9.8y | 44687 | 115 | 65160 | 5356 | 0.74 | 1.30 | 0.02 | 0.18 | 0.32 | 0.00 |
| `umami` | 5.7y | 36012 | 674 | 24859 | 1209 | 0.66 | 17.81 | 0.37 | 0.20 | 5.47 | 0.11 |

## Cohort medians

Using the five explicit-AI repos above vs the six mature OSS repos:

| Metric | AI median | Solid median | Ratio |
|---|---:|---:|---:|
| Score / file | **1.39** | **0.45** | **3.10x** |
| Score / KLOC | **13.79** | **5.27** | **2.62x** |
| Score / function | **0.39** | **0.13** | **3.09x** |
| Findings / file | **0.44** | **0.12** | **3.58x** |
| Findings / KLOC | **4.69** | **1.86** | **2.52x** |
| Findings / function | **0.10** | **0.05** | **2.03x** |

## Spot-check pairings

These are not perfect apples-to-apples matches, but they are useful domain-adjacent checks.

| AI repo | Solid repo | Score/file ratio | Score/KLOC ratio | Score/function ratio | Findings/file ratio | Findings/KLOC ratio | Findings/function ratio |
|---|---|---:|---:|---:|---:|---:|---:|
| `universal-pm` | `ni` | **6.82x** | **2.33x** | 0.94x | **7.94x** | **2.71x** | 1.09x |
| `voice-notifications` | `node-notifier` | **7.35x** | **20.74x** | **9.18x** | **7.20x** | **20.33x** | **9.00x** |
| `devworkbench` | `hyper` | **1.33x** | **8.09x** | **13.51x** | **2.40x** | **14.55x** | **24.29x** |
| `openusage` | `umami` | **2.12x** | 0.49x | 1.07x | **1.64x** | 0.38x | 0.83x |

### What this says

- `universal-pm` and `voice-notifications` separate **very strongly** from mature OSS baselines.
- `devworkbench` separates **moderately to strongly**, especially on KLOC- and function-normalized metrics.
- `openusage` is a useful **negative control**: it scores worse per file than `umami`, but better per KLOC and roughly similar per function.

That last case is important. It suggests the analyzer is **not** simply labeling every explicit-AI repo as bad; some AI-built repos can look fairly normal under current heuristics.

## Rule-family shape

### AI cohort
Top finding families across the five AI repos:
- `defensive.needless-try-catch` — 35.5%
- `tests.duplicate-mock-setup` — 20.6%
- `defensive.async-noise` — 19.1%
- `structure.directory-fanout-hotspot` — 12.1%
- `structure.pass-through-wrappers` — 9.2%

### Solid OSS cohort
Top finding families across the six mature repos:
- `defensive.async-noise` — 50.0%
- `structure.directory-fanout-hotspot` — 16.1%
- `defensive.needless-try-catch` — 14.7%
- `structure.pass-through-wrappers` — 9.4%
- `structure.over-fragmentation` — 6.7%

### Interpretation

The AI cohort stands out most on:
- defensive try/catch noise
- duplicated test setup / mock scaffolding
- shallow async wrappers

The mature OSS cohort is not clean by any means, but its findings skew more toward:
- generalized async patterns in larger codebases
- repo structure hot spots
- some legacy wrapper density

## Notable examples

### `universal-pm`
Still the cleanest "AI slop" demo in the current benchmark:
- `score/file = 4.93`
- `score/KLOC = 68.49`
- dominated by `defensive.needless-try-catch` and `defensive.async-noise`

### `voice-notifications`
Tiny repo, but very dense on the current heuristics:
- `score/file = 1.50`
- `score/KLOC = 48.08`
- `score/function = 1.07`

### `openusage`
Worth keeping as a counterexample:
- explicit AI provenance
- still noisy on duplicated test setup and try/catch
- but **not** consistently worse than `umami` once normalized by KLOC and function

## Current takeaway

The current analyzer is directionally useful on a broader benchmark than the original `universal-pm` vs `ni` check.

On median normalized metrics, the explicit-AI cohort is higher by roughly:
- **3.1x** on score / file
- **2.6x** on score / KLOC
- **3.1x** on score / function
- **3.6x** on findings / file

That is encouraging.

But the benchmark also shows something important:

> explicit AI provenance does **not automatically** mean the repo will look slop-heavy under these heuristics.

That makes the current direction more credible.

## Caveats

1. This is still a small, hand-picked benchmark.
2. Some pairings are only domain-adjacent, not exact peers.
3. The analyzer currently only understands JS/TS files.
4. Mature repos still pick up non-trivial structural and async findings.
5. Very small repos can spike KLOC- and function-normalized metrics quickly.

## Recommended next steps

1. Add duplicate function / near-clone detection.
2. Further tune `tests.duplicate-mock-setup` around intentionally shared test matrices.
3. Split boundary wrappers from leaf-business-logic wrappers more explicitly.
4. Build a saved benchmark suite with pinned commit SHAs so comparisons stay stable over time.
