# Exploratory note: beads remains out of scope for the current benchmark

Date: 2026-04-07

## Status update

Since the original exploratory pass:
- `vite` and `astro` were promoted into the pinned mature OSS cohort
- `openclaw` and `emdash` were promoted into the pinned AI cohort using user-provided provenance

That leaves `beads` as the main unresolved exploratory candidate from that pass.

## Why `beads` is still excluded

The current analyzer only scans JS/TS-family files:
- `.ts`
- `.tsx`
- `.js`
- `.jsx`
- `.mjs`
- `.cjs`

But `gastownhall/beads` is mostly Go.

The scan only saw:
- **6 supported files**
- **397 logical LOC**
- **1 finding**
- `score/file = 0.17`
- `score/KLOC = 2.52`

That means the current result is only a tiny JS/TS slice of the repo, not a meaningful whole-repo benchmark.

## Takeaway

`beads` should stay out of benchmark claims until the analyzer supports Go.

If Go support is added later, `beads` would be a good repo to revisit.
