# Élevé Skin & Wellness

Marketing site and internal concierge CRM for Élevé Skin & Wellness — a luxury
concierge wellness company. Built with Next.js 15 (App Router), TypeScript,
Tailwind CSS, Framer Motion, Prisma, PostgreSQL, NextAuth, React Hook Form,
Zod, and Resend.

## Structure

- `src/app/(marketing)` — the public site: Home, Services (Peptide Therapy,
  Aesthetics, Hormone & Longevity, Recovery & Performance), Executive
  Wellness, Retreats, Physician Partners, About, and the Concierge Inquiry
  (Contact) form.
- `src/app/portal` — the internal, staff-only CRM (`/portal`), protected by
  NextAuth credentials auth and excluded from search indexing. Includes a
  dashboard/analytics view, lead pipelines (Physicians, Corporate, Client,
  Peptide, Retreat), tasks & follow-ups, notes, a calendar, and email history.
- `prisma/schema.prisma` — data model for staff users, leads, tasks, notes,
  and email log entries.

## Local development

```bash
cp .env.example .env   # fill in DATABASE_URL, AUTH_SECRET, RESEND_API_KEY, etc.
npm install
npm run db:push        # sync the Prisma schema to your Postgres database
npm run db:seed        # creates a staff login (see SEED_ADMIN_EMAIL/PASSWORD)
npm run dev
```

The concierge inquiry form (`/contact`) works without Resend configured — it
still creates a `Lead` in the database and logs the email attempt — but no
mail is actually sent until `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and
`CONCIERGE_NOTIFY_EMAIL` are set.

## Notes for launch

- **Photography**: every image slot on the site is an editorial placeholder
  (a labeled gradient frame noting exactly what shot belongs there) rather
  than stock photography. Real photography should be dropped in before
  launch — search each component for `PhotoFrame` usage.
- **Logo**: no logo file was supplied to this build, so the header/footer use
  a typographic wordmark. Swap in the brand mark via `src/components/ui/logo.tsx`
  once available.
- **Peptide Therapy booking**: the peptide consultation CTA is a built-in
  step (`/contact?type=peptide`) that submits directly into the concierge
  intake and CRM as a `PEPTIDE` lead — no external or affiliate link.
