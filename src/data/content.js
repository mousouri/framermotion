// Site copy for Orionix — sourced from the live orionix.framer.website copy,
// reproduced here as plain data so it can be edited without touching components.

// Mirrors the source site's top-level nav (Works / About / Pricing / Services
// / Blog). Its "Pages" item opened a dropdown of template-scaffolding pages
// (style guide, etc.) with no real content, so it's intentionally left out.
export const nav = [
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#top' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
];

export const hero = {
  eyebrow: 'Designing brands, products, and campaigns\nbuilt for a digital-first world.',
  titleLine1: 'We make',
  titleLine2: 'Creative Things.',
};

export const clients = [
  { name: 'Convergence', file: 'client-convergence.svg' },
  { name: 'Ikigai Labs', file: 'client-ikigai.svg' },
  { name: 'CoreOS', file: 'client-coreos.svg' },
  { name: 'Shutterframe', file: 'client-b.svg' },
  { name: 'Layers', file: 'client-c.svg' },
  { name: 'Northwind', file: 'client-f.svg' },
  { name: 'Vantage', file: 'client-g.svg' },
  { name: 'Fieldnote', file: 'client-h.svg' },
];

export const projects = [
  {
    title: 'Rivermark',
    description: 'Bold street branding campaign designed to capture attention and energize urban audiences.',
    tags: ['Website', 'Social Media'],
    image: 'project-1.png',
  },
  {
    title: 'Fluxa',
    description: 'Dynamic digital visuals and identity crafted for modern and expressive brands.',
    tags: ['UX/UI', 'Growth'],
    image: 'project-2.png',
  },
  {
    title: 'River',
    description: 'Immersive visual branding designed for large-scale digital and experiential displays.',
    tags: ['Website', 'Growth'],
    image: 'project-3.png',
  },
  {
    title: 'Season',
    description: 'Modern ecommerce experience designed for clarity, speed, and engaging product storytelling.',
    tags: ['Website', 'UX/UI'],
    image: 'project-4.png',
  },
  {
    title: 'Axis',
    description: 'Minimal streetwear identity designed to express bold attitude and contemporary culture.',
    tags: ['Branding', 'Social Media'],
    image: 'project-5.png',
  },
  {
    title: 'Noise',
    description: 'Clean product interface designed to simplify complex digital interactions.',
    tags: ['UX/UI', 'Website', 'Growth'],
    image: 'project-6.png',
  },
];

export const services = [
  {
    title: 'Brand Identity & Strategy',
    description: 'We build meaningful brand identities — from strategic positioning to visual systems that bring your brand to life.',
    tags: ['Positioning', 'Visual Identity', 'Design System'],
  },
  {
    title: 'Digital Marketing & Growth',
    description: 'We craft modern brand identities built to thrive across digital platforms and experiences.',
    tags: ['Conversion Rate Optimization', 'Analytics', 'A/B Testing'],
  },
  {
    title: 'Social Media & Content Marketing',
    description: 'We create strategic content and campaigns that grow audiences and strengthen brand presence.',
    tags: ['Content Strategy', 'Creative Production', 'Campaign Management'],
  },
  {
    title: 'UI/UX & Product Design',
    description: 'We design intuitive interfaces and user journeys that enhance usability, engagement, and product experience.',
    tags: ['User Research', 'Interface Design', 'Product Scaling'],
  },
  {
    title: 'Website Design & Development',
    description: 'We build fast, scalable websites designed for performance, clarity, and seamless digital experiences.',
    tags: ['UI Development', 'Performance', 'SEO Setup'],
  },
];

export const process = [
  {
    title: 'Discovery',
    description: 'We begin by understanding your business, audience, goals, and challenges to uncover insights that shape a strong digital foundation.',
    icon: 'step-discovery.png',
  },
  {
    title: 'Strategy',
    description: 'We define brand positioning, digital direction, and user experience structure to ensure every design decision aligns with your long-term growth.',
    icon: 'step-strategy.png',
  },
  {
    title: 'Design',
    description: 'Our team crafts branding, UI/UX, and visual systems that transform complex ideas into clear, engaging digital experiences.',
    icon: 'step-design.png',
  },
];

