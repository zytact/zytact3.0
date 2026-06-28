## Zytact Portfolio

Personal portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Vite Plus tooling.

## Commands

- `vp check` - Typecheck, lint and format errors
- `vp lint` - Oxlint
- `vp fmt` - Oxfmt
- `vp config` - install Vite Plus hooks
- `vp staged` - run staged-file checks

Oxfmt replaces Prettier for general formatting. Tailwind class sorting from `prettier-plugin-tailwindcss` is not retained because oxfmt does not provide an equivalent sorter. Oxlint replaces ESLint with supported React, JSX accessibility, Next.js, and type-aware checks enabled; any `eslint-config-next` rules outside oxlint's coverage are not retained.

## Structure

- `src/app` - App Router routes and metadata
- `src/components` - portfolio layout and sections
- `src/lib/data.ts` - site configuration, projects, and experience data
- `src/app/globals.css` - global styles and Direction B theme tokens
