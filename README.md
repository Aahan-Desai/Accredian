# Accredian Enterprise Clone

Partial clone of the Accredian Enterprise landing page built with Next.js 14, App Router, TypeScript, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build

```bash
npm run build
npm start
```

## Approach

The app is structured around focused landing page sections:

- `Navbar` with sticky desktop navigation and a mobile hamburger menu
- `Hero` with generated enterprise-learning visual, metrics, and demo CTA
- `TrustedBy` partner logo strip
- `Features` benefits cards
- `HowItWorks` implementation process
- `Programs` filterable course offerings
- `Testimonials` rotating customer quotes
- `CTA` final conversion band
- `Footer` with link columns
- `LeadModal` shared lead capture form

The design follows the reference site's blue, white, and dark enterprise palette while keeping the implementation original and responsive. Tailwind utilities handle layout, spacing, hover states, and breakpoints. Smooth scrolling is enabled globally.

## Lead Capture API

`POST /api/leads` accepts:

```json
{
  "name": "Ada Lovelace",
  "email": "ada@company.com",
  "company": "Company Name",
  "phone": "+91 98765 43210"
}
```

The route validates required fields and email format, then writes mock submissions to `data/leads.json`. On Vercel, filesystem writes are not persistent, so this should be replaced with a database, CRM webhook, or serverless storage for production.

## AI Usage

Codex generated the project structure, React components, Tailwind styling, mock API route, form validation, and README. A generated bitmap hero image was created for the enterprise-learning visual and placed in `public/images/enterprise-hero.png`. The final implementation was refined for responsiveness, component boundaries, and the requested folder structure.

## Known Limitations

- The clone is a close partial recreation, not a pixel-perfect copy.
- Partner names, testimonials, and metrics are mock content.
- Lead storage is local mock storage and not durable on serverless deployments.
- More time would allow exact asset extraction, richer accessibility testing, CRM integration, analytics events, and a dedicated GET route for mock programs/testimonials.
