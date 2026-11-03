import landingHeroEn from '../assets/portfolio/famcon/00-landing.png';
import amharicLocalization from '../assets/portfolio/famcon/02-localization-amharic.png';
import servicesSection from '../assets/portfolio/famcon/03-services.png';
import featuredProjects from '../assets/portfolio/famcon/04-featured-projects.png';
import projectDetail from '../assets/portfolio/famcon/05-project-detail.png';
import adminDashboard from '../assets/portfolio/famcon/06-admin-dashboard.png';
import clientDashboard from '../assets/portfolio/famcon/07-client-dashboard.png';

export const FAMCON_CASE_STUDY = {
  slug: 'famcon',
  title: 'Famcon Construction',
  kicker: 'Enterprise platform & custom CMS',
  pitch:
    'Full-stack enterprise platform and custom CMS featuring trilingual localization (English, Amharic, Afaan Oromoo), a self-service client quotation portal, and role-based admin management.',
  blurb:
    'Designed and engineered a production-grade web platform for Famcon General Construction Work PLC. Architected a trilingual user experience with script-adaptive typography, a secure JWT cookie-authenticated client quotation tracking system, and an administrative dashboard with real-time analytics and Cloudinary media pipelines.',
  owner: 'Famcon General Construction Work PLC',
  engagement: 'Full-Stack Developer & UI Architect',
  commercial: true,
  privateRepo: true,
  cover: landingHeroEn,
  contribution: {
    title: 'My role',
    lead: 'I designed and engineered the enterprise platform and custom CMS for Famcon General Construction Work PLC from architectural inception to deployment — handling full-stack frontend, backend APIs, trilingual localization, and administrative workflows.',
    items: [
      {
        focus: 'Frontend & Localization',
        job: 'Next.js 16 App Router, React 19, and Tailwind CSS v4. Architected a trilingual experience with script-adaptive typography dynamically pairing Montserrat for Latin alphabets and Noto Sans Ethiopic for Ge’ez script.',
      },
      {
        focus: 'Client Portal',
        job: 'Self-service client account center with dual-token JWT auth in httpOnly secure cookies, quotation status pipeline, custom project requirements submission, and order milestone tracking.',
      },
      {
        focus: 'Admin CMS & Backend',
        job: 'Express REST API with TypeScript and MongoDB Atlas. Engineered role-based CMS for project and services CRUD, quotation pipeline, analytics, Cloudinary asset pipeline, and Resend transactional notifications.',
      },
    ],
  },
  featuredTitle: 'Core platform surfaces',
  featured: [
    { src: landingHeroEn, label: 'Hero showcase & key metrics' },
    { src: amharicLocalization, label: 'Trilingual localization (Amharic Ge’ez script)' },
    { src: adminDashboard, label: 'Custom Admin CMS dashboard & pipeline' },
    { src: clientDashboard, label: 'Client portal & quotation tracking' },
  ],
  galleryTitle: 'Complete system walkthrough',
  galleryLead:
    'Explore the public web showcase, localized views, administrative CMS, and self-service client account center.',
  gallery: [
    { src: landingHeroEn, label: 'Landing Hero — value proposition, trust metrics, and quote CTA' },
    { src: amharicLocalization, label: 'Amharic (አማርኛ) localization with Noto Sans Ethiopic typography' },
    { src: servicesSection, label: 'Company services catalog — residential, commercial, infrastructure, renovation' },
    { src: featuredProjects, label: 'Featured projects showcase across Ethiopian regional hubs' },
    { src: projectDetail, label: 'Individual project detail view (Jimma Housing Estate)' },
    { src: adminDashboard, label: 'Admin CMS panel — live inquiry pipeline, project CRUD & metrics' },
    { src: clientDashboard, label: 'Client dashboard — quote tracking, specs & milestone tracker' },
  ],
  users: [
    {
      who: 'Public visitor',
      job: 'Explore company credentials, view completed projects by sector and region, switch between EN / AM / OM, and submit custom quote inquiries.',
    },
    {
      who: 'Client (Account)',
      job: 'Log in to self-service portal, track quotation review statuses in real time, review project specifications, and monitor construction milestones.',
    },
    {
      who: 'Company Admin',
      job: 'Manage active project listings and service categories, triage client quote inquiries across pipeline stages, configure company details, and track business metrics.',
    },
  ],
  differentiatorsTitle: 'Key features',
  differentiatorsLead:
    'A unified digital platform built to streamline client inquiries, showcase construction projects, and manage company operations.',
  differentiators: [
    'Trilingual Experience: Complete language support in English, Amharic, and Afaan Oromoo with script-adapted typography.',
    'Client Portal: Direct quote requests, appointment bookings, and project consultation tracking in one place.',
    'Inquiry Pipeline: Visual Kanban board for staff to triage client requests, add team notes, and manage follow-ups.',
    'Project Media Gallery: High-resolution project showcase with multi-image uploads and interactive carousels.',
    'Fast & Reliable Loading: Optimized static pages designed for lightning-fast access across all devices and network speeds.',
    'Secure Architecture: Strict input validation and secure authentication to safeguard company and client data.',
  ],
  featureRows: [
    {
      id: 'landing',
      layout: 'image-left',
      src: landingHeroEn,
      caption: 'Hero showcase highlighting completed projects, key performance metrics, and quick quote call-to-actions',
      title: 'Building Ethiopia’s Future, One Project at a Time',
      short: 'Modern public portal engineered for commercial and residential construction.',
      body: 'The landing experience presents Famcon’s capabilities with precision: high-impact hero credentials (150+ projects, 4+ years, 98% satisfaction), dynamic quotation prompts, and clear pathways to browse active and completed works across Addis Ababa, Jimma, and regional hubs.',
    },
    {
      id: 'amharic',
      layout: 'text-left',
      src: amharicLocalization,
      caption: 'Trilingual interface switching seamlessly between English, Amharic, and Afaan Oromoo with tailored Ethiopic script typography',
      title: 'Cultural Accessibility & Script-Adaptive Typography',
      short: 'Native Amharic and Afaan Oromoo support beyond machine translation.',
      body: 'Generic web templates fail when rendering Ge’ez script. The typography engine dynamically applies Noto Sans Ethiopic for Amharic and Montserrat for Latin-based languages, preserving balanced visual hierarchy, line heights, and legibility across every screen size.',
    },
    {
      id: 'services',
      layout: 'image-left',
      src: servicesSection,
      caption: 'Comprehensive service catalog spanning residential, commercial, infrastructure, and renovation',
      title: 'End-to-End Construction Capabilities',
      short: 'Structured service presentation with targeted scopes of work.',
      body: 'From ground-up residential housing complexes and commercial towers to infrastructure roads and precision remodeling, the platform breaks down technical capabilities into clear, actionable client offerings with direct quote request links.',
    },
    {
      id: 'projects',
      layout: 'text-left',
      src: featuredProjects,
      caption: 'Featured projects grid across Jimma, Mattu, Adama, and Addis Ababa',
      title: 'Proof of Execution Across Key Regions',
      short: 'Interactive project directory organized by year, sector, and location.',
      body: 'Clients explore major national and regional undertakings — including the Jimma Housing Estate, Mattu University Cattle Farming Research Site, and Adama commercial developments — with verified locations, delivery years, and high-resolution galleries.',
    },
    {
      id: 'project-detail',
      layout: 'image-left',
      src: projectDetail,
      caption: 'Dedicated project detail page with aerial photography, specifications, and milestones',
      title: 'Deep Project Transparency',
      short: 'Dedicated project case study pages with multi-angle galleries.',
      body: 'Individual project pages display high-altitude site overviews, construction timelines, and engineering specifications. The dual-schema API ensures images load flawlessly whether served via Cloudinary CDN or offline fallback schemas.',
    },
    {
      id: 'admin',
      layout: 'text-left',
      src: adminDashboard,
      caption: 'Custom CMS dashboard providing real-time inquiry pipeline tracking, project CRUD, and corporate settings management',
      title: 'Operational CMS & Lead Triage Pipeline',
      short: 'Central command replacing fragmented spreadsheets and messaging chats.',
      body: 'The custom admin dashboard provides real-time visibility into incoming quote requests, active project listings, and registered client accounts. Company managers update site content, upload new progress stills, and triage leads through a structured workflow.',
    },
    {
      id: 'client',
      layout: 'image-left',
      src: clientDashboard,
      caption: 'Secure client portal allowing customers to track quotation statuses and manage their construction inquiries',
      title: 'Self-Service Client Account Center',
      short: 'Transparent quotation lifecycles and milestone tracking.',
      body: 'Clients create secure accounts to submit detailed project requirements, monitor quotation review statuses (New/Pending, In Progress, Completed), and review project specifications with end-to-end security powered by httpOnly cookie JWT authentication.',
    },
  ],
  stack: [
    { layer: 'Frontend Framework', tools: 'Next.js 16 (App Router), React 19, TypeScript 5' },
    { layer: 'Styling & Tokens', tools: 'Tailwind CSS v4, custom CSS design tokens, Montserrat & Noto Sans Ethiopic' },
    { layer: 'State & Client Data', tools: 'TanStack Query v5, React Hook Form, Zod schema validation, Sonner' },
    { layer: 'Internationalization', tools: 'next-intl (English, Amharic, Afaan Oromoo), script-adaptive typography' },
    { layer: 'Backend & API', tools: 'Node.js, Express, TypeScript (ES Modules), Helmet, express-rate-limit' },
    { layer: 'Database', tools: 'MongoDB Atlas, Mongoose schemas with dual-source fallback' },
    { layer: 'Auth & Security', tools: 'Dual-token JWT (Access + Refresh) in httpOnly secure cookies, RBAC' },
    { layer: 'Cloud & Media', tools: 'Cloudinary CDN (multi-image upload & transformations), Resend transactional email' },
  ],
};

