import coverImg from '../assets/portfolio/officeless/00-cover.png';
import landingHero from '../assets/portfolio/officeless/01-landing.png';
import dashboardImg from '../assets/portfolio/officeless/02-dashboard.png';
import fileManagerImg from '../assets/portfolio/officeless/03-file-manager.jpeg';
import schedulingImg from '../assets/portfolio/officeless/04-scheduling-calendar.jpeg';
import billingImg from '../assets/portfolio/officeless/05-subscription-billing.jpeg';

export const OFFICELESS_CASE_STUDY = {
  slug: 'officeless',
  title: 'Officeless',
  kicker: 'Multi-tenant virtual-office SaaS',
  pitch:
    'Run teams, clients, files, scheduling, payments, leads, and support from one workspace — with plan-based entitlements and Stripe SaaS billing.',
  blurb:
    'A multi-tenant virtual-office SaaS I work on with Next.js and NestJS at Be Light, as part of a team with work split by a project manager. My main contribution is frontend UI/UX, plus Postman and manual UI testing, with backend support when features need it. Live family: officelessportal.com.',
  liveUrl: 'https://officelessportal.com',
  owner: 'Be Light',
  ownerUrl: 'https://belight-soft.com/',
  engagement: 'Freelance',
  commercial: true,
  cover: coverImg,
  shotFolder: 'src/assets/portfolio/officeless/',
  contribution: {
    title: 'My role',
    lead: 'I work on Officeless as a freelancer at Be Light, on a team — a project manager assigns slices of the product, the same way we ship 7Net. Primary focus is frontend UI/UX, plus API testing (Postman) and manual / UI testing. Backend work as needed.',
    items: [
      {
        focus: 'Frontend',
        job: 'Next.js App Router — dashboard, employees, clients, file manager, scheduling, leads, payments, support, settings/billing, public booking and pricing, role-aware layouts.',
      },
      {
        focus: 'Testing',
        job: 'Postman step guides for auth, seats, tiers, trials, checkout/portal, webhooks; UI paths across owner, staff, and platform roles.',
      },
      {
        focus: 'Backend (supporting)',
        job: 'NestJS modules when the UI depends on them — billing, entitlements, users/invites, platform org/tier APIs.',
      },
    ],
  },
  users: [
    {
      who: 'Org owner / super admin',
      job: 'Full org setup, billing checkout and portal, invite staff, configure modules, manage clients and files.',
    },
    {
      who: 'Staff / employee',
      job: 'Day-to-day work under CASL permissions (no billing write unless granted).',
    },
    {
      who: 'Client (portal guest)',
      job: 'Tokenized client portal — uploads, checklists, limited shared access.',
    },
    {
      who: 'Platform super operator',
      job: 'Orgs, tiers, entitlements, trials, sticky overrides, billing ops.',
    },
    {
      who: 'Platform support',
      job: 'Billing write within caps (for example trial extend), tickets, org read.',
    },
    {
      who: 'Platform viewer',
      job: 'Read-only platform surfaces.',
    },
  ],
  differentiatorsTitle: 'Best features',
  differentiatorsLead:
    'A complete virtual-office platform with workspaces, automated subscriptions, and client management.',
  differentiators: [
    'Subscription Tiers: Flexible SaaS plans with automated member and storage limits.',
    'Stripe Billing Portal: Self-service checkout, subscription management, and invoice history.',
    'Cloud File Manager: Centralized company storage with easy folder organization and client sharing.',
    'Smart Team Scheduling: Shared calendars, meeting appointments, and public guest booking links.',
    'Team & Seat Management: Member invites, role permissions, and active capacity management.',
    'Guest Client Portals: Secure token-based access for external clients and collaborators.',
    'Lead & Sales Pipelines: Visual board for managing leads, invoices, and payment tracking.',
    'Integrated Support: In-app ticket system for fast customer care and team help.',
  ],
  featuredTitle: 'Key SaaS modules',
  featured: [
    { src: landingHero, label: 'Officeless landing & marketing hero' },
    { src: dashboardImg, label: 'Virtual office central dashboard' },
    { src: fileManagerImg, label: 'Entitlement-aware cloud file manager' },
    { src: billingImg, label: 'Stripe SaaS subscription & billing portal' },
  ],
  galleryTitle: 'Complete platform walkthrough',
  galleryLead:
    'Explore the modern virtual office workspace, multi-tenant dashboards, cloud file management, calendar scheduling, and automated Stripe billing tiers.',
  gallery: [
    { src: landingHero, label: 'Landing Page — modern workspace pitch and remote team solutions' },
    { src: dashboardImg, label: 'Central Dashboard — quick stats, upcoming schedule & activity stream' },
    { src: fileManagerImg, label: 'Cloud File Manager — storage quotas, folders & client sharing' },
    { src: schedulingImg, label: 'Scheduling & Calendar — meetings, appointments & public booking links' },
    { src: billingImg, label: 'SaaS Billing — Stripe checkout, subscription tiers & invoice management' },
  ],
  featureRows: [
    {
      id: 'landing',
      layout: 'image-left',
      src: landingHero,
      caption: 'Landing page — virtual office remote workspace',
      title: 'The Operating System for Remote Teams',
      short: 'Clean, modern marketing & public portal entry.',
      body: 'The Officeless public site introduces teams and clients to the virtual-office ecosystem with responsive landing sections, transparent SaaS tier pricing, and direct onboarding routes.',
    },
    {
      id: 'dashboard',
      layout: 'text-left',
      src: dashboardImg,
      caption: 'Dashboard — unified workspace overview',
      title: 'One Workspace for the Entire Office',
      short: 'Central command for employees, meetings, and active operations.',
      body: 'The tenant portal opens into a central dashboard with quick stats, upcoming meetings, recent activities, and sidebar navigation into employees, clients, files, scheduling, and billing. Owners and staff land in the same shell with permission-aware menus.',
    },
    {
      id: 'files',
      layout: 'image-left',
      src: fileManagerImg,
      caption: 'File manager — cloud storage with plan quotas',
      title: 'Entitlement-Aware Cloud File Storage',
      short: 'Organized folders, document sharing, and storage caps.',
      body: 'A full-featured file management module allowing team members to store, preview, organize, and share documents with external clients, complete with tier-based quota ceilings.',
    },
    {
      id: 'scheduling',
      layout: 'text-left',
      src: schedulingImg,
      caption: 'Scheduling & calendar — bookings and team agendas',
      title: 'Integrated Team Scheduling & Public Booking',
      short: 'Calendar synchronizations, client meetings, and appointments.',
      body: 'Comprehensive scheduling module featuring team calendars, appointment slots, video meeting integrations, and public booking URLs for clients and prospective leads without requiring separate tools.',
    },
    {
      id: 'billing',
      layout: 'image-left',
      src: billingImg,
      caption: 'Subscription & billing — Stripe self-serve portal',
      title: 'Self-Serve SaaS Under Stripe',
      short: 'Tiers, checkout, portal, and trial management.',
      body: 'Multi-tenant subscription billing driven by Stripe Checkout and Customer Portal. Supports monthly/annual billing cycles, invoice history, seat upgrade enforcement, and webhook-driven tier synchronization.',
    },
  ],
  stack: [
    { layer: 'Frontend', tools: 'Next.js 15 App Router, React 18, TypeScript, Tailwind, Stripe.js, Socket.IO client' },
    { layer: 'Client state', tools: 'Redux, TanStack Query, CASL abilities' },
    { layer: 'API', tools: 'NestJS 11, Passport JWT (org + platform), CASL, Stripe, Resend, AWS S3' },
    { layer: 'Backend data', tools: 'MongoDB (Mongoose)' },
    { layer: 'Platform admin', tools: 'Separate Next.js operator console → /api/platform/*' },
    { layer: 'Realtime', tools: 'Socket.IO notifications / events' },
    { layer: 'Live', tools: 'officelessportal.com · app.officeless.com' },
  ],
};
