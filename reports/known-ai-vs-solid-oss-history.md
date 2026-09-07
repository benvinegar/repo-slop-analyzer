# Rolling benchmark history: Known AI repos vs older solid OSS repos

Latest update: 2026-09-07
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

- `0.4.0` @ `ae07889` — 18 latest repo snapshots

## Latest cohort medians

| Cohort | Repo count | Median current blended | Median score/file | Median findings/file |
|---|---:|---:|---:|---:|
| explicit-ai | 9 | **4.76** | 1.23 | 0.34 |
| mature-oss | 9 | **1.00** | 0.15 | 0.06 |

## AI cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [garrytan/gstack](https://github.com/garrytan/gstack) | 25 | ████▄▄▂▁ | `main@0530392` | **7.00** | **10.11** | **11.92** | -0.13 | +3.73 | 1.46 | 0.41 |
| [redwoodjs/agent-ci](https://github.com/redwoodjs/agent-ci) | 25 | ███▁▁▁▁▁ | `main@a8db594` | **6.24** | **9.02** | **9.62** | 0.00 | +5.11 | 1.33 | 0.40 |
| [jiayun/DevWorkbench](https://github.com/jiayun/DevWorkbench) | 25 | ▅▅▅▅▅▅▅▅ | `main@27f0d1a` | **6.22** | **8.99** | **8.99** | 0.00 | +5.59 | 1.26 | 0.47 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 25 | ▄▂▄▃▁▂▅█ | `main@4b1195f` | **5.06** | **7.30** | **7.30** | +0.15 | +4.37 | 1.33 | 0.36 |
| [emdash-cms/emdash](https://github.com/emdash-cms/emdash) | 23 | ▁▄▆▇▆▇▇█ | `main@8c41479` | **4.46** | **6.44** | **6.44** | +0.06 | +4.27 | 1.20 | 0.31 |
| [cloudflare/vinext](https://github.com/cloudflare/vinext) | 25 | █▆▅▅▅▃▁▁ | `main@e91f3bd` | **2.61** | **3.78** | **4.11** | -0.01 | +1.79 | 0.48 | 0.13 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 25 | ▁▂▁▂▃▂▆█ | `main@0b73046` | **2.40** | **3.47** | **3.59** | +0.18 | +2.67 | 0.53 | 0.19 |
| [FullAgent/fulling](https://github.com/FullAgent/fulling) | 25 | ▅▅▅▅▅▅▅▅ | `main@f48efce` | **1.83** | **2.64** | **10.28** | 0.00 | +0.48 | 0.20 | 0.05 |
| [robinebers/openusage](https://github.com/robinebers/openusage) | 25 | n/a | `main@70dea9a` | **n/a** | **n/a** | **6.56** | n/a | n/a | n/a | n/a |

## Mature OSS cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [withastro/astro](https://github.com/withastro/astro) | 25 | ▂▁▂▁▇█▇█ | `main@9870f95` | **1.70** | **2.46** | **2.46** | +0.02 | +0.91 | 0.20 | 0.07 |
| [umami-software/umami](https://github.com/umami-software/umami) | 25 | ▁▁▁▁▆███ | `master@ca661c7` | **1.63** | **2.35** | **2.35** | 0.00 | +1.31 | 0.24 | 0.06 |
| [vitejs/vite](https://github.com/vitejs/vite) | 25 | ▃▃█▇▇▄▄▁ | `main@5bce8ca` | **1.43** | **2.06** | **2.11** | -0.02 | +0.54 | 0.15 | 0.05 |
| [egoist/tsup](https://github.com/egoist/tsup) | 25 | ▅▅▅▅▅▅▅▅ | `main@b6bcae8` | **1.05** | **1.52** | **1.52** | 0.00 | +0.60 | 0.15 | 0.06 |
| [payloadcms/payload](https://github.com/payloadcms/payload) | 25 | ▁▂▁▃▃▃▇█ | `main@0a3dabf` | **1.00** | **1.44** | **1.44** | +0.03 | +0.12 | 0.12 | 0.04 |
| [pmndrs/zustand](https://github.com/pmndrs/zustand) | 25 | ████▁▁▁▁ | `main@b57db4f` | **0.92** | **1.33** | **1.38** | 0.00 | -0.05 | 0.19 | 0.08 |
| [sindresorhus/execa](https://github.com/sindresorhus/execa) | 25 | ██▁▁▁▁▁▁ | `main@8017b27` | **0.68** | **0.98** | **1.10** | 0.00 | +0.09 | 0.09 | 0.02 |
| [mikaelbr/node-notifier](https://github.com/mikaelbr/node-notifier) | 25 | ▅▅▅▅▅▅▅▅ | `master@b36c237` | **0.65** | **0.95** | **0.95** | 0.00 | +0.53 | 0.08 | 0.04 |
| [vercel/hyper](https://github.com/vercel/hyper) | 25 | ▅▅▅▅▅▅▅▅ | `canary@30ec0a2` | **0.62** | **0.90** | **0.90** | 0.00 | +0.49 | 0.63 | 0.15 |

## Table legend

- `Current blended` = latest repo score vs the current mature-OSS medians from the same rolling run.
- `Latest pinned` = latest repo score vs the frozen pinned mature-OSS baseline snapshot.
- `Highest pinned` = highest stored repo score on that same pinned baseline.
- `Δ prev (pinned)` = latest pinned - previous week's pinned score.
- `Δ first (pinned)` = latest pinned - first stored pinned score for that repo.

## Biggest increases vs previous week

- [modem-dev/hunk](https://github.com/modem-dev/hunk) — +0.18 vs previous week (pinned blended)
- [openclaw/openclaw](https://github.com/openclaw/openclaw) — +0.15 vs previous week (pinned blended)
- [emdash-cms/emdash](https://github.com/emdash-cms/emdash) — +0.06 vs previous week (pinned blended)
- [payloadcms/payload](https://github.com/payloadcms/payload) — +0.03 vs previous week (pinned blended)
- [withastro/astro](https://github.com/withastro/astro) — +0.02 vs previous week (pinned blended)

## Biggest decreases vs previous week

- [garrytan/gstack](https://github.com/garrytan/gstack) — -0.13 vs previous week (pinned blended)
- [vitejs/vite](https://github.com/vitejs/vite) — -0.02 vs previous week (pinned blended)
- [cloudflare/vinext](https://github.com/cloudflare/vinext) — -0.01 vs previous week (pinned blended)

## Notes

- `Trend (pinned)` is a mini sparkline of the repo's stored pinned-blended values across recent weekly points.
- Each repo stores one JSONL datapoint per UTC week; reruns in the same week replace that week's datapoint instead of appending duplicates.
- Older backfills can have fewer points for newer repos because the history job skips weeks before a repo had any commit on its current default branch.
- The existing pinned benchmark report remains the reproducible source of truth for exact SHA-based benchmark claims.
