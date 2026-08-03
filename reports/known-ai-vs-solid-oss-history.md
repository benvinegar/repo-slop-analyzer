# Rolling benchmark history: Known AI repos vs older solid OSS repos

Latest update: 2026-08-03
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

- `0.4.0` @ `a1345f1` — 18 latest repo snapshots

## Latest cohort medians

| Cohort | Repo count | Median current blended | Median score/file | Median findings/file |
|---|---:|---:|---:|---:|
| explicit-ai | 9 | **5.17** | 1.16 | 0.32 |
| mature-oss | 9 | **1.00** | 0.15 | 0.05 |

## AI cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [garrytan/gstack](https://github.com/garrytan/gstack) | 20 | █▂▂▂▄▁▁▁ | `main@a325940` | **8.54** | **11.07** | **11.92** | 0.00 | +4.70 | 1.65 | 0.45 |
| [redwoodjs/agent-ci](https://github.com/redwoodjs/agent-ci) | 20 | ▁▁▁▁▂███ | `main@aa1802a` | **7.04** | **9.11** | **9.62** | 0.00 | +5.21 | 1.34 | 0.40 |
| [jiayun/DevWorkbench](https://github.com/jiayun/DevWorkbench) | 20 | ▅▅▅▅▅▅▅▅ | `main@27f0d1a` | **6.94** | **8.99** | **8.99** | 0.00 | +5.59 | 1.26 | 0.47 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 20 | ▁▅▅▅▄▇▄█ | `main@baeaca2` | **5.50** | **7.13** | **7.13** | +0.09 | +4.20 | 1.32 | 0.37 |
| [emdash-cms/emdash](https://github.com/emdash-cms/emdash) | 18 | ▁▂▃▃▄▅▇█ | `main@ecebade` | **4.85** | **6.28** | **6.28** | +0.11 | +4.10 | 1.07 | 0.28 |
| [cloudflare/vinext](https://github.com/cloudflare/vinext) | 20 | █▅▂▇▇▄▂▁ | `main@621610a` | **3.01** | **3.90** | **4.11** | -0.03 | +1.91 | 0.50 | 0.14 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 20 | █▇▇▇▇▁▂▁ | `main@c9ac120` | **2.20** | **2.85** | **3.59** | -0.06 | +2.05 | 0.38 | 0.16 |
| [FullAgent/fulling](https://github.com/FullAgent/fulling) | 20 | ████▁▁▁▁ | `main@f48efce` | **2.04** | **2.64** | **10.28** | 0.00 | +0.48 | 0.20 | 0.05 |
| [robinebers/openusage](https://github.com/robinebers/openusage) | 20 | ▅▅······ | `main@9d2bf09` | **n/a** | **n/a** | **6.56** | n/a | n/a | n/a | n/a |

## Mature OSS cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [withastro/astro](https://github.com/withastro/astro) | 20 | ▂▁▂▄▂▇▅█ | `main@0a79753` | **1.78** | **2.31** | **2.31** | +0.02 | +0.76 | 0.19 | 0.07 |
| [vitejs/vite](https://github.com/vitejs/vite) | 20 | ▅▄█▆▅▁▁█ | `main@89620f0` | **1.63** | **2.11** | **2.11** | +0.03 | +0.59 | 0.16 | 0.05 |
| [egoist/tsup](https://github.com/egoist/tsup) | 20 | ▅▅▅▅▅▅▅▅ | `main@b6bcae8` | **1.17** | **1.52** | **1.52** | 0.00 | +0.60 | 0.15 | 0.06 |
| [pmndrs/zustand](https://github.com/pmndrs/zustand) | 20 | ▅▅▅▅▅▅▅▅ | `main@beca84e` | **1.04** | **1.35** | **1.38** | 0.00 | -0.03 | 0.19 | 0.08 |
| [payloadcms/payload](https://github.com/payloadcms/payload) | 20 | ▂▁▁▇▅▇█▇ | `main@0b15b6c` | **1.00** | **1.30** | **1.34** | -0.01 | -0.03 | 0.11 | 0.03 |
| [umami-software/umami](https://github.com/umami-software/umami) | 20 | ▁▁██████ | `master@af1b6c6` | **0.76** | **0.99** | **1.04** | 0.00 | -0.06 | 0.08 | 0.03 |
| [sindresorhus/execa](https://github.com/sindresorhus/execa) | 20 | ▂▂▂█▁▁▁▁ | `main@8017b27` | **0.76** | **0.98** | **1.10** | 0.00 | +0.09 | 0.09 | 0.02 |
| [mikaelbr/node-notifier](https://github.com/mikaelbr/node-notifier) | 20 | ▅▅▅▅▅▅▅▅ | `master@b36c237` | **0.73** | **0.95** | **0.95** | 0.00 | +0.53 | 0.08 | 0.04 |
| [vercel/hyper](https://github.com/vercel/hyper) | 20 | ▅▅▅▅▅▅▅▅ | `canary@da0c401` | **0.70** | **0.90** | **0.90** | 0.00 | +0.49 | 0.63 | 0.15 |

## Table legend

- `Current blended` = latest repo score vs the current mature-OSS medians from the same rolling run.
- `Latest pinned` = latest repo score vs the frozen pinned mature-OSS baseline snapshot.
- `Highest pinned` = highest stored repo score on that same pinned baseline.
- `Δ prev (pinned)` = latest pinned - previous week's pinned score.
- `Δ first (pinned)` = latest pinned - first stored pinned score for that repo.

## Biggest increases vs previous week

- [emdash-cms/emdash](https://github.com/emdash-cms/emdash) — +0.11 vs previous week (pinned blended)
- [openclaw/openclaw](https://github.com/openclaw/openclaw) — +0.09 vs previous week (pinned blended)
- [vitejs/vite](https://github.com/vitejs/vite) — +0.03 vs previous week (pinned blended)
- [withastro/astro](https://github.com/withastro/astro) — +0.02 vs previous week (pinned blended)

## Biggest decreases vs previous week

- [modem-dev/hunk](https://github.com/modem-dev/hunk) — -0.06 vs previous week (pinned blended)
- [cloudflare/vinext](https://github.com/cloudflare/vinext) — -0.03 vs previous week (pinned blended)
- [payloadcms/payload](https://github.com/payloadcms/payload) — -0.01 vs previous week (pinned blended)
- [sindresorhus/execa](https://github.com/sindresorhus/execa) — 0.00 vs previous week (pinned blended)

## Notes

- `Trend (pinned)` is a mini sparkline of the repo's stored pinned-blended values across recent weekly points.
- Each repo stores one JSONL datapoint per UTC week; reruns in the same week replace that week's datapoint instead of appending duplicates.
- Older backfills can have fewer points for newer repos because the history job skips weeks before a repo had any commit on its current default branch.
- The existing pinned benchmark report remains the reproducible source of truth for exact SHA-based benchmark claims.
