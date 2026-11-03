import homeKiosk from '../assets/portfolio/mesob/00-home-kiosk.png';
import ticketKiosk from '../assets/portfolio/mesob/01-home-kiosk.png';
import ticketConfirm from '../assets/portfolio/mesob/02-ticket-confirm.png';
import ticketIssued from '../assets/portfolio/mesob/03-ticket-issued.png';
import adminDashboard from '../assets/portfolio/mesob/04-admin-dashboard.png';
import orgSetup from '../assets/portfolio/mesob/05-org-setup.png';
import windows from '../assets/portfolio/mesob/06-windows.png';
import operators from '../assets/portfolio/mesob/07-operators.png';
import complaints from '../assets/portfolio/mesob/08-complaints.png';
import complaintFiles from '../assets/portfolio/mesob/09-complaint-files.png';
import complaintCategories from '../assets/portfolio/mesob/10-complaint-categories.png';
import dashboardCharts from '../assets/portfolio/mesob/11-dashboard-charts.png';
import operatorDesk from '../assets/portfolio/mesob/12-operator-desk.png';
import floorWaiting from '../assets/portfolio/mesob/13-floor-waiting.png';
import floorTv from '../assets/portfolio/mesob/14-floor-tv.png';
import operatorCalled from '../assets/portfolio/mesob/15-operator-called.png';
import floorPicker from '../assets/portfolio/mesob/16-floor-picker.png';
import complaintForm from '../assets/portfolio/mesob/17-complaint-form.png';
import feedback from '../assets/portfolio/mesob/18-feedback.png';

