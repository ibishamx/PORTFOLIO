import { PortfolioData } from '../types/portfolio';

/**
 * ============================================================================
 * CENTRAL PORTFOLIO CONFIGURATION FILE (HEADLESS CMS DATA SOURCE)
 * ============================================================================
 *
 * This file contains ALL editable content for your portfolio website.
 * Any changes made here or via the interactive in-app Edit Studio / CMS
 * will dynamically reflect across the entire application.
 *
 * TIP: You can also edit everything directly from your browser using the
 * "Edit Portfolio" button in the top navigation bar!
 */

export const initialPortfolioData: PortfolioData = {
  // ==========================================================================
  // 1. PERSONAL INFORMATION & BRANDING
  // ==========================================================================
  personal: {
    name: "Muhammad Ibisham",
    title: "Freelance Full-Stack Developer, E-Commerce Specialist & AI Solutions Builder",
    badge: "Available for Freelance Projects",
    heroHeadline: "I Build, Automate & Grow Digital Businesses.",
    heroSubheadline: "Shopify • E-commerce • Web Development • AI Solutions • Business Automation • Meta & TikTok Ads",
    intro: "Helping ambitious brands, startups, and business owners engineer high-converting e-commerce stores, custom web applications, rapid AI tools, and intelligent workflow automations.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    yearsOfExperience: "5+ Years",
  },

  // ==========================================================================
  // 2. CONTACT INFORMATION (CENTRALIZED)
  // All contact buttons, footer links, and forms read from this object.
  // ==========================================================================
  contact: {
    phone: "YOUR PHONE",
    whatsapp: "YOUR WHATSAPP",
    email: "YOUR EMAIL",
    location: "Faisalabad, Pakistan",
    website: "YOUR WEBSITE",
    instagram: "YOUR INSTAGRAM",
    facebook: "YOUR FACEBOOK",
    linkedin: "YOUR LINKEDIN",
    github: "YOUR GITHUB",
    tiktok: "YOUR TIKTOK",
    availabilityStatus: "available",
    availabilityText: "Accepting New Client Projects & Retainers",
    workingHours: "Mon - Sat: 9:00 AM - 10:00 PM (PKT / UTC+5)",
    responseRate: "Under 1 Hour Average Response Time",
  },

  // ==========================================================================
  // 3. ABOUT SECTION & BUSINESS OUTCOME STATS
  // ==========================================================================
  about: {
    title: "Bridging Engineering, Automation & Growth Strategy",
    subtitle: "Turning complex manual bottlenecks into seamless digital growth engines.",
    narrative: [
      "I am a versatile technology partner for modern entrepreneurs and businesses. Rather than just writing lines of code, I focus directly on commercial outcomes: increasing conversion rates, eliminating hundreds of manual staff hours through automation, and building fast, resilient software.",
      "My multidisciplinary background spans full-stack web development, enterprise Shopify architectures, rapid AI vibe coding/prototyping, custom internal ERPs, Google Sheets & Excel macros, and high-ROAS Meta and TikTok performance advertising campaigns."
    ],
    bulletPoints: [
      "End-to-end Shopify store architecture, theme customization, and custom Liquid development.",
      "Full-stack web applications with React, TypeScript, Tailwind, and scalable backend APIs.",
      "AI/Vibe coding workflows: rapid MVPs, AI chatbots, and custom workflow automations.",
      "Custom business software, Windows Desktop (C#/.NET/WPF), and Electron utilities.",
      "Automated logistics, courier API integrations, COD reconciliations, and inventory syncs.",
      "Performance advertising: Meta & TikTok pixel tracking, conversion APIs, and creative testing."
    ],
    stats: [
      {
        id: "stat-1",
        label: "Projects Completed",
        value: "140",
        suffix: "+",
        subtext: "Delivered across web, Shopify, and automation"
      },
      {
        id: "stat-2",
        label: "Businesses Helped",
        value: "85",
        suffix: "+",
        subtext: "E-commerce stores, startups & local businesses"
      },
      {
        id: "stat-3",
        label: "Technologies Mastered",
        value: "25",
        suffix: "+",
        subtext: "Languages, frameworks, APIs & ad platforms"
      },
      {
        id: "stat-4",
        label: "Years Experience",
        value: "5",
        suffix: "+",
        subtext: "Practical freelance & industry problem solving"
      }
    ],
    technologiesHighlight: [
      "Shopify", "Liquid", "React", "TypeScript", "Tailwind CSS", "Node.js", "C# / .NET",
      "Python", "Excel / Sheets VBA", "OpenAI / Gemini API", "Meta Ads", "TikTok Ads", "Courier APIs"
    ]
  },

  // ==========================================================================
  // 4. CORE FEATURED SERVICES (8 HIGH-IMPACT EXPERTISE CARDS)
  // ==========================================================================
  coreServices: [
    {
      id: "core-shopify",
      title: "Shopify Development",
      category: "E-commerce & Shopify",
      iconName: "ShoppingBag",
      badge: "Flagship Expertise",
      description: "Complete Shopify stores, custom Liquid coding, conversion-focused theme customization, speed optimization, and third-party app integrations.",
      highlights: [
        "High-converting custom Liquid & sections",
        "Sub-2s page speed optimization",
        "Seamless third-party app integrations",
        "Mobile-first checkout and cart drawer flow"
      ],
      techTags: ["Shopify", "Liquid", "Storefront API", "JSON Templates"]
    },
    {
      id: "core-ecom",
      title: "E-commerce Development",
      category: "E-commerce & Shopify",
      iconName: "Store",
      badge: "High Growth",
      description: "High-converting online storefronts, bespoke product builders, custom checkout flows, and automated inventory order management systems.",
      highlights: [
        "Custom checkout and payment gateways",
        "Dynamic product configurators",
        "Multi-currency & localization setup",
        "Conversion Rate Optimization (CRO)"
      ],
      techTags: ["Headless E-com", "Stripe", "WooCommerce", "Cart Systems"]
    },
    {
      id: "core-ads",
      title: "Meta & TikTok Advertising",
      category: "Meta & TikTok Advertising",
      iconName: "TrendingUp",
      badge: "ROI Driven",
      description: "Comprehensive ad campaign setup, Conversion API (CAPI) tracking, creative testing framework, CPA optimization, and high-return scaling strategies.",
      highlights: [
        "Server-Side Conversion API (CAPI) setup",
        "High-converting creative testing matrix",
        "Aggressive retargeting & lookalike funnels",
        "Transparent real-time ROAS dashboards"
      ],
      techTags: ["Meta Ads Manager", "TikTok Ads", "Pixel / CAPI", "Google Tag Manager"]
    },
    {
      id: "core-ai",
      title: "AI / Vibe Coding & MVPs",
      category: "AI / Vibe Coding",
      iconName: "Sparkles",
      badge: "Modern Tech",
      description: "Rapid development of intelligent web apps, AI chatbot integrations, automated content pipelines, and turning product prototypes into production software.",
      highlights: [
        "Rapid MVP builds in days instead of months",
        "Claude, Gemini & OpenAI API workflows",
        "Custom AI customer service chatbots",
        "Automated intelligence data scrapers"
      ],
      techTags: ["Gemini 2.5", "Claude 3.7", "OpenAI", "Prompt Engineering", "Vite"]
    },
    {
      id: "core-automation",
      title: "Business Automation",
      category: "Business Automation",
      iconName: "Cpu",
      badge: "Time Saver",
      description: "Eliminate repetitive manual busywork by connecting disparate business tools, automating order processing, customer outreach, and automated pipelines.",
      highlights: [
        "Automated multi-system data synchronization",
        "WhatsApp business messaging bots",
        "Automated invoicing and PDF generation",
        "Custom REST API webhooks & integrations"
      ],
      techTags: ["Zapier / Make", "Webhooks", "Node.js", "WhatsApp Business API"]
    },
    {
      id: "core-sheets",
      title: "Excel / Google Sheets Automation",
      category: "Business Automation",
      iconName: "FileSpreadsheet",
      badge: "Operational Efficiency",
      description: "Executive dashboards, automated financial reporting, inventory calculators, custom Apps Script macros, and automated spreadsheet reconciliation.",
      highlights: [
        "Google Apps Script custom automation",
        "Advanced Excel formulas & VBA macros",
        "One-click monthly financial aggregators",
        "Live ERP / API data feeds into spreadsheets"
      ],
      techTags: ["Google Apps Script", "Excel VBA", "Google Sheets API", "Power Query"]
    },
    {
      id: "core-courier",
      title: "E-commerce & Courier Automation",
      category: "E-commerce Operations",
      iconName: "Truck",
      badge: "Logistics Expert",
      description: "Automated courier booking API integrations, bulk airway bill printing, automated shipment tracking dashboards, and Cash on Delivery (COD) reconciliations.",
      highlights: [
        "Courier API direct order push (TCS, Leopards, Trax, DHL, PostEx)",
        "COD payments vs bank deposit reconciliation",
        "Automated return / RTO tracking system",
        "WhatsApp automated delivery tracking updates"
      ],
      techTags: ["Courier APIs", "Tracking Dashboards", "COD Reconciler", "PostEx / Trax / TCS"]
    },
    {
      id: "core-tools",
      title: "AI-Powered Business Tools",
      category: "AI / Vibe Coding",
      iconName: "Boxes",
      badge: "Custom Software",
      description: "Bespoke internal software tailored strictly to your unique business operations, combining responsive web interfaces, Windows desktop tools, and AI assistants.",
      highlights: [
        "Custom administrative portals & dashboards",
        "Windows Forms / WPF / Electron desktop software",
        "Tailored CRM & inventory tracking systems",
        "Secure role-based staff permission layers"
      ],
      techTags: ["React + TypeScript", "C# / .NET", "WPF / WinForms", "Electron"]
    }
  ],

  // ==========================================================================
  // 5. COMPLETE 100 CATEGORIZED SERVICES CATALOG
  // Searchable and filterable throughout the portfolio!
  // ==========================================================================
  services: [
    // ---------------- E-COMMERCE & SHOPIFY (1 - 14) ----------------
    {
      id: "srv-1",
      number: 1,
      title: "Shopify Store Setup",
      category: "E-commerce & Shopify",
      description: "Turnkey Shopify store setup with payment gateways, shipping zones, domain, tax configuration, and essential conversion apps.",
      deliverables: ["Full Store Configuration", "Payment & Shipping Setup", "Essential Apps Installation", "Pre-launch QA Testing"],
      popular: true,
      tags: ["Shopify", "Setup", "E-commerce"]
    },
    {
      id: "srv-2",
      number: 2,
      title: "Shopify Theme Customization",
      category: "E-commerce & Shopify",
      description: "Tailoring Dawn, Impulse, Prestige, or any commercial Shopify theme to match your brand identity with bespoke layouts.",
      deliverables: ["Theme Architecture Adjustment", "Custom Sections & Blocks", "Brand Palette & Typography", "Mobile Optimization"],
      popular: true,
      tags: ["Theme", "Liquid", "Design"]
    },
    {
      id: "srv-3",
      number: 3,
      title: "Shopify Website Redesign",
      category: "E-commerce & Shopify",
      description: "Transform an outdated or low-converting Shopify store into a sleek, high-performing luxury e-commerce experience.",
      deliverables: ["Modern UI/UX Revamp", "Conversion Flow Optimization", "Product Showcase Enhancement", "Zero Downtime Migration"],
      tags: ["Redesign", "UI/UX", "Shopify"]
    },
    {
      id: "srv-4",
      number: 4,
      title: "Shopify Product Listing & Upload",
      category: "E-commerce & Shopify",
      description: "Systematic bulk and manual product catalog upload with clean variants, high-res galleries, tags, and SKU structuring.",
      deliverables: ["CSV Bulk Structuring", "Variant & Option Mapping", "Image Optimization", "Category Organization"],
      tags: ["Catalog", "Products", "Bulk Upload"]
    },
    {
      id: "srv-5",
      number: 5,
      title: "Product Page Optimization",
      category: "E-commerce & Shopify",
      description: "Engineering high-converting product pages (PDP) with sticky add-to-cart, trust badges, countdowns, and bundle selectors.",
      deliverables: ["Sticky Mobile ATC Bar", "Dynamic Bundle Selectors", "Trust & Social Proof Badges", "Custom Tabs & Accordions"],
      popular: true,
      tags: ["PDP", "Conversion", "CRO"]
    },
    {
      id: "srv-6",
      number: 6,
      title: "Shopify SEO",
      category: "E-commerce & Shopify",
      description: "On-page, technical, and structural search engine optimization designed specifically for Shopify indexing and organic ranking.",
      deliverables: ["Meta Tags & Schema Markup", "Alt Tags & URL Cleanup", "Sitemap & Canonical Fixes", "Collection Hierarchy Tuning"],
      tags: ["SEO", "Organic Traffic", "Ranking"]
    },
    {
      id: "srv-7",
      number: 7,
      title: "Conversion-Rate Optimization (CRO)",
      category: "E-commerce & Shopify",
      description: "Data-backed audits and UX tweaks across home, collection, product, and cart pages to turn more visitors into paying buyers.",
      deliverables: ["Friction Audit Report", "A/B Testing Implementation", "Checkout Friction Reduction", "Cart Abandonment Strategy"],
      popular: true,
      tags: ["CRO", "Sales", "Analytics"]
    },
    {
      id: "srv-8",
      number: 8,
      title: "Shopify Speed Optimization",
      category: "E-commerce & Shopify",
      description: "Drastically improving Google PageSpeed Insights and mobile load times by cleaning bloat, unused apps, and minifying assets.",
      deliverables: ["Unused App Script Removal", "Image Compression & Lazy Load", "Critical CSS Inline Loading", "Core Web Vitals Boost"],
      popular: true,
      tags: ["Speed", "Performance", "PageSpeed"]
    },
    {
      id: "srv-9",
      number: 9,
      title: "Shopify Custom Liquid Development",
      category: "E-commerce & Shopify",
      description: "Handcrafted Liquid coding for unique UI features, custom sliders, dynamic filters, mega menus, and interactive widgets.",
      deliverables: ["Custom Sections (.liquid)", "Schema Settings Integration", "JavaScript Interactivity", "Responsive CSS Styling"],
      tags: ["Liquid", "Custom Code", "Shopify Plus"]
    },
    {
      id: "srv-10",
      number: 10,
      title: "Shopify App & Integration Setup",
      category: "E-commerce & Shopify",
      description: "Seamless configuration of essential Shopify apps (Klaviyo, Judge.me, Loox, Recharge, PageFly, Seal Subscriptions).",
      deliverables: ["App Installation & Config", "Design Matching with Theme", "API Webhook Syncing", "Staff Training"],
      tags: ["Apps", "Integrations", "Plugins"]
    },
    {
      id: "srv-11",
      number: 11,
      title: "Shopify Order-Management Systems",
      category: "E-commerce & Shopify",
      description: "Custom workflows and tags to automate order validation, fraud scoring, fulfillment routing, and status notifications.",
      deliverables: ["Shopify Flow Automation", "Automated Tagging Rules", "Fulfillment Split Logic", "Staff Alert Triggers"],
      tags: ["Orders", "Fulfillment", "Shopify Flow"]
    },
    {
      id: "srv-12",
      number: 12,
      title: "Shopify Tracking & Analytics Setup",
      category: "E-commerce & Shopify",
      description: "Bulletproof Google Analytics 4 (GA4), Meta Pixel, TikTok Pixel, and Google Tag Manager (GTM) e-commerce data layer setup.",
      deliverables: ["Full E-commerce DataLayer", "GA4 Purchase Event Setup", "Meta Conversions API", "TikTok Events Manager"],
      tags: ["Tracking", "GA4", "Pixels"]
    },
    {
      id: "srv-13",
      number: 13,
      title: "E-commerce Store Maintenance",
      category: "E-commerce & Shopify",
      description: "Ongoing technical support, monthly speed audits, seasonal promotional banners, bug fixes, and continuous improvements.",
      deliverables: ["Monthly Technical Checkup", "Fast-Response Bug Fixing", "Banner & Promo Updates", "Database & App Cleanup"],
      tags: ["Maintenance", "Support", "Retainer"]
    },
    {
      id: "srv-14",
      number: 14,
      title: "Shopify Troubleshooting & Bug Fixing",
      category: "E-commerce & Shopify",
      description: "Rapid emergency resolution for broken checkout flows, mobile display glitches, broken Liquid code, or plugin conflicts.",
      deliverables: ["Same-Day Code Fixes", "Root Cause Analysis", "Cross-Browser Compatibility Check", "Regression Testing"],
      tags: ["Debugging", "Emergency Fix", "Troubleshooting"]
    },

    // ---------------- WEBSITE & DEVELOPMENT (15 - 31) ----------------
    {
      id: "srv-15",
      number: 15,
      title: "Business Website Development",
      category: "Website & Development",
      description: "Modern, professional corporate and business websites designed to build immediate client trust and capture qualified inbound leads.",
      deliverables: ["Custom Multi-Page Site", "Lead Capture Forms", "SEO Semantic Structure", "Ultra-Fast Hosting Setup"],
      popular: true,
      tags: ["React", "Corporate", "Web Dev"]
    },
    {
      id: "srv-16",
      number: 16,
      title: "Landing Page Development",
      category: "Website & Development",
      description: "High-converting, laser-targeted landing pages engineered for paid advertising campaigns and product launches.",
      deliverables: ["Direct-Response Copy Layout", "Instant Mobile Page Load", "Dynamic Form Integrations", "Analytics Event Tracking"],
      popular: true,
      tags: ["Landing Page", "PPC", "Ad Funnel"]
    },
    {
      id: "srv-17",
      number: 17,
      title: "E-commerce Website Development",
      category: "Website & Development",
      description: "Bespoke custom e-commerce web applications built with modern frontend frameworks and custom shopping carts.",
      deliverables: ["Dynamic Catalog & Filters", "Secure Stripe / Gateway Checkout", "Customer Dashboard", "Admin Inventory Panel"],
      tags: ["Full Stack", "Custom Ecom", "Cart"]
    },
    {
      id: "srv-18",
      number: 18,
      title: "React Website Development",
      category: "Website & Development",
      description: "Interactive single-page applications (SPAs) and dynamic web interfaces powered by React 19, TypeScript, and Vite.",
      deliverables: ["Component-Based Architecture", "State Management (Context / Zustand)", "Fluid Motion Transitions", "Clean Modular Code"],
      tags: ["React", "TypeScript", "Vite"]
    },
    {
      id: "srv-19",
      number: 19,
      title: "HTML / CSS / JavaScript Development",
      category: "Website & Development",
      description: "Clean, standards-compliant, semantic frontend development with zero framework bloat for maximum raw performance.",
      deliverables: ["Semantic HTML5 Markup", "Responsive Modern CSS3", "Vanilla JavaScript Utilities", "Accessibility WCAG Compliance"],
      tags: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      id: "srv-20",
      number: 20,
      title: "Frontend UI Development",
      category: "Website & Development",
      description: "Translating Figma and Adobe XD visual designs into pixel-perfect, interactive responsive frontend code.",
      deliverables: ["Pixel-Perfect Figma Conversion", "Tailwind CSS Utility Styling", "Interactive Hover & Focus States", "Component Storybook Layout"],
      tags: ["Tailwind", "Figma", "UI/UX"]
    },
    {
      id: "srv-21",
      number: 21,
      title: "Responsive Website Development",
      category: "Website & Development",
      description: "Ensuring flawless visual presentation and tactile touch controls across phones (320px+), tablets, laptops, and 4K displays.",
      deliverables: ["Mobile-First Fluid Layouts", "Retina Asset Scaling", "Touch Target Optimization (44px+)", "Cross-Browser Verification"],
      tags: ["Responsive", "Mobile-First", "CSS"]
    },
    {
      id: "srv-22",
      number: 22,
      title: "Website Redesign",
      category: "Website & Development",
      description: "Revitalizing outdated legacy websites with contemporary aesthetics, modern typography, and updated tech stacks.",
      deliverables: ["Modern Visual Overhaul", "Improved User Journey Map", "Asset & Graphic Modernization", "SEO Authority Preservation"],
      tags: ["Redesign", "Modernization", "UX"]
    },
    {
      id: "srv-23",
      number: 23,
      title: "Website Bug Fixing",
      category: "Website & Development",
      description: "Diagnosing and permanently resolving JavaScript errors, broken CSS layouts, CORS issues, and unresponsive elements.",
      deliverables: ["Codebase Diagnostics", "Cross-Browser Fixes", "Error Console Cleanup", "Patch Documentation"],
      tags: ["Debugging", "Bug Fix", "QA"]
    },
    {
      id: "srv-24",
      number: 24,
      title: "Website Performance Optimization",
      category: "Website & Development",
      description: "Benchmarking and optimizing Time to First Byte (TTFB), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS).",
      deliverables: ["Asset Bundling Optimization", "Tree Shaking & Minification", "CDN & Caching Strategy", "Lighthouse 95+ Score Audit"],
      tags: ["Lighthouse", "Core Web Vitals", "Optimization"]
    },
    {
      id: "srv-25",
      number: 25,
      title: "Custom Web Applications",
      category: "Website & Development",
      description: "Full-stack tailored web apps featuring user authentication, relational databases, REST APIs, and custom business logic.",
      deliverables: ["End-to-End Application Architecture", "Role-Based Auth (JWT / Firebase)", "CRUD Database Schemas", "Interactive Dashboard Views"],
      popular: true,
      tags: ["Web App", "Full Stack", "APIs"]
    },
    {
      id: "srv-26",
      number: 26,
      title: "Admin Dashboards",
      category: "Website & Development",
      description: "Data-rich administrative control centers featuring live charts, transaction logs, user tables, and export utilities.",
      deliverables: ["Data Visualization (Recharts / D3)", "Searchable Data Tables", "Role & Permission Controls", "CSV / PDF Export Reports"],
      popular: true,
      tags: ["Admin", "Dashboard", "Analytics"]
    },
    {
      id: "srv-27",
      number: 27,
      title: "Internal Business Tools",
      category: "Website & Development",
      description: "Tailored internal web software built specifically for staff members to manage inventory, tasks, leads, and operational queues.",
      deliverables: ["Custom Business Workflows", "Staff Audit Logging", "Real-Time Activity Feeds", "API Integration Connectors"],
      tags: ["Internal Tools", "Productivity", "Operations"]
    },
    {
      id: "srv-28",
      number: 28,
      title: "Desktop Application Development",
      category: "Website & Development",
      description: "High-performance native Windows desktop applications and cross-platform desktop software for specialized hardware or offline needs.",
      deliverables: ["Native Executable (.exe / installer)", "Offline Local Storage Support", "Hardware & Printer Communication", "High-Throughput Processing"],
      tags: ["Desktop", "Software", "Native"]
    },
    {
      id: "srv-29",
      number: 29,
      title: "Windows Forms Applications",
      category: "Website & Development",
      description: "Reliable Windows Forms (WinForms) software built in C#/.NET for barcode scanning, POS systems, and factory management.",
      deliverables: ["C# .NET Architecture", "Local SQLite / SQL Server DB", "Hardware Thermal Printer Integration", "Data Backup Scripts"],
      tags: ["WinForms", "C#", ".NET"]
    },
    {
      id: "srv-30",
      number: 30,
      title: "WPF Applications",
      category: "Website & Development",
      description: "Modern, visually rich Windows Presentation Foundation (WPF) applications with XAML styling and MVVM pattern.",
      deliverables: ["MVVM Clean Architecture", "XAML Responsive UI Styling", "Asynchronous Data Handling", "Local Data Encryption"],
      tags: ["WPF", "XAML", "C#"]
    },
    {
      id: "srv-31",
      number: 31,
      title: "Electron Desktop Applications",
      category: "Website & Development",
      description: "Cross-platform desktop tools for Windows and macOS built with web technologies (React, TypeScript, Node.js).",
      deliverables: ["Cross-Platform Desktop Build", "Auto-Updater Configuration", "Native File System Access", "Background System Tray Services"],
      tags: ["Electron", "React", "Desktop"]
    },

    // ---------------- AI / VIBE CODING (32 - 42) ----------------
    {
      id: "srv-32",
      number: 32,
      title: "AI-Powered Website Development",
      category: "AI / Vibe Coding",
      description: "Intelligent websites with integrated AI recommendation engines, smart dynamic content, and real-time generation features.",
      deliverables: ["LLM API Integration (Gemini / OpenAI)", "Dynamic AI Content Modules", "Smart Search & Filtering", "Prompt Guardrails & Caching"],
      popular: true,
      tags: ["AI Web", "LLM", "Smart UX"]
    },
    {
      id: "srv-33",
      number: 33,
      title: "AI-Powered Business Tools",
      category: "AI / Vibe Coding",
      description: "Internal tools that automate report summarization, customer feedback categorization, invoice OCR, and email drafting.",
      deliverables: ["Custom AI Prompt Pipelines", "Document & PDF Analysis Tools", "Automated Sentiment & Category Tagging", "API Proxy Backend"],
      popular: true,
      tags: ["AI Tools", "Productivity", "Automation"]
    },
    {
      id: "srv-34",
      number: 34,
      title: "Custom AI Workflows",
      category: "AI / Vibe Coding",
      description: "Multi-step AI pipelines linking web scrapers, data formatters, language models, and automated output distribution.",
      deliverables: ["Multi-Agent Workflow Pipelines", "Context Memory Management", "JSON Structured Output Schemas", "Automated Error Handling"],
      tags: ["AI Workflows", "Agents", "Pipelines"]
    },
    {
      id: "srv-35",
      number: 35,
      title: "AI Automation",
      category: "AI / Vibe Coding",
      description: "Replacing repetitive cognitive tasks (e.g. customer inquiry sorting, data extraction) with autonomous AI systems.",
      deliverables: ["Autonomous Trigger Functions", "Data Normalization Scripts", "Webhook-Based Dispatchers", "Human-in-the-Loop Review UI"],
      tags: ["AI Automation", "Autonomy", "Efficiency"]
    },
    {
      id: "srv-36",
      number: 36,
      title: "AI Chatbot Integration",
      category: "AI / Vibe Coding",
      description: "Deploying 24/7 intelligent customer support chatbots trained on your product catalog, FAQs, return policies, and brand voice.",
      deliverables: ["Knowledge Base Vectorization", "Custom Web Embed Widget", "Human Escalation Fallback", "Conversation Analytics"],
      popular: true,
      tags: ["Chatbots", "Customer Support", "RAG"]
    },
    {
      id: "srv-37",
      number: 37,
      title: "AI-Assisted App Development",
      category: "AI / Vibe Coding",
      description: "Leveraging state-of-the-art AI tooling and vibe coding techniques to engineer complete functional applications at 5x velocity.",
      deliverables: ["Rapid Solution Prototyping", "Optimized Algorithmic Code", "Full Codebase Refactoring", "Comprehensive Documentation"],
      tags: ["Vibe Coding", "Speed", "Agile"]
    },
    {
      id: "srv-38",
      number: 38,
      title: "Rapid MVP Development",
      category: "AI / Vibe Coding",
      description: "Taking your product concept from idea to a working, testable minimum viable product in days rather than months.",
      deliverables: ["Functional Interactive Prototype", "Core User Flow Implementation", "Database & Auth Integration", "Demo Launch Ready"],
      popular: true,
      tags: ["MVP", "Startup", "Fast Launch"]
    },
    {
      id: "srv-39",
      number: 39,
      title: "Prototype-to-Working-App Development",
      category: "AI / Vibe Coding",
      description: "Turning static mockups and experimental prototypes into robust, production-grade web and mobile applications.",
      deliverables: ["Production Refactoring", "Type-Safe Architecture", "Database Schema Hardening", "Error Boundary Integration"],
      tags: ["Production", "Scale", "Refactoring"]
    },
    {
      id: "srv-40",
      number: 40,
      title: "Claude / Gemini / ChatGPT Workflow Implementation",
      category: "AI / Vibe Coding",
      description: "Architecting custom enterprise workflows utilizing the latest Claude 3.7 Sonnet, Gemini 2.5 Pro, and GPT-4o models.",
      deliverables: ["Model Evaluation & Selection", "Prompt Engineering Library", "Rate-Limiting & Cost Optimization", "Secure Key Management"],
      tags: ["Claude", "Gemini", "ChatGPT"]
    },
    {
      id: "srv-41",
      number: 41,
      title: "Prompt Engineering",
      category: "AI / Vibe Coding",
      description: "Crafting deterministic, zero-shot and few-shot system prompts with structured JSON outputs and robust safety boundaries.",
      deliverables: ["Custom System Prompt Matrices", "Structured JSON Schema Prompts", "Jailbreak & Hallucination Defense", "Testing Benchmark Suite"],
      tags: ["Prompt Engineering", "LLM", "Optimization"]
    },
    {
      id: "srv-42",
      number: 42,
      title: "AI Automation for E-commerce",
      category: "AI / Vibe Coding",
      description: "Automating product description generation, SEO keyword clustering, customer review summaries, and ad copy variations.",
      deliverables: ["Automated Bulk Product Copy Generator", "Customer Review Summarizer", "Multilingual Translation Engine", "Ad Copy Variant Matrix"],
      tags: ["Ecom AI", "Copywriting", "Automation"]
    },

    // ---------------- BUSINESS AUTOMATION (43 - 56) ----------------
    {
      id: "srv-43",
      number: 43,
      title: "Excel Automation",
      category: "Business Automation",
      description: "Automating repetitive data entry, complex multi-sheet consolidations, and report formatting using advanced VBA macros.",
      deliverables: ["Custom VBA Automation Scripts", "One-Click Data Consolidator", "Input Validation Protection", "Custom Excel Add-Ins"],
      popular: true,
      tags: ["Excel", "VBA", "Macros"]
    },
    {
      id: "srv-44",
      number: 44,
      title: "Google Sheets Automation",
      category: "Business Automation",
      description: "Developing custom Google Apps Script macros, scheduled triggers, and connecting Sheets directly to external REST APIs.",
      deliverables: ["Google Apps Script Workflows", "Scheduled Daily Sync Triggers", "Custom Spreadsheet Formulas", "Automated Email Alerts"],
      popular: true,
      tags: ["Google Sheets", "Apps Script", "Cloud"]
    },
    {
      id: "srv-45",
      number: 45,
      title: "Automated Reporting Systems",
      category: "Business Automation",
      description: "Hands-off reporting pipelines that automatically aggregate sales, ad spend, and inventory numbers into PDF/Email summaries.",
      deliverables: ["Daily / Weekly Email Digests", "Automated PDF Report Generation", "Multi-Platform Data Aggregation", "Executive Summary Views"],
      tags: ["Reporting", "Analytics", "PDFs"]
    },
    {
      id: "srv-46",
      number: 46,
      title: "Inventory Management Systems",
      category: "Business Automation",
      description: "Custom software and spreadsheets that sync stock levels across Shopify, physical warehouses, and marketplaces in real time.",
      deliverables: ["Multi-Channel Stock Synchronization", "Low-Stock Automated Alerts", "Reorder Quantity Forecaster", "Barcode Scanning Integration"],
      popular: true,
      tags: ["Inventory", "Stock Sync", "Operations"]
    },
    {
      id: "srv-47",
      number: 47,
      title: "Sales Management Systems",
      category: "Business Automation",
      description: "Centralized platforms to track quotes, customer orders, sales representative commissions, and client payment stages.",
      deliverables: ["Lead-to-Order Conversion Funnel", "Commission Calculation Matrix", "Invoicing Status Tracker", "Sales Leaderboard Dashboard"],
      tags: ["Sales CRM", "Commissions", "Revenue"]
    },
    {
      id: "srv-48",
      number: 48,
      title: "Expense Tracking Systems",
      category: "Business Automation",
      description: "Automated business expense categorization, receipt storage, vendor invoice logs, and profit-and-loss calculation modules.",
      deliverables: ["Vendor Invoice Categorization", "Automated Net Profit Calculator", "Receipt Attachment System", "Tax Preparation Exports"],
      tags: ["Expenses", "Finance", "P&L"]
    },
    {
      id: "srv-49",
      number: 49,
      title: "Customer Management Systems (CRM)",
      category: "Business Automation",
      description: "Lightweight, tailor-made CRM software keeping all client communications, order histories, notes, and reminders in one place.",
      deliverables: ["Client Profile & History Records", "Follow-Up Reminder Triggers", "Custom Tagging & Segmentation", "WhatsApp & Email Sync"],
      tags: ["CRM", "Client Management", "Retention"]
    },
    {
      id: "srv-50",
      number: 50,
      title: "Supplier Management Systems",
      category: "Business Automation",
      description: "Structured vendor directory, purchase order generator, supply lead-time tracker, and supplier payment reconciliation.",
      deliverables: ["Automated Purchase Order Generator", "Supplier Lead Time Monitor", "Payment Terms Ledger", "Restocking Scheduler"],
      tags: ["Suppliers", "Procurement", "Purchase Orders"]
    },
    {
      id: "srv-51",
      number: 51,
      title: "Business Dashboards",
      category: "Business Automation",
      description: "Visual real-time executive cockpits displaying high-level KPIs, gross margins, CAC, and operational bottlenecks.",
      deliverables: ["Live KPI Metric Widgets", "Custom Date Range Filter", "Mobile-Optimized Executive View", "Automated Cloud Refresh"],
      popular: true,
      tags: ["Dashboards", "KPIs", "Business Intelligence"]
    },
    {
      id: "srv-52",
      number: 52,
      title: "Courier / Order Reconciliation Systems",
      category: "Business Automation",
      description: "Automated cross-referencing between Shopify orders, courier booking IDs, delivery statuses, and received bank deposits.",
      deliverables: ["Automated Discrepancy Finder", "Bulk Tracking Status Updater", "Bank Payout Matching Engine", "Unpaid COD Recovery Alerts"],
      popular: true,
      tags: ["Reconciliation", "Courier", "COD"]
    },
    {
      id: "srv-53",
      number: 53,
      title: "WhatsApp Business Automation",
      category: "Business Automation",
      description: "Automated WhatsApp order confirmations, abandoned checkout recovery messages, tracking links, and interactive menu bots.",
      deliverables: ["WhatsApp Cloud API Setup", "Automated Order Confirmation Bot", "Delivery Tracking Alerts", "Abandoned Cart WhatsApp Recovery"],
      popular: true,
      tags: ["WhatsApp", "Chatbot", "Notifications"]
    },
    {
      id: "srv-54",
      number: 54,
      title: "Data Entry Automation",
      category: "Business Automation",
      description: "Extracting structured data from emails, scanned invoices, web portals, and PDFs directly into your database or spreadsheet.",
      deliverables: ["OCR & PDF Data Scrapers", "Email Attachment Parsers", "Automated Deduplication Logic", "Data Validation Cleaners"],
      tags: ["Data Entry", "OCR", "Scraping"]
    },
    {
      id: "srv-55",
      number: 55,
      title: "API Integrations",
      category: "Business Automation",
      description: "Connecting disparate third-party cloud APIs (Stripe, Twilio, SendGrid, Shopify, Courier gateways) with reliable error recovery.",
      deliverables: ["Custom REST & GraphQL Endpoints", "Webhook Listener Services", "Token Authentication & Rate Limiting", "Payload Transformation Logic"],
      tags: ["APIs", "Webhooks", "Integration"]
    },
    {
      id: "srv-56",
      number: 56,
      title: "Custom Business Software",
      category: "Business Automation",
      description: "End-to-end proprietary software engineered strictly around your company's operational rules and competitive advantages.",
      deliverables: ["Bespoke Architecture Design", "Modular Scalable Codebase", "Comprehensive User Guide", "Dedicated Support Maintenance"],
      popular: true,
      tags: ["Custom Software", "Enterprise", "Engineering"]
    },

    // ---------------- META & TIKTOK ADVERTISING (57 - 71) ----------------
    {
      id: "srv-57",
      number: 57,
      title: "Meta Ads Setup",
      category: "Meta & TikTok Advertising",
      description: "Complete Facebook & Instagram Ads Business Manager setup, domain verification, aggregated events, and conversion tracking.",
      deliverables: ["Business Manager Configuration", "Domain & Pixel Verification", "Custom Conversions Definition", "Initial Campaign Architecture"],
      tags: ["Meta Ads", "Setup", "Facebook"]
    },
    {
      id: "srv-58",
      number: 58,
      title: "Facebook Ads Management",
      category: "Meta & TikTok Advertising",
      description: "Data-driven campaign structuring, audience prospecting, interest stack testing, and daily budget optimization for e-commerce.",
      deliverables: ["Campaign Budget Optimization (CBO)", "Audience Research & Stacking", "Daily Bid Adjustments", "Weekly Performance Reports"],
      popular: true,
      tags: ["Facebook Ads", "PPC", "E-commerce"]
    },
    {
      id: "srv-59",
      number: 59,
      title: "Instagram Ads Management",
      category: "Meta & TikTok Advertising",
      description: "Story, Reels, and Feed ad placement strategies optimized for mobile shopping impulse buys and brand aesthetic alignment.",
      deliverables: ["Reels & Story Placement Optimization", "Catalog Shopping Ads", "Influencer Whitelisting / Spark Ads", "Engagement Retargeting"],
      tags: ["Instagram", "Reels Ads", "Mobile Ads"]
    },
    {
      id: "srv-60",
      number: 60,
      title: "TikTok Ads Setup",
      category: "Meta & TikTok Advertising",
      description: "TikTok Ads Manager setup, TikTok Events API setup, catalog connection, and custom audience definition.",
      deliverables: ["TikTok Business Center Setup", "TikTok Pixel & Events API", "Instant Page Lead Forms", "Audience Pixel Targeting"],
      tags: ["TikTok Ads", "Setup", "Short-Form"]
    },
    {
      id: "srv-61",
      number: 61,
      title: "TikTok Ads Management",
      category: "Meta & TikTok Advertising",
      description: "Managing UGC-style video ad campaigns with high hook rates, trending sounds, and fast creative fatigue rotation.",
      deliverables: ["Creative Testing Sprints", "Spark Ads Management", "Budget Scaling & Dayparting", "ROAS & Cost-Per-Acquisition Optimization"],
      popular: true,
      tags: ["TikTok Ads", "UGC", "Performance"]
    },
    {
      id: "srv-62",
      number: 62,
      title: "E-commerce Conversion Campaigns",
      category: "Meta & TikTok Advertising",
      description: "Structuring bottom-of-funnel conversion campaigns designed specifically to generate high Return on Ad Spend (ROAS).",
      deliverables: ["Purchase-Optimized Campaigns", "Dynamic Product Ads (DPA)", "AOV Booster Strategies", "Cross-Sell Ad Funnels"],
      popular: true,
      tags: ["Conversions", "ROAS", "E-com Growth"]
    },
    {
      id: "srv-63",
      number: 63,
      title: "Campaign Auditing",
      category: "Meta & TikTok Advertising",
      description: "Deep dive audit into existing ad accounts to locate wasted ad spend, overlapping audiences, and broken conversion tracking.",
      deliverables: ["Wasted Spend Discovery", "Audience Overlap Analysis", "Creative Fatigue Diagnosis", "Actionable Step-by-Step Fix Plan"],
      tags: ["Audit", "Ad Account", "Optimization"]
    },
    {
      id: "srv-64",
      number: 64,
      title: "Ad Account Troubleshooting",
      category: "Meta & TikTok Advertising",
      description: "Resolving policy compliance issues, rejected ads, payment glitches, and ad account restriction appeals.",
      deliverables: ["Policy Compliance Review", "Appeals Documentation", "New Business Manager Structure", "Backup Account Protocol"],
      tags: ["Troubleshooting", "Compliance", "Appeals"]
    },
    {
      id: "srv-65",
      number: 65,
      title: "Creative Testing Strategy",
      category: "Meta & TikTok Advertising",
      description: "Systematic 3:2:2 dynamic creative testing methodology to uncover scalable visual hooks, angles, and headlines.",
      deliverables: ["Dynamic Creative (DCT) Setup", "Hook Rate Analysis (>30%)", "Hold Rate Metrics Evaluation", "Winning Asset Isolation"],
      tags: ["Creatives", "Testing", "Hooks"]
    },
    {
      id: "srv-66",
      number: 66,
      title: "Campaign Scaling",
      category: "Meta & TikTok Advertising",
      description: "Horizontal and vertical budget scaling techniques (surfacing lookalikes, broad targeting, cost-cap bidding) without breaking CPA.",
      deliverables: ["Vertical Budget Scaling (20% Rules)", "Horizontal Lookalike Expansion", "Cost-Cap & Bid-Cap Setup", "Stabilized CAC Management"],
      popular: true,
      tags: ["Scaling", "Growth", "Cost Caps"]
    },
    {
      id: "srv-67",
      number: 67,
      title: "CPA Optimization",
      category: "Meta & TikTok Advertising",
      description: "Lowering Cost Per Acquisition through landing page synchronicity, offer structuring, and aggressive ad testing.",
      deliverables: ["Ad-to-Landing Page Message Matching", "Post-Click Funnel Tuning", "Irresistible Offer Ideation", "CPA Reduction Sprints"],
      tags: ["CPA", "CAC", "Efficiency"]
    },
    {
      id: "srv-68",
      number: 68,
      title: "Retargeting Campaigns",
      category: "Meta & TikTok Advertising",
      description: "Segmented remarketing funnels targeting website visitors, cart abandoners, and previous buyers with tailored incentives.",
      deliverables: ["Custom Dynamic Retargeting", "Tiered Discount Ad Angles", "Cart Abandonment Sequences", "LTV Customer Upsells"],
      tags: ["Retargeting", "Remarketing", "LTV"]
    },
    {
      id: "srv-69",
      number: 69,
      title: "Pixel / Events Setup",
      category: "Meta & TikTok Advertising",
      description: "Precision installation of standard browser pixel tracking for PageView, ViewContent, AddToCart, InitiateCheckout, and Purchase.",
      deliverables: ["Standard E-com Event Triggers", "Custom Parameter Passing", "Event Quality Score Boosting", "Browser Deduplication Test"],
      tags: ["Pixel", "Events", "Tag Manager"]
    },
    {
      id: "srv-70",
      number: 70,
      title: "Conversion API (CAPI) Setup",
      category: "Meta & TikTok Advertising",
      description: "Server-side tracking implementation to bypass iOS privacy blocks, ad blockers, and cookie decay for 100% data fidelity.",
      deliverables: ["Server-Side Gateway Setup", "Event Match Quality (EMQ) 8.5+", "Browser & Server Deduplication", "Offline Conversion Sync"],
      popular: true,
      tags: ["CAPI", "Server-Side", "Tracking"]
    },
    {
      id: "srv-71",
      number: 71,
      title: "Ads Reporting & Analytics",
      category: "Meta & TikTok Advertising",
      description: "Transparent Looker Studio and custom web dashboards aggregating blended MER, ROAS, NC-CPA, and profit metrics.",
      deliverables: ["Automated Looker Studio Dashboard", "Blended Marketing Efficiency Ratio (MER)", "New Customer CAC Tracking", "Weekly Video Walkthrough"],
      tags: ["Analytics", "Looker Studio", "MER"]
    },

    // ---------------- CREATIVE & SOCIAL MEDIA (72 - 83) ----------------
    {
      id: "srv-72",
      number: 72,
      title: "Social Media Post Design",
      category: "Creative & Social Media",
      description: "Eye-catching, on-brand graphics and carousels engineered for high organic reach and brand authority.",
      deliverables: ["Instagram / Facebook Carousels", "Branded Color Templates", "Editable Canva / Figma Files", "High-Resolution Exports"],
      tags: ["Social Media", "Graphic Design", "Branding"]
    },
    {
      id: "srv-73",
      number: 73,
      title: "Ad Creative Design",
      category: "Creative & Social Media",
      description: "Direct-response ad banners, split-screen comparisons, feature callouts, and press proof creatives designed to stop the scroll.",
      deliverables: ["High-CTR Static Banner Ads", "Benefit Callout Graphics", "Social Proof & Review Overlays", "Multiple Aspect Ratios (1:1, 4:5, 9:16)"],
      popular: true,
      tags: ["Ad Creatives", "Direct Response", "CTR"]
    },
    {
      id: "srv-74",
      number: 74,
      title: "Product Banners",
      category: "Creative & Social Media",
      description: "Striking product showcase graphics with custom shadow rendering, background replacement, and badge highlights.",
      deliverables: ["Product Cutouts & Retouching", "Feature Highlight Callouts", "Promotional Strikethrough Badges", "Web-Ready WebP Assets"],
      tags: ["Product Banners", "Graphics", "Retouching"]
    },
    {
      id: "srv-75",
      number: 75,
      title: "Shopify Banners",
      category: "Creative & Social Media",
      description: "Hero sliders, collection headers, promotional countdown banners, and announcement bars tailored to your Shopify theme.",
      deliverables: ["Hero Carousel Banners", "Collection Header Graphics", "Sale Announcement Ribbons", "Mobile & Desktop Split Formats"],
      tags: ["Shopify Banners", "Hero Graphics", "UI Design"]
    },
    {
      id: "srv-76",
      number: 76,
      title: "Instagram Creatives",
      category: "Creative & Social Media",
      description: "Aesthetic story highlights, feed grids, and interactive story poll stickers tailored for luxury and consumer brands.",
      deliverables: ["Cohesive Feed Aesthetic", "Story Highlight Covers", "Interactive Poll / Question Graphics", "Reels Cover Templates"],
      tags: ["Instagram", "Stories", "Feed Design"]
    },
    {
      id: "srv-77",
      number: 77,
      title: "TikTok Creatives",
      category: "Creative & Social Media",
      description: "Native vertical video overlays, text-to-speech hooks, green screen layouts, and viral trend adaptations.",
      deliverables: ["Native UI TikTok Overlays", "Hook & Caption Graphic Packs", "Trend-Aligned Visual Formats", "Dynamic Safe-Zone Alignment"],
      tags: ["TikTok Creatives", "Short Video", "Viral"]
    },
    {
      id: "srv-78",
      number: 78,
      title: "Promotional Graphics",
      category: "Creative & Social Media",
      description: "Flash sale, Black Friday / Cyber Monday (BFCM), Eid, and holiday campaign asset packs for web and ads.",
      deliverables: ["Complete Holiday Campaign Suite", "Discount Badge Variations", "Email Newsletter Headers", "Social Media Takeover Assets"],
      tags: ["Promotions", "BFCM", "Holiday Sales"]
    },
    {
      id: "srv-79",
      number: 79,
      title: "Product Catalog Design",
      category: "Creative & Social Media",
      description: "Digital PDF product catalogs and interactive lookbooks formatted for wholesale B2B buyers and retail clients.",
      deliverables: ["Clickable PDF Digital Catalog", "Print-Ready Vector Files", "Wholesale Pricing Layouts", "High-Definition Imagery"],
      tags: ["Catalog", "Lookbook", "B2B"]
    },
    {
      id: "srv-80",
      number: 80,
      title: "Social Media Captions",
      category: "Creative & Social Media",
      description: "Persuasive storytelling captions with strong call-to-actions, emoji structuring, and audience engagement questions.",
      deliverables: ["30-Day Content Calendar Copy", "Engaging First-Line Hooks", "Action-Oriented CTAs", "Hashtag Stacks"],
      tags: ["Copywriting", "Captions", "Engagement"]
    },
    {
      id: "srv-81",
      number: 81,
      title: "SEO Keywords / Hashtags",
      category: "Creative & Social Media",
      description: "Strategic hashtag sets and keyword clusters researched specifically for Instagram Explore and TikTok Search ranking.",
      deliverables: ["Niche Categorized Hashtags", "TikTok Search Optimization Terms", "Competitor Keyword Analysis", "Rotation Matrix"],
      tags: ["Hashtags", "Social SEO", "Discoverability"]
    },
    {
      id: "srv-82",
      number: 82,
      title: "Short-Form Video Hooks",
      category: "Creative & Social Media",
      description: "High-retention 3-second script hooks and visual disruption cues to maximize video watch time on Reels and TikTok.",
      deliverables: ["50+ Tested Video Hook Scripts", "Visual Disruption Concepts", "Curiosity Gap Frameworks", "Pattern Interrupt Ideas"],
      popular: true,
      tags: ["Video Hooks", "Retention", "Shorts"]
    },
    {
      id: "srv-83",
      number: 83,
      title: "UGC / Ad Creative Concepts",
      category: "Creative & Social Media",
      description: "Detailed creator briefs, storyboards, and script frameworks for User-Generated Content creators and influencers.",
      deliverables: ["Complete Creator Briefing Doc", "Shot-by-Shot Storyboards", "Talking Point Scripts", "Creator Outreach Templates"],
      tags: ["UGC", "Storyboards", "Ad Strategy"]
    },

    // ---------------- SEO & CONTENT (84 - 93) ----------------
    {
      id: "srv-84",
      number: 84,
      title: "Shopify SEO Optimization",
      category: "SEO & Content",
      description: "Structured metadata, schema architecture, and indexation controls tailored to Shopify's URL parameters.",
      deliverables: ["Product & Collection Schema", "Duplicate URL Parameter Fixes", "JSON-LD Rich Snippets", "Sitemap Verification"],
      tags: ["Shopify SEO", "Technical SEO", "Schema"]
    },
    {
      id: "srv-85",
      number: 85,
      title: "Product SEO",
      category: "SEO & Content",
      description: "Keyword-rich product titles, natural search descriptions, and image alt tags that capture high-intent buyers.",
      deliverables: ["Search-Intent Product Titles", "Keyword Integration in Descriptions", "Alt Tag Generation", "Image File Name Optimization"],
      tags: ["Product SEO", "Search Ranking", "Keywords"]
    },
    {
      id: "srv-86",
      number: 86,
      title: "Keyword Research",
      category: "SEO & Content",
      description: "Comprehensive search volume analysis, competitor keyword gap analysis, and identifying low-competition goldmines.",
      deliverables: ["Commercial Keyword Sheet", "Search Intent Categorization", "Competitor Keyword Gap Report", "Difficulty & Volume Metrics"],
      popular: true,
      tags: ["Keyword Research", "SEMrush", "Ahrefs"]
    },
    {
      id: "srv-87",
      number: 87,
      title: "Product Descriptions",
      category: "SEO & Content",
      description: "Compelling, benefit-driven product copy that blends emotional storytelling with technical specs to eliminate buyer hesitation.",
      deliverables: ["Benefit-First Copywriting", "Skimmable Feature Bullet Points", "Objection Handling Sections", "Target Keyword Inclusion"],
      tags: ["Copywriting", "Descriptions", "Sales"]
    },
    {
      id: "srv-88",
      number: 88,
      title: "Meta Titles & Descriptions",
      category: "SEO & Content",
      description: "High-CTR meta tags crafted to maximize Google search clicks and adhere to strict character limit standards.",
      deliverables: ["Storewide Meta Title Audit", "Compelling SERP Snippet Copy", "Search Intent Keyword Integration", "Bulk CSV Upload Format"],
      tags: ["Meta Tags", "CTR", "SERP"]
    },
    {
      id: "srv-89",
      number: 89,
      title: "Local SEO",
      category: "SEO & Content",
      description: "Google Business Profile optimization, local citation building, and city-targeted landing page structuring.",
      deliverables: ["Google Business Profile Audit", "NAP Consistency Verification", "Local Schema Markup", "Geotargeted Service Pages"],
      tags: ["Local SEO", "Google Maps", "Citations"]
    },
    {
      id: "srv-90",
      number: 90,
      title: "E-commerce SEO Audits",
      category: "SEO & Content",
      description: "Thorough audit of your website's crawlability, broken links, thin content, page speed, and indexing barriers.",
      deliverables: ["Comprehensive Audit PDF", "Critical Error Checklist", "Priority Action Roadmap", "Crawl Depth Optimization"],
      tags: ["SEO Audit", "Site Health", "Crawling"]
    },
    {
      id: "srv-91",
      number: 91,
      title: "Google Search Console Setup",
      category: "SEO & Content",
      description: "Complete GSC property setup, sitemap submission, indexing inspection, and resolving crawl errors.",
      deliverables: ["GSC Domain Verification", "XML Sitemap Submission", "Crawl Error Resolution", "Indexing Status Monitor"],
      tags: ["Search Console", "Google", "Indexing"]
    },
    {
      id: "srv-92",
      number: 92,
      title: "Google Analytics Setup (GA4)",
      category: "SEO & Content",
      description: "Configuring Google Analytics 4 with customized funnels, user conversion paths, and revenue tracking.",
      deliverables: ["GA4 Property Deployment", "Enhanced Measurement Setup", "Custom Funnel Explorations", "E-commerce Revenue Streams"],
      tags: ["GA4", "Analytics", "Tracking"]
    },
    {
      id: "srv-93",
      number: 93,
      title: "Content Optimization",
      category: "SEO & Content",
      description: "Updating existing blog posts and website content to match current search intent, improve readability, and win featured snippets.",
      deliverables: ["Content Refresh Strategy", "Featured Snippet Formatting", "Internal Linking Optimization", "Readability Score Tuning"],
      tags: ["Content", "Copy Refresh", "Snippets"]
    },

    // ---------------- E-COMMERCE OPERATIONS (94 - 100) ----------------
    {
      id: "srv-94",
      number: 94,
      title: "Courier API Integration",
      category: "E-commerce Operations",
      description: "Direct API integration between your store and courier logistics services (TCS, Trax, Leopards, PostEx, DHL, FedEx, ShipBob).",
      deliverables: ["Automatic Consignment Generation", "Airway Bill (CN) PDF Fetcher", "Real-Time Courier Rates", "Automatic Order Status Sync"],
      popular: true,
      tags: ["Courier API", "Shipping", "Logistics"]
    },
    {
      id: "srv-95",
      number: 95,
      title: "Order Tracking Systems",
      category: "E-commerce Operations",
      description: "Branded self-service tracking pages on your website where customers check live package location with their order number.",
      deliverables: ["Branded Tracking Portal", "Live Courier API Status Polling", "SMS / WhatsApp Tracking Alerts", "Reduced 'Where Is My Order' Queries"],
      popular: true,
      tags: ["Tracking Portal", "Customer Service", "WISMO"]
    },
    {
      id: "srv-96",
      number: 96,
      title: "Shipment Tracking Dashboards",
      category: "E-commerce Operations",
      description: "Internal team dashboards that categorize shipments into In-Transit, Out for Delivery, Delayed, Delivered, and Returned.",
      deliverables: ["Unified Logistics Overview", "Delayed Delivery Alert System", "Courier Performance Scoring", "Exportable Shipping Reports"],
      tags: ["Logistics Dashboard", "Ops", "Delivery Status"]
    },
    {
      id: "srv-97",
      number: 97,
      title: "COD (Cash On Delivery) Reconciliation",
      category: "E-commerce Operations",
      description: "Automated verification comparing cash collected by couriers against net payouts deposited into your bank account.",
      deliverables: ["Automated Payout Matching Engine", "Unpaid Package Flagging", "Courier Deductions Audit", "Monthly Profit Reconciler"],
      popular: true,
      tags: ["COD Reconciliation", "Finance", "Cash Flow"]
    },
    {
      id: "srv-98",
      number: 98,
      title: "Return & RTO Tracking",
      category: "E-commerce Operations",
      description: "Systems to track Return-to-Origin (RTO) parcels, analyze cancellation reasons, and reduce overall return rates.",
      deliverables: ["RTO Rate Analytics Dashboard", "Courier Return Verification", "Stock Restocking Automation", "Customer Blacklist Logic"],
      tags: ["RTO", "Returns", "Loss Prevention"]
    },
    {
      id: "srv-99",
      number: 99,
      title: "Inventory Reconciliation",
      category: "E-commerce Operations",
      description: "Reconciling physical warehouse shelf inventory against Shopify quantities, booked orders, and damaged stock.",
      deliverables: ["Discrepancy Audit Tool", "Cycle Count Logging", "Shrinkage & Damage Tracking", "Warehouse Stock Balancer"],
      tags: ["Inventory", "Auditing", "Warehouse"]
    },
    {
      id: "srv-100",
      number: 100,
      title: "Order-Processing Automation",
      category: "E-commerce Operations",
      description: "Full end-to-end automation from order placement to customer WhatsApp confirmation, courier dispatch, and inventory reduction.",
      deliverables: ["Zero-Touch Order Pipeline", "Bulk Shipping Label Generator", "Automated Fraud Scoring", "Customer Dispatch Notifications"],
      popular: true,
      tags: ["Order Automation", "Efficiency", "Scale"]
    }
  ],

  // ==========================================================================
  // 6. PORTFOLIO PROJECTS / CASE STUDIES
  // ==========================================================================
  projects: [
    {
      id: "proj-1",
      title: "LuxeVibe - High-Growth Shopify Store",
      category: "Shopify & E-com",
      description: "Custom Shopify 2.0 theme built for a modern lifestyle brand. Features bespoke Liquid sections, sticky conversion drawer, and sub-second page speed.",
      longDescription: "Engineered a custom Shopify 2.0 store architecture tailored for high traffic. Implemented custom bundle selectors, dynamic cart upsells, and optimized asset delivery resulting in a 42% lift in mobile conversions and sub-1.4s load times.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
      technologies: ["Shopify Plus", "Liquid", "Tailwind CSS", "JavaScript", "Klaviyo"],
      liveUrl: "https://example.com/demo-shopify",
      githubUrl: "https://github.com/example/shopify-theme",
      featured: true,
      metrics: "+42% Conversion Rate | 1.3s PageSpeed",
      client: "LuxeVibe International",
      keyFeatures: [
        "Dynamic cart drawer with automatic tiered free shipping progress bar",
        "Bespoke Liquid product configurator with real-time price calculator",
        "Complete Google Tag Manager & Meta CAPI integration",
        "Mobile-first sub-2 second Google PageSpeed score"
      ]
    },
    {
      id: "proj-2",
      title: "NexusERP - Automated Operations & Courier Hub",
      category: "Automation & ERP",
      description: "Full-scale custom internal ERP connecting Shopify store orders with 4 courier API endpoints, automated tracking, and COD payout reconciliation.",
      longDescription: "Eliminated over 20 hours of weekly manual staff data entry by building a unified operational hub. The platform automatically pulls Shopify orders, assigns barcodes, dispatches to couriers via REST APIs, prints shipping labels in batch, and cross-references bank deposits against COD payouts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Courier APIs"],
      liveUrl: "https://example.com/demo-erp",
      githubUrl: "https://github.com/example/courier-erp",
      featured: true,
      metrics: "Saved 20+ Staff Hours/Week | Zero COD Leaks",
      client: "Apex Retailers Group",
      keyFeatures: [
        "One-click batch booking to TCS, Trax, Leopards, and PostEx APIs",
        "Automated Airway Bill PDF generation & thermal printing",
        "COD discrepancy detector identifying unpaid delivered shipments",
        "Live delivery status tracking portal with customer WhatsApp triggers"
      ]
    },
    {
      id: "proj-3",
      title: "OmniAI - Smart Support & Catalog Assistant",
      category: "AI & Vibe Tools",
      description: "AI-powered customer service and product recommendation assistant built with Gemini 2.5 API and vector search over a 5,000+ SKU catalog.",
      longDescription: "An intelligent e-commerce chatbot trained on real inventory data and store FAQs. Resolves over 70% of routine customer support tickets autonomously while recommending matching products with direct add-to-cart triggers.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
      technologies: ["Gemini API", "React", "TypeScript", "Tailwind CSS", "Vector Search", "Webhooks"],
      liveUrl: "https://example.com/demo-ai-tool",
      githubUrl: "https://github.com/example/omni-ai-support",
      featured: true,
      metrics: "72% Inquiries Resolved Autonomously",
      client: "TechGadgets Direct",
      keyFeatures: [
        "Real-time semantic search matching customer queries with SKU catalog",
        "Direct checkout integration with pre-filled promo codes",
        "Human agent escalation fallback with full conversation history",
        "Automated multi-language translation for global customers"
      ]
    },
    {
      id: "proj-4",
      title: "Performance Ads Engine - 4.2x ROAS Meta/TikTok Campaign",
      category: "Ads & Growth",
      description: "End-to-end performance marketing campaign architecture spanning creative testing, Conversion API tracking, and high-scale scaling funnels.",
      longDescription: "Architected and scaled full-funnel advertising across Meta and TikTok. Deployed Server-Side CAPI tracking, conducted rapid 3:2:2 creative testing, and achieved a consistent 4.2x ROAS at $50k+ monthly spend.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      technologies: ["Meta Ads Manager", "TikTok Ads", "CAPI Server", "Looker Studio", "Google Tag Manager"],
      liveUrl: "https://example.com/demo-growth",
      featured: true,
      metrics: "4.2x Blended ROAS | $250k+ Revenue Scaled",
      client: "Velour Apparel Co.",
      keyFeatures: [
        "100% server-side tracking setup bypassing iOS 14+ tracking drops",
        "Iterative UGC creative testing pipeline identifying 5 evergreen winners",
        "Dynamic Product Ads (DPA) targeting segmented cart abandoners",
        "Real-time executive Looker Studio dashboard tracking blended MER"
      ]
    },
    {
      id: "proj-5",
      title: "SheetsAuto Pro - Google Sheets & Excel ERP",
      category: "Automation & ERP",
      description: "Advanced Google Apps Script automation suite linking warehouse inventories, daily expense ledgers, and automated monthly P&L generation.",
      longDescription: "Developed a comprehensive Google Sheets automation engine with custom menus, scheduled triggers, and REST API connectors that synchronizes sales data across multiple platforms into an executive dashboard.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=900&q=80",
      technologies: ["Google Apps Script", "Excel VBA", "Sheets API", "JavaScript"],
      liveUrl: "https://example.com/demo-sheets",
      featured: false,
      metrics: "100% Automated Financial Aggregation",
      client: "Global Logistics Ltd"
    },
    {
      id: "proj-6",
      title: "DevSprint - Rapid Web & Admin UI Suite",
      category: "Web Apps & UI",
      description: "Responsive SaaS landing page and administrative interface built with React 19, TypeScript, and high-contrast Tailwind components.",
      longDescription: "A sleek, lightning-fast application landing page and administrative console featuring real-time data visualizers, customizable theme modes, and accessible component architectures.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vite"],
      liveUrl: "https://example.com/demo-saas",
      githubUrl: "https://github.com/example/dev-sprint-ui",
      featured: false,
      metrics: "100/100 Lighthouse Performance",
      client: "SprintStack Software"
    }
  ],

  // ==========================================================================
  // 7. SKILLS CATEGORIES & LEVELS
  // ==========================================================================
  skillCategories: [
    {
      id: "skill-dev",
      categoryName: "Development & Engineering",
      iconName: "Code",
      description: "Modern frontend frameworks, typed languages, and high-performance desktop architectures.",
      skills: [
        { name: "React / Vite", level: 95, highlight: true },
        { name: "TypeScript / JavaScript", level: 92, highlight: true },
        { name: "HTML5 / Modern CSS", level: 98 },
        { name: "Tailwind CSS", level: 96, highlight: true },
        { name: "C# / .NET", level: 85 },
        { name: "Windows Forms / WPF", level: 84 },
        { name: "Electron Desktop", level: 80 },
        { name: "Node.js / Express APIs", level: 88 }
      ]
    },
    {
      id: "skill-ecom",
      categoryName: "E-commerce & Shopify",
      iconName: "ShoppingBag",
      description: "End-to-end Shopify development, custom Liquid templating, and store optimizations.",
      skills: [
        { name: "Shopify Store Setup & Config", level: 98, highlight: true },
        { name: "Liquid Theme Development", level: 94, highlight: true },
        { name: "Conversion Rate Optimization (CRO)", level: 90, highlight: true },
        { name: "Shopify Speed Optimization", level: 92 },
        { name: "Product & Catalog Management", level: 96 },
        { name: "Order & Fulfillment Flows", level: 95 },
        { name: "App Integrations & Webhooks", level: 90 }
      ]
    },
    {
      id: "skill-ai",
      categoryName: "AI & Vibe Coding",
      iconName: "Sparkles",
      description: "Rapid MVP builds, LLM APIs, prompt engineering, and intelligent workflow assistants.",
      skills: [
        { name: "AI-Assisted Fast Development", level: 96, highlight: true },
        { name: "Prompt Engineering & Guardrails", level: 94, highlight: true },
        { name: "Gemini / Claude / OpenAI APIs", level: 90, highlight: true },
        { name: "AI Chatbots & RAG Systems", level: 88 },
        { name: "Rapid Prototype to Production", level: 92 },
        { name: "AI Content & Ecom Automations", level: 90 }
      ]
    },
    {
      id: "skill-marketing",
      categoryName: "Marketing & Growth",
      iconName: "TrendingUp",
      description: "Performance ad campaigns, Server-Side tracking, and creative testing frameworks.",
      skills: [
        { name: "Meta Ads (Facebook & Instagram)", level: 92, highlight: true },
        { name: "TikTok Ads Manager", level: 88, highlight: true },
        { name: "Conversions API (CAPI) & Pixel Setup", level: 95, highlight: true },
        { name: "Performance Creative Testing", level: 89 },
        { name: "Google Analytics 4 & Tag Manager", level: 90 },
        { name: "E-commerce Funnel Strategy", level: 91 }
      ]
    },
    {
      id: "skill-automation",
      categoryName: "Automation & Operations",
      iconName: "Cpu",
      description: "Connecting business software, spreadsheet automation, and logistics reconciliations.",
      skills: [
        { name: "Google Sheets & Apps Script", level: 96, highlight: true },
        { name: "Excel Advanced Macros & VBA", level: 93, highlight: true },
        { name: "Courier APIs & Logistics Tracking", level: 94, highlight: true },
        { name: "COD Reconciliation Engines", level: 95 },
        { name: "Custom Business ERPs & Dashboards", level: 90 },
        { name: "WhatsApp Business API Automation", level: 88 }
      ]
    }
  ],

  // ==========================================================================
  // 8. 5-STEP WORK PROCESS
  // ==========================================================================
  processSteps: [
    {
      stepNumber: "01",
      title: "Discover",
      tagline: "Deep Dive into Business Goals",
      description: "We analyze your exact business model, operational bottlenecks, target audience, and primary revenue objectives to outline a precise project scope.",
      deliverables: ["Requirements Document", "Architecture Plan", "Technical Stack Selection", "Timeline & Milestone Roadmap"],
      iconName: "Search"
    },
    {
      stepNumber: "02",
      title: "Plan",
      tagline: "Solution Architecture & Wireframing",
      description: "We define the software architecture, user journey, database schema, design prototypes, and automation logic before writing production code.",
      deliverables: ["Interactive Wireframes", "Database & API Schema", "Milestone Schedule", "Risk Assessment"],
      iconName: "FileCode2"
    },
    {
      stepNumber: "03",
      title: "Build",
      tagline: "High-Velocity, Clean Development",
      description: "Development begins with modular, well-documented code, responsive layouts, API hooks, and regular milestone demos for fast feedback.",
      deliverables: ["Clean Modular Codebase", "Weekly Live Stage Demos", "API & Webhook Integrations", "Database Integration"],
      iconName: "Code2"
    },
    {
      stepNumber: "04",
      title: "Optimize",
      tagline: "Rigorous Testing & Conversion Tuning",
      description: "We stress-test performance, verify mobile responsiveness across all devices, test security boundaries, and refine conversion flows.",
      deliverables: ["Cross-Device QA Testing", "Lighthouse & Speed Optimization", "Conversion Funnel Check", "Tracking Validation"],
      iconName: "Sliders"
    },
    {
      stepNumber: "05",
      title: "Launch & Support",
      tagline: "Zero-Downtime Deployment & Care",
      description: "We deploy the solution live to production, verify analytics tracking, train your staff, and provide continuous proactive post-launch support.",
      deliverables: ["Production Deployment", "Staff Video Walkthrough", "30-Day Post-Launch Warranty", "Ongoing Retainer Options"],
      iconName: "Rocket"
    }
  ],

  // ==========================================================================
  // 9. WHY WORK WITH ME (9 VALUE PROPOSITIONS)
  // ==========================================================================
  whyMe: [
    {
      id: "why-1",
      title: "Business-Focused Solutions",
      description: "I don't just write code — I build assets engineered to increase revenue, lower operating costs, and drive tangible business growth.",
      iconName: "Target",
      badge: "Outcome Driven"
    },
    {
      id: "why-2",
      title: "Fast Development Velocity",
      description: "Leveraging cutting-edge AI vibe coding tools and reusable component frameworks to deliver completed projects in days, not months.",
      iconName: "Zap",
      badge: "5x Speed"
    },
    {
      id: "why-3",
      title: "Modern Tech Stack",
      description: "Building with React 19, TypeScript, Tailwind CSS, Vite, Liquid, and modern REST APIs ensuring your digital products stay future-proof.",
      iconName: "Layers",
      badge: "Modern & Clean"
    },
    {
      id: "why-4",
      title: "E-Commerce Expertise",
      description: "Deep understanding of the entire e-commerce lifecycle: from storefront design and conversion rate optimization to courier logistics and COD.",
      iconName: "ShoppingBag",
      badge: "Ecom Specialist"
    },
    {
      id: "why-5",
      title: "AI-Powered Workflows",
      description: "Integrating intelligent LLM models, conversational bots, and automated content generation directly into your daily business processes.",
      iconName: "Sparkles",
      badge: "AI Native"
    },
    {
      id: "why-6",
      title: "Automation-First Mindset",
      description: "Eliminating repetitive, error-prone manual spreadsheets and staff busywork with bulletproof background automations and API connectors.",
      iconName: "Cpu",
      badge: "Zero Busywork"
    },
    {
      id: "why-7",
      title: "Responsive Communication",
      description: "Direct, transparent communication via WhatsApp, Slack, or Email with average response times under 1 hour during working hours.",
      iconName: "MessageSquare",
      badge: "Direct Contact"
    },
    {
      id: "why-8",
      title: "Custom Tailored Solutions",
      description: "No rigid templates or cookie-cutter solutions. Everything is crafted specifically around your company's unique workflow requirements.",
      iconName: "CheckCircle2",
      badge: "100% Bespoke"
    },
    {
      id: "why-9",
      title: "Post-Launch Support",
      description: "Reliable post-deployment maintenance, bug fixing, staff training, and continuous iterative improvements to protect your investment.",
      iconName: "ShieldCheck",
      badge: "Guaranteed"
    }
  ],

  // ==========================================================================
  // 10. PRICING & SERVICE PACKAGES
  // ==========================================================================
  pricing: [
    {
      id: "pkg-starter",
      name: "Starter Package",
      tag: "Small Businesses & Fast MVPs",
      price: "$299",
      billingCycle: "per project",
      description: "Ideal for startups, small businesses, and single-service needs looking for a professional digital foundation.",
      features: [
        "Complete modern 1-3 page website or landing page",
        "Mobile-first responsive design & high-contrast UI",
        "Essential SEO meta tags & social share setup",
        "Contact form & direct WhatsApp click-to-chat",
        "Fast 3-5 day delivery turnaround",
        "14-day post-launch bug fix warranty"
      ],
      deliveryTime: "3 - 5 Business Days",
      idealFor: "Startups, single landing pages, portfolio sites & quick MVPs",
      ctaText: "Choose Starter Plan"
    },
    {
      id: "pkg-pro",
      name: "Professional Package",
      tag: "High-Converting E-commerce & Web Apps",
      popular: true,
      price: "$799",
      billingCycle: "per project",
      description: "Comprehensive solution for growing e-commerce brands and businesses wanting high conversions and integrations.",
      features: [
        "Full turnkey Shopify store or custom React web app",
        "Custom Liquid sections & high-converting product pages",
        "Meta & TikTok Pixel + Server-Side CAPI tracking",
        "Automated courier API or Google Sheets workflow sync",
        "Sub-2s Google PageSpeed optimization",
        "Email / WhatsApp automated order notification setup",
        "30-day dedicated post-launch support"
      ],
      deliveryTime: "7 - 12 Business Days",
      idealFor: "E-commerce stores, growing brands & business web applications",
      ctaText: "Choose Professional Plan"
    },
    {
      id: "pkg-premium",
      name: "Premium / Enterprise",
      tag: "Full-Stack Software & Custom ERPs",
      price: "$1,499",
      billingCycle: "per project",
      description: "Full-scale custom software, advanced operational automations, multi-courier COD reconcilers, and AI tooling.",
      features: [
        "Custom business ERP / internal dashboard software",
        "Multi-courier booking API integration & Airway Bill printing",
        "Automated COD bank reconciliation & discrepancy detector",
        "Custom AI chatbot integration (Gemini / Claude API)",
        "Desktop Windows software (C#/.NET/WPF/Electron) option",
        "Priority 24/7 direct WhatsApp communication channel",
        "60-day VIP support & team video training sessions"
      ],
      deliveryTime: "14 - 21 Business Days",
      idealFor: "Established brands, logistics hubs, enterprise automation & custom SaaS",
      ctaText: "Choose Premium Plan"
    }
  ],

  // ==========================================================================
  // 11. TESTIMONIALS & REVIEWS
  // ==========================================================================
  testimonials: [
    {
      id: "test-1",
      clientName: "Harris Vance",
      company: "LuxeVibe Apparel",
      position: "Founder & CEO",
      review: "Muhammad completely transformed our Shopify store. Our mobile conversion rate jumped by 42% in the first three weeks alone. His speed and attention to detail in custom Liquid development is world-class.",
      rating: 5,
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      verified: true,
      projectType: "Shopify Store & Speed Optimization"
    },
    {
      id: "test-2",
      clientName: "Sarah Jenkins",
      company: "Nordic Goods Co.",
      position: "Operations Director",
      review: "The courier reconciliation and automated Google Sheets system he built saved our warehouse team at least 20 hours every single week. We eliminated all shipping discrepancies. Truly an indispensable partner.",
      rating: 5,
      profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      verified: true,
      projectType: "Custom ERP & Automation"
    },
    {
      id: "test-3",
      clientName: "David Malik",
      company: "Apex Direct E-Com",
      position: "Head of Growth",
      review: "Finding a developer who understands both hardcore code (React, APIs) and performance marketing (Meta/TikTok ads, CAPI, CRO) is rare. He set up our ad tracking and scaled our campaigns to 4.2x ROAS.",
      rating: 5,
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      verified: true,
      projectType: "Performance Marketing & CAPI"
    }
  ],

  // ==========================================================================
  // 12. FREQUENTLY ASKED QUESTIONS (FAQ)
  // ==========================================================================
  faqs: [
    {
      id: "faq-1",
      question: "What services do you offer?",
      answer: "I provide an all-in-one digital service suite covering Shopify & E-commerce development, custom web applications (React/TypeScript), AI/vibe coding tools, business automation (Google Sheets, Excel VBA, API webhooks), Meta & TikTok performance advertising, and courier/logistics automation systems.",
      category: "General"
    },
    {
      id: "faq-2",
      question: "Can you build a Shopify store from scratch?",
      answer: "Yes, absolutely. I handle everything from initial store setup, domain & payment gateway integration, custom Liquid theme development, high-converting product pages, and app integrations to speed optimization and launch.",
      category: "Shopify"
    },
    {
      id: "faq-3",
      question: "Can you automate my existing business processes?",
      answer: "Yes. I specialize in identifying operational bottlenecks and replacing manual work with automated systems—such as syncing spreadsheets with live databases, automated courier booking, invoice generation, WhatsApp order alerts, and COD reconciliations.",
      category: "Automation"
    },
    {
      id: "faq-4",
      question: "Can you build custom software & desktop applications?",
      answer: "Yes! In addition to modern web applications (React/Node.js), I build native Windows desktop software using C#, .NET, Windows Forms, WPF, and cross-platform Electron applications tailored specifically to your company's workflows.",
      category: "Development"
    },
    {
      id: "faq-5",
      question: "Can you manage Meta and TikTok Ads?",
      answer: "Yes. I set up and manage performance advertising campaigns on Facebook, Instagram, and TikTok, including Server-Side Conversion API (CAPI) tracking, creative testing frameworks, audience research, and CPA scaling.",
      category: "Marketing"
    },
    {
      id: "faq-6",
      question: "Can you build AI-powered tools & chatbots?",
      answer: "Yes. I integrate state-of-the-art models (Gemini 2.5, Claude 3.7, GPT-4o) to create custom customer service chatbots, intelligent product recommendation engines, automated report summarizers, and rapid MVP prototypes.",
      category: "AI"
    },
    {
      id: "faq-7",
      question: "Do you work with international clients?",
      answer: "Yes, I regularly collaborate with business owners, agencies, and startups across the US, UK, UAE, Canada, Europe, and Pakistan. We communicate seamlessly via WhatsApp, Slack, Zoom, or Email.",
      category: "General"
    },
    {
      id: "faq-8",
      question: "How long does a typical project take?",
      answer: "Simple landing pages or automations typically take 3 to 5 days. Complete custom Shopify stores take 7 to 12 days. Complex custom ERP software or full-stack web applications take 2 to 3 weeks depending on scope.",
      category: "Process"
    },
    {
      id: "faq-9",
      question: "Do you provide post-launch maintenance & support?",
      answer: "Yes! Every project includes a complimentary post-launch warranty period (14 to 60 days) to guarantee stability. Ongoing monthly support and retainer packages are also available for continuous maintenance and growth.",
      category: "Support"
    },
    {
      id: "faq-10",
      question: "How can I contact you or start a project?",
      answer: "You can reach out instantly via WhatsApp, send an email, or submit the contact form below with your project requirements. I typically respond within 1 hour during active working hours.",
      category: "General"
    }
  ],

  // ==========================================================================
  // 13. SEO & SOCIAL METADATA
  // ==========================================================================
  seo: {
    title: "Freelance Full-Stack Developer, E-Commerce & AI Specialist",
    description: "Expert Shopify developer, full-stack engineer, AI vibe coder, and performance marketer. Building websites, custom business software, workflow automations, and scaling Meta/TikTok ads.",
    keywords: "Shopify Developer, Full-Stack Developer, AI Vibe Coding, Business Automation, Google Sheets Automation, Meta Ads, TikTok Ads, React Developer, Courier API Integration, Freelancer Faisalabad",
    ogTitle: "Muhammad Ibisham | Full-Stack Developer & AI Automation Specialist",
    ogDescription: "I Build, Automate & Grow Digital Businesses. Shopify, Custom Web Apps, AI Solutions, Business Automation & Meta/TikTok Ads.",
    ogImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    siteUrl: "https://ibisham-portfolio.vercel.app"
  },

  // ==========================================================================
  // 14. BOTTOM FINAL CALL TO ACTION (CTA)
  // ==========================================================================
  ctaSection: {
    headline: "Let's Turn Your Idea Into Reality.",
    subheadline: "From websites and Shopify stores to AI tools, automation and digital marketing — let's build something that actually helps your business grow.",
    primaryBtnText: "Start a Project",
    whatsappBtnText: "WhatsApp Me",
    availableBadge: "Accepting New Client Projects & Retainers"
  }
};
