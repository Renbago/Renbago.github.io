# Mehmet Baha Dursun — Personal Portfolio

Static research and engineering portfolio for
[renbago.github.io](https://renbago.github.io/).

The current site is a responsive, dependency-free HTML/CSS/JavaScript page.
It uses `.nojekyll`, so GitHub Pages serves the repository directly without a
Jekyll build step.

## Current structure

- `index.html`: profile, updates, and the unified Projects & Works list
- `dvrk-diffusion-policy.html`: detailed SDU/dVRK project page
- `kou-mekatronom.html`: detailed autonomous-vehicle project page
- `resume.html`: print-friendly current resume source
- `assets/files/Mehmet-Baha-Dursun-Resume.pdf`: generated one-page A4 resume
- `assets/files/dvrk-vision-encoders-report.pdf`: SDU project report
- `assets/css/portfolio.css`: responsive site styles
- `assets/js/portfolio.js`: video autoplay and current-year helpers
- `assets/media/`: optimized H.264 dVRK preview and full project video

The older Forty/Jekyll files remain in the repository as historical material,
but they are not used by the current homepage.

## Local preview

Run from the repository root:

```bash
(
  set -e
  set -o pipefail

  python3 -m http.server 4173
)
```

Then open `http://127.0.0.1:4173/`.

## Content notes

- The dVRK report is presented as an individual SDU course research report,
  not as a peer-reviewed publication.
- OpenArm/VLA is mentioned only as a current learning direction, not as a
  completed standalone project.
- The public resume omits phone numbers, references, hardware identifiers, and
  private operational details.
