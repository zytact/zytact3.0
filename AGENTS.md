AGENTS.md — Agent Instructions for zytact3.0

1. Common Commands

- Start dev server: `pnpm run dev` (Next.js hot-reload)
- Build production: `pnpm run build`
- Start built app: `pnpm run start`
- Run linter: `pnpm run lint` (uses `eslint`)
- Format code: `pnpm run format` (uses `prettier`)
- Run a single test: this repo has no tests configured; if tests are added use `pnpm test -- <path/to/test>` or `pnpm jest path/to/file.test.ts`.

2. Repository & Tooling Notes

- TypeScript is enabled (`tsconfig.json`), `strict: true`.
- ESLint + Prettier are configured in devDependencies; prefer `pnpm run lint` and `pnpm run format` before commits.
- This is a Next.js 16 app (app dir) using React 19 and Tailwind.
- Uses `shadcn/ui` components and Tailwind v4 utilities.

3. Code Style Guidelines

- Formatting: run `pnpm run format` (Prettier + `prettier-plugin-tailwindcss`) and follow Prettier defaults.
- Imports: use absolute `@/...` path aliases where appropriate (configured in `tsconfig.json`). Prefer grouped imports: external packages first, then absolute aliases, then relative imports.
- Types: prefer explicit types for public function signatures and exported props; rely on type inference for internal short helpers. Keep `strict` safety (avoid `any`).
- Naming: use camelCase for variables/functions, PascalCase for React components and types/interfaces.
- Files: prefer `.ts`/`.tsx` for source; co-locate component styles with component where appropriate.
- Error handling: validate inputs and throw/return typed `Error` objects; prefer try/catch at boundary layers (API routes/pages). Do not swallow errors silently.
- Async: prefer `async/await` with proper try/catch; propagate errors upward with context.
- Small functions: keep helpers small and pure where possible; extract shared utilities to `src/lib`.

4. Tests & CI

- No tests found. If adding tests, add `vitest` or `jest` and add `test` script in `package.json`. Document single-test command in this file.

5. Cursor / Copilot rules

- No `.cursor` or `.cursorrules` directories found.
- No `.github/copilot-instructions.md` found.

6. Agent Hints

- Make minimal, focused edits. Run `pnpm run lint` and `pnpm run format` after changes.
- Before renaming files or changing path aliases, update `tsconfig.json` paths and ensure imports are updated.

(End of AGENTS.md)
