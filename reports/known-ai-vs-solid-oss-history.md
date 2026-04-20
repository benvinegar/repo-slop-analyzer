# Rolling benchmark history: Known AI repos vs older solid OSS repos

Latest update: 2026-04-20
History dir: `benchmarks/history/known-ai-vs-solid-oss/`
Pinned baseline snapshot: `benchmarks/results/known-ai-vs-solid-oss.json` (2026-04-17)
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

- `0.3.0` @ `df9e2d4` — 18 latest repo snapshots

## Latest cohort medians

| Cohort | Repo count | Median current blended | Median score/file | Median findings/file |
|---|---:|---:|---:|---:|
| explicit-ai | 9 | **3.51** | 1.39 | 0.36 |
| mature-oss | 9 | **1.00** | 0.27 | 0.09 |

## AI cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [FullAgent/fulling](https://github.com/FullAgent/fulling) | 5 | ▁▁▁▁█ | `main@d95060f` | **4.75** | **5.01** | **5.01** | +2.86 | +2.85 | 1.39 | 0.34 |
| [garrytan/gstack](https://github.com/garrytan/gstack) | 5 | █▃▄▁▂ | `main@d0782c4` | **4.65** | **4.90** | **6.37** | +0.13 | -1.47 | 1.86 | 0.45 |
| [jiayun/DevWorkbench](https://github.com/jiayun/DevWorkbench) | 5 | ▁▁▁▁█ | `main@ea50862` | **4.33** | **4.57** | **4.57** | +1.18 | +1.16 | 1.50 | 0.53 |
| [redwoodjs/agent-ci](https://github.com/redwoodjs/agent-ci) | 5 | ▄▁▁▄█ | `main@37f98a6` | **4.32** | **4.56** | **4.56** | +0.64 | +0.65 | 1.48 | 0.42 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 5 | ▁▁▃▁█ | `main@d2b67fb` | **3.51** | **3.70** | **3.70** | +0.78 | +0.77 | 1.29 | 0.38 |
| [robinebers/openusage](https://github.com/robinebers/openusage) | 5 | ▃▁▁▁█ | `main@584d44d` | **2.99** | **3.16** | **3.16** | +0.13 | +0.09 | 1.45 | 0.36 |
| [emdash-cms/emdash](https://github.com/emdash-cms/emdash) | 3 | ▂▁█ | `main@f7f4814` | **2.91** | **3.07** | **3.07** | +1.06 | +0.90 | 1.14 | 0.31 |
| [cloudflare/vinext](https://github.com/cloudflare/vinext) | 5 | ▂▂▂▁█ | `main@bc03bf1` | **2.33** | **2.46** | **2.46** | +0.53 | +0.47 | 0.60 | 0.19 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 5 | ▁▃▃▅█ | `main@a6aa1cb` | **1.86** | **1.96** | **1.96** | +0.45 | +1.16 | 0.60 | 0.22 |

## Mature OSS cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [vitejs/vite](https://github.com/vitejs/vite) | 5 | ▃▂▁▂█ | `main@3770a53` | **1.52** | **1.60** | **1.60** | +0.09 | +0.08 | 0.28 | 0.09 |
| [withastro/astro](https://github.com/withastro/astro) | 5 | █▂▁▁█ | `main@05e70f7` | **1.47** | **1.55** | **1.55** | +0.09 | +0.00 | 0.28 | 0.10 |
| [payloadcms/payload](https://github.com/payloadcms/payload) | 5 | ▁▁▁▂█ | `main@48db8c1` | **1.40** | **1.47** | **1.47** | +0.13 | +0.15 | 0.27 | 0.09 |
| [pmndrs/zustand](https://github.com/pmndrs/zustand) | 5 | ██▁▁▁ | `main@3201328` | **1.31** | **1.38** | **1.38** | 0.00 | -0.01 | 0.47 | 0.18 |
| [umami-software/umami](https://github.com/umami-software/umami) | 5 | ▃▁▁▁█ | `master@c78ff36` | **1.00** | **1.05** | **1.05** | +0.01 | +0.01 | 0.18 | 0.07 |
| [egoist/tsup](https://github.com/egoist/tsup) | 5 | ▅▅▅▅▅ | `main@b906f86` | **0.87** | **0.92** | **0.92** | 0.00 | 0.00 | 0.21 | 0.08 |
| [sindresorhus/execa](https://github.com/sindresorhus/execa) | 5 | ▁▁▁▁█ | `main@f3a2e84` | **0.86** | **0.91** | **0.91** | +0.02 | +0.02 | 0.17 | 0.05 |
| [mikaelbr/node-notifier](https://github.com/mikaelbr/node-notifier) | 5 | ▅▅▅▅▅ | `master@b36c237` | **0.39** | **0.41** | **0.41** | 0.00 | 0.00 | 0.08 | 0.04 |
| [vercel/hyper](https://github.com/vercel/hyper) | 5 | ▅▅▅▅▅ | `canary@2a7bb18` | **0.39** | **0.41** | **0.41** | 0.00 | 0.00 | 0.65 | 0.16 |

## Table legend

- `Current blended` = latest repo score vs the current mature-OSS medians from the same rolling run.
- `Latest pinned` = latest repo score vs the frozen pinned mature-OSS baseline snapshot.
- `Highest pinned` = highest stored repo score on that same pinned baseline.
- `Δ prev (pinned)` = latest pinned - previous week's pinned score.
- `Δ first (pinned)` = latest pinned - first stored pinned score for that repo.

## Biggest increases vs previous week

- [FullAgent/fulling](https://github.com/FullAgent/fulling) — +2.86 vs previous week (pinned blended)
- [jiayun/DevWorkbench](https://github.com/jiayun/DevWorkbench) — +1.18 vs previous week (pinned blended)
- [emdash-cms/emdash](https://github.com/emdash-cms/emdash) — +1.06 vs previous week (pinned blended)
- [openclaw/openclaw](https://github.com/openclaw/openclaw) — +0.78 vs previous week (pinned blended)
- [redwoodjs/agent-ci](https://github.com/redwoodjs/agent-ci) — +0.64 vs previous week (pinned blended)

## Biggest decreases vs previous week

- n/a yet (need at least two weekly points with movement)

## Notes

- `Trend (pinned)` is a mini sparkline of the repo's stored pinned-blended values across recent weekly points.
- Each repo stores one JSONL datapoint per UTC week; reruns in the same week replace that week's datapoint instead of appending duplicates.
- Older backfills can have fewer points for newer repos because the history job skips weeks before a repo had any commit on its current default branch.
- The existing pinned benchmark report remains the reproducible source of truth for exact SHA-based benchmark claims.
