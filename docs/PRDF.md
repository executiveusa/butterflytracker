# PRDF - butterflytracker (Production Readiness & Design Findings)
Inspected: 2026-09-28. Real code/build, README ignored. Benchmark: Collins + gauntlet.

## VERDICT: TIER 2 - BEAUTIFUL CONCEPT, UNVERIFIED QUALITY GATES
No deploy configured (no vercel.json/netlify/Dockerfile). Vite + React + shadcn, bilingual i18n (es-MX + en). "Monarcas y Morphos"-class public observatory of urban butterflies - authored poetic copy verified ("Conocerlas. Es un observatorio publico de una ciudad viva."). TeacherDashboard feature = education angle. frontend.manifest.json present.

## EVIDENCE
- npm ci OK (legacy-peer-deps), `tsc --noEmit` CLEAN, `npm run build` PASSES (2.54s).
- tests/ and e2e/ directories exist BUT contain no runnable specs (grep test( = 0 hits) - test surface is scaffolding.
- Real i18n dictionaries; no lorem anywhere.

## VIOLATIONS / GAPS
1. MED - Test scaffolding without specs (tests/ + e2e/ empty). Truth-in-tooling. Fix: write smoke specs or remove dirs.
2. MED - No deploy path (no config, no live URL found). Fix: vercel.json + deploy, or Dockerfile for old-box lane.
3. LOW - Dead data risk: no backend/data source visible in tree scan - verify the observatory map shows real or clearly-demo data (Collins proof-before-claims).
4. LOW - Zero-dependency on data sources unverified; TeacherDashboard needs auth or honest demo gating.
5. INFO - Copy is genuinely authored and strong; Collins design review not run.

## FIX LIST TO PRODUCTION-READY
1 (2h) smoke tests; 2 (1h) deploy config + ship; 3 (1h) data-source honesty pass; 4 (1h) dashboard gating. Estimated: most of a day.

## PORTFOLIO ROLE
Top-five pick: nature/citizen-science + education + the strongest authored voice in the fleet. High potential once it has a live URL.
