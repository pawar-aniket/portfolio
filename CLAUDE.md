## Architecture

Portfolio site styled as an agentic UI / live agent session. React 18 + TypeScript 5 (strict) + Vite 5, plain CSS with custom properties — no Tailwind, no CSS-in-JS, zero runtime deps beyond React.

**Content is fully data-driven.** All page copy lives in `src/data/portfolio.ts`, typed by `src/types/portfolio.ts`. Components only render from this data — there is no CMS, markdown, or fetch layer. To change content, edit the data file; to change shape, edit the type and the data together.

**Sections map to agent concepts.** Hero is a boot-log terminal, Tools are skill cards (rendered as JSON-schema fragments), Runs are project rows with a `status` pip, Memory is career history with a "weight" score, Footer is a CLI prompt. The agent metaphor is deliberate — naming and copy should reinforce it.

**Component layout reflects role, not feature:**
- `src/components/layout/` — chrome that wraps the page (`Nav`, `Footer`, `SectionHead`, `ErrorBoundary`).
- `src/components/sections/` — the four content blocks of the page.
- Subcomponents stay colocated with their parent file when private and small. Extract to a shared file only when reused or > ~80 lines.

**Theming.** Two themes toggled via the `[data-theme]` attribute on `<html>`. CSS custom properties in `src/styles/globals.css` define every color. The `useTheme` hook (`src/hooks/`) manages the toggle and keeps `<meta name="theme-color">` in sync — when you add a new theme color, update the `THEME_COLOR` map in the hook too.


## Conventions

- Lowercase typography is intentional throughout the UI ("aniket pawar", "// reach", "tools", `.btn` labels). Don't capitalize copy.
- Skill/tool cards display JSON-schema fragments using a tokenized `SchemaToken` union; add new tools by appending to `portfolio.tools.items` and writing the schema as tokens, not as raw strings.
- Run statuses are a closed `RunStatus` union (`completed | running | shipped`); each value has a matching `.run-status.<status> .pip` color rule in CSS.
- Footer reach items render as a static `<span>` when `href` is omitted; only set `href` for items that should be clickable.


## Commands

```bash
npm run dev          # dev server on http://localhost:5173
npm run build        # tsc --noEmit && vite build → dist/
npm run preview      # serve the production build
npm run typecheck    # tsc --noEmit
```

There is no linter, formatter, or test runner configured. Run `npm run typecheck` to validate changes.
