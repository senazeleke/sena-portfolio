# Famcon Construction — Portfolio Case Study

> A complete copy-and-paste portfolio showcase, case study, and asset guide for **Famcon General Construction Work PLC**.

---

## ⚡ Quick Snippets (For Portfolio Cards & Grids)

### Option A: Punchy / One-Liner (Best for preview grids)
**Famcon Construction — Enterprise Platform & Custom CMS**  
*Next.js 16 • React 19 • TypeScript • Tailwind CSS v4 • Node.js • Express • MongoDB Atlas*  
> Full-stack enterprise platform and custom CMS featuring trilingual localization (English, Amharic, Afaan Oromoo), a self-service client quotation portal, and role-based admin management.

### Option B: Medium Card / Modal Teaser
> **Role:** Full-Stack Developer & UI Architect  
> **Duration:** 2026  
> **Category:** Full-Stack Web Application / Enterprise CMS  
> **Summary:** Designed and engineered a production-grade web platform for an Ethiopian general construction contractor. Architected a trilingual user experience with script-adaptive typography, a secure JWT cookie-authenticated client quotation tracking system, and an administrative dashboard with real-time analytics and Cloudinary media pipelines.

---

## 📖 Full Case Study (For Dedicated Project Pages)

### 1. Executive Summary
**Famcon General Construction Work PLC** is a premier Ethiopian construction contractor delivering residential, commercial, infrastructure, and renovation projects across Addis Ababa, Jimma, Mattu, and nationwide.

To replace fragmented paper inquiries and static marketing sites, I architected and built a high-performance, full-stack monorepo platform. The system combines an immersive public-facing showcase, a self-service client portal for quote tracking, and a powerful back-office CMS for company managers to handle content, media, and customer leads autonomously.

---