export const MESOB_CASE_STUDY = {
  slug: 'mesob',
  title: 'Mesob',
  kicker: 'Queue management for public offices',
  pitch:
    'A citizen takes a number. An operator calls them. A TV on that floor announces it. An admin watches the whole building. The kiosk speaks Afaan Oromoo.',
  owner: 'Debo Engineering',
  ownerUrl: 'https://www.deboengineering.com/',
  engagement: 'Freelance',
  commercial: true,
  cover: homeKiosk,
  video: {
    title: 'Queue Management System',
    embedUrl:
      'https://www.awesomescreenshot.com/embed?id=56635312&shareKey=c3c568f0a8b52659f0df34e7ec744172',
    pageUrl:
      'https://www.awesomescreenshot.com/video/56635312?key=c3c568f0a8b52659f0df34e7ec744172',
  },
  privateRepo: true,
  contribution: {
    title: 'My role',
    lead: 'I built Mesob as a freelancer for Debo Engineering — a queue-management system for public offices, with an Afaan Oromoo kiosk, operator desks, floor TVs, and admin ops.',
    items: [
      {
        focus: 'Product',
        job: 'Citizen kiosk, operator desk, floor TV, complaints and feedback, admin building setup — wired as one live queue, not a brochure.',
      },
      {
        focus: 'Frontend',
        job: 'React, Vite, Tailwind, Ant Design, realtime Socket.IO rooms per floor and counter.',
      },
      {
        focus: 'Backend',
        job: 'Express + MySQL, JWT roles, ticket assignment to the least-busy matching operator, PDF complaint letters.',
      },
    ],
  },
  featuredTitle: 'The four rooms',
  galleryTitle: 'Ordered walkthrough',
  galleryLead: 'Screens in the order a visit actually happens. Auto-advances every few seconds — hover to pause.',
  featured: [
    { src: homeKiosk, label: 'Home kiosk' },
    { src: ticketKiosk, label: 'Take a ticket' },
    { src: operatorCalled, label: 'Operator desk' },
    { src: floorTv, label: 'Floor TV' },
  ],
  gallery: [
    { src: homeKiosk, label: 'Home kiosk — take a ticket, login, TV, feedback, complaint' },
    { src: ticketKiosk, label: 'Take a ticket — pick a window and a service' },
    { src: ticketConfirm, label: 'Confirm in Afaan Oromoo before printing' },
    { src: ticketIssued, label: 'Ticket issued with counter, window, and floor' },
    { src: floorPicker, label: 'Choose a floor display' },
    { src: floorWaiting, label: 'Floor TV — waiting list' },
    { src: floorTv, label: 'Floor TV — now serving' },
    { src: operatorDesk, label: 'Operator desk waiting for the next citizen' },
    { src: operatorCalled, label: 'Operator desk — current ticket Q002' },
    { src: adminDashboard, label: 'Admin dashboard — live building counts' },
    { src: dashboardCharts, label: 'Admin charts by sector and service' },
    { src: orgSetup, label: 'Organization setup — floors, sectors, services' },
    { src: windows, label: 'Windows and counters' },
    { src: operators, label: 'Operator roster and station assignment' },
    { src: complaints, label: 'Complaint queue with urgency' },
    { src: complaintFiles, label: 'Complaint PDF and attachments' },
    { src: complaintCategories, label: 'Complaint categories' },
    { src: complaintForm, label: 'Citizen complaint form + bilingual letter' },
    { src: feedback, label: 'Star rating after the visit' },
  ],
  building: [
    { piece: 'Sector', meaning: 'A department (e.g. Licensing, Payments)' },
    { piece: 'Service', meaning: 'One thing a citizen came to do (e.g. Renew ID)' },
    { piece: 'Floor', meaning: 'A physical storey with its own waiting TV' },
    { piece: 'Window', meaning: 'A service point on that floor' },
    { piece: 'Counter', meaning: 'One desk inside a window' },
    { piece: 'Operator', meaning: 'The staff member sitting at that desk' },
  ],
  users: [
    { who: 'Citizen', job: 'Take a ticket, watch the TV, give feedback, file a complaint' },
    { who: 'Operator', job: 'Call the next person, finish the visit, or send them to another desk' },
    { who: 'Admin', job: 'Set up the building, staff, and services; watch live queues and complaints' },
  ],
  visitSteps: [
    'Citizen at the kiosk picks a window and a service.',
    'The system checks: is anyone who can do that service online?',
    'If no → it does not print a ticket. It asks them to wait.',
    'If yes → it gives the ticket to the least busy matching counter, and prints the number plus counter, window, and floor.',
    'The ticket sits in that operator’s waiting list.',
    'The operator presses Call next. The floor TV shows the number, plays a chime, and speaks it.',
    'The operator marks Served or No-show.',
    'If the citizen still needs another department, the operator transfers the same ticket to another service (with a reason).',
    'Afterward the citizen can rate the visit or file a complaint. Admins track complaints until they are closed.',
  ],
  statuses: ['waiting', 'called', 'served', 'no-show'],
  differentiatorsTitle: 'Best features',
  differentiatorsLead:
    'An automated smart queue system designed for public sector organizations and multi-counter service centers.',
  differentiators: [
    'Smart Load Balancing: Tickets route automatically to the least-busy counter providing that service.',
    'Waiting-Room TV Display: Real-time screen with audio chimes announcing current tickets and desk numbers.',
    'Thermal Ticket Kiosk: Prints 80mm tickets with service name, ticket number, counter, and floor.',
    'Mid-Visit Service Transfers: Operators can transfer citizens to other departments with reason notes.',
    'Operator Workstation: Simple call next, recall, completed, and no-show controls.',
    'Citizen Ratings & Feedback: Post-service satisfaction rating and multilingual complaint tracking.',
  ],
  stack: [
    { layer: 'Frontend', tools: 'React 18, Vite, Tailwind, Ant Design, TanStack Query, React Router' },
    { layer: 'Realtime', tools: 'Socket.IO (rooms per floor and per counter)' },
    { layer: 'Auth', tools: 'JWT, bcrypt — admin → /admin, operator → /operator/:id' },
    { layer: 'Backend', tools: 'Node.js, Express, MySQL' },
    { layer: 'Files / PDFs', tools: 'Multer, PDFKit complaint letter' },
    { layer: 'TV audio', tools: 'Web Speech API + a chime' },
  ],
};

export const BLACK_EAGLE_CASE_STUDY = MESOB_CASE_STUDY;

