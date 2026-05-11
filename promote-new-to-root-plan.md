# Promote /new to Root and Refactor Portfolio Architecture

## Summary

Replace the current production design with the /new design across public URLs: /, /about, and /proof-of-work. Remove the old design system, old route implementations, preview route duplication, unused assets, unused shadcn/
Radix/motion/theme dependencies, and restructure the new design from one 863-line client component into cohesive, route-owned modules.

## Key Changes

- [x] Promote routes:
    - [x] Move /new home content to /.
    - [x] Move /new/about content to /about.
    - [x] Move /new/pow content to /proof-of-work.
    - [x] Add redirects from /new, /new/about, and /new/pow to the promoted URLs in next.config.ts.
    - [x] Update nav links, CTAs, sitemap, and metadata to production URLs.
- [x] Replace the app shell:
    - [x] Remove SiteShell, old Header, old Footer, ModeToggle, ThemeProvider, and dark-mode plumbing.
    - [x] Make app/layout.tsx render the new portfolio shell directly.
    - [x] Keep the custom cursor/effects isolated to a small client-only shell component instead of making all page content client-rendered.
- [x] Split DirectionB.tsx into feature modules:
    - [x] portfolio/shell.tsx: layout, nav, footer, cursor, grain.
    - [x] portfolio/shell-client.tsx: contribution graph client.
    - [x] portfolio/home.tsx: hero, contribution section, tech stack, featured projects, PR section.
    - [x] portfolio/work.tsx: all projects and open-source contributions.
    - [x] portfolio/about.tsx: bio, sidebar facts, experience timeline, skills.
    - [x] portfolio/components.tsx: reusable visual primitives (cursorValue, Sticker).
    - [x] Keep public APIs small: routes import only page-level components.
- [x] Strengthen data ownership:
    - [x] Keep siteConfig, projects, PRs, tech stack, and experiences as shared domain data.
    - [x] Remove unused Project.image and all project/image icon mappings.
    - [x] Add small derived helpers: getCurrentExperience(), socialLinks, techCategories.
    - [x] Tighten literal types with as const and satisfies where useful.
- [ ] Clean styling:
    - [x] Remove old global classes: .glass, .gradient-text, .glow, contribution color tokens, shadcn/sidebar/chart tokens, and dark-mode-only variables.
    - [x] Move new design tokens into a clearly named @layer theme/:root section.
    - [ ] Keep global CSS for actual design-system primitives and page-level CSS only; avoid inline styles except for genuinely dynamic position/rotation/color values.
    - [ ] Replace repeated direction-b-\* CSS patterns with a smaller set of semantic classes for sections, cards, buttons, chips, grids, timeline, and headings.
- [ ] Remove dead code and dependencies:
    - [x] Delete old route components: Hero, ContributionGraph, TechStack, ProjectsGrid, PRGrid, PageHeader, old about content, old header/footer/theme components.
    - [x] Delete unused src/components/ui/\* shadcn components (all deleted).
    - [x] Remove unused dependencies: Radix packages, class-variance-authority, clsx, tailwind-merge, lucide-react, motion, next-themes from package.json.
    - [x] Remove unused public SVG tech icons and project screenshots.
    - [x] Remove stale ESLint ignore entry for direction-b.jsx.
- [x] Reliability and rendering:
    - [x] Keep GitHub contribution fetching behavior, but isolate fetch state into a focused client component (shell-client.tsx).
    - [x] Preserve the existing fallback behavior for failed contribution loading.
    - [x] Avoid broad client rendering: DirectionBHome is async server component, only cursor/grain/client-only graph are client components.
    - [x] Remove new Date().getFullYear() from render paths; use stable siteConfig.yearsOfExperience (10) and siteConfig.copyYear (2026).
- [x] DX updates:
    - [x] Update README.md from create-next-app boilerplate to project-specific commands and architecture notes.
    - [x] Keep verification to pnpm run typecheck and pnpm run lint, per repo instructions.
    - [x] Do not add a test framework.

## Remaining Tasks

- Run `pnpm run typecheck` and fix any type errors.
- Run `pnpm run lint` and fix any lint errors.
- Verify route behavior by static review:
    - / renders promoted home.
    - /about renders promoted about page.
    - /proof-of-work renders promoted work page.
    - /new, /new/about, and /new/pow redirect correctly (configured in next.config.ts).
    - Sitemap contains only canonical production URLs.
- Check import reachability:
    - No references remain to deleted old components, shadcn UI components, Radix, motion, next-themes, lucide, or old public image/icon assets.
- Check CSS reachability:
    - No deleted class names remain in JSX.
    - No global token blocks remain for unused dark/shadcn/sidebar/chart/contribution systems.
- Complete CSS cleanup (semantic class naming) if needed.

## Test Plan

- Run pnpm run typecheck.
- Run pnpm run lint.
- Verify route behavior by static review:
    - / renders promoted home.
    - /about renders promoted about page.
    - /proof-of-work renders promoted work page.
    - /new, /new/about, and /new/pow redirect correctly.
    - Sitemap contains only canonical production URLs.
- Check import reachability:
    - No references remain to deleted old components, shadcn UI components, Radix, motion, next-themes, lucide, or old public image/icon assets.
- Check CSS reachability:
    - No deleted class names remain in JSX.
    - No global token blocks remain for unused dark/shadcn/sidebar/chart/contribution systems.

## Assumptions

- The intended public route strategy is “Promote All”: /new/\* becomes canonical /, /about, and /proof-of-work.
- It is acceptable to remove the old design entirely rather than keep it for rollback.
- It is acceptable to remove unused project screenshots and tech SVGs because the promoted design does not display them.
- No tests will be added because the repository has no test framework and project instructions explicitly say not to add tests unless requested.
