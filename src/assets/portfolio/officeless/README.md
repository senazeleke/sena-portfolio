# Officeless Portal

**Multi-tenant virtual-office SaaS** — run teams, clients, files, scheduling, payments, leads, and support from one workspace, with plan-based entitlements and Stripe SaaS billing.

Built as a full-stack platform for **organization staff**, **clients**, and **platform operators**, with a tenant portal and a separate platform admin console.

Product: **Officeless**  
Domain: [officelessportal.com](https://officelessportal.com)

Worked as a **team** at **[Be Light](https://belight-soft.com/)** (freelance), same setup as 7Net — a project manager assigned work parts.

| | |
| :--- | :--- |
| **Domain** | B2B virtual office / business operations SaaS |
| **Repos** | `officeless-portal-frontend` (Next.js) · `officeless-api` (NestJS) · `officeless-admin` (platform UI) |
| **Author focus** | Frontend UI/UX, Postman & manual testing; backend when features need it |

Drop screenshots in **this folder** using the names at the bottom. The case study at `/projects/officeless` uses placeholders until those files exist.

---

## My role

Primary focus on the **frontend UI/UX**, plus **API testing (Postman)** and **manual / UI testing**. Backend work as needed (NestJS endpoints, billing/entitlements checks, bug fixes).

| Focus | What I own |
| :--- | :--- |
| **Frontend** | Next.js App Router — dashboard, employees, clients, file manager, scheduling, leads, payments, support, settings/billing, public booking & pricing surfaces, role-aware layouts |
| **Testing** | Postman step guides for auth, seats, tiers, trials, checkout/portal, webhooks; UI paths across owner / staff / platform roles |
| **Backend (supporting)** | NestJS modules when UI depends on them — billing, entitlements, users/invites, platform org/tier APIs |

---

## What it does

Officeless gives remote and hybrid businesses a single portal to operate like an office online: invite staff under seat limits, manage clients and files, book appointments, collect payments, run lead pipelines, and open support tickets — gated by subscription tiers.

It is **not** a single-purpose tool. It is a **multi-tenant SaaS** with org workspaces, optional sub-accounts, Stripe self-serve billing, and a platform admin layer for trials, tiers, and ops.

### Roles

| Role | Can do |
| :--- | :--- |
| **Org owner / super admin** | Full org setup, billing checkout & portal, invite staff, configure modules, manage clients & files |
| **Staff / employee** | Day-to-day work under CASL permissions (no billing write unless granted) |
| **Client (portal guest)** | Tokenized client portal — uploads, checklists, limited shared access |
| **Platform super operator** | Orgs, tiers, entitlements, trials, sticky overrides, billing ops |
| **Platform support** | Billing write within caps (e.g. trial extend ≤14d), tickets, org read |
| **Platform viewer** | Read-only platform surfaces |

---

## Best features

1. **Tier entitlements** — Modules and limits (`limit.employees`, storage, feature flags) resolve from the assigned plan; seats and uploads fail closed at the cap.
2. **SaaS billing** — Stripe Checkout + Customer Portal, trials (start/extend), sticky tier admin override, webhook-driven subscription sync.
3. **File manager** — Org file storage with entitlement-aware quotas and client-facing share flows.
4. **Scheduling** — Booking links, calendars, appointments; public book routes for guests.
5. **Employees & seats** — Invite/pending/active seat counting; revoke invite frees capacity.
6. **Clients & projects** — Client records, project workspaces, token portal for external collaborators.
7. **Leads & payments** — Pipeline boards; invoices and payment methods (Stripe and other gateways).
8. **Support + platform admin** — Org tickets in-portal; operators manage tenants, tiers, and billing from admin.

---

## Portfolio layout

Odd rows = image left / text right. Even rows = text left / image right. Body ~40–70 words.

| Row | Layout | Feature |
| :---: | :--- | :--- |
| 1 | Image left · Text right | Portal home & dashboard |
| 2 | Text left · Image right | Billing & plans |
| 3 | Image left · Text right | Employees & seat limits |
| 4 | Text left · Image right | File manager |
| 5 | Image left · Text right | Scheduling & booking |
| 6 | Text left · Image right | Clients & client portal |
| 7 | Image left · Text right | Leads & payments |
| 8 | Text left · Image right | Platform admin & entitlements |

### 1 — Portal home & dashboard

**Screenshot:** `/app/dashboard`  
**Title:** One workspace for the virtual office  
**Short line:** Dashboard entry after org login.

The tenant portal opens into a central dashboard with navigation into employees, clients, files, scheduling, and gated modules. Owners and staff land in the same shell with permission-aware menus—so the product feels like an operating system for the business, not a pile of separate apps.

### 2 — Billing & plans

**Screenshot:** `/app/settings/billing` + `/pricings`  
**Title:** Self-serve SaaS under Stripe  
**Short line:** Plans, checkout, portal, trial banners.

Public pricing and in-app billing let owners start checkout, open the Stripe Customer Portal, and see trial or subscription state. Platform operators can start/extend trials and assign tiers. Entitlements update with the plan so UI modules and limits stay honest.

### 3 — Employees & seat limits

**Screenshot:** `/app/employee`  
**Title:** Seats that actually enforce  
**Short line:** Invite under cap; block at limit.

Owners invite staff by email and role. Active and pending users consume `limit.employees`. At capacity, invites return a clear entitlement error; revoking a pending invite or deactivating someone frees a seat—critical for SaaS fairness and easy to demo in Postman.

### 4 — File manager

**Screenshot:** `/app/file-manager`  
**Title:** Files with a plan-sized ceiling  
**Short line:** Upload UX tied to storage entitlements.

The file manager is a first-class module (`module.files`) with folder/client contexts and quota checks against `limit.storage_bytes`. Oversized uploads fail predictably. It photographs well as “cloud office storage” with real org data rather than empty folders.

### 5 — Scheduling & booking

**Screenshot:** `/app/scheduling` + public `/scheduling/book/...`  
**Title:** Bookings for staff and guests  
**Short line:** Internal calendar plus public booking links.

Scheduling covers booking links, calendars, and appointments inside the portal. Guests use public book URLs without a full account. Calendar integrations (Google / Outlook / Zoom) support the virtual-office story when connected.

### 6 — Clients & client portal

**Screenshot:** `/app/clients` + `/portal/[token]`  
**Title:** Clients inside—and a door outside  
**Short line:** CRM-style clients plus tokenized guest portal.

Staff manage client records in-app. External clients can land on a tokenized portal for uploads and shared workflows without becoming employees. That split—full portal vs guest access—is a strong portfolio differentiator.

### 7 — Leads & payments

**Screenshot:** `/app/leads` + `/app/payments`  
**Title:** Pipeline and money in one product  
**Short line:** Lead boards and invoice/payment flows.

Leads ship as boards, pipelines, and integrations when the plan allows. Payments cover invoices and methods with Stripe (and other gateways). Together they show Officeless as ops + revenue, not only HR and files.

### 8 — Platform admin & entitlements

**Screenshot:** Admin orgs / billing / tiers  
**Title:** Operators behind the tenants  
**Short line:** Tiers, trials, sticky overrides, tickets.

Platform roles (super, support, viewer) manage organizations, entitlement tiers, trial clocks, and billing issues without using org JWTs. Sticky tier overrides and Stripe webhooks keep SaaS state consistent—great for documenting serious multi-tenant work.

### Tiny captions

- Dashboard — virtual office home
- Billing settings + public pricing
- Employees & seat enforcement
- File manager + storage quota
- Scheduling / public booking
- Clients + guest portal token
- Leads board & payments
- Platform admin tiers & trials

---

## Feature map

| Area | Highlights |
| :--- | :--- |
| **Public** | Get started, pricing (`/pricings`), auth, public booking, pay links, client portal tokens |
| **Auth** | Org JWT login; platform admin JWT (separate); roles & CASL abilities |
| **Org** | Dashboard, organization profile, departments, configurations, sub-accounts |
| **People** | Employees invite/deactivate, roles & permissions, seat limits |
| **Clients** | Client CRUD, client portal |
| **Files** | File manager, upload requests, storage entitlements |
| **Work** | Projects, tasks, scheduling v2, legacy calendar (hidden) |
| **Growth** | Leads pipelines/boards, integrations hooks |
| **Money** | Payments, invoices, org billing (Checkout / Portal), Stripe webhooks |
| **Support** | In-app tickets; platform ticket assignees |
| **Platform** | Orgs, tiers, features registry, trials, payment issues, analytics |
| **Realtime** | Socket notifications / events |

---

## Tech stack

**Frontend** (`officeless-portal-frontend`): Next.js 15 App Router + React 18 + TypeScript, Tailwind, Redux + TanStack Query, CASL, Stripe.js, Socket.IO client.

**Backend** (`officeless-api`): NestJS 11 + TypeScript, MongoDB (Mongoose), Passport JWT (org + platform), CASL, Stripe, Resend, AWS S3, Socket.IO.

**Platform admin** (`officeless-admin`): Separate Next.js operator console → `/api/platform/*`.

---

## Screenshot files (applied)

```
00-cover.png                     # Card cover hero image
01-landing.png                   # Landing page showcase
02-dashboard.png                 # Main workspace dashboard
03-file-manager.jpeg             # Cloud file management & storage quotas
04-scheduling-calendar.jpeg      # Team calendar and scheduling
05-subscription-billing.jpeg     # Stripe SaaS subscription & billing tiers
```

---

## Status

Commercial SaaS (**Officeless**). Team work at [Be Light](https://belight-soft.com/). **Sena Zeleke** — frontend UI/UX, Postman, testing; supporting backend.
