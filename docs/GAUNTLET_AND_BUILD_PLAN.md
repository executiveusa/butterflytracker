# Morphos y Monarcas — Gauntlet / Build Plan

## Locked North Star
**Make people fall in love with Puerto Vallarta's butterflies, then turn that attention into usable conservation data.**

## Benchmark bars
- **Immersive presentation:** In Pieces — species become a memorable interactive experience.
- **Citizen observation utility:** eButterfly / iNaturalist class workflows — fast evidence capture with provenance and verification state.
- **Public-sector usefulness:** biodiversity monitoring concepts used by Jalisco / CONABIO / CONANP — occurrence, habitat, repeated monitoring, export and decision support.

## Product architecture
1. Living Atlas — immersive species presentation with evidence badges and sources.
2. Observation Capture — photo, time, geolocation, taxon suggestion, notes, habitat, plants.
3. Verification Queue — suggested → needs review → verified/rejected; verifier provenance.
4. Conservation Map — verified occurrences, seasonality, host plants, habitat incidents, survey gaps.
5. Habitat Layer — host/nectar plants and micro-corridors.
6. Incident Layer — pesticide, vegetation removal, fire, pollution, construction, water stress.
7. Public Observatory — seasonal trends and data-quality summaries.
8. Government/Research Export — CSV, GeoJSON and stable API contracts.
9. Education Mode — school/community observation campaigns with defined protocols.

## Release sequence
Truth/wiring audit → one perfect species → one real persisted observation → verification → conservation map → habitat/incidents → government exports → scale atlas → field pilot → independent Collins council.

## Merge gate
Do not merge to main until build/CI passes, no unresolved blocking review threads remain, scientific claims are source-backed, rollback is documented, and the owner explicitly approves merge.
