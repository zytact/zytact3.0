## Zytact Portfolio

Personal portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Vite Plus tooling.

## Commands

- `vp run app:check` - Vite Plus check plus TypeScript
- `vp run app:typecheck` - TypeScript type check
- `vp lint` - Oxlint
- `vp fmt` - Oxfmt
- `vp config` - install Vite Plus hooks
- `vp staged` - run staged-file checks

Package scripts remain as compatibility aliases for platform and issue acceptance checks: `pnpm run dev`, `pnpm run build`, `pnpm run check`, `pnpm run typecheck`, `pnpm run lint`, `pnpm run format`, and `pnpm run prepare`.

Oxfmt replaces Prettier for general formatting. Tailwind class sorting from `prettier-plugin-tailwindcss` is not retained because oxfmt does not provide an equivalent sorter. Oxlint replaces ESLint; `eslint-config-next` rules are not retained because there is no oxlint equivalent.

## Structure

- `src/app` - App Router routes and metadata
- `src/components/portfolio` - portfolio layout and sections
- `src/lib/data.ts` - site configuration, projects, and experience data
- `src/app/globals.css` - global styles and Direction B theme tokens
