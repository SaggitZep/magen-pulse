# Magen Pulse V4

Magen Pulse is a static GitHub Pages dashboard backed by a scheduled GitHub Actions pipeline.

## What runs

1. `.github/workflows/pipeline.yml` runs every 10 minutes.
2. `scripts/pipeline.py` makes one GDELT request, then filters and classifies relevant public reports locally.
3. Near-duplicate reports and repeated items from the same source are dampened.
4. A high score normally requires source diversity. An explicit report of launches from Iran toward Israel can trigger the dedicated launch rule from one source.
5. The pipeline writes both `data/state.json` and `data/state.js`.
6. `index.html` renders `state.js` immediately and then refreshes from `state.json`. This means the dashboard also opens with data when viewed locally, where `fetch()` may be blocked.

## Deployment

Push the repository to GitHub, enable GitHub Pages from the repository root, then run **Actions → Magen Pulse pipeline → Run workflow** once.

## Manual verified evidence

Signals that cannot be collected automatically can be added to `data/manual_signals.json`.

## Important

The displayed number is a transparent OSINT index from 0 to 100. It is not a statistically calibrated probability, not an official alert, and not a substitute for Home Front Command instructions.
