# Magen Pulse V3

## Architecture
1. GitHub Actions runs every 10 minutes.
2. `scripts/pipeline.py` queries public GDELT news data.
3. Results are deduplicated, assigned source reliability, time decay and horizon relevance.
4. The scoring engine writes `data/state.json`.
5. GitHub Pages displays that state.

## Important
The model is not statistically calibrated yet. It is a transparent OSINT estimate and must not be treated as an official alert.

## First deployment
After pushing the repository, open Actions > Magen Pulse pipeline > Run workflow.
Then wait about two minutes and reload the Pages site.

## Manual evidence
Verified signals that cannot be collected automatically can be added to `data/manual_signals.json`.
