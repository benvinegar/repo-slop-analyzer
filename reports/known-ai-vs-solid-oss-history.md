# Rolling benchmark history: Known AI repos vs older solid OSS repos

Latest update: 2026-07-13
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

- `0.4.0` @ `aac1dcb` — 18 latest repo snapshots

## Latest cohort medians

| Cohort | Repo count | Median current blended | Median score/file | Median findings/file |
|---|---:|---:|---:|---:|
| explicit-ai | 9 | **5.00** | 1.12 | 0.32 |
| mature-oss | 9 | **1.00** | 0.15 | 0.05 |

## AI cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [garrytan/gstack](https://github.com/garrytan/gstack) | 17 | █▂▁▃▁▁▁▂ | `main@7c9df1c` | **8.66** | **11.09** | **11.92** | +0.02 | +4.72 | 1.65 | 0.44 |
| [redwoodjs/agent-ci](https://github.com/redwoodjs/agent-ci) | 17 | ▁▇▇▇▇▇▇█ | `main@b1848e0` | **7.05** | **9.03** | **9.62** | +0.02 | +5.13 | 1.34 | 0.40 |
| [jiayun/DevWorkbench](https://github.com/jiayun/DevWorkbench) | 17 | ▅▅▅▅▅▅▅▅ | `main@27f0d1a` | **7.02** | **8.99** | **8.99** | 0.00 | +5.59 | 1.26 | 0.47 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 17 | ▁▆▆▆███▇ | `main@26312fd` | **5.48** | **7.02** | **7.06** | -0.02 | +4.09 | 1.36 | 0.38 |
| [emdash-cms/emdash](https://github.com/emdash-cms/emdash) | 15 | ▁▂▃▄▅▇▇█ | `main@6fb52b0` | **4.51** | **5.78** | **5.78** | +0.05 | +3.61 | 0.97 | 0.26 |
| [cloudflare/vinext](https://github.com/cloudflare/vinext) | 17 | ▁▄▇█▅▁▇▇ | `main@8d0a18d` | **3.18** | **4.08** | **4.11** | -0.01 | +2.09 | 0.53 | 0.15 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 17 | ▇▂█▃▂▂▁▁ | `main@4fdf4bc` | **2.59** | **3.32** | **3.59** | +0.01 | +2.52 | 0.46 | 0.17 |
| [FullAgent/fulling](https://github.com/FullAgent/fulling) | 17 | ███████▁ | `main@4b1e5ad` | **1.72** | **2.20** | **10.28** | -8.07 | +0.04 | 0.19 | 0.04 |
| [robinebers/openusage](https://github.com/robinebers/openusage) | 17 | ▆▆▁██··· | `main@8674407` | **n/a** | **n/a** | **6.56** | n/a | n/a | n/a | n/a |

## Mature OSS cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [withastro/astro](https://github.com/withastro/astro) | 17 | ▂▁▁▇▇▇█▇ | `main@79a41e0` | **1.77** | **2.27** | **2.28** | -0.02 | +0.72 | 0.19 | 0.07 |
| [vitejs/vite](https://github.com/vitejs/vite) | 17 | ▁▅█▅▄█▆▅ | `main@fef682d` | **1.64** | **2.10** | **2.11** | -0.01 | +0.58 | 0.15 | 0.05 |
| [egoist/tsup](https://github.com/egoist/tsup) | 17 | ▅▅▅▅▅▅▅▅ | `main@b6bcae8` | **1.18** | **1.52** | **1.52** | 0.00 | +0.60 | 0.15 | 0.06 |
| [pmndrs/zustand](https://github.com/pmndrs/zustand) | 17 | █▁▁▁▁▁▁▁ | `main@beca84e` | **1.05** | **1.35** | **1.38** | 0.00 | -0.03 | 0.19 | 0.08 |
| [payloadcms/payload](https://github.com/payloadcms/payload) | 17 | ▂▂▁▂▁▁█▆ | `main@7fd4642` | **1.00** | **1.28** | **1.34** | -0.01 | -0.04 | 0.11 | 0.03 |
| [umami-software/umami](https://github.com/umami-software/umami) | 17 | ▁▁▁▁▁███ | `master@af1b6c6` | **0.77** | **0.99** | **1.04** | 0.00 | -0.06 | 0.08 | 0.03 |
| [sindresorhus/execa](https://github.com/sindresorhus/execa) | 17 | ▂▂▂▂▂▂█▁ | `main@5944b2d` | **0.77** | **0.98** | **1.10** | -0.11 | +0.10 | 0.09 | 0.02 |
| [mikaelbr/node-notifier](https://github.com/mikaelbr/node-notifier) | 17 | ▅▅▅▅▅▅▅▅ | `master@b36c237` | **0.74** | **0.95** | **0.95** | 0.00 | +0.53 | 0.08 | 0.04 |
| [vercel/hyper](https://github.com/vercel/hyper) | 17 | ▅▅▅▅▅▅▅▅ | `canary@da0c401` | **0.70** | **0.90** | **0.90** | 0.00 | +0.49 | 0.63 | 0.15 |

## Table legend

- `Current blended` = latest repo score vs the current mature-OSS medians from the same rolling run.
- `Latest pinned` = latest repo score vs the frozen pinned mature-OSS baseline snapshot.
- `Highest pinned` = highest stored repo score on that same pinned baseline.
- `Δ prev (pinned)` = latest pinned - previous week's pinned score.
- `Δ first (pinned)` = latest pinned - first stored pinned score for that repo.

## Biggest increases vs previous week

- [emdash-cms/emdash](https://github.com/emdash-cms/emdash) — +0.05 vs previous week (pinned blended)
- [garrytan/gstack](https://github.com/garrytan/gstack) — +0.02 vs previous week (pinned blended)
- [redwoodjs/agent-ci](https://github.com/redwoodjs/agent-ci) — +0.02 vs previous week (pinned blended)
- [modem-dev/hunk](https://github.com/modem-dev/hunk) — +0.01 vs previous week (pinned blended)

## Biggest decreases vs previous week

- [FullAgent/fulling](https://github.com/FullAgent/fulling) — -8.07 vs previous week (pinned blended)
- [sindresorhus/execa](https://github.com/sindresorhus/execa) — -0.11 vs previous week (pinned blended)
- [openclaw/openclaw](https://github.com/openclaw/openclaw) — -0.02 vs previous week (pinned blended)
- [withastro/astro](https://github.com/withastro/astro) — -0.02 vs previous week (pinned blended)
- [payloadcms/payload](https://github.com/payloadcms/payload) — -0.01 vs previous week (pinned blended)

## Notes

- `Trend (pinned)` is a mini sparkline of the repo's stored pinned-blended values across recent weekly points.
- Each repo stores one JSONL datapoint per UTC week; reruns in the same week replace that week's datapoint instead of appending duplicates.
- Older backfills can have fewer points for newer repos because the history job skips weeks before a repo had any commit on its current default branch.
- The existing pinned benchmark report remains the reproducible source of truth for exact SHA-based benchmark claims.