### 2. The Problem & Business Challenge
1. **Multilingual Inclusivity:** The business serves communities speaking English, Amharic (አማርኛ), and Afaan Oromoo. Generic templates cannot handle script-specific typography (Ge'ez vs. Latin) or seamless regional localization.
2. **Lead Leakage & Inefficient Quoting:** Quotations received via social media or unorganized email forms led to delayed response times and lost sales opportunities.
3. **Content Bottlenecks:** Project managers lacked the technical skills to update site progress, project galleries, and active services without developer intervention.

---

### 3. Key Solutions & Features

#### 🌐 Trilingual Localization (`next-intl`)
* **True Cultural Accessibility:** Full parity across English, Amharic, and Afaan Oromoo.
* **Script-Adaptive Typography:** Automatically applies **Noto Sans Ethiopic** for Amharic Ge'ez script and **Montserrat** for Latin alphabets, ensuring optimal legibility and aesthetic balance.

#### 🛠️ Custom Admin CMS Dashboard (`/admin`)
* **Project & Services CRUD:** Multi-tab localized editor supporting draft states, completion dates, category tags, and featured badges.
* **Inquiry Tracking Pipeline:** Kanban-style lead status tracking (`new`, `in_progress`, `resolved`, `archived`) with internal team notes and one-click direct call/email triggers.
* **Real-time Overview Analytics:** Instant visual indicators tracking active projects, inquiry volume, and submission velocity.
* **Company Profile Manager:** Live configuration of company contact phone numbers, headquarters address, and operating milestones.

#### 🔒 Client Portal & Quotation Lifecycle (`/account`)
* **Self-Service Tracking:** Registered clients can log in to submit custom project requirements and monitor quotation review status in real time.
* **Secure RBAC Authentication:** Dual-token JWT system (short-lived access tokens + 7-day refresh tokens) stored in secure, `httpOnly`, `SameSite: Lax` cookies.

#### 📸 Cloudinary Media Pipeline
* **High-Res Media Handling:** Multi-image drag-and-drop uploader integrated directly with Cloudinary.
* **Interactive Media Viewers:** Custom auto-sliding carousels with pause-on-hover, dot navigation, and native video playback loops.
* **Dual-Schema Normalization:** Resilient API layer that normalizes both local static fallback schema (`src`) and MongoDB Atlas documents (`url`), guaranteeing zero layout breakage.

#### 🛡️ Enterprise Security & Hardening
* **Layered Defense:** Express REST API hardened with **Helmet** headers, strictly enforced **CORS credentials whitelist**, and **express-rate-limit** brute-force protection.
* **Type-Safe Contract:** End-to-end type safety using **TypeScript** and **Zod** schema validation across client forms and server endpoints.
* **Automated Lead Dispatch:** Immediate email notifications delivered via the **Resend API**.

---

### 4. Technology Stack Breakdown

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | **Next.js 16** (App Router), **React 19**, **TypeScript 5** |
| **Styling & Design System** | **Tailwind CSS v4** (Modern CSS variables, Light & Dark themes) |
| **State & Data Fetching** | **TanStack Query v5**, **React Hook Form**, **Zod**, **Sonner** |
| **Internationalization** | **next-intl** (English, Amharic, Afaan Oromoo), **Noto Sans Ethiopic** |
| **Backend Architecture** | **Node.js**, **Express**, **TypeScript (ES Modules)** |
| **Database & ORM** | **MongoDB Atlas**, **Mongoose** |
| **Authentication** | **JWT** (Access + Refresh tokens in `httpOnly` secure cookies), RBAC |
| **Cloud Services** | **Cloudinary** (Asset Storage & CDN), **Resend** (Transactional Email) |
| **Security & Utilities** | **Helmet**, **express-rate-limit**, **CORS**, **libphonenumber-js** |

---

### 5. Architectural Highlights & Engineering Challenges

* **Zero-Downtime Data Resilience:** Built a dual-source repository architecture. If external database connections encounter latency, the client gracefully falls back to pre-compiled static project datasets without throwing errors or breaking the UI.
* **Modern CSS Tokens (Tailwind v4):** Implemented an inline CSS token architecture (`--navy`, `--navy-deep`, `--orange`, `--orange-hot`) that seamlessly respects dark mode and brand accessibility contrast standards.
* **80+ Static Pre-rendered Routes:** Leveraged Next.js Static Site Generation (SSG) across all locale matrix routes for fast time-to-first-byte (TTFB) and search engine indexing.

---

### 6. Recommended Image Layout & Captions

| Asset | Placement | Suggested Portfolio Caption |
| :--- | :--- | :--- |
| **Hero Screenshot** | Top / Cover Image | *"Hero showcase highlighting completed projects, key performance metrics, and quick quote call-to-actions."* |
| **Trilingual Switcher** | Feature Highlight | *"Trilingual interface switching seamlessly between English, Amharic, and Afaan Oromoo with tailored Ethiopic script typography."* |
| **Admin Dashboard** | Technical Showcase | *"Custom CMS dashboard providing real-time inquiry pipeline tracking, project CRUD, and corporate settings management."* |
| **Client Portal** | UX Highlight | *"Secure client portal allowing customers to track quotation statuses and manage their construction inquiries."* |
| **Mobile Views** | Responsive Showcase | *"Fluid, touch-optimized mobile experience across all pages, carousels, and quotation workflows."* |

---

### 7. Bonus: Resume Bullet Points (Ready to Copy)

* *Architected and deployed a full-stack enterprise web application and CMS monorepo for a premier general contractor using Next.js 16, React 19, Express, and MongoDB Atlas.*
* *Engineered a trilingual localization system (`next-intl`) with dynamic typography switching between Latin and Ge'ez (Noto Sans Ethiopic) scripts.*
* *Built a custom role-based admin CMS with real-time quotation tracking, Cloudinary media upload pipelines, and live analytics.*
* *Implemented secure JWT authentication utilizing short-lived access tokens and refresh tokens housed in `httpOnly` secure cookies with Next.js edge route protection.*

