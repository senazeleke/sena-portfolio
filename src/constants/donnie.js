import coverImg from '../assets/portfolio/donnie/00-cover.png';
import landingHero from '../assets/portfolio/donnie/01-landing.png';
import latestListings from '../assets/portfolio/donnie/02-latest-listings.png';
import searchFilters from '../assets/portfolio/donnie/03-search-filters.png';
import listingDetailAmharic from '../assets/portfolio/donnie/04-listing-detail-amharic.png';
import agentDashboard from '../assets/portfolio/donnie/05-agent-dashboard.png';
import adminDashboard from '../assets/portfolio/donnie/06-admin-dashboard.png';

export const DONNIE_CASE_STUDY = {
  slug: 'donnie',
  title: 'Donnie',
  kicker: 'Ethiopia’s home marketplace',
  pitch:
    'Rent and buy houses, apartments, land, and commercial spaces. Search live listings, save favorites, message agents, and publish properties from one app — in English, Amharic, and Afaan Oromoo.',
  blurb:
    'A full-stack Ethiopian real-estate marketplace for clients, agents, and admins. Live listings on publish, search and a Leaflet map, zoomable galleries, Socket.IO inquiries, and an admin flow that approves agents and owns the catalog. Prices are ETB. Typical deploy: frontend on Vercel; API and uploads on Render with MongoDB Atlas.',
  privateRepo: false,
  cover: coverImg,
  shotFolder: 'src/assets/portfolio/donnie/',
  users: [
    {
      who: 'Client',
      job: 'Register and log in immediately, search and filter, open listing detail and gallery, save favorites, message the agent, get live notifications including price drops.',
    },
    {
      who: 'Agent',
      job: 'Register as pending until admin approval, then publish listings that go live on save, edit inventory, mark rented or sold (with confirm), reopen to the market, and reply to inquiries.',
    },
    {
      who: 'Admin',
      job: 'Approve or suspend users, reject or restore listings, CRUD property types and amenities, see platform stats, and browse the same marketplace as everyone else.',
    },
  ],
  differentiatorsTitle: 'Best features',
  differentiatorsLead:
    'A modern real estate marketplace connecting buyers and renters with verified property agents in Ethiopia.',
  differentiators: [
    'Instant Property Publishing: Verified agents list homes directly with immediate marketplace visibility.',
    'Three Tailored Portals: Dedicated dashboards for home seekers, real estate agents, and platform admins.',
    'Interactive Map & Search: Pinpoint properties on a map with real-time location and price filters.',
    'Trilingual Localization: Fully localized experience in English, Amharic, and Afaan Oromoo.',
    'High-Resolution Gallery: Multi-photo property galleries with full-screen lightbox zoom.',
    'Verified Agent Trust: Verified agent onboarding to guarantee legitimate listings.',
    'Direct Chat & Alerts: Instant messaging threads, saved favorites, and property price updates.',
  ],
  featuredTitle: 'Key marketplace surfaces',
  featured: [
    { src: landingHero, label: 'Hero search & property discovery' },
    { src: searchFilters, label: 'Real-estate search, filters & map toggle' },
    { src: listingDetailAmharic, label: 'Listing gallery & Amharic localization' },
    { src: agentDashboard, label: 'Agent inventory & listing lifecycle' },
  ],
  galleryTitle: 'Complete system walkthrough',
  galleryLead:
    'Explore the search experience, latest live listings, bilingual property pages, and agent/admin portals.',
  gallery: [
    { src: landingHero, label: 'Landing Hero — buy/rent search and live inventory counter' },
    { src: latestListings, label: 'Latest Listings — newly published homes in Addis Ababa' },
    { src: searchFilters, label: 'Search & Filters — city, subcity, beds, amenities, and map toggle' },
    { src: listingDetailAmharic, label: 'Listing Detail — multi-photo gallery and Amharic (አማርኛ) interface' },
    { src: agentDashboard, label: 'Agent Dashboard — publish, edit inventory, and mark rented/sold' },
    { src: adminDashboard, label: 'Admin Dashboard — pending agent approval and catalog moderation' },
  ],
  featureRows: [
    {
      id: 'landing',
      layout: 'image-left',
      src: landingHero,
      caption: 'Landing — hero search, property types, and live inventory counters',
      title: 'A Marketplace Home, Not a Landing Mock',
      short: 'Search from the hero; newest live homes underneath.',
      body: 'The landing page opens on a photo hero with rent and sale search, then property types, the six newest live listings, a simple process, and client voices. New publishes show up here immediately — featured is a badge, not a filter that hides fresh inventory.',
    },
    {
      id: 'listings',
      layout: 'text-left',
      src: latestListings,
      caption: 'Latest listings — live approved homes displayed with pricing, bedrooms, and location',
      title: 'Real Inventory, Immediately Accessible',
      short: 'Addis Ababa residential listings with transparent ETB pricing.',
      body: 'From sunlit 2-bedroom apartments in Bole to family villas near Old Airport and modern lofts in Kazanchis, verified listings appear instantly upon agent publication, complete with subcity location tags and key specs.',
    },
    {
      id: 'search',
      layout: 'image-left',
      src: searchFilters,
      caption: 'Search & filters — facet filtering by city, type, price, bedrooms, and amenities',
      title: 'Find the Home, Then Pin It',
      short: 'Filters and a Leaflet map over the same live results.',
      body: 'Clients filter by city, subcity, property type, price range, beds, baths, and amenities (parking, security, garden). A map toggle places those homes on Leaflet so property search feels interactive and geographical.',
    },
    {
      id: 'detail',
      layout: 'text-left',
      src: listingDetailAmharic,
      caption: 'Listing detail page localized in Amharic (አማርኛ) with image gallery and direct agent contact card',
      title: 'Localized Transparency & Agent Trust',
      short: 'Multi-photo galleries and native Ge’ez typography.',
      body: 'Each listing presents detailed photo galleries, verified agent contact cards, and descriptions stored in English, Amharic, and Afaan Oromoo. Clients can inspect high-resolution room photos and contact listing agents directly.',
    },
    {
      id: 'agent',
      layout: 'image-left',
      src: agentDashboard,
      caption: 'Agent dashboard — overview of total, pending, and live listings with status controls',
      title: 'Full Lifecycle Agent Inventory Management',
      short: 'Publish, edit, and mark rented or sold with confirmation guards.',
      body: 'Agents manage their entire portfolio from a single dashboard: tracking live vs pending listings, editing details, publishing saved drafts, and marking properties as rented or sold to prevent stale inventory from remaining on the market.',
    },
    {
      id: 'admin',
      layout: 'text-left',
      src: adminDashboard,
      caption: 'Admin dashboard — review and approval pipeline for pending listings and agent applications',
      title: 'Catalog Moderation & Verification Gate',
      short: 'Gatekeeper controls protecting marketplace integrity.',
      body: 'Admins review pending agent registrations and property submissions before granting platform permissions. Thin accent and confirmation actions allow quick approvals or rejections with clear reasoning.',
    },
  ],
  stack: [
    { layer: 'Frontend', tools: 'Next.js App Router, React, TypeScript, Tailwind v4, Framer Motion, Leaflet' },
    { layer: 'Client state', tools: 'Zustand, TanStack Query, React Hook Form + Zod, Axios, Sonner, Socket.IO client' },
    { layer: 'i18n', tools: 'next-intl (en / am / om, localePrefix: as-needed)' },
    { layer: 'API', tools: 'Node.js, Express 5 modular monolith, JWT, bcrypt, Multer /uploads, CASL-style /api/authorization' },
    { layer: 'Backend data', tools: 'MongoDB + Mongoose (Atlas)' },
    { layer: 'Realtime', tools: 'Socket.IO on the API (notifications, inquiries, listing views)' },
    { layer: 'Infra', tools: 'Vercel (frontend) · Render (API + /uploads) · MongoDB Atlas' },
  ],
};
