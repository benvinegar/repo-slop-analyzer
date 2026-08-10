# Rolling benchmark history: Known AI repos vs older solid OSS repos

Latest update: 2026-08-10
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

- `0.4.0` @ `e8ff2f0` — 18 latest repo snapshots

## Latest cohort medians

| Cohort | Repo count | Median current blended | Median score/file | Median findings/file |
|---|---:|---:|---:|---:|
| explicit-ai | 9 | **5.05** | 1.18 | 0.32 |
| mature-oss | 9 | **1.00** | 0.15 | 0.05 |

## AI cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [garrytan/gstack](https://github.com/garrytan/gstack) | 21 | ▃▂▂▆▁▁▁█ | `main@94993f7` | **8.35** | **11.10** | **11.92** | +0.04 | +4.73 | 1.66 | 0.45 |
| [redwoodjs/agent-ci](https://github.com/redwoodjs/agent-ci) | 21 | ▁▁▁▂███▁ | `main@74c84c0` | **6.79** | **9.02** | **9.62** | -0.10 | +5.11 | 1.33 | 0.40 |
| [jiayun/DevWorkbench](https://github.com/jiayun/DevWorkbench) | 21 | ▅▅▅▅▅▅▅▅ | `main@27f0d1a` | **6.76** | **8.99** | **8.99** | 0.00 | +5.59 | 1.26 | 0.47 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 21 | ▄▂▃▁▆▂█▄ | `main@4f046b5` | **5.32** | **7.07** | **7.13** | -0.06 | +4.14 | 1.30 | 0.36 |
| [emdash-cms/emdash](https://github.com/emdash-cms/emdash) | 19 | ▁▂▂▃▄▆▇█ | `main@317eb3e` | **4.78** | **6.35** | **6.35** | +0.07 | +4.18 | 1.10 | 0.29 |
| [cloudflare/vinext](https://github.com/cloudflare/vinext) | 21 | ▆▂██▄▂▁▁ | `main@056cd02` | **2.93** | **3.90** | **4.11** | +0.00 | +1.91 | 0.50 | 0.14 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 21 | ████▁▂▁▂ | `main@63babe0` | **2.22** | **2.95** | **3.59** | +0.09 | +2.15 | 0.40 | 0.17 |
| [FullAgent/fulling](https://github.com/FullAgent/fulling) | 21 | ███▁▁▁▁▁ | `main@f48efce` | **1.99** | **2.64** | **10.28** | 0.00 | +0.48 | 0.20 | 0.05 |
| [robinebers/openusage](https://github.com/robinebers/openusage) | 21 | ▅······· | `main@9d2bf09` | **n/a** | **n/a** | **6.56** | n/a | n/a | n/a | n/a |

## Mature OSS cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [withastro/astro](https://github.com/withastro/astro) | 21 | ▁▂▄▂▇▅█▄ | `main@7133730` | **1.72** | **2.28** | **2.31** | -0.02 | +0.74 | 0.19 | 0.07 |
| [vitejs/vite](https://github.com/vitejs/vite) | 21 | ▄█▆▅▁▁█▆ | `main@4f1411d` | **1.58** | **2.10** | **2.11** | -0.01 | +0.59 | 0.16 | 0.05 |
| [egoist/tsup](https://github.com/egoist/tsup) | 21 | ▅▅▅▅▅▅▅▅ | `main@b6bcae8` | **1.14** | **1.52** | **1.52** | 0.00 | +0.60 | 0.15 | 0.06 |
| [pmndrs/zustand](https://github.com/pmndrs/zustand) | 21 | ▅▅▅▅▅▅▅▅ | `main@beca84e` | **1.02** | **1.35** | **1.38** | 0.00 | -0.03 | 0.19 | 0.08 |
| [payloadcms/payload](https://github.com/payloadcms/payload) | 21 | ▁▁▅▄▅▆▅█ | `main@dc3e666` | **1.00** | **1.33** | **1.34** | +0.03 | +0.01 | 0.11 | 0.03 |
| [umami-software/umami](https://github.com/umami-software/umami) | 21 | ▁███████ | `master@d7042c1` | **0.74** | **0.99** | **1.04** | 0.00 | -0.06 | 0.08 | 0.03 |
| [sindresorhus/execa](https://github.com/sindresorhus/execa) | 21 | ▂▂█▁▁▁▁▁ | `main@8017b27` | **0.74** | **0.98** | **1.10** | 0.00 | +0.09 | 0.09 | 0.02 |
| [mikaelbr/node-notifier](https://github.com/mikaelbr/node-notifier) | 21 | ▅▅▅▅▅▅▅▅ | `master@b36c237` | **0.71** | **0.95** | **0.95** | 0.00 | +0.53 | 0.08 | 0.04 |
| [vercel/hyper](https://github.com/vercel/hyper) | 21 | ▅▅▅▅▅▅▅▅ | `canary@da0c401` | **0.68** | **0.90** | **0.90** | 0.00 | +0.49 | 0.63 | 0.15 |

## Table legend

- `Current blended` = latest repo score vs the current mature-OSS medians from the same rolling run.
- `Latest pinned` = latest repo score vs the frozen pinned mature-OSS baseline snapshot.
- `Highest pinned` = highest stored repo score on that same pinned baseline.
- `Δ prev (pinned)` = latest pinned - previous week's pinned score.
- `Δ first (pinned)` = latest pinned - first stored pinned score for that repo.

## Biggest increases vs previous week

- [modem-dev/hunk](https://github.com/modem-dev/hunk) — +0.09 vs previous week (pinned blended)
- [emdash-cms/emdash](https://github.com/emdash-cms/emdash) — +0.07 vs previous week (pinned blended)
- [garrytan/gstack](https://github.com/garrytan/gstack) — +0.04 vs previous week (pinned blended)
- [payloadcms/payload](https://github.com/payloadcms/payload) — +0.03 vs previous week (pinned blended)
- [cloudflare/vinext](https://github.com/cloudflare/vinext) — +0.00 vs previous week (pinned blended)

## Biggest decreases vs previous week

- [redwoodjs/agent-ci](https://github.com/redwoodjs/agent-ci) — -0.10 vs previous week (pinned blended)
- [openclaw/openclaw](https://github.com/openclaw/openclaw) — -0.06 vs previous week (pinned blended)
- [withastro/astro](https://github.com/withastro/astro) — -0.02 vs previous week (pinned blended)
- [vitejs/vite](https://github.com/vitejs/vite) — -0.01 vs previous week (pinned blended)

## Notes

- `Trend (pinned)` is a mini sparkline of the repo's stored pinned-blended values across recent weekly points.
- Each repo stores one JSONL datapoint per UTC week; reruns in the same week replace that week's datapoint instead of appending duplicates.
- Older backfills can have fewer points for newer repos because the history job skips weeks before a repo had any commit on its current default branch.
- The existing pinned benchmark report remains the reproducible source of truth for exact SHA-based benchmark claims.
