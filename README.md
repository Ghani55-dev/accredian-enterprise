# Accredian Enterprise Landing Page

## Live Demo

https://accredian-enterprise-flax-nu.vercel.app/

## GitHub Repository

https://github.com/Ghani55-dev/accredian-enterprise

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
- `pg` `8.22.0`
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

## Lead Capture & API

The form accepts `fullName`, `workEmail`, `phone`, `company`, optional `jobTitle`, optional `teamSize`, and `trainingRequirement`. The API additionally accepts an empty `website` honeypot field. All values are bounded and validated server-side.

The form includes loading, validation-error, API-error, and success states, prevents duplicate submissions while a request is active, and associates field errors with their controls for assistive technology.

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

The application uses PostgreSQL through `pg` / `node-postgres`. Provision a local PostgreSQL database or compatible hosted PostgreSQL service such as Neon, set the server-only `DATABASE_URL`, then execute [db/migrations/001_create_enterprise_leads.sql](db/migrations/001_create_enterprise_leads.sql). The migration is create-only and repeatable through `CREATE TABLE IF NOT EXISTS`.

The repository uses parameterized SQL, a service/repository boundary, database-generated timestamps, and no public lead-list endpoint.

Local PostgreSQL persistence has been verified end-to-end: `POST /api/leads` returned `201`, followed by independent verification of a synthetic PostgreSQL row with `status = new` and a database-generated `created_at` timestamp. Production database persistence has not been independently verified; it depends on a valid server-side `DATABASE_URL` in the Vercel environment.

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

## Environment Variables

```text
DATABASE_URL=
```

`DATABASE_URL` is server-only. Do not prefix it with `NEXT_PUBLIC_` and do not commit real credentials.

## Database Setup

1. Create a PostgreSQL database locally or with a compatible hosted provider.
2. Configure `DATABASE_URL` in the local environment.
3. Apply [db/migrations/001_create_enterprise_leads.sql](db/migrations/001_create_enterprise_leads.sql).
4. Run the application and submit a synthetic test lead if needed.

## Running Locally

```text
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use `localhost` rather than `127.0.0.1` for local development; earlier testing showed that the alternate origin could block Next.js development client resources.

Validation commands:

```text
npm run lint
npm run build
```

## Validation & QA

The verified local API matrix is:

- Wrong Content-Type → `415`
- Malformed JSON → `400`
- Invalid schema → `422`
- Oversized request → `413`
- `GET /api/leads` → `405`
- Valid lead → `201`

```text
npm run lint       PASS
npm run build      PASS
git diff --check   PASS
```

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
- diagnosing the local PostgreSQL driver failure and evaluating the development-origin issue
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
- diagnosing form navigation caused by the incorrect development origin
- switching from the Neon HTTP driver to `pg` only after proving the local PostgreSQL connection
- verifying the synthetic lead independently in PostgreSQL
- preserving parameterized SQL and sanitized errors

## Challenges & Trade-offs

The main trade-offs were maintaining a small Client Component surface while supporting interactive FAQ, mobile navigation, and form states; recovering only verifiable FAQ content from the reference; and using `pg` so one PostgreSQL repository supports both local development and hosted production databases. The Neon serverless HTTP driver was not suitable for the standard local PostgreSQL connection.

## Deployment

The application is deployed on Vercel:

https://accredian-enterprise-flax-nu.vercel.app/

Source code:

https://github.com/Ghani55-dev/accredian-enterprise

Production database persistence depends on a valid server-side `DATABASE_URL` in the Vercel environment and has not been independently verified in production.

## Future Improvements

Potential follow-up work, outside this assignment scope:

- automated component and end-to-end tests
- production rate limiting or a managed spam-protection service
- CMS-managed content
- analytics with an explicit privacy review
- authenticated lead-management tooling
