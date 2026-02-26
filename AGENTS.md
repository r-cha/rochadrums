# AGENTS.md — rochadrums

## Build & Dev Commands
- `yarn dev` / `yarn start` — start Astro dev server
- `yarn build` — production build (output in `dist/`)
- `yarn format` — run Prettier (includes astro + tailwindcss plugins)
- No test suite exists in this project.

## Architecture
Static site built with **Astro 5** + **Tailwind CSS 3** + **TypeScript (strict)**.
- `src/pages/` — Astro page routes (`index.astro`, `guides/`)
- `src/components/` — Astro components (kebab-case `.astro` files)
- `src/data/` — static data files consumed by components
- `src/content/` — content collections (e.g., guides)
- `src/types.ts` — shared TypeScript interfaces
- `src/styles/` — global CSS; colors use CSS custom properties via Tailwind
- `public/` — static assets served as-is

## Code Style & Conventions
- Path alias: `~/*` maps to `src/*` (use `~/types` not `../types`)
- Components are `.astro` files in kebab-case; types are PascalCase interfaces
- Formatting: Prettier with `prettier-plugin-astro` and `prettier-plugin-tailwindcss` (must be last)
- Use Tailwind utility classes; custom colors defined in `tailwind.config.cjs` (`bar`, `fill`, `primary`, `secondary`)
- Font: InterVariable (via `@fontsource/inter`)
- Package manager: **Yarn 1.x**
