# 7Net Marketplace

**B2B industrial ecommerce & wholesale platform** — browse machinery and equipment, compare vendors, request quotes, chat with sellers, and manage orders across buyer, vendor, and admin roles.

Built as a full-stack marketplace for **customers**, **vendors**, and **admins**, with multilingual UI (**English · Afaan Oromoo · Amharic**).

Worked as a **team** at **[Be Light](https://belight-soft.com/)** (freelance). A project manager assigned slices of the product. Live storefront: [7netmarket.com](https://7netmarket.com)

| | |
| :--- | :--- |
| **Domain** | B2B industrial machinery, equipment & wholesale |
| **Repo** | Monorepo — Next.js frontend + NestJS backend + shared `@seed-ecom/core` |
| **Author focus** | Sena Zeleke — frontend, Postman & UI testing; backend when needed |

Drop screenshots in **this folder** using the names at the bottom. The case study at `/projects/7net` uses placeholders until those files exist.

---

## My role

Primary focus on the **frontend**, plus **API testing (Postman)** and **UI testing**. Backend work as needed (API checks, DTO alignment, bug fixes across NestJS modules). Team at Be Light; PM split the work.

| Focus | What I own |
| :--- | :--- |
| **Frontend** | Next.js App Router UI — marketplace, PDP, categories, vendor storefronts, cart, customer/vendor/admin dashboards, i18n (EN / OM / AM), search & filters, seller trust, sticky buy box, Load More / pagination |
| **Testing** | Postman collections for public & role APIs; UI testing across customer / vendor / admin paths, locales, and production buy-path checks |
| **Backend (supporting)** | NestJS endpoints, shared `@seed-ecom/core` types, and API fixes when frontend features require them |

---

## What it does

7Net connects Ethiopian and regional buyers with verified industrial sellers. Shoppers discover products by category, trust signals, and search; vendors list inventory and fulfill orders; admins moderate products, users, ads, and platform ops.

It is **not** a single storefront — it is a multi-role B2B marketplace with public discovery, private dashboards, chat, quotations, and admin control.

### Roles

| Role | Can do |
| :--- | :--- |
| **Customer / buyer** | Browse marketplace & categories, view PDPs, add to cart, favorites, chat with vendors, submit quotations / inquiries, manage profile & orders |
| **Vendor** | Onboard & manage store, create/edit products & inventory, handle orders & quotations, chat with buyers, storefront profile |
| **Admin** | Approve products & vendors, manage users/customers, orders, payments overview, banners/ads, categories, reports, platform settings |

---

## Best features

1. **Product detail sticky buy box** — Price, quantity, Add to Cart, and Jumia-style seller trust stay usable while reading specs.
2. **Three-role product** — Public shop + customer, vendor, and admin surfaces with role-aware routes and layouts.
3. **i18n (EN / OM / AM)** — Full UI localization with next-intl — strong fit for Ethiopia / East Africa.
4. **Marketplace discovery** — Predictive search, category mega-menu, filters (brand, city, condition), and `/c/[slug]` Load More grids.
5. **Vendor storefronts** — Multi-tab vendor profiles with in-store search and verified seller signals.
6. **Seller trust & social proof** — Verified badges, quality/rating cues, stock scarcity on cards, recently viewed rail.
7. **Realtime chat & notifications** — Buyer–seller messaging and live notification bell (Socket.IO).
8. **Admin & vendor ops** — Product approval, inventory, orders, banners, and reporting dashboards.

---

## Portfolio layout

Odd rows = image left / text right. Even rows = text left / image right. Body ~40–70 words.

| Row | Layout | Feature |
| :---: | :--- | :--- |
| 1 | Image left · Text right | Landing & marketplace |
| 2 | Text left · Image right | Product detail & sticky buy box |
| 3 | Image left · Text right | Search, categories & filters |
| 4 | Text left · Image right | Role dashboards |
| 5 | Image left · Text right | Vendor storefront |
| 6 | Text left · Image right | Seller trust & discovery |
| 7 | Image left · Text right | Messages & notifications |
| 8 | Text left · Image right | Admin & multilingual |

### 1 — Landing & marketplace

**Screenshot:** `/` or `/marketplace`  
**Title:** Industrial buying, marketplace scale  
**Short line:** Home and browse that feel like a real B2B catalog.

The public home and marketplace surface featured products, banners, and category entry points. Buyers can move from discovery into filtered browse without losing the industrial wholesale context—machinery, equipment, and wholesale listings first.

### 2 — Product detail & sticky buy box

**Screenshot:** `/products/[id]`  
**Title:** Specs on the left, action on the right  
**Short line:** Sticky price, cart, and seller trust while scrolling.

The PDP pairs a gallery and technical specs with a sticky buy column: variants, volume-aware pricing, quantity, Add to Cart, chat, and seller performance. Buyers can evaluate equipment without losing the purchase path—especially on tall spec pages.

### 3 — Search, categories & filters

**Screenshot:** `/marketplace` filters + `/c/[slug]`  
**Title:** Find the right machine faster  
**Short line:** Predictive search, category pages, and Load More.

Header search with live suggestions, category mega-menu, and facet filters (including brand and city) help buyers narrow large catalogs. Category routes (`/c/...`) show accurate totals and Load More so inventories beyond the first page stay reachable.

### 4 — Customer, vendor & admin dashboards

**Screenshot:** `/customer/...`, `/vendor/...`, `/admin/...`  
**Title:** Three roles, not one generic app  
**Short line:** Buyers, sellers, and operators each get their own surface.

Role-based layouts gate what each user sees. Customers manage account and buying flows; vendors run catalog and fulfillment; admins approve products, manage users, and oversee the platform. Same design system, different jobs.

### 5 — Vendor storefront

**Screenshot:** `/vendors/[slug]`  
**Title:** Store pages that sell trust  
**Short line:** Multi-tab vendor profile with in-store search.

Public vendor pages present the shop identity, products, and tabs for deeper browsing. Buyers can search within a store and jump to listings from a verified seller context—closer to Alibaba/Jumia storefronts than a bare seller name on a card.

### 6 — Seller trust & discovery

**Screenshot:** Product cards + PDP seller card + recently viewed  
**Title:** Confidence before the click  
**Short line:** Verified sellers, ratings, stock cues, recently viewed.

Cards and PDP surfaces show verified vendor marks, real rating fallbacks, and low-stock warnings. A client-side recently viewed rail helps return buyers pick up where they left off—social proof and continuity without inventing fake scores.

### 7 — Messages & notifications

**Screenshot:** `/chat` + notification bell  
**Title:** Talk to the seller in product  
**Short line:** Realtime inbox and live alerts.

Buyers and vendors use messaging tied to products and commerce context. Socket-driven notifications keep order, chat, and platform events visible so the marketplace feels live—not email-only.

### 8 — Admin control & languages

**Screenshot:** `/admin` + language switcher (Amharic or Oromo)  
**Title:** Operate the platform—in three languages  
**Short line:** Admin depth + EN / OM / አማ UI.

Admins manage products, vendors, customers, orders, banners, and more from dedicated panels. The storefront and dashboards can switch among English, Afaan Oromoo, and Amharic—localization as a product feature for the Ethiopian market.

### Tiny captions

- Home / marketplace — discovery & banners
- PDP — sticky buy box + seller trust
- Search, filters & category Load More
- Role-specific dashboards
- Vendor storefront tabs
- Trust badges, stock, recently viewed
- Chat and live notifications
- Admin ops + multilingual chrome

---

## Feature map

| Area | Highlights |
| :--- | :--- |
| **Public** | Home, marketplace, categories `/c/[slug]`, PDP, vendors, legal/about/contact |
| **Auth** | Customer / vendor / admin login & register, password reset, role redirects |
| **Discovery** | Predictive search, mega-menu, filters, breadcrumbs, Load More on categories |
| **PDP** | Variants, tier pricing, sticky buy box, seller trust, PDF spec export, recently viewed |
| **Cart & buying** | Cart store, add-to-cart with stock checks, favorites |
| **Chat** | Product-aware conversations, unread state |
| **Customer** | Profile, orders, quotations / inquiries |
| **Vendor** | Products, inventory, orders, quotations, store settings |
| **Admin** | Users, vendors, products, categories, orders, banners, reports |
| **i18n** | `en` / `am` / `om` via next-intl |

---

## Tech stack

**Frontend** (`apps/seed-ecom-frontend`): Next.js App Router + React + TypeScript, Tailwind + Radix / shadcn, TanStack Query, Zustand, next-intl (`en` / `om` / `am`), Socket.IO client, React Hook Form + Zod, Framer Motion, Sonner, `@react-pdf/renderer`.

**Backend** (`apps/seed-ecom-backend`): NestJS + TypeScript, MongoDB (shared domain with `@seed-ecom/core` DTOs), JWT auth, role guards, Socket.IO gateway, file / media handling.

**Shared:** `@seed-ecom/core` — types, DTOs, utilities (pnpm workspace).

**Live:** [7netmarket.com](https://7netmarket.com)

---

## Screenshot files (drop here)

```
01-home.png
02-marketplace.png
03-category.png
04-search.png
05-pdp.png
06-vendor.png
07-trust.png
08-chat.png
09-customer.png
10-vendor-dash.png
11-admin.png
12-languages.png
cover.png
demo.mp4
```

Prefer real catalog data. For PDP: show sticky buy box while specs are scrolled. Keep one shot with the live `7netmarket.com` URL visible.

---

## Status

Commercial platform. Team work at [Be Light](https://belight-soft.com/). **Sena Zeleke** — frontend, Postman, UI testing; supporting backend.
