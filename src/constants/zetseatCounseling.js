import coverImg from '../assets/portfolio/zetseat/00-cover.png';
import landingHero from '../assets/portfolio/zetseat/01-landing.png';
import agoraVideo from '../assets/portfolio/zetseat/02-agora-video.jpeg';
import bookingImg from '../assets/portfolio/zetseat/03-booking.png';
import clientDashboard from '../assets/portfolio/zetseat/04-client-dashboard.jpeg';
import resourcesBooks from '../assets/portfolio/zetseat/05-resources-books.png';
import articlesBlogs from '../assets/portfolio/zetseat/06-articles-blogs.png';
import chatAndLanguage from '../assets/portfolio/zetseat/07-chat-and-language.jpeg';

export const ZETSEAT_COUNSELING_CASE_STUDY = {
  slug: 'zetseat-counseling',
  title: 'Zetseat Counseling',
  kicker: 'Online counseling & mental wellness',
  pitch:
    'Book sessions with professional counselors, join live video or audio calls, explore self-help resources, articles, and clinical guides — in English, Afaan Oromoo, and Amharic.',
  blurb:
    'A full-stack counseling platform for clients, counselors, and admins. Live Agora rooms, payment-proof workflow, CASL roles, and a multilingual UI. Live at zetseatcounseling.com.',
  liveUrl: 'https://www.zetseatcounseling.com/',
  privateRepo: false,
  commercial: true,
  cover: coverImg,
  shotFolder: 'src/assets/portfolio/zetseat/',
  users: [
    {
      who: 'Client',
      job: 'Register, book sessions, pay with proof, message a counselor, join video/audio calls, browse resources and articles, get live notifications.',
    },
    {
      who: 'Counselor',
      job: 'Profile and availability, accept sessions, join meetings, messenger, submit resources and articles for review.',
    },
    {
      who: 'Admin',
      job: 'Users and services, session overview, approve payments and assign counselors, publish resources and blogs, manage landing ads.',
    },
  ],
  differentiatorsTitle: 'Best features',
  differentiatorsLead:
    'A dedicated mental health platform delivering live virtual care, appointments, and wellness resources.',
  differentiators: [
    'Live Virtual Consultations: High-definition secure video and audio sessions with certified counselors.',
    'Three Tailored Portals: Custom interfaces for clients, counselors, and administrative staff.',
    'Trilingual Accessibility: Complete support across English, Amharic, and Afaan Oromoo.',
    'Simple Appointment Booking: Guided counselor selection with convenient schedule booking.',
    'Mental Wellness Library: Self-help articles, guides, and recommended wellness resources.',
    'Real-time Messaging: Instant chat and consultation reminders.',
  ],
  featuredTitle: 'Core platform surfaces',
  featured: [
    { src: landingHero, label: 'Hero showcase & multilingual brand' },
    { src: agoraVideo, label: 'Live Agora video counseling session' },
    { src: clientDashboard, label: 'Client portal & appointment management' },
    { src: chatAndLanguage, label: 'Private messaging with Amharic localization' },
  ],
  galleryTitle: 'Complete system walkthrough',
  galleryLead:
    'Explore the onboarding flow, live Agora video room, booking, literature hub, counselor articles, and multilingual messenger.',
  gallery: [
    { src: landingHero, label: 'Landing Hero — empathy-first care entry and multi-dialect tagline' },
    { src: agoraVideo, label: 'Live Agora session — remote video room with camera and mic controls' },
    { src: bookingImg, label: 'Session booking — step-by-step service, counselor, date, and duration picker' },
    { src: clientDashboard, label: 'Client dashboard — upcoming sessions, total counseling hours, and quick join' },
    { src: resourcesBooks, label: 'Resources library — reviewed psychology and self-improvement books' },
    { src: articlesBlogs, label: 'Articles & Blogs — counselor-authored guides on relationships and healing' },
    { src: chatAndLanguage, label: 'Messenger & Localization — Socket.IO chat with Amharic (አማ) Ge’ez interface' },
  ],
  featureRows: [
    {
      id: 'landing',
      layout: 'image-left',
      src: landingHero,
      caption: 'Landing — empathy-driven care entry, client testimonials, service catalog',
      title: 'A Calm, Dignified Entry Into Care',
      short: 'Marketing home designed to build trust and lower barriers to therapy.',
      body: 'The landing page introduces Zetseat Counseling with an empathy-centered hero (“Dhukkubsatee kan ani hin dhukkubsanneef Eeneyudharee? / ታሞ የማልታመምለት ማን አለ?”), rotating client stories, featured literature, and counselor highlights. The interface is optimized to guide users smoothly toward consultation.',
    },
    {
      id: 'agora',
      layout: 'text-left',
      src: agoraVideo,
      caption: 'Agora session — live 1:1 counseling room with interactive controls',
      title: 'Clinical Care Over High-Definition Video',
      short: 'Agora-powered video and audio rooms built for confidential care.',
      body: 'Clients and counselors meet inside a dedicated live session room with meeting codes, token-gated access, camera/mic toggles, and participant controls. This is the core care moment: delivering reliable, accessible telehealth without external video conferencing tools.',
    },
    {
      id: 'booking',
      layout: 'image-left',
      src: bookingImg,
      caption: 'Multi-step booking — service selection, duration, date, and local payment proof',
      title: 'Flexible Booking & Local Payment Workflow',
      short: 'Tailored for local payment habits and scheduling convenience.',
      body: 'Clients select specific counseling specializations (such as Couples Counseling, Mood & Emotion, or Addiction Guidance), choose session durations (15m to 2 hours), and upload payment proof. Admins verify payment before assigning verified counselors, ensuring transparent records.',
    },
    {
      id: 'dashboard',
      layout: 'text-left',
      src: clientDashboard,
      caption: 'Client dashboard — upcoming sessions, total therapy hours, and quick join action',
      title: 'Client Management & Session Progress',
      short: 'Dedicated client portal for managing care journeys.',
      body: 'Clients track upcoming appointments, review attended counseling hours, and access upcoming Agora sessions with a single click. CASL-based permissions guarantee that clients, counselors, and administrative staff each have distinct, secure surfaces.',
    },
    {
      id: 'resources',
      layout: 'image-left',
      src: resourcesBooks,
      caption: 'Resources library — curated literature and self-help guide downloads',
      title: 'Curated Literature & Psychoeducation',
      short: 'Books and clinical tools to support growth between sessions.',
      body: 'The platform offers a curated digital library of reviewed literature and self-improvement books (such as Atomic Habits and communication guides) available for direct reading and download, empowering clients with evidence-based mental health resources.',
    },
    {
      id: 'articles',
      layout: 'text-left',
      src: articlesBlogs,
      caption: 'Counselor articles and blogs — relationship and emotional wellness insights',
      title: 'Counselor-Authored Articles & Knowledge Base',
      short: 'Expert articles on relationships, stress management, and healing.',
      body: 'Professional counselors publish in-depth articles covering topics from trust and communication to marriage restoration. Clients search and filter articles by category, providing continuous psychoeducation and accessible support outside active therapy hours.',
    },
    {
      id: 'chat-and-language',
      layout: 'image-left',
      src: chatAndLanguage,
      caption: 'Socket.IO messenger localized in Amharic (አማ) with Ge’ez script support',
      title: 'Private Messaging in Three Local Languages',
      short: 'Socket.IO real-time chat with complete English, Afaan Oromoo, and Amharic UI.',
      body: 'Counseling conversations remain strictly private in a dedicated real-time messenger featuring active threads, unread state indicators, and notification alerts. The entire interface switches seamlessly between English, Afaan Oromoo, and Amharic, ensuring clients receive support in their primary language.',
    },
  ],
  stack: [
    { layer: 'Frontend', tools: 'Next.js App Router, React, Tailwind, Radix/shadcn, Ant Design (admin), Framer Motion' },
    { layer: 'Client state', tools: 'Redux Toolkit + persist, TanStack Query, React Hook Form + Zod, Axios, Sonner' },
    { layer: 'i18n & access', tools: 'next-intl (en / om / am), CASL ability gates' },
    { layer: 'Realtime / calls', tools: 'Agora RTC, Socket.IO client' },
    { layer: 'API', tools: 'Node.js, Express, JWT, bcrypt, Agora tokens, Resend email, Multer uploads' },
    { layer: 'Backend data', tools: 'MongoDB + Mongoose (Atlas), Redis' },
    { layer: 'Infra', tools: 'Vercel (frontend), Express API, MongoDB Atlas' },
  ],
};

export const EMPATHIA_CASE_STUDY = ZETSEAT_COUNSELING_CASE_STUDY;
