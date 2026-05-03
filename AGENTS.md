# AGENTS.md

## Project Overview

Next.js 16 portfolio site with React 19, TypeScript, Tailwind CSS 4, and shadcn/ui.

## Commands

- `pnpm run dev` - Start dev server at http://localhost:3000
- `pnpm run build` - Production build
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format with Prettier

## Important Configurations

- **Prettier**: 4-space tabs, single quotes, trailing commas in ES5
- **Path alias**: `@/*` maps to `./src/*`
- **React Compiler**: Enabled in next.config.ts (`reactCompiler: true`)
- **Tailwind**: Uses CSS-based config in `src/app/globals.css` (v4)
- **shadcn/ui**: Style is "new-york", components use Radix primitives in `src/components/ui/`

## Conventions

- UI components in `src/components/ui/`
- Page routes in `src/app/` (Next.js App Router)
- Utilities in `src/lib/`
- Data in `src/lib/data.ts`

## Testing

No test framework is configured. Do not add tests unless explicitly requested.
