# Rolling benchmark history: Known AI repos vs older solid OSS repos

Latest update: 2026-08-31
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

- `0.4.0` @ `cfc7699` — 18 latest repo snapshots

## Latest cohort medians

| Cohort | Repo count | Median current blended | Median score/file | Median findings/file |
|---|---:|---:|---:|---:|
| explicit-ai | 9 | **4.78** | 1.21 | 0.33 |
| mature-oss | 9 | **1.00** | 0.16 | 0.06 |

## AI cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [garrytan/gstack](https://github.com/garrytan/gstack) | 24 | █████▄▃▁ | `main@253d1df` | **7.23** | **10.24** | **11.92** | -0.26 | +3.87 | 1.48 | 0.42 |
| [redwoodjs/agent-ci](https://github.com/redwoodjs/agent-ci) | 24 | ▂███▁▁▁▁ | `main@a8db594` | **6.36** | **9.02** | **9.62** | 0.00 | +5.11 | 1.33 | 0.40 |
| [jiayun/DevWorkbench](https://github.com/jiayun/DevWorkbench) | 24 | ▅▅▅▅▅▅▅▅ | `main@27f0d1a` | **6.35** | **8.99** | **8.99** | 0.00 | +5.59 | 1.26 | 0.47 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 24 | ▃▆▃▇▅▁▂█ | `main@4716cbf` | **5.05** | **7.15** | **7.15** | +0.15 | +4.22 | 1.31 | 0.36 |
| [emdash-cms/emdash](https://github.com/emdash-cms/emdash) | 22 | ▁▃▅▇▇▇██ | `main@1717d31` | **4.51** | **6.38** | **6.40** | -0.02 | +4.21 | 1.15 | 0.30 |
| [cloudflare/vinext](https://github.com/cloudflare/vinext) | 24 | █▆▄▄▄▄▂▁ | `main@5d0b530` | **2.67** | **3.78** | **4.11** | -0.05 | +1.79 | 0.47 | 0.13 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 24 | █▁▂▁▂▃▂█ | `main@f28ad59` | **2.32** | **3.29** | **3.59** | +0.34 | +2.49 | 0.50 | 0.18 |
| [FullAgent/fulling](https://github.com/FullAgent/fulling) | 24 | ▁███████ | `main@f48efce` | **1.87** | **2.64** | **10.28** | 0.00 | +0.48 | 0.20 | 0.05 |
| [robinebers/openusage](https://github.com/robinebers/openusage) | 24 | n/a | `main@05c40a1` | **n/a** | **n/a** | **6.56** | n/a | n/a | n/a | n/a |

## Mature OSS cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [withastro/astro](https://github.com/withastro/astro) | 24 | ▁▂▂▂▂▇██ | `main@2548abf` | **1.72** | **2.44** | **2.44** | -0.01 | +0.89 | 0.20 | 0.07 |
| [umami-software/umami](https://github.com/umami-software/umami) | 24 | ▁▁▁▁▁▆██ | `master@ca661c7` | **1.66** | **2.35** | **2.35** | 0.00 | +1.31 | 0.24 | 0.06 |
| [vitejs/vite](https://github.com/vitejs/vite) | 24 | ▅▁▁█▇▆▂▂ | `main@238ad81` | **1.47** | **2.08** | **2.11** | +0.00 | +0.56 | 0.16 | 0.05 |
| [egoist/tsup](https://github.com/egoist/tsup) | 24 | ▅▅▅▅▅▅▅▅ | `main@b6bcae8` | **1.07** | **1.52** | **1.52** | 0.00 | +0.60 | 0.15 | 0.06 |
| [payloadcms/payload](https://github.com/payloadcms/payload) | 24 | ▁▂▂▂▃▄▄█ | `main@72ee175` | **1.00** | **1.42** | **1.42** | +0.07 | +0.10 | 0.12 | 0.04 |
| [pmndrs/zustand](https://github.com/pmndrs/zustand) | 24 | █████▁▁▁ | `main@b57db4f` | **0.94** | **1.33** | **1.38** | 0.00 | -0.05 | 0.19 | 0.08 |
| [sindresorhus/execa](https://github.com/sindresorhus/execa) | 24 | █▂▂▁▁▁▁▁ | `main@8017b27` | **0.69** | **0.98** | **1.10** | 0.00 | +0.09 | 0.09 | 0.02 |
| [mikaelbr/node-notifier](https://github.com/mikaelbr/node-notifier) | 24 | ▅▅▅▅▅▅▅▅ | `master@b36c237` | **0.67** | **0.95** | **0.95** | 0.00 | +0.53 | 0.08 | 0.04 |
| [vercel/hyper](https://github.com/vercel/hyper) | 24 | ▅▅▅▅▅▅▅▅ | `canary@30ec0a2` | **0.64** | **0.90** | **0.90** | 0.00 | +0.49 | 0.63 | 0.15 |

## Table legend

- `Current blended` = latest repo score vs the current mature-OSS medians from the same rolling run.
- `Latest pinned` = latest repo score vs the frozen pinned mature-OSS baseline snapshot.
- `Highest pinned` = highest stored repo score on that same pinned baseline.
- `Δ prev (pinned)` = latest pinned - previous week's pinned score.
- `Δ first (pinned)` = latest pinned - first stored pinned score for that repo.

## Biggest increases vs previous week

- [modem-dev/hunk](https://github.com/modem-dev/hunk) — +0.34 vs previous week (pinned blended)
- [openclaw/openclaw](https://github.com/openclaw/openclaw) — +0.15 vs previous week (pinned blended)
- [payloadcms/payload](https://github.com/payloadcms/payload) — +0.07 vs previous week (pinned blended)
- [vitejs/vite](https://github.com/vitejs/vite) — +0.00 vs previous week (pinned blended)

## Biggest decreases vs previous week

- [garrytan/gstack](https://github.com/garrytan/gstack) — -0.26 vs previous week (pinned blended)
- [cloudflare/vinext](https://github.com/cloudflare/vinext) — -0.05 vs previous week (pinned blended)
- [emdash-cms/emdash](https://github.com/emdash-cms/emdash) — -0.02 vs previous week (pinned blended)
- [withastro/astro](https://github.com/withastro/astro) — -0.01 vs previous week (pinned blended)

## Notes

- `Trend (pinned)` is a mini sparkline of the repo's stored pinned-blended values across recent weekly points.
- Each repo stores one JSONL datapoint per UTC week; reruns in the same week replace that week's datapoint instead of appending duplicates.
- Older backfills can have fewer points for newer repos because the history job skips weeks before a repo had any commit on its current default branch.
- The existing pinned benchmark report remains the reproducible source of truth for exact SHA-based benchmark claims.
