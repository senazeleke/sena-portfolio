import ecommerceImg1 from '../assets/portfolio/ecommerce.png';
import ecommerceImg2 from '../assets/portfolio/navbar.jpg';
import ecommerceImg3 from '../assets/portfolio/reactSmooth.jpg';

export const ECOMMERCE_CASE_STUDY = {
  slug: 'ecommerce',
  title: 'Full-Stack eCommerce Platform',
  kicker: 'Internship storefront at OICT Solutions',
  pitch:
    'A fast, responsive online store I built during an internship at OICT Solutions — filtering, image uploads, and performance work so shoppers could browse and find products without waiting.',
  owner: 'OICT Solutions',
  ownerUrl: 'https://oictsolutions.com/',
  engagement: 'Internship',
  cover: ecommerceImg1,
  privateRepo: false,
  contribution: {
    title: 'My role',
    lead: 'Internship at OICT Solutions (Addis Ababa). I worked on the storefront and the GraphQL/REST API path, including product filtering, image uploads, and query performance.',
    items: [
      {
        focus: 'Frontend',
        job: 'React storefront, responsive layout, advanced product filtering that stays usable on mobile.',
      },
      {
        focus: 'API',
        job: 'GraphQL for product queries; REST fallback where GraphQL could not carry file uploads.',
      },
      {
        focus: 'Data & mail',
        job: 'PostgreSQL indexing and load balancing for page speed; password-reset email tested through Mailtrap.',
      },
    ],
  },
  featured: [
    { src: ecommerceImg1, label: 'Storefront' },
    { src: ecommerceImg2, label: 'Responsive layout' },
    { src: ecommerceImg3, label: 'Smooth product browsing' },
  ],
  gallery: [
    { src: ecommerceImg1, label: 'Product browsing' },
    { src: ecommerceImg2, label: 'Responsive chrome' },
    { src: ecommerceImg3, label: 'Detail and filter flow' },
  ],
  visitSteps: [
    'Shoppers land on a React storefront with advanced product filtering.',
    'GraphQL fetches only the fields each view needs.',
    'Image uploads fall back to REST when GraphQL cannot carry the file.',
    'PostgreSQL indexing and load balancing keep queries fast.',
    'Password-reset email is tested safely through Mailtrap.',
  ],
  differentiatorsTitle: 'Best features',
  differentiatorsLead:
    'An e-commerce storefront developed during an engineering internship at OICT Solutions.',
  differentiators: [
    'Responsive Catalog: Clean browsing experience optimized across desktop, tablet, and mobile screens.',
    'Fast Data Querying: Efficient GraphQL endpoints for product categories and details.',
    'Advanced Filtering: Instant search by price, brand, and category tags.',
    'Scalable Data Layer: Relational database architecture with performance indexing.',
  ],
  stack: [
    { layer: 'Frontend', tools: 'React, responsive UI, advanced product filtering' },
    { layer: 'Backend', tools: 'Node.js, Express, GraphQL, REST fallback, PostgreSQL' },
    { layer: 'Other', tools: 'Mailtrap, load balancing, database indexing' },
    { layer: 'Company', tools: 'OICT Solutions — internship' },
  ],
};
