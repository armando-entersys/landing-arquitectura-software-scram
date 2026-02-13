import type { SiteContent } from './types';

export const en: SiteContent = {
  hero: {
    eyebrow: 'Enterprise Software Engineering | Nationwide Coverage',
    title: 'Your systems ready',
    titleHighlight: 'in weeks',
    titleContinued: 'not months',
    subtitle:
      'Agentic Architect: AI + Senior Engineers shipping enterprise software for manufacturing, logistics, and distribution across Mexico. Fixed budget. Full transparency.',
    ctaPrimary: 'Book an architecture session',
    ctaSecondary: 'See case studies',
    helperText: 'No-commitment assessment • 24h response • Nationwide coverage',
    stats: [
      { value: '40%', label: 'Lower cost' },
      { value: '3x', label: 'Faster' },
      { value: '50+', label: 'Projects' },
    ],
  },

  problem: {
    title: 'Why do software projects fail?',
    subtitle: '70% of projects blow their budget. 75% of ERP rollouts miss the mark. It\'s not bad luck — it\'s a systemic problem.',
    challenges: [
      {
        icon: 'SearchX',
        title: 'The Black Box',
        description: 'You sign the deposit and the vendor vanishes. Weeks go by with no deliverables and status reports full of jargon you can\'t decipher. You lose control.',
        solution: 'Glass Box Protocol: real-time access to repositories and project boards. You see every milestone, every blocker.',
      },
      {
        icon: 'TrendingUp',
        title: 'Budget blowouts',
        description: 'They bill by the hour, which rewards inefficiency. 70% of projects end up costing 27% more than planned.',
        solution: 'Fixed-price budget, guaranteed. If costs go up, that\'s on us — not you.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Software that can\'t take the heat',
        description: 'It looks amazing in the boardroom demo but falls apart the moment your teams use it on the floor or in the field.',
        solution: 'We test with your real operation: spotty connectivity, high volume, field conditions.',
      },
    ],
  },

  howItWorks: {
    title: 'The Try & Buy Method',
    subtitle: 'Don\'t sign blank checks. Test-drive our engineering first.',
    steps: [
      {
        number: '1',
        title: 'Architecture session',
        description: 'A hands-on technical consult where we dissect your real operational pain. This is not a sales call.',
        time: '30 min',
      },
      {
        number: '2',
        title: 'Technical blueprint',
        description: 'Architecture diagrams, tech stack, and a fixed-price quote. You see the solution before you buy it.',
        time: '2-3 days',
      },
      {
        number: '3',
        title: 'Working prototype',
        description: 'A functional build your team can actually test. Real software, not mockups.',
        time: '1-2 weeks',
      },
      {
        number: '4',
        title: 'Informed decision',
        description: 'If our proposal makes sense, we move forward. If not, we shake hands and you keep the assessment.',
        time: 'No pressure',
      },
    ],
  },

  benefits: {
    title: 'Agentic Architect',
    items: [
      {
        icon: 'Zap',
        title: 'Agentic speed',
        description: 'AI generates 80% of the codebase. Senior Engineers audit and design the business logic.',
        metric: '3x faster',
      },
      {
        icon: 'DollarSign',
        title: 'Fixed budget',
        description: 'Locked-in price from day one. No surprise overtime charges or hidden fees.',
        metric: '40% less',
      },
      {
        icon: 'Eye',
        title: 'Glass Box',
        description: 'Full access to repos and dashboards. Like having the team working behind a glass wall.',
        metric: 'Full transparency',
      },
      {
        icon: 'Shield',
        title: 'Try & Buy',
        description: 'Technical evaluation before you invest. We take on the risk of impressing you.',
        metric: 'Zero risk',
      },
      {
        icon: 'Target',
        title: 'Built for your ops',
        description: 'Software designed around your actual workflow — not cookie-cutter templates.',
        metric: 'Custom-fit',
      },
      {
        icon: 'Rocket',
        title: 'Field-tested',
        description: 'Validated with your real teams, under your real operating conditions.',
        metric: 'Guaranteed',
      },
    ],
  },

  clientLogos: {
    title: 'Companies that trust us',
    subtitle: 'We work with leaders in manufacturing, logistics, and commerce across Mexico',
    categories: [
      'Manufacturing Groups',
      'Logistics Companies',
      'Trading Companies',
      'Distributors',
      'Automotive Industry',
      'Construction Firms',
    ],
  },

  caseStudies: {
    title: 'Proven results',
    subtitle: 'Real projects delivered on budget and on time',
    cases: [
      {
        title: 'Order & Invoicing ERP',
        company: 'Baja Aqua Farms',
        industry: 'Aquaculture / Export',
        challenge: 'Fragmented order process spread across legacy systems, Oracle Cloud, and Salesforce. Manual CFDI invoicing, no automated per-piece inventory reservations, and zero traceability for the order-to-cash cycle.',
        solution: 'API gateway (.NET 8) orchestrating the full flow: per-piece inventory selection → Oracle OIC order creation → automatic reservation → AutoInvoice → CFDI e-invoicing via PAC. 4 background jobs with retries, locks, and full audit trail.',
        results: [
          { metric: '4 jobs', label: 'Automated 24/7 pipeline' },
          { metric: '16 DBs', label: 'Unified in one gateway' },
          { metric: 'CFDI', label: 'Automated e-invoicing' },
        ],
        image: '/images/cases/aquafarms-erp.jpg',
        testimonial: 'From order to stamped invoice in minutes, not days. The pipeline runs itself and every step is fully audited.',
      },
      {
        title: 'Industrial Onboarding & Certification',
        company: 'Coca-Cola FEMSA (KOF)',
        industry: 'Manufacturing / Beverages',
        challenge: 'Mandatory safety training for every person entering the plant. 100% manual process: paper sign-in sheets, Word certificates, impossible verification at access points.',
        solution: 'Digital platform with anti-skip video, 30-question exams per section (safety, food safety, environmental), auto-generated PDF certificate with verifiable QR, digital badge, and Smartsheet sync.',
        results: [
          { metric: '< 2s', label: 'Certificate generation' },
          { metric: '↓ 90%', label: 'Admin workload' },
          { metric: 'QR', label: 'Instant verification' },
        ],
        image: '/images/cases/kof-onboarding.jpg',
        testimonial: 'We eliminated paperwork completely. The guard scans the QR and instantly knows whether the person is certified.',
      },
      {
        title: 'Logistics Management System',
        company: 'National Distribution Operation',
        industry: 'Logistics & Distribution',
        challenge: 'Routes planned in Excel, zero visibility for customers, failed deliveries due to no-shows, paper proof of delivery, and no satisfaction metrics at all.',
        solution: 'End-to-end system with ERP sync (Bind), visual map-based route planning with AI optimization (Google Routes), offline-first mobile app for drivers with digital signature & photo, secure hash-based public tracking, and automated CSAT surveys.',
        results: [
          { metric: '↓ 40%', label: 'Miles driven' },
          { metric: 'Real-time', label: 'Customer tracking' },
          { metric: '5 roles', label: 'Procurement, Traffic, Driver, Sales, Director' },
        ],
        image: '/images/cases/scram-logistics.jpg',
        testimonial: 'Customers can see their order in real time. Failed deliveries dropped dramatically.',
      },
    ],
  },

  comparison: {
    title: 'Agentic Architect vs. the old way',
    subtitle: '4 out of 10 Mexican companies lose $1-5M USD a year to software failures',
    items: [
      {
        aspect: 'Transparency',
        traditional: 'Status reports every two weeks that make no sense',
        agenticArchitect: 'Real-time access to repositories and dashboards',
        icon: 'Eye',
      },
      {
        aspect: 'Budget',
        traditional: 'Balloons 40-60% during the project',
        agenticArchitect: 'Fixed price from the start, backed by contract',
        icon: 'DollarSign',
      },
      {
        aspect: 'Speed',
        traditional: '4-6 months before you see anything working',
        agenticArchitect: '1-2 weeks to a working prototype',
        icon: 'Clock',
      },
      {
        aspect: 'Risk',
        traditional: 'Big deposit with no real guarantees',
        agenticArchitect: 'Try & Buy: evaluate before you commit',
        icon: 'Shield',
      },
      {
        aspect: 'Quality',
        traditional: 'Works in the demo, breaks in production',
        agenticArchitect: 'Validated with your real operation in the field',
        icon: 'CheckCircle',
      },
    ],
  },

  team: {
    title: 'The team behind the code',
    subtitle: 'Senior engineers with 15+ years transforming industrial operations',
    description:
      'We\'re not a massive agency. We\'re a tight-knit team of seasoned engineers who understand how manufacturers, distributors, and logistics companies actually run in Mexico. We speak your operational language.',
    stats: [
      { value: '15+', label: 'Years of experience' },
      { value: '50+', label: 'Projects delivered' },
      { value: '100%', label: 'On time & on budget' },
    ],
    contact: {
      name: 'Eng. Armando Cortés',
      role: 'Project Director',
      description: '15 years building enterprise systems for manufacturing and logistics. Your direct point of contact throughout the entire project.',
      image: '/images/team/armando.jpg',
    },
  },

  testimonials: {
    title: 'What our clients say',
    items: [
      {
        quote: 'We needed a WMS for the warehouse. It was live in 6 weeks. Our previous vendor had us waiting 4 months with nothing to show for it.',
        author: 'Roberto Sánchez',
        role: 'Director of Operations',
        company: 'Grupo Industrial del Bajío',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces',
      },
      {
        quote: 'The budget never changed. In 15 years of hiring software vendors, that had never happened to me.',
        author: 'Ana Martínez',
        role: 'IT Manager',
        company: 'Comercializadora del Norte',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces',
      },
      {
        quote: 'Being able to see what they\'re doing every single day completely changed the dynamic. It\'s not a black box anymore — it\'s a glass wall.',
        author: 'Carlos Fernández',
        role: 'COO',
        company: 'Logística Express',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces',
      },
    ],
  },

  pricing: {
    title: 'How does pricing work?',
    subtitle: 'Fixed quote in 48 hours. These factors determine the scope:',
    factors: [
      {
        icon: 'Target',
        title: 'Operational complexity',
        description: 'How many processes we automate and how unique your workflows are.',
      },
      {
        icon: 'Users',
        title: 'Users & locations',
        description: 'Whether it\'s for 5 people or 500, one office or 20 branches.',
      },
      {
        icon: 'Plug',
        title: 'Required integrations',
        description: 'Connecting with your current systems: ERP, SAP, APIs, sensors, or hardware.',
      },
      {
        icon: 'Database',
        title: 'Data volume',
        description: 'Thousands or millions of transactions. Every project scales differently.',
      },
    ],
    guarantee: {
      title: 'The Scram Commitment',
      points: [
        'Fixed budget before we start',
        'Technical assessment before any investment',
        'No hidden costs or surprise changes',
        'Code is 100% yours, documented and maintainable',
      ],
    },
    cta: {
      title: 'Fixed quote in 48 hours',
      subtitle: 'Tell us about your operation. We\'ll deliver a technical blueprint and detailed quote.',
      buttonText: 'Request a technical assessment',
    },
  },

  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'How does the Try & Buy model work?',
        answer:
          'We run a technical assessment and present you with an architecture blueprint and a fixed-price quote. If our proposal makes sense, we move forward. If not, you keep the full analysis — no strings attached. We take on the risk of proving our competence.',
      },
      {
        question: 'What if the project doesn\'t meet my expectations?',
        answer:
          'We only move forward when you\'re satisfied with the deliverables at each phase. No fine print, no forced commitments. The code is yours from day one.',
      },
      {
        question: 'Do you work on-site or remote?',
        answer:
          'We operate 100% remotely with senior architects and engineers distributed across Mexico. Our infrastructure is enterprise-grade and we collaborate in real time. If a project requires an on-site presence, we\'ll travel wherever needed.',
      },
      {
        question: 'How do you guarantee you won\'t disappear mid-project?',
        answer:
          'Glass Box Protocol: you have real-time access to repositories and project management boards. You see every commit, every milestone, every blocker. It\'s impossible to disappear when the client sees everything.',
      },
      {
        question: 'What does post-launch support include?',
        answer:
          'The first 3 months of support and adjustments are included. After that, you can opt for a monthly maintenance plan or manage it yourself — the code is 100% yours, fully documented with no hidden dependencies.',
      },
    ],
  },

  cta: {
    title: 'Throw us your toughest challenge',
    subtitle: '30 minutes with a Senior Architect. No commitment, no generic slide decks.',
    button: 'Book an architecture session',
    helperText: 'Response in under 24 hours • Technical assessment included',
  },

  ui: {
    screenshotPlaceholder: 'Real system screenshot',
    softwareRunning: 'Software running in real companies',
    videoDemoHere: 'Video demo here',
    theChallenge: 'The challenge:',
    theSolution: 'The solution:',
    traditionalMethod: 'Traditional method',
    withAgenticArchitect: 'With Agentic Architect',
    requestDiagnostic: 'Request a technical assessment',
    closedBudget48h: 'Fixed quote in 48 hours',
    scheduleCall: 'Schedule a call',
    whatsAppDirect: 'WhatsApp direct',
    projectsDelivered: '50+ projects delivered',
    industriesBadge: 'Manufacturing, logistics & distribution',
    chatTitle: 'Chat with an expert',
    chatSubtitle: 'Response in under 15 minutes',
    chatMessage: 'Hi! I\'m from the SCRAM team. How can I help you with your software project?',
    chatNow: 'Now',
    startConversation: 'Start a conversation',
    chatSchedule: 'Mon-Fri 9am-6pm | Instant response',
    copyright: '© 2026 Scram Consulting. All rights reserved.',
    tagline: 'Enterprise software that works',
    calendarTitle: 'Software Architecture Session - Scram Consulting',
    calendarDetails:
      'Technical assessment session with Eng. Armando Cortés.\n\nTopics:\n- Software needs evaluation\n- Recommended architecture\n- Timeline & estimated budget\n\nContact: Eng. Armando Cortés\nWhatsApp: +52 221 106 5056\nEmail: contacto@scram2k.com',
    calendarLocation: 'Google Meet (link will be sent)',
    whatsAppHeroMsg: 'Hi, I\'m interested in booking a software architecture session for my company.',
    whatsAppPricingMsg: 'Hi, I\'d like to request a technical assessment for my company.',
    whatsAppCtaMsg: 'Hi, I\'m interested in booking a software architecture session for my company.',
    whatsAppTeamMsg: 'Hi Eng. Armando, I\'d like to learn more about the software architecture services at Scram Consulting.',
    whatsAppFloatingMsg: 'Hi, I\'d like to learn more about Agentic Architect for my company.',
  },

  metadata: {
    title: 'Agentic Architect | Enterprise Software | Scram Consulting',
    description:
      'Enterprise software deployed in weeks, not months. AI + Senior Engineers with a fixed budget. Manufacturing, logistics, and distribution across Mexico. Try & Buy methodology.',
    ogTitle: 'Enterprise Software in Weeks | Scram Consulting',
    ogDescription:
      'Agentic Architect: AI + Senior Engineers. Fixed budget, full transparency. Manufacturing, logistics, and distribution across Mexico.',
    twitterTitle: 'Enterprise Software in Weeks | Scram Consulting',
    twitterDescription:
      'AI + Senior Engineers. Fixed budget. Manufacturing, logistics, and distribution across Mexico.',
  },
};
