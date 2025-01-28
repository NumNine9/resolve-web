import type { NavigationItem } from '../client/components/NavBar/NavBar';
import { routes } from 'wasp/client/router';
import { DocsUrl, BlogUrl } from '../shared/common';
import daBoiAvatar from '../client/static/da-boi.webp';
import avatarPlaceholder from '../client/static/avatar-placeholder.webp';

export const landingPageNavigationItems: NavigationItem[] = [
  { name: 'About Us', to: '#features' },
  // { name: 'Contact Us', to: '#contact-us' },
  { name: 'FAQs', to: '#faqs' },
  { name: 'Blog', to: BlogUrl },
];
export const features = [
  {
    name: 'Cool Feature #1',
    description: 'Describe your cool feature here.',
    icon: '🤝',
    href: DocsUrl,
  },
  {
    name: 'Cool Feature #2',
    description: 'Describe your cool feature here.',
    icon: '🔐',
    href: DocsUrl,
  },
  {
    name: 'Cool Feature #3',
    description: 'Describe your cool feature here.',
    icon: '🥞',
    href: DocsUrl,
  },
  {
    name: 'Cool Feature #4',
    description: 'Describe your cool feature here.',
    icon: '💸',
    href: DocsUrl,
  },
];
export const testimonials = [
  {
    name: 'Da Boi',
    role: 'Wasp Mascot',
    avatarSrc: daBoiAvatar,
    socialUrl: 'https://twitter.com/wasplang',
    quote: "I don't even know how to code. I'm just a plushie.",
  },
  {
    name: 'Mr. Foobar',
    role: 'Founder @ Cool Startup',
    avatarSrc: avatarPlaceholder,
    socialUrl: '',
    quote: 'This product makes me cooler than I already am.',
  },
  {
    name: 'Jamie',
    role: 'Happy Customer',
    avatarSrc: avatarPlaceholder,
    socialUrl: '#',
    quote: 'My cats love it!',
  },
];

export const faqs = [
  {
    id: 1,
    question: "What’s the minimum requirements?",
    answer: "There is no minimum requirement needed.",
    href: "https://en.wikipedia.org/wiki/Zimbabwe",
  },
  {
    id: 2,
    question: "What courses does the platform offer?",
    answer: "We offer a variety of courses, from programming and design to business and language skills.",
    href: "https://en.wikipedia.org/wiki/Computer_programming",
  },
  {
    id: 3,
    question: "How do I sign up?",
    answer: "Simply click the 'Sign Up' button at the top right of the page, fill in your details, and you're ready to start learning!",
    href: "https://en.wikipedia.org/wiki/Web_form",
  },
  {
    id: 4,
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 7-day free trial so you can explore our courses before committing to a subscription.",
    href: "https://en.wikipedia.org/wiki/Free-to-play",
  },
  {
    id: 5,
    question: "Can I earn certificates for completing courses?",
    answer: "Absolutely! All our courses provide a certificate upon successful completion to showcase your achievement.",
    href: "https://en.wikipedia.org/wiki/Academic_certificate",
  },
  {
    id: 6,
    question: "Are the courses self-paced?",
    answer: "Yes, our courses are designed to be self-paced, allowing you to learn at a time and speed that suits you.",
    href: "https://en.wikipedia.org/wiki/E-learning",
  },
  {
    id: 7,
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, and other popular payment methods for your convenience.",
    href: "https://en.wikipedia.org/wiki/E-commerce_payment_system",
  },
  {
    id: 8,
    question: "How can I contact support?",
    answer: "You can reach our support team 24/7 via email or live chat for assistance with any issues.",
    href: "https://en.wikipedia.org/wiki/Technical_support",
  },
];

export const footerNavigation = {
  app: [
    { name: 'Documentation', href: DocsUrl },
    { name: 'Blog', href: BlogUrl },
  ],
  company: [
    { name: 'About', href: DocsUrl },
    { name: 'Privacy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};
