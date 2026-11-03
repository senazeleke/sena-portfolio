import coverImg from '../assets/portfolio/7net/00-cover.png';
import marketplaceHome from '../assets/portfolio/7net/01-marketplace-home.png';
import featuredProducts from '../assets/portfolio/7net/02-featured-products.png';
import pdpZoom from '../assets/portfolio/7net/03-pdp-zoom.png';
import pdpStickyBuy from '../assets/portfolio/7net/04-pdp-sticky-buy.png';
import customerOrders from '../assets/portfolio/7net/05-customer-orders.jpeg';
import localizationAmharic from '../assets/portfolio/7net/06-localization-amharic.png';
import supportAi from '../assets/portfolio/7net/07-support-ai.png';

export const SEVEN_NET_CASE_STUDY = {
  slug: '7net',
  title: '7Net',
  kicker: 'B2B industrial ecommerce & wholesale',
  pitch:
    'Browse machinery and equipment, compare vendors, request quotes, chat with sellers, and manage orders across buyer, vendor, and admin roles — in English, Afaan Oromoo, and Amharic.',
  blurb:
    'A B2B industrial marketplace I work on as a freelancer at Be Light, as part of a team with work split by a project manager. My main contribution is the frontend, plus Postman API testing and UI testing, with backend support when features need it. Live at 7netmarket.com.',
  liveUrl: 'https://7netmarket.com',
  owner: 'Be Light',
  ownerUrl: 'https://belight-soft.com/',
  engagement: 'Freelance',
  commercial: true,
  cover: coverImg,
  shotFolder: 'src/assets/portfolio/7net/',
  contribution: {
    title: 'My role',
    lead: 'I currently work on 7Net as a freelancer at Be Light, on a team — a project manager assigns slices of the product. Primary focus is the frontend, plus API testing (Postman) and UI testing. Backend work as needed — API checks, DTO alignment, and bug fixes across NestJS modules.',
    items: [
      {
        focus: 'Frontend',
        job: 'Next.js App Router UI — marketplace, PDP, categories, vendor storefronts, cart, customer/vendor/admin dashboards, i18n (EN / OM / AM), search and filters, seller trust, sticky buy box, Load More / pagination.',
      },
      {
        focus: 'Testing',
        job: 'Postman collections for public and role APIs; UI testing across customer, vendor, and admin paths, locales, and production buy-path checks.',
      },
      {
        focus: 'Backend (supporting)',
        job: 'NestJS endpoints, shared @seed-ecom/core types, and API fixes when frontend features require them.',
      },
    ],
  },
  users: [
    {
      who: 'Customer / buyer',
      job: 'Browse marketplace and categories, view PDPs, add to cart, favorites, chat with vendors, submit quotations, manage profile and orders.',
    },
    {
      who: 'Vendor',
      job: 'Onboard and manage store, create and edit products and inventory, handle orders and quotations, chat with buyers, storefront profile.',
    },
    {
      who: 'Admin',
      job: 'Approve products and vendors, manage users and customers, orders, payments overview, banners and ads, categories, reports, platform settings.',
    },
  ],
  differentiatorsTitle: 'Best features',
  differentiatorsLead:
    'A multi-role B2B industrial marketplace connecting buyers, equipment vendors, and platform operators.',
  differentiators: [
    'Sticky Purchase Bar: Price, quantity controls, and seller trust signals stay visible while browsing technical specs.',
    'Three User Portals: Dedicated workspaces for buyers, machinery vendors, and system administrators.',
    'Trilingual Localization: Complete language support in English, Afaan Oromoo, and Amharic.',
    'Smart Marketplace Search: Predictive search, category menus, spec filters, and fast product grids.',
    'Verified Vendor Storefronts: Dedicated supplier profiles featuring verified badges and customer ratings.',
    'Live Messaging: Instant chat and order notifications between buyers and suppliers.',
    'Wholesale Quotes & Orders: Easy request-for-quote workflows and multi-step order management.',
  ],
  featuredTitle: 'Key marketplace surfaces',
  featured: [
    { src: marketplaceHome, label: 'B2B industrial marketplace home' },
    { src: pdpStickyBuy, label: 'Product detail with sticky purchase actions' },
    { src: customerOrders, label: 'Customer portal & order tracking' },
    { src: localizationAmharic, label: 'Multilingual Amharic localization' },
  ],
  galleryTitle: 'Complete system walkthrough',
  galleryLead:
    'Explore the industrial machinery catalog, detailed product specifications, customer dashboard, and localized interfaces.',
  gallery: [
    { src: marketplaceHome, label: 'Marketplace Home — machinery catalog and industrial categories' },
    { src: featuredProducts, label: 'Featured Products — verified vendor machinery & bulk pricing' },
    { src: pdpZoom, label: 'Product Detail — technical specifications, warranty & image zoom' },
    { src: pdpStickyBuy, label: 'Sticky Buy Box — quantity selector, Add to Cart & seller trust signals' },
    { src: customerOrders, label: 'Customer Dashboard — purchase history, order statuses & tracking' },
    { src: localizationAmharic, label: 'Localization — full Amharic (አማርኛ) Ge’ez interface' },
    { src: supportAi, label: 'Support & Help Desk — guided ordering and buyer inquiries' },
  ],
  featureRows: [
    {
      id: 'landing',
      layout: 'image-left',
      src: marketplaceHome,
      caption: 'Home / marketplace — discovery, categories & industrial hero banners',
      title: 'Industrial Buying at Marketplace Scale',
      short: 'Home and browse experience built specifically for B2B procurement.',
      body: 'The public home and marketplace surface featured heavy machinery, industrial tools, and category entry points. Buyers navigate directly into verified wholesale catalogs with volume pricing and quotation requests.',
    },
    {
      id: 'featured',
      layout: 'text-left',
      src: featuredProducts,
      caption: 'Featured products — verified industrial machinery and supplier badges',
      title: 'Verified Machinery & Equipment Showcase',
      short: 'Curated industrial inventory from verified suppliers.',
      body: 'The marketplace highlights top-rated equipment with immediate visibility into pricing, warranty information, minimum order quantities, and supplier verification credentials.',
    },
    {
      id: 'pdp-zoom',
      layout: 'image-left',
      src: pdpZoom,
      caption: 'Product detail page — technical specifications, warranty, and high-resolution zoom',
      title: 'Deep Technical Product Specifications',
      short: 'High-res image zoom and comprehensive technical parameters.',
      body: 'Industrial buyers evaluate complex machinery using interactive image zoom, downloadable spec sheets, warranty disclosures, and multi-angle product photography.',
    },
    {
      id: 'pdp-buy',
      layout: 'text-left',
      src: pdpStickyBuy,
      caption: 'Sticky buy box — pricing, quantity controls, and seller trust indicators',
      title: 'Specs on the Left, Action on the Right',
      short: 'Persistent purchase action column optimized for long-form spec sheets.',
      body: 'While scrolling through extensive technical parameters, the sticky buy column keeps volume discounts, quantity controls, Add to Cart, and seller trust metrics pinned and immediately actionable.',
    },
    {
      id: 'orders',
      layout: 'image-left',
      src: customerOrders,
      caption: 'Customer orders portal — order lifecycle tracking and quotation management',
      title: 'Customer Self-Service & Order Tracking',
      short: 'Dedicated account center for commercial purchases and quotations.',
      body: 'Buyers track past purchases, review pending quotation responses from sellers, and monitor shipping and delivery milestones with real-time status updates.',
    },
    {
      id: 'localization',
      layout: 'text-left',
      src: localizationAmharic,
      caption: 'Localized marketplace in Amharic (አማርኛ) with script-adaptive typography',
      title: 'Trilingual Regional Accessibility',
      short: 'Full language parity across English, Afaan Oromoo, and Amharic.',
      body: 'The entire storefront switches seamlessly between English, Afaan Oromoo, and Amharic. Ge’ez typography is rendered cleanly to ensure intuitive navigation for Ethiopian industrial enterprises.',
    },
    {
      id: 'support',
      layout: 'image-left',
      src: supportAi,
      caption: 'AI-assisted customer support desk and commercial inquiry routing',
      title: 'Guided Inquiries & Order Support',
      short: 'Assisted customer support for complex B2B equipment transactions.',
      body: 'Integrated support helps buyers clarify specifications, request custom freight estimates, and communicate directly with vendor support teams.',
    },
  ],
  stack: [
    { layer: 'Frontend', tools: 'Next.js App Router, React, TypeScript, Tailwind, Radix/shadcn, Framer Motion, @react-pdf/renderer' },
    { layer: 'Client state', tools: 'TanStack Query, Zustand (cart, recently viewed), React Hook Form + Zod, Sonner, Socket.IO client' },
    { layer: 'i18n', tools: 'next-intl (en / om / am)' },
    { layer: 'API', tools: 'NestJS + TypeScript, JWT, role guards, file/media for products, vendors, banners' },
    { layer: 'Shared', tools: '@seed-ecom/core — types, DTOs, utilities (pnpm workspace)' },
    { layer: 'Backend data', tools: 'MongoDB' },
    { layer: 'Realtime', tools: 'Socket.IO gateway (chat & notifications)' },
    { layer: 'Live', tools: '7netmarket.com storefront' },
  ],
};
