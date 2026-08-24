# Rolling benchmark history: Known AI repos vs older solid OSS repos

Latest update: 2026-08-24
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

- `0.4.0` @ `d3e220f` — 18 latest repo snapshots

## Latest cohort medians

| Cohort | Repo count | Median current blended | Median score/file | Median findings/file |
|---|---:|---:|---:|---:|
| explicit-ai | 9 | **4.99** | 1.20 | 0.33 |
| mature-oss | 9 | **1.00** | 0.16 | 0.06 |

## AI cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [garrytan/gstack](https://github.com/garrytan/gstack) | 23 | ██████▂▁ | `main@85fd9db` | **7.81** | **10.50** | **11.92** | -0.07 | +4.12 | 1.54 | 0.43 |
| [redwoodjs/agent-ci](https://github.com/redwoodjs/agent-ci) | 23 | ▁▂███▁▁▁ | `main@a8db594` | **6.71** | **9.02** | **9.62** | 0.00 | +5.11 | 1.33 | 0.40 |
| [jiayun/DevWorkbench](https://github.com/jiayun/DevWorkbench) | 23 | ▅▅▅▅▅▅▅▅ | `main@27f0d1a` | **6.69** | **8.99** | **8.99** | 0.00 | +5.59 | 1.26 | 0.47 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 23 | ▅▃▇▄█▆▁▂ | `main@41050b2` | **5.21** | **7.00** | **7.13** | +0.03 | +4.07 | 1.29 | 0.36 |
| [emdash-cms/emdash](https://github.com/emdash-cms/emdash) | 21 | ▁▂▃▆▇▇▇█ | `main@353ff4f` | **4.76** | **6.40** | **6.40** | +0.09 | +4.23 | 1.13 | 0.30 |
| [cloudflare/vinext](https://github.com/cloudflare/vinext) | 23 | ██▅▄▃▃▃▁ | `main@20fdac4` | **2.85** | **3.83** | **4.11** | -0.06 | +1.84 | 0.48 | 0.14 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 23 | ██▁▂▁▂▃▂ | `main@1210c08` | **2.20** | **2.95** | **3.59** | -0.05 | +2.15 | 0.40 | 0.17 |
| [FullAgent/fulling](https://github.com/FullAgent/fulling) | 23 | █▁▁▁▁▁▁▁ | `main@f48efce` | **1.97** | **2.64** | **10.28** | 0.00 | +0.48 | 0.20 | 0.05 |
| [robinebers/openusage](https://github.com/robinebers/openusage) | 23 | n/a | `main@b053901` | **n/a** | **n/a** | **6.56** | n/a | n/a | n/a | n/a |

## Mature OSS cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [withastro/astro](https://github.com/withastro/astro) | 23 | ▂▁▂▂▂▂▇█ | `main@0c99615` | **1.82** | **2.44** | **2.44** | +0.02 | +0.90 | 0.20 | 0.07 |
| [umami-software/umami](https://github.com/umami-software/umami) | 23 | ▁▁▁▁▁▁▆█ | `master@ca661c7` | **1.75** | **2.35** | **2.35** | +0.37 | +1.31 | 0.24 | 0.06 |
| [vitejs/vite](https://github.com/vitejs/vite) | 23 | ▆▅▁▁█▇▆▂ | `main@c32e784` | **1.55** | **2.08** | **2.11** | -0.02 | +0.56 | 0.16 | 0.05 |
| [egoist/tsup](https://github.com/egoist/tsup) | 23 | ▅▅▅▅▅▅▅▅ | `main@b6bcae8` | **1.13** | **1.52** | **1.52** | 0.00 | +0.60 | 0.15 | 0.06 |
| [payloadcms/payload](https://github.com/payloadcms/payload) | 23 | ▃▁▃▄▃▆██ | `main@3aa4043` | **1.00** | **1.34** | **1.34** | +0.00 | +0.02 | 0.11 | 0.04 |
| [pmndrs/zustand](https://github.com/pmndrs/zustand) | 23 | ██████▁▁ | `main@f094eeb` | **0.99** | **1.33** | **1.38** | 0.00 | -0.05 | 0.19 | 0.08 |
| [sindresorhus/execa](https://github.com/sindresorhus/execa) | 23 | █▁▁▁▁▁▁▁ | `main@8017b27` | **0.73** | **0.98** | **1.10** | 0.00 | +0.09 | 0.09 | 0.02 |
| [mikaelbr/node-notifier](https://github.com/mikaelbr/node-notifier) | 23 | ▅▅▅▅▅▅▅▅ | `master@b36c237` | **0.70** | **0.95** | **0.95** | 0.00 | +0.53 | 0.08 | 0.04 |
| [vercel/hyper](https://github.com/vercel/hyper) | 23 | ▅▅▅▅▅▅▅▅ | `canary@30ec0a2` | **0.67** | **0.90** | **0.90** | 0.00 | +0.49 | 0.63 | 0.15 |

## Table legend

- `Current blended` = latest repo score vs the current mature-OSS medians from the same rolling run.
- `Latest pinned` = latest repo score vs the frozen pinned mature-OSS baseline snapshot.
- `Highest pinned` = highest stored repo score on that same pinned baseline.
- `Δ prev (pinned)` = latest pinned - previous week's pinned score.
- `Δ first (pinned)` = latest pinned - first stored pinned score for that repo.

## Biggest increases vs previous week

- [umami-software/umami](https://github.com/umami-software/umami) — +0.37 vs previous week (pinned blended)
- [emdash-cms/emdash](https://github.com/emdash-cms/emdash) — +0.09 vs previous week (pinned blended)
- [openclaw/openclaw](https://github.com/openclaw/openclaw) — +0.03 vs previous week (pinned blended)
- [withastro/astro](https://github.com/withastro/astro) — +0.02 vs previous week (pinned blended)
- [payloadcms/payload](https://github.com/payloadcms/payload) — +0.00 vs previous week (pinned blended)

## Biggest decreases vs previous week

- [garrytan/gstack](https://github.com/garrytan/gstack) — -0.07 vs previous week (pinned blended)
- [cloudflare/vinext](https://github.com/cloudflare/vinext) — -0.06 vs previous week (pinned blended)
- [modem-dev/hunk](https://github.com/modem-dev/hunk) — -0.05 vs previous week (pinned blended)
- [vitejs/vite](https://github.com/vitejs/vite) — -0.02 vs previous week (pinned blended)

## Notes

- `Trend (pinned)` is a mini sparkline of the repo's stored pinned-blended values across recent weekly points.
- Each repo stores one JSONL datapoint per UTC week; reruns in the same week replace that week's datapoint instead of appending duplicates.
- Older backfills can have fewer points for newer repos because the history job skips weeks before a repo had any commit on its current default branch.
- The existing pinned benchmark report remains the reproducible source of truth for exact SHA-based benchmark claims.
