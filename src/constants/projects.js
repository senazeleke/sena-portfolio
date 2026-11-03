import famconCover from '../assets/portfolio/famcon/00-landing.png';
import sevenNetCover from '../assets/portfolio/7net/00-cover.png';
import officelessCover from '../assets/portfolio/officeless/00-cover.png';
import zetseatCover from '../assets/portfolio/zetseat/00-cover.png';
import donnieCover from '../assets/portfolio/donnie/00-cover.png';
import mesobCover from '../assets/portfolio/mesob/00-home-kiosk.png';
import ecommerce from '../assets/portfolio/ecommerce.png';
import { ROUTES } from './routes';

export const PROJECTS = [
  {
    id: 1,
    src: famconCover,
    title: 'Famcon Construction',
    tagline: 'Enterprise platform & custom CMS',
    demo: ROUTES.project('famcon'),
    company: 'Famcon PLC',
    commercial: true,
    tone: 'famcon',
  },
  {
    id: 2,
    src: sevenNetCover,
    title: '7Net',
    tagline: 'B2B industrial marketplace',
    demo: ROUTES.project('7net'),
    liveUrl: 'https://7netmarket.com',
    company: 'Be Light',
    commercial: true,
    tone: 'sevenNet',
  },
  {
    id: 3,
    src: officelessCover,
    title: 'Officeless',
    tagline: 'Virtual-office SaaS',
    demo: ROUTES.project('officeless'),
    liveUrl: 'https://officelessportal.com',
    company: 'Be Light',
    commercial: true,
    tone: 'officeless',
  },
  {
    id: 4,
    src: zetseatCover,
    title: 'Zetseat Counseling',
    tagline: 'Counseling & mental wellness',
    demo: ROUTES.project('zetseat-counseling'),
    liveUrl: 'https://www.zetseatcounseling.com/',
    commercial: true,
    tone: 'zetseat',
  },
  {
    id: 5,
    src: donnieCover,
    title: 'Donnie',
    tagline: 'Ethiopia’s home marketplace',
    demo: ROUTES.project('donnie'),
    tone: 'donnie',
  },
  {
    id: 6,
    src: mesobCover,
    title: 'Mesob',
    tagline: 'Queue management',
    demo: ROUTES.project('mesob'),
    company: 'Debo Engineering',
    commercial: true,
  },
  {
    id: 7,
    src: ecommerce,
    title: 'eCommerce Platform',
    tagline: 'Internship storefront',
    demo: ROUTES.ecommerce,
    company: 'OICT Solutions',
  },
];
