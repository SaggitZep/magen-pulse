# Magen Pulse

Mobile-first transparent OSINT risk-radar prototype.

## What works now

- Responsive one-screen mobile layout
- Interactive `i` transparency window
- Risk graph with colored risk bands
- Data loaded from `data/risk-data.json`
- Browser reload of the data every 30 minutes
- GitHub Actions workflow scheduled twice per hour
- Explicit **demo mode** so sample information cannot be mistaken for live intelligence

## Publish on GitHub Pages

1. Create a public repository named `magen-pulse`.
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. The site will appear at:
   `https://YOUR-USERNAME.github.io/magen-pulse/`

## Important limitation

The scheduled workflow currently updates the timestamp but does **not** generate
a live risk score. This is deliberate. Live mode should only be enabled after:

- approving the exact public sources;
- defining how every source is checked;
- defining confidence and recency decay;
- testing false positives and missing-data handling;
- validating that the score is presented as an experimental index, not a warning.

GitHub scheduled workflows can be delayed during periods of high load. The web
page therefore displays the actual last data timestamp rather than pretending
that every run occurred exactly on time.


## V0.2

- Semi-circular risk gauge
- Improved mobile visual design
- Interactive chart ranges: 3, 6, and 12 hours
- Richer methodology modal
- Updated hospital-readiness indicator
