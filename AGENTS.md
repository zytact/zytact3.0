# AGENTS.md

## Project Overview

Personal portfolio site built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Vite Plus tooling.

## Commands

- `vp run app:check` - Vite Plus check plus TypeScript (use to verify changes)
- `vp run app:typecheck` - TypeScript check (use to verify changes)
- `vp lint` - Oxlint (use to verify changes)
- `vp fmt` - Oxfmt
- `vp config` - Install Vite Plus hooks
- `vp staged` - Run staged-file checks
- `pnpm run dev` - Start dev server at http://localhost:3000 (do not run)
- `pnpm run build` - Production build (do not run)

## Important Configurations

- **Path alias**: `@/*` maps to `./src/*`
- **React Compiler**: Enabled (`reactCompiler: true` in next.config.ts)
- **Tailwind v4**: CSS-based theme in `src/app/globals.css` with Direction B tokens

## Structure

- `src/app/` - Next.js App Router pages and layout
- `src/components/portfolio/` - Portfolio sections and components
- `src/lib/data.ts` - Site data (projects, experience, config)

## Testing

No test framework configured. Do not add tests unless explicitly requested.

## Design Context

- Read `PRODUCT.md` for strategic brand context before frontend/design changes.
- Read `DESIGN.md` for visual system rules, tokens, component patterns, and anti-references.
