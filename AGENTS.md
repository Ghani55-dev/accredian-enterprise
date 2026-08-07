# AGENTS

## Project
- Accredian Enterprise interview assignment
- Next.js App Router, TypeScript, Tailwind, and npm
- Target environment: Vercel-ready web app

## Architecture
- Prefer Server Components by default and keep Client Components limited to real browser interactions
- Organize shared UI under src/components/ui, layout under src/components/layout, and page sections under src/components/sections
- Keep repeated content data-driven when it becomes reusable, and keep the structure simple

## Quality
- Maintain TypeScript safety, accessibility, responsive design, performance, and maintainability
- Avoid unused code and unnecessary dependencies
- Preserve the existing working architecture unless a focused fix is clearly justified

## Workflow
- Inspect relevant files before changes and preserve existing patterns
- Make incremental changes rather than large rewrites
- After changes, run npm run lint and npm run build

## Safety
- Never expose secrets or commit .env files
- Never destructively alter Git state

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
