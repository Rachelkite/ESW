# Élevé Skin & Wellness

Marketing site and internal concierge CRM for Élevé Skin & Wellness — a mobile
aesthetics, peptide, and longevity-membership business. Élevé travels to the
client for Botox, dermal filler, B-12 shots, and lipotropic shots; sells
peptide protocols directly (fulfilled through an existing pharmacy order
system); and connects clients with membership access to partner physician
practices. There is no physical office clients visit. Built with Next.js 15
(App Router), TypeScript, Tailwind CSS, Framer Motion, Prisma, PostgreSQL,
NextAuth, React Hook Form, Zod, and Resend.

## Structure

- `src/app/(marketing)` — the public site: Home, Services (Peptide Therapy,
  Aesthetics, Hormone & Longevity, Recovery & Performance), Shop (peptides),
  Book (live aesthetics appointment calendar), Membership (partner practice
  applications), Executive Wellness, Retreats, Physician Partners, About, and
  the Concierge Inquiry (Contact) form.
- `src/app/portal` — the internal, staff-only CRM (`/portal`), protected by
  NextAuth credentials auth and excluded from search indexing. Includes a
  dashboard/analytics view, lead pipelines (Physicians, Corporate, Client,
  Peptide, Retreat, Bookings, Membership), tasks & follow-ups, notes, a
  calendar, and email history.
- `prisma/schema.prisma` — data model for staff users, leads (including
  aesthetics bookings), availability windows, tasks, notes, and email log
  entries.

## Local development

```bash
cp .env.example .env   # fill in DATABASE_URL, AUTH_SECRET, RESEND_API_KEY, etc.
npm install
npm run db:push        # sync the Prisma schema to your Postgres database
npm run db:seed        # creates a staff login + sample Mon–Fri 9am–5pm availability
npm run dev
```

The concierge inquiry, booking, and membership forms all work without Resend
configured — they still create a `Lead` in the database and log the email
attempt — but no mail is actually sent until `RESEND_API_KEY`,
`RESEND_FROM_EMAIL`, and `CONCIERGE_NOTIFY_EMAIL` are set.

## Notes for launch

- **Photography**: every image slot on the site is an editorial placeholder
  (a labeled gradient frame noting exactly what shot belongs there) rather
  than stock photography. Real photography should be dropped in before
  launch — search each component for `PhotoFrame` usage.
- **Logo**: no logo file was supplied to this build, so the header/footer use
  a typographic wordmark. Swap in the brand mark via `src/components/ui/logo.tsx`
  once available.
- **Peptide ordering (`/shop`)**: payment and pharmacy fulfillment are
  **not** built into this app — they're handled by the existing myspalive/
  base44 order system (see `src/content/external-links.ts` for the order
  URL). Update that constant if the order URL ever changes.
- **Aesthetics booking (`/book`)**: availability is computed from the
  `AvailabilityWindow` table, seeded with a sample Mon–Fri 9am–5pm schedule.
  Replace with real provider hours (via the seed script or directly in the
  database) before launch. Appointment durations per service are defined in
  `src/lib/service-catalog.ts`.
- **Membership partner practices (`/membership`)**: the partner list (The
  Ultimate Longevity Center, currently the only entry) lives in
  `src/content/partners.ts`. Add more partner practices there as
  relationships are formalized.
