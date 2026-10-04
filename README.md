# REFLOW — Responsive Portfolio Layout System

REFLOW modernizes a 2023 React portfolio exercise into a focused responsive-layout engineering project.

The original repository called itself responsive, but its implementation relied heavily on fixed viewport heights, fixed viewport widths, absolute positioning, a 140%-wide contact form, remote placeholder images, Lorem Ipsum, fake personal/contact data, buttons without destinations, and navigation links that all pointed to `/`.

## Engineering focus

REFLOW treats responsive behavior as an explicit contract:

- compact / comfortable / wide viewport modes
- adaptive navigation
- deterministic project-column policy
- metadata density policy
- content-priority rules
- fluid typography with `clamp()`
- grid reflow instead of desktop shrinking
- responsive filter controls
- reduced-motion support
- semantic focus states

## Responsive contract

| Mode | Width | Navigation | Project grid | Metadata |
| --- | --- | --- | --- | --- |
| Compact | 0–639px | disclosure | 1 column | essential |
| Comfortable | 640–959px | inline | 2 columns | balanced |
| Wide | 960px+ | inline | 3 columns | expanded |

The JavaScript policy and CSS media queries use the same boundaries.

## Architecture

```text
src/data/portfolio.js
        │
        ▼
src/lib/responsivePolicy.js
        ├─ viewport mode
        ├─ project columns
        ├─ navigation mode
        ├─ metadata density
        ├─ focus filter normalization
        ├─ project filtering
        └─ navigation reducer
        │
        ▼
src/App.jsx
        ├─ viewport integration
        ├─ responsive navigation
        ├─ capability filters
        └─ project rendering
        │
        ▼
src/styles.css
        ├─ fluid typography
        ├─ compact reflow
        ├─ comfortable reflow
        └─ wide composition
```

## Why this is different from SIGNAL

SIGNAL focuses on evidence architecture and portfolio credibility.

REFLOW focuses on responsive composition: what happens to navigation, density, project structure, spacing, and hierarchy as available space changes.

## Modernization summary

- Create React App → Vite
- React 18 → React 19
- removed React Router
- removed React Icons
- removed react-slick
- removed slick-carousel
- removed Web Vitals
- removed remote stock imagery
- removed local placeholder slide/sign assets
- removed Lorem Ipsum
- removed fake person/contact information
- removed fake resume/download actions
- removed fake contact submission
- removed buttons without destinations
- removed navigation links that all pointed to `/`
- removed fixed `90vh/95vh/100vh` page composition
- removed fixed `vw` content columns
- removed 140%-wide form controls
- removed oversized Google Fonts import
- removed CRA public/test boilerplate
- removed legacy lockfile
- added Vitest, CI, Pages deployment, and professional documentation

## Accessibility

- skip link
- semantic navigation
- semantic menu disclosure
- `aria-expanded` / `aria-controls`
- Escape-to-close
- visible focus treatment
- semantic filter buttons with `aria-pressed`
- reduced-motion support
- no image-only content dependency

## Local development

Requirements:

- Node.js 22+
- npm

```bash
npm install --legacy-peer-deps --no-audit --no-fund
npm run dev
```

## Tests

```bash
npm test
```

The suite covers:

- compact/comfortable/wide boundaries
- project-column policy
- disclosure navigation policy
- metadata density
- invalid/negative/huge viewport normalization
- capability filter normalization
- empty filter behavior
- AND-based project filtering
- mobile navigation transitions
- Escape and wide-viewport close behavior

## Quality gate

```bash
npm run check
```

Runs syntax checks, Vitest, and a Vite production build.

## CI

`.github/workflows/quality.yml` runs on pull requests and pushes to `main`.

## Deployment

REFLOW includes a manual GitHub Pages workflow.

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Open **Actions → Deploy Pages**.
4. Run the workflow.

## Security review

No API keys, passwords, tokens, authentication assumptions, backend endpoints, sensitive browser storage, or unsafe HTML injection are required.

## Scope

REFLOW is intentionally a static responsive portfolio/layout demo. It does not claim:

- form submission
- authentication
- analytics
- CMS editing
- external client work
- real personal biography/contact data

## License

MIT. See [LICENSE](./LICENSE).
