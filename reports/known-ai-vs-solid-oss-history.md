# Rolling benchmark history: Known AI repos vs older solid OSS repos

Latest update: 2026-04-27
History dir: `benchmarks/history/known-ai-vs-solid-oss/`
Pinned baseline snapshot: `benchmarks/results/known-ai-vs-solid-oss.json` (2026-04-26)
Pinned baseline analyzer version: 0.3.0

## Goal

Compare a cohort of known AI-generated JavaScript/TypeScript repos against well-regarded OSS repos, with the mature-OSS cohort pinned to the latest default-branch commit on or before 2025-01-01, using exact commit SHAs and normalized analyzer metrics. This rolling history tracks the same repos at the default-branch revision that existed at each recorded run time so the benchmark can show movement over time.

## Refresh

```bash
bun run benchmark:history
```

To backfill earlier weekly points honestly, rerun the history job with a past timestamp so each repo resolves the default-branch commit that existed at that time:

```bash
bun run benchmark:history --recorded-at 2026-04-06T12:00:00Z
```

## Latest analyzer revisions

- `0.3.0` @ `8254487` — 18 latest repo snapshots

## Latest cohort medians

| Cohort | Repo count | Median current blended | Median score/file | Median findings/file |
|---|---:|---:|---:|---:|
| explicit-ai | 9 | **5.27** | 1.26 | 0.29 |
| mature-oss | 9 | **1.00** | 0.15 | 0.05 |

## AI cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [garrytan/gstack](https://github.com/garrytan/gstack) | 6 | ▃▂▂▁██ | `main@dde5510` | **9.21** | **11.20** | **11.20** | +0.07 | +4.83 | 1.78 | 0.45 |
| [FullAgent/fulling](https://github.com/FullAgent/fulling) | 6 | ▁▁▁▁██ | `main@d95060f` | **8.42** | **10.24** | **10.24** | 0.00 | +8.08 | 1.28 | 0.29 |
| [redwoodjs/agent-ci](https://github.com/redwoodjs/agent-ci) | 6 | ▂▁▁▂██ | `main@6a26cae` | **7.60** | **9.25** | **9.53** | -0.28 | +5.35 | 1.31 | 0.38 |
| [jiayun/DevWorkbench](https://github.com/jiayun/DevWorkbench) | 6 | ▁▁▁▁██ | `main@ea50862` | **7.39** | **8.99** | **8.99** | 0.00 | +5.59 | 1.26 | 0.47 |
| [robinebers/openusage](https://github.com/robinebers/openusage) | 6 | ▁▁▁▁██ | `main@584d44d` | **5.27** | **6.41** | **6.41** | 0.00 | +3.35 | 1.32 | 0.31 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 6 | ▁▁▁▁██ | `main@252c634` | **5.26** | **6.40** | **6.40** | 0.00 | +3.47 | 1.01 | 0.28 |
| [emdash-cms/emdash](https://github.com/emdash-cms/emdash) | 4 | ▁▁██ | `main@156eeb7` | **4.18** | **5.08** | **5.08** | +0.03 | +2.91 | 0.84 | 0.22 |
| [cloudflare/vinext](https://github.com/cloudflare/vinext) | 6 | ▁▁▁▁██ | `main@fc5f7a6` | **3.13** | **3.81** | **3.81** | +0.08 | +1.82 | 0.41 | 0.12 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 6 | ▁▂▂▃██ | `main@7a5dbb7` | **2.95** | **3.59** | **3.59** | 0.00 | +2.79 | 0.48 | 0.17 |

## Mature OSS cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [vitejs/vite](https://github.com/vitejs/vite) | 6 | ▁▁▁▁██ | `main@672c962` | **1.71** | **2.08** | **2.08** | 0.00 | +0.56 | 0.15 | 0.05 |
| [withastro/astro](https://github.com/withastro/astro) | 6 | ▂▁▁▁██ | `main@05bffe2` | **1.68** | **2.05** | **2.05** | 0.00 | +0.50 | 0.17 | 0.06 |
| [egoist/tsup](https://github.com/egoist/tsup) | 6 | ▁▁▁▁██ | `main@b906f86` | **1.25** | **1.52** | **1.52** | 0.00 | +0.60 | 0.15 | 0.06 |
| [pmndrs/zustand](https://github.com/pmndrs/zustand) | 6 | ██▆▆▁▁ | `main@1b04af1` | **1.12** | **1.36** | **1.38** | 0.00 | -0.03 | 0.19 | 0.08 |
| [payloadcms/payload](https://github.com/payloadcms/payload) | 6 | ▇▇▇█▁▁ | `main@0ceba02` | **1.00** | **1.22** | **1.34** | 0.00 | -0.10 | 0.10 | 0.03 |
| [sindresorhus/execa](https://github.com/sindresorhus/execa) | 6 | ▁▁▁▁██ | `main@f3a2e84` | **0.82** | **0.99** | **0.99** | 0.00 | +0.11 | 0.09 | 0.02 |
| [mikaelbr/node-notifier](https://github.com/mikaelbr/node-notifier) | 6 | ▁▁▁▁██ | `master@b36c237` | **0.78** | **0.95** | **0.95** | 0.00 | +0.53 | 0.08 | 0.04 |
| [vercel/hyper](https://github.com/vercel/hyper) | 6 | ▁▁▁▁██ | `canary@2a7bb18` | **0.74** | **0.90** | **0.90** | 0.00 | +0.49 | 0.63 | 0.15 |
| [umami-software/umami](https://github.com/umami-software/umami) | 6 | ████▁▁ | `master@c78ff36` | **0.70** | **0.85** | **1.04** | 0.00 | -0.19 | 0.07 | 0.02 |

## Table legend

- `Current blended` = latest repo score vs the current mature-OSS medians from the same rolling run.
- `Latest pinned` = latest repo score vs the frozen pinned mature-OSS baseline snapshot.
- `Highest pinned` = highest stored repo score on that same pinned baseline.
- `Δ prev (pinned)` = latest pinned - previous week's pinned score.
- `Δ first (pinned)` = latest pinned - first stored pinned score for that repo.

## Biggest increases vs previous week

- [cloudflare/vinext](https://github.com/cloudflare/vinext) — +0.08 vs previous week (pinned blended)
- [garrytan/gstack](https://github.com/garrytan/gstack) — +0.07 vs previous week (pinned blended)
- [emdash-cms/emdash](https://github.com/emdash-cms/emdash) — +0.03 vs previous week (pinned blended)

## Biggest decreases vs previous week

- [redwoodjs/agent-ci](https://github.com/redwoodjs/agent-ci) — -0.28 vs previous week (pinned blended)
- [openclaw/openclaw](https://github.com/openclaw/openclaw) — 0.00 vs previous week (pinned blended)
- [withastro/astro](https://github.com/withastro/astro) — 0.00 vs previous week (pinned blended)

## Notes

- `Trend (pinned)` is a mini sparkline of the repo's stored pinned-blended values across recent weekly points.
- Each repo stores one JSONL datapoint per UTC week; reruns in the same week replace that week's datapoint instead of appending duplicates.
- Older backfills can have fewer points for newer repos because the history job skips weeks before a repo had any commit on its current default branch.
- The existing pinned benchmark report remains the reproducible source of truth for exact SHA-based benchmark claims.
