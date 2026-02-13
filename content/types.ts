export interface SiteContent {
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    titleContinued: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    helperText: string;
    stats: { value: string; label: string }[];
  };

  problem: {
    title: string;
    subtitle: string;
    challenges: {
      icon: string;
      title: string;
      description: string;
      solution: string;
    }[];
  };

  howItWorks: {
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
      time: string;
    }[];
  };

  benefits: {
    title: string;
    items: {
      icon: string;
      title: string;
      description: string;
      metric: string;
    }[];
  };

  clientLogos: {
    title: string;
    subtitle: string;
    categories: string[];
  };

  caseStudies: {
    title: string;
    subtitle: string;
    cases: {
      title: string;
      company: string;
      industry: string;
      challenge: string;
      solution: string;
      results: { metric: string; label: string }[];
      image: string;
      testimonial: string;
    }[];
  };

  comparison: {
    title: string;
    subtitle: string;
    items: {
      aspect: string;
      traditional: string;
      agenticArchitect: string;
      icon: string;
    }[];
  };

  team: {
    title: string;
    subtitle: string;
    description: string;
    stats: { value: string; label: string }[];
    contact: {
      name: string;
      role: string;
      description: string;
      image: string;
    };
  };

  testimonials: {
    title: string;
    items: {
      quote: string;
      author: string;
      role: string;
      company: string;
      image: string;
    }[];
  };

  pricing: {
    title: string;
    subtitle: string;
    factors: {
      icon: string;
      title: string;
      description: string;
    }[];
    guarantee: {
      title: string;
      points: string[];
    };
    cta: {
      title: string;
      subtitle: string;
      buttonText: string;
    };
  };

  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };

  cta: {
    title: string;
    subtitle: string;
    button: string;
    helperText: string;
  };

  /** UI strings not in the marketing copy */
  ui: {
    screenshotPlaceholder: string;
    softwareRunning: string;
    videoDemoHere: string;
    theChallenge: string;
    theSolution: string;
    traditionalMethod: string;
    withAgenticArchitect: string;
    requestDiagnostic: string;
    closedBudget48h: string;
    scheduleCall: string;
    whatsAppDirect: string;
    projectsDelivered: string;
    industriesBadge: string;
    chatTitle: string;
    chatSubtitle: string;
    chatMessage: string;
    chatNow: string;
    startConversation: string;
    chatSchedule: string;
    copyright: string;
    tagline: string;
    calendarTitle: string;
    calendarDetails: string;
    calendarLocation: string;
    whatsAppHeroMsg: string;
    whatsAppPricingMsg: string;
    whatsAppCtaMsg: string;
    whatsAppTeamMsg: string;
    whatsAppFloatingMsg: string;
  };

  /** Metadata for SEO */
  metadata: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
}
