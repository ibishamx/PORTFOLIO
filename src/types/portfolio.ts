export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
  website: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  github: string;
  tiktok: string;
  availabilityStatus: 'available' | 'busy' | 'limited';
  availabilityText: string;
  workingHours?: string;
  responseRate?: string;
}

export interface PersonalProfile {
  name: string;
  title: string;
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  intro: string;
  avatarUrl: string;
  resumeUrl?: string;
  yearsOfExperience: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  subtext: string;
}

export interface AboutSection {
  title: string;
  subtitle: string;
  narrative: string[];
  bulletPoints: string[];
  stats: StatItem[];
  technologiesHighlight: string[];
}

export type ServiceCategory =
  | 'E-commerce & Shopify'
  | 'Website & Development'
  | 'AI / Vibe Coding'
  | 'Business Automation'
  | 'Meta & TikTok Advertising'
  | 'Creative & Social Media'
  | 'SEO & Content'
  | 'E-commerce Operations';

export interface ServiceItem {
  id: string;
  number: number;
  title: string;
  category: ServiceCategory;
  description: string;
  deliverables: string[];
  popular?: boolean;
  tags: string[];
  iconName?: string;
}

export interface CoreService {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  iconName: string;
  badge?: string;
  highlights: string[];
  techTags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Shopify & E-com' | 'Web Apps & UI' | 'AI & Vibe Tools' | 'Automation & ERP' | 'Ads & Growth';
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: string;
  client?: string;
  keyFeatures?: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  tag?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface WorkProcessStep {
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface WhyWorkWithMeItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tag: string;
  popular?: boolean;
  price: string;
  billingCycle: string;
  description: string;
  features: string[];
  deliveryTime: string;
  idealFor: string;
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  company: string;
  position: string;
  review: string;
  rating: number;
  profileImage: string;
  verified: boolean;
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SEOSettings {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  siteUrl: string;
}

export interface PortfolioData {
  personal: PersonalProfile;
  contact: ContactInfo;
  about: AboutSection;
  coreServices: CoreService[];
  services: ServiceItem[];
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  processSteps: WorkProcessStep[];
  whyMe: WhyWorkWithMeItem[];
  pricing: PricingPackage[];
  testimonials: TestimonialItem[];
  faqs: FAQItem[];
  seo: SEOSettings;
  ctaSection: {
    headline: string;
    subheadline: string;
    primaryBtnText: string;
    whatsappBtnText: string;
    availableBadge: string;
  };
}
