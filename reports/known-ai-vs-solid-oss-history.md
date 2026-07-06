# Rolling benchmark history: Known AI repos vs older solid OSS repos

Latest update: 2026-07-06
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

- `0.4.0` @ `38ccb46` — 18 latest repo snapshots

## Latest cohort medians

| Cohort | Repo count | Median current blended | Median score/file | Median findings/file |
|---|---:|---:|---:|---:|
| explicit-ai | 9 | **6.19** | 1.27 | 0.33 |
| mature-oss | 9 | **1.00** | 0.15 | 0.05 |

## AI cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [garrytan/gstack](https://github.com/garrytan/gstack) | 16 | █▇▂▁▃▁▁▁ | `main@11de390` | **8.55** | **11.07** | **11.92** | 0.00 | +4.70 | 1.65 | 0.44 |
| [FullAgent/fulling](https://github.com/FullAgent/fulling) | 16 | ▁███████ | `main@a524c5e` | **7.94** | **10.28** | **10.28** | 0.00 | +8.12 | 1.28 | 0.29 |
| [redwoodjs/agent-ci](https://github.com/redwoodjs/agent-ci) | 16 | █▁▃▃▃▃▃▃ | `main@2aa0095` | **6.96** | **9.01** | **9.62** | 0.00 | +5.11 | 1.32 | 0.39 |
| [jiayun/DevWorkbench](https://github.com/jiayun/DevWorkbench) | 16 | ▅▅▅▅▅▅▅▅ | `main@e524b1f` | **6.94** | **8.99** | **8.99** | 0.00 | +5.59 | 1.26 | 0.47 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 16 | ▁▂▆▆▆███ | `main@5aa7c62` | **5.44** | **7.05** | **7.06** | +0.01 | +4.12 | 1.32 | 0.37 |
| [emdash-cms/emdash](https://github.com/emdash-cms/emdash) | 14 | ▁▃▄▄▅▆██ | `main@bc1e26d` | **4.43** | **5.73** | **5.73** | +0.02 | +3.56 | 0.96 | 0.26 |
| [cloudflare/vinext](https://github.com/cloudflare/vinext) | 16 | ▁▄▆▇█▆▄▇ | `main@7e1ff08` | **3.15** | **4.08** | **4.11** | +0.16 | +2.09 | 0.53 | 0.15 |
| [modem-dev/hunk](https://github.com/modem-dev/hunk) | 16 | ▁█▄█▅▄▄▃ | `main@9ef9b2e` | **2.55** | **3.30** | **3.59** | -0.02 | +2.50 | 0.45 | 0.17 |
| [robinebers/openusage](https://github.com/robinebers/openusage) | 16 | ▁▆▆▂██·· | `main@ba04c54` | **n/a** | **n/a** | **6.56** | n/a | n/a | n/a | n/a |

## Mature OSS cohort latest standings

| Repo | Points | Trend (pinned) | Latest ref | Current blended | Latest pinned | Highest pinned | Δ prev (pinned) | Δ first (pinned) | Score/file | Findings/file |
|---|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| [withastro/astro](https://github.com/withastro/astro) | 16 | ▁▂▁▁▇▇▇█ | `main@40dd725` | **1.76** | **2.28** | **2.28** | +0.01 | +0.74 | 0.19 | 0.07 |
| [vitejs/vite](https://github.com/vitejs/vite) | 16 | ▂▁▅█▅▄█▆ | `main@70435b2` | **1.62** | **2.10** | **2.11** | -0.01 | +0.59 | 0.15 | 0.05 |
| [egoist/tsup](https://github.com/egoist/tsup) | 16 | ▅▅▅▅▅▅▅▅ | `main@b6bcae8` | **1.17** | **1.52** | **1.52** | 0.00 | +0.60 | 0.15 | 0.06 |
| [pmndrs/zustand](https://github.com/pmndrs/zustand) | 16 | ██▁▁▁▁▁▁ | `main@a1f685c` | **1.04** | **1.35** | **1.38** | 0.00 | -0.03 | 0.19 | 0.08 |
| [payloadcms/payload](https://github.com/payloadcms/payload) | 16 | ▂▂▂▁▂▁▁█ | `main@5081ad4` | **1.00** | **1.29** | **1.34** | +0.05 | -0.03 | 0.11 | 0.03 |
| [sindresorhus/execa](https://github.com/sindresorhus/execa) | 16 | ▁▁▁▁▁▁▁█ | `main@4cafc3f` | **0.85** | **1.10** | **1.10** | +0.10 | +0.21 | 0.10 | 0.03 |
| [umami-software/umami](https://github.com/umami-software/umami) | 16 | ▁▁▁▁▁▁██ | `master@af1b6c6` | **0.76** | **0.99** | **1.04** | 0.00 | -0.06 | 0.08 | 0.03 |
| [mikaelbr/node-notifier](https://github.com/mikaelbr/node-notifier) | 16 | ▅▅▅▅▅▅▅▅ | `master@b36c237` | **0.73** | **0.95** | **0.95** | 0.00 | +0.53 | 0.08 | 0.04 |
| [vercel/hyper](https://github.com/vercel/hyper) | 16 | █▁▁▁▁▁▁▁ | `canary@da0c401` | **0.70** | **0.90** | **0.90** | 0.00 | +0.49 | 0.63 | 0.15 |

## Table legend

- `Current blended` = latest repo score vs the current mature-OSS medians from the same rolling run.
- `Latest pinned` = latest repo score vs the frozen pinned mature-OSS baseline snapshot.
- `Highest pinned` = highest stored repo score on that same pinned baseline.
- `Δ prev (pinned)` = latest pinned - previous week's pinned score.
- `Δ first (pinned)` = latest pinned - first stored pinned score for that repo.

## Biggest increases vs previous week

- [cloudflare/vinext](https://github.com/cloudflare/vinext) — +0.16 vs previous week (pinned blended)
- [sindresorhus/execa](https://github.com/sindresorhus/execa) — +0.10 vs previous week (pinned blended)
- [payloadcms/payload](https://github.com/payloadcms/payload) — +0.05 vs previous week (pinned blended)
- [emdash-cms/emdash](https://github.com/emdash-cms/emdash) — +0.02 vs previous week (pinned blended)
- [withastro/astro](https://github.com/withastro/astro) — +0.01 vs previous week (pinned blended)

## Biggest decreases vs previous week

- [modem-dev/hunk](https://github.com/modem-dev/hunk) — -0.02 vs previous week (pinned blended)
- [vitejs/vite](https://github.com/vitejs/vite) — -0.01 vs previous week (pinned blended)

## Notes

- `Trend (pinned)` is a mini sparkline of the repo's stored pinned-blended values across recent weekly points.
- Each repo stores one JSONL datapoint per UTC week; reruns in the same week replace that week's datapoint instead of appending duplicates.
- Older backfills can have fewer points for newer repos because the history job skips weeks before a repo had any commit on its current default branch.
- The existing pinned benchmark report remains the reproducible source of truth for exact SHA-based benchmark claims.