export const pricing = [
  {
    plan: 'Launch Plan',
    description: 'Perfect for startups and new businesses ready to establish their brand and digital presence from scratch.',
    features: ['Brand Identity Basics', 'Website Design & Development', 'UI/UX Interface Design', 'SEO Foundation Setup', 'Social Media Starter Kit'],
    price: '$6,000',
    period: '/ Project',
    cta: 'Inquire for Launch Plan',
    dark: false,
  },
  {
    plan: 'Growth Plan',
    description: 'Ideal for growing brands ready to scale their digital experience with advanced strategy and design.',
    features: ['Digital-First Branding System', 'Strategic Website Experience', 'Advanced UI/UX Optimization', 'Brand Strategy Development', 'Social Media Design System'],
    price: '$12,000',
    period: '/ Project',
    cta: 'Inquire for Growth Plan',
    dark: false,
  },
  {
    plan: 'Scale Plan',
    description: 'Built for ambitious companies needing an ongoing creative partner across brand, product, and marketing.',
    features: ['Brand Strategy & Identity', 'Custom Website Development', 'End-to-End Product UI/UX', 'Digital Marketing Campaigns', 'Ongoing Creative Partnership'],
    price: '$5,000',
    period: '/ month',
    cta: 'Inquire for Scale Plan',
    dark: true,
  },
];

export const testimonials = [
  {
    name: 'Daniel Carter',
    role: 'Founder & CEO, NovaTech',
    quote: 'Orionix understood our vision from day one. The brand system they built gave us a foundation we’re still building on a year later.',
  },
  {
    name: 'Ethan Walker',
    role: 'Product Director, Lumina Labs',
    quote: 'Every deliverable felt considered. Our product experience is sharper, faster, and finally feels like a single, coherent brand.',
  },
  {
    name: 'Marcus Rivera',
    role: 'Head of Marketing, Horizon Collective',
    quote: 'The team moved fast without cutting corners. Campaign performance improved almost immediately after launch.',
  },
];

export const stats = [
  { value: '54+', label: 'Projects Delivered' },
  { value: '96+', label: 'Industries Impacted' },
  { value: '12+', label: 'Years of Experience' },
];

export const blog = [
  {
    date: 'June 17, 2026',
    title: 'Why Great UX/UI Starts with Strategy',
    category: 'Design',
    image: 'blog-1.png',
  },
  {
    date: 'June 2, 2026',
    title: 'Designing Brands for the Digital-First Era',
    category: 'Branding',
    image: 'blog-2.png',
  },
  {
    date: 'June 2, 2026',
    title: 'Building Websites That Convert and Scale',
    category: 'Development',
    image: 'blog-3.png',
  },
];

export const faq = [
  {
    q: 'What services does Orionix provide?',
    a: 'We offer brand identity and strategy, UI/UX and product design, website design and development, and digital marketing and content services — either as standalone engagements or as an ongoing creative partnership.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most brand and website projects run 4–8 weeks depending on scope. Larger, multi-phase engagements are scoped with a clear milestone timeline before kickoff.',
  },
  {
    q: 'Do you work with startups or established companies?',
    a: 'Both. Our Launch plan is built for early-stage teams, while our Growth and Scale plans support established brands that need ongoing design and strategy support.',
  },
  {
    q: 'What is your design and development process?',
    a: 'We move through three phases — Discovery, Strategy, and Design — validating direction with you at each step before moving into build and launch.',
  },
  {
    q: 'Can Orionix redesign an existing brand or website?',
    a: 'Yes. Rebrands and website redesigns are one of our most common engagements, and we start every one with an audit of what’s working today.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Our Scale plan includes an ongoing creative partnership for teams that want continued design, development, and marketing support after launch.',
  },
];

export const socials = [
  { label: 'X (Twitter)', href: 'https://x.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Behance', href: 'https://behance.net' },
  { label: 'Dribbble', href: 'https://dribbble.com' },
];
