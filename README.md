# Accredian Enterprise Landing Page

## Live Demo

Not deployed yet. Production deployment is authentication-blocked in this environment.

## Overview

This interview assignment recreates the Accredian Enterprise landing page with a responsive Next.js App Router implementation. It includes reusable page sections, accessible navigation and FAQ interactions, a production-style enquiry form, a `POST /api/leads` Route Handler, and PostgreSQL persistence designed for local PostgreSQL and Neon on Vercel.

This is an independent engineering assignment based on the public Accredian Enterprise reference, not an official Accredian product site.

## Assignment Requirements

| Requirement | Implementation |
|---|---|
| Next.js | App Router with TypeScript |
| Responsive page | Responsive layouts reviewed at five viewport sizes |
| Reusable components | Shared layout, section, and UI primitives |
| API integration | `POST /api/leads` |
| Lead capture bonus | Accessible enquiry form with server validation |
| Persistence bonus | PostgreSQL migration and provider-independent repository |
| Deployment target | Vercel-compatible Next.js architecture |

## Features

- Responsive landing page covering the reference section sequence
- Sticky desktop header and accessible mobile navigation
- Data-driven FAQ categories and accordion interaction
- Partner testimonials and local visual assets
- Contact section with field validation, loading, error, and success states
- PostgreSQL-backed lead persistence with no fake fallback
- Server-only database access and sanitized API errors

## Tech Stack

- Next.js `16.3.0`
- React `19.2.8`
- TypeScript
- Tailwind CSS `4.x`
- Zod `4.4.3`
- `pg` `8.x`
- PostgreSQL / Neon
- Vercel deployment target

## Architecture

Server Components are used by default. Client Components are limited to browser interactions.

```text
Browser
  |
  v
LeadForm (Client)
  |
  v
POST /api/leads
  |
  v
Route Handler
  |
  v
Zod validation
  |
  v
Lead service
  |
  v
Lead repository
  |
  v
PostgreSQL / Neon
```

The page remains composition-focused. The contact shell and footer are server-rendered; only the form, FAQ, and mobile menu hold client state.

## Project Structure

```text
src/
├── app/
│   ├── api/leads/
│   └── page.tsx
├── components/
│   ├── forms/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
├── lib/leads/
└── server/leads/

db/
└── migrations/

public/
└── images/
```

## Key Engineering Decisions

- Server Components by default with narrow client boundaries
- Native `fetch` instead of Axios or a form-state library
- One canonical Zod schema, authoritative on the server
- Lightweight service/repository split for the single persistence workflow
- `node-postgres` instead of an ORM for one table, supporting local PostgreSQL and Neon URLs
- Parameterized SQL and no public lead-reading endpoint
- No fake success or in-memory persistence when the database is unavailable
- Static testimonials instead of an unnecessary carousel dependency
- FAQ answers are limited to content verified from the live reference; unverified categories remain explicit empty states

## Lead Capture Architecture

The form accepts `fullName`, `workEmail`, `phone`, `company`, optional `jobTitle`, optional `teamSize`, and `trainingRequirement`. The API additionally accepts an empty `website` honeypot field. All values are bounded and validated server-side.

## API Contract

### `POST /api/leads`

- `201`: lead persisted
- `400`: malformed JSON
- `413`: request `Content-Length` exceeds 16 KB
- `415`: unsupported content type
- `422`: schema validation failure with safe field errors
- `500`: unexpected persistence failure
- `503`: `DATABASE_URL` is not configured

There is intentionally no public `GET /api/leads` endpoint.

## Database

Provision a PostgreSQL/Neon database, set `DATABASE_URL`, then execute [db/migrations/001_create_enterprise_leads.sql](db/migrations/001_create_enterprise_leads.sql). The migration is create-only and repeatable through `CREATE TABLE IF NOT EXISTS`.

The table stores the enquiry fields, a default `new` status, and a database-generated `created_at` timestamp.

## Getting Started

Install dependencies:

```text
npm install
```

Create a local environment file from `.env.example` using your platform's normal file-copy workflow, then set:

```text
DATABASE_URL=your-postgresql-connection-string
```

Never expose this value through a `NEXT_PUBLIC_*` variable or commit it.

## Running Locally

```text
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Validation commands:

```text
npm run lint
npm run build
```

## Validation

The local API matrix covers wrong content type (`415`), malformed JSON (`400`), invalid schema (`422`), and valid payload behavior without a configured database (`503`). Lint and production build pass. Real insertion verification remains environment-blocked until a database is provisioned.

## Responsive Design

The page was rendered locally at `375x812`, `430x932`, `768x1024`, `1024x768`, and `1440x900`. The contact form and footer stack on smaller screens and use two-column layouts when space permits.

## Accessibility

The implementation includes semantic landmarks, one page `h1`, logical heading levels, explicit form labels, autocomplete attributes, error association with `aria-describedby`, `aria-invalid`, live status messaging, visible focus states, keyboard-operable FAQ controls, and an accessible mobile menu.

This is a manual accessibility review, not a formal WCAG certification.

## AI Usage

This project used AI-assisted engineering for:

- reference-page structural analysis and content comparison
- development planning and component-boundary suggestions
- TypeScript and Tailwind implementation assistance
- API, schema, persistence, and security design review
- accessibility review and QA checklist generation
- debugging the Neon driver API mismatch
- README structure and release-report review

All generated work was reviewed against the repository, the live reference, local rendering, and executable validation commands.

## Manual Improvements

Developer review and manual decisions included:

- preserving verified reference wording instead of accepting invented copy
- keeping unverified FAQ answers out of the implementation
- removing the duplicate `#solutions` anchor found during release audit
- correcting the mobile menu's dynamic accessible label
- keeping static sections server-rendered
- removing unnecessary client-side email gating so server validation remains authoritative
- removing an unverified response-time claim
- manually reviewing CTA destinations, duplicate IDs, API failure modes, and responsive rendering
- keeping persistence truthfully blocked rather than adding a fake fallback

## Challenges & Trade-offs

The main trade-offs were maintaining a small Client Component surface while supporting interactive FAQ, mobile navigation, and form states; recovering only verifiable FAQ content from the reference; and keeping the database path deployment-safe without claiming persistence when credentials are unavailable locally.

## Deployment

The application is structured for Vercel and Neon, but no authenticated Vercel, GitHub, or Neon session was available during this release pass. No live URL or repository URL is claimed here until those external resources are actually created and verified.

## Future Improvements

Potential follow-up work, outside this assignment scope:

- automated component and end-to-end tests
- production rate limiting or a managed spam-protection service
- CMS-managed content
- analytics with an explicit privacy review
- authenticated lead-management tooling
