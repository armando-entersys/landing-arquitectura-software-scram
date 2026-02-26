import type { SiteContent } from './types';

export const es: SiteContent = {
  hero: {
    eyebrow: 'Ingeniería de Software Corporativo | Alcance Nacional',
    title: 'Tus sistemas listos',
    titleHighlight: 'en semanas',
    titleContinued: 'no en meses',
    subtitle:
      'Agentic Architect: IA + Ingenieros Senior desplegando software empresarial para manufactura, logística y distribución en todo México. Presupuesto cerrado. Transparencia total.',
    ctaPrimary: 'Solicitar sesión de arquitectura',
    ctaSecondary: 'Ver casos de éxito',
    helperText: 'Diagnóstico sin compromiso • Respuesta en 24h • Cobertura nacional',
    stats: [
      { value: '40%', label: 'Menos costo' },
      { value: '3x', label: 'Más rápido' },
      { value: '50+', label: 'Proyectos' },
    ],
  },

  heroForm: {
    title: 'Agenda tu sesión gratuita',
    subtitle: 'Blueprint técnico + presupuesto cerrado en 48h',
    companyLabel: 'Empresa',
    nameLabel: 'Nombre completo',
    emailLabel: 'Email corporativo',
    needLabel: '¿Qué necesitas?',
    needOptions: [
      { value: 'erp', label: 'Sistema ERP / Gestión' },
      { value: 'app', label: 'App móvil' },
      { value: 'integracion', label: 'Integración de sistemas' },
      { value: 'automatizacion', label: 'Automatización de procesos' },
      { value: 'otro', label: 'Otro' },
    ],
    submitText: 'Solicitar diagnóstico →',
    privacyNote: 'Sin compromiso • Tus datos están seguros',
    successMessage: '¡Listo! Te contactamos en menos de 24h.',
  },

  problem: {
    title: '¿Por qué fracasan los proyectos de software?',
    subtitle: '70% de los proyectos exceden su presupuesto. 75% de implementaciones ERP fallan. No es mala suerte — es un fallo sistémico.',
    challenges: [
      {
        icon: 'SearchX',
        title: 'La Caja Negra',
        description: 'Firmas el anticipo y el proveedor desaparece. Semanas sin entregables, reportes llenos de tecnicismos incomprensibles. Pierdes el control.',
        solution: 'Protocolo Glass Box: acceso en tiempo real a repositorios y tableros. Ves cada avance, cada obstáculo.',
      },
      {
        icon: 'TrendingUp',
        title: 'Presupuesto que se dispara',
        description: 'Te cobran por "horas-hombre", incentivando la ineficiencia. El 70% de proyectos termina costando 27% más de lo planeado.',
        solution: 'Presupuesto cerrado y garantizado. Si el costo sube, es problema nuestro, no tuyo.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Software que no aguanta',
        description: 'Se ve espectacular en la demo de la sala de juntas, pero colapsa cuando lo usan tus equipos en planta o en campo.',
        solution: 'Probamos con tu operación real: mala conectividad, volumen alto, condiciones de campo.',
      },
    ],
  },

  howItWorks: {
    title: 'Metodología Try & Buy',
    subtitle: 'No firme cheques en blanco. Pruebe nuestra ingeniería primero.',
    steps: [
      {
        number: '1',
        title: 'Sesión de arquitectura',
        description: 'Consultoría técnica donde diseccionamos tu dolor operativo real. No es una llamada de ventas.',
        time: '30 min',
      },
      {
        number: '2',
        title: 'Blueprint técnico',
        description: 'Diagramas de arquitectura, stack tecnológico y presupuesto cerrado. Ves la solución antes de comprarla.',
        time: '2-3 días',
      },
      {
        number: '3',
        title: 'Prototipo funcional',
        description: 'Versión operativa que puedes probar con tu equipo. Software real, no maquetas.',
        time: '1-2 semanas',
      },
      {
        number: '4',
        title: 'Decisión informada',
        description: 'Si nuestra propuesta hace sentido, procedemos. Si no, nos damos la mano y conservas el diagnóstico.',
        time: 'Sin presión',
      },
    ],
  },

  benefits: {
    title: 'Agentic Architect',
    items: [
      {
        icon: 'Zap',
        title: 'Velocidad agéntica',
        description: 'IA genera el 80% del código base. Ingenieros Senior auditan y diseñan la lógica de negocio.',
        metric: '3x más rápido',
      },
      {
        icon: 'DollarSign',
        title: 'Presupuesto cerrado',
        description: 'Precio fijo desde el día uno. Sin "horas extra" sorpresivas ni costos ocultos.',
        metric: '40% menos',
      },
      {
        icon: 'Eye',
        title: 'Glass Box',
        description: 'Acceso total a repositorios y tableros. Como tener al equipo trabajando detrás de un cristal.',
        metric: 'Transparencia total',
      },
      {
        icon: 'Shield',
        title: 'Try & Buy',
        description: 'Evaluación técnica antes de invertir. Nosotros asumimos el riesgo de impresionarlo.',
        metric: 'Riesgo cero',
      },
      {
        icon: 'Target',
        title: 'Para tu operación',
        description: 'Software diseñado para tu flujo de trabajo real, no plantillas genéricas.',
        metric: 'A tu medida',
      },
      {
        icon: 'Rocket',
        title: 'Probado en campo',
        description: 'Validamos con tus equipos reales, en tus condiciones reales de operación.',
        metric: 'Garantizado',
      },
    ],
  },

  clientLogos: {
    title: 'Empresas que confían en nosotros',
    subtitle: 'Trabajamos con líderes de manufactura, logística y comercio en México',
    categories: [
      'Grupos Manufactureros',
      'Empresas de Logística',
      'Comercializadoras',
      'Distribuidoras',
      'Industria Automotriz',
      'Empresas de Construcción',
    ],
  },

  caseStudies: {
    title: 'Resultados comprobables',
    subtitle: 'Proyectos reales entregados con presupuesto cerrado y en tiempo',
    cases: [
      {
        title: 'ERP de Órdenes y Facturación',
        company: 'Baja Aqua Farms',
        industry: 'Acuacultura / Exportación',
        challenge: 'Proceso de órdenes fragmentado entre sistemas legacy, Oracle Cloud y SalesForce. Facturación manual con CFDI, reservas de inventario por pieza sin automatizar y cero trazabilidad del ciclo orden-a-cobro.',
        solution: 'Gateway API (.NET 8) que orquesta el flujo completo: selección de inventario por pieza → creación de orden en Oracle OIC → reserva automática → AutoInvoice → timbrado CFDI con PAC. 4 jobs en background con reintentos, locks y auditoría completa.',
        results: [
          { metric: '4 jobs', label: 'Pipeline automático 24/7' },
          { metric: '16 DBs', label: 'Integradas en un gateway' },
          { metric: 'CFDI', label: 'Timbrado automatizado' },
        ],
        image: '/images/cases/aquafarms-erp.webp',
        testimonial: 'De orden a factura timbrada en minutos, no en días. El pipeline corre solo y cada paso queda auditado.',
      },
      {
        title: 'Super App Universitaria MiTec',
        company: 'Tecnológico de Monterrey',
        industry: 'Educación Superior',
        challenge: 'Vida estudiantil fragmentada en múltiples plataformas sin integración, sin identidad digital unificada y picos de tráfico brutales durante inscripciones que colapsaban los sistemas existentes.',
        solution: 'Super App nativa iOS/Android con arquitectura de micro-servicios, credencial digital con QR verificable, acceso a servicios de campus, directorio, trámites y notificaciones push — todo en una sola app para 100,000+ usuarios concurrentes.',
        results: [
          { metric: '100K+', label: 'Usuarios activos' },
          { metric: 'Super App', label: 'iOS & Android' },
          { metric: 'ID Digital', label: 'Credencial con QR' },
        ],
        image: '/images/cases/tec/tec-home.webp',
        testimonial: 'Todo lo que el alumno necesita en una sola app: credencial, horarios, trámites, directorio. La fragmentación se acabó.',
      },
      {
        title: 'Sistema de Gestión Logística',
        company: 'Operación de Distribución Nacional',
        industry: 'Logística y Distribución',
        challenge: 'Rutas planificadas en Excel, sin visibilidad para el cliente, entregas fallidas por ausencia, pruebas de entrega en papel y cero métricas de satisfacción.',
        solution: 'Sistema completo con sincronización ERP (Bind), planificación visual en mapa con optimización de rutas por IA (Google Routes), app móvil offline-first para choferes con firma y foto digital, tracking público por hash seguro y encuesta CSAT automática.',
        results: [
          { metric: '↓ 40%', label: 'Km recorridos' },
          { metric: 'Real-time', label: 'Tracking para cliente' },
          { metric: '5 roles', label: 'Compras, Tráfico, Chofer, Ventas, Director' },
        ],
        image: '/images/cases/scram-logistics.webp',
        testimonial: 'Los clientes ven su pedido en tiempo real. Las entregas fallidas bajaron drásticamente.',
      },
    ],
  },

  comparison: {
    title: 'Agentic Architect vs método tradicional',
    subtitle: '4 de cada 10 empresas mexicanas pierden $1-5 MDD anuales por fallas de software',
    items: [
      {
        aspect: 'Transparencia',
        traditional: 'Reportes cada 2 semanas que no entiendes',
        agenticArchitect: 'Acceso en tiempo real a repositorios y tableros',
        icon: 'Eye',
      },
      {
        aspect: 'Presupuesto',
        traditional: 'Se dispara 40-60% durante el proyecto',
        agenticArchitect: 'Precio cerrado desde el inicio, garantizado por contrato',
        icon: 'DollarSign',
      },
      {
        aspect: 'Velocidad',
        traditional: '4-6 meses para ver algo funcional',
        agenticArchitect: '1-2 semanas para primer prototipo operativo',
        icon: 'Clock',
      },
      {
        aspect: 'Riesgo',
        traditional: 'Anticipo grande sin garantías reales',
        agenticArchitect: 'Try & Buy: evalúa antes de comprometerte',
        icon: 'Shield',
      },
      {
        aspect: 'Calidad',
        traditional: 'Funciona en la demo, falla en producción',
        agenticArchitect: 'Validado con tu operación real en campo',
        icon: 'CheckCircle',
      },
    ],
  },

  team: {
    title: 'El equipo detrás del código',
    subtitle: 'Ingenieros senior con más de 15 años transformando operaciones industriales',
    description:
      'No somos una agencia gigante. Somos un equipo de ingenieros experimentados que entienden cómo funcionan las empresas manufactureras, comercializadoras y logísticas en México. Hablamos tu idioma operativo.',
    stats: [
      { value: '15+', label: 'Años de experiencia' },
      { value: '50+', label: 'Proyectos entregados' },
      { value: '100%', label: 'En tiempo y presupuesto' },
    ],
    contact: {
      name: 'Ing. Armando Cortés',
      role: 'Director de Proyectos',
      description: '15 años desarrollando sistemas empresariales para manufactura y logística. Tu contacto directo durante todo el proyecto.',
      image: '/images/team/armando.jpg',
    },
  },

  testimonials: {
    title: 'Lo que dicen nuestros clientes',
    items: [
      {
        quote: 'De orden a factura timbrada en minutos, no en días. El pipeline corre solo y cada paso queda auditado.',
        author: 'Ricardo Mendoza',
        role: 'Director de Operaciones',
        company: 'Empresa de Acuacultura / Exportación',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&q=80',
      },
      {
        quote: 'Todo lo que el alumno necesita en una sola app: credencial, horarios, trámites, directorio. La fragmentación se acabó.',
        author: 'Carolina Estrada',
        role: 'Directora de Tecnología',
        company: 'Tecnológico de Monterrey — Educación Superior',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&q=80',
      },
      {
        quote: 'Los clientes ven su pedido en tiempo real. Las entregas fallidas bajaron drásticamente.',
        author: 'Miguel Ángel Torres',
        role: 'Gerente de Logística',
        company: 'Distribuidora Nacional — Logística y Distribución',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face&q=80',
      },
    ],
  },

  pricing: {
    title: '¿Cómo funciona la inversión?',
    subtitle: 'Presupuesto cerrado en 48 horas. Estos factores determinan el alcance:',
    factors: [
      {
        icon: 'Target',
        title: 'Complejidad operativa',
        description: 'Cuántos procesos automatizamos y qué tan únicos son tus flujos de trabajo.',
      },
      {
        icon: 'Users',
        title: 'Usuarios y ubicaciones',
        description: 'Si es para 5 personas o 500, una oficina o 20 sucursales.',
      },
      {
        icon: 'Plug',
        title: 'Integraciones necesarias',
        description: 'Conexión con tus sistemas actuales: ERP, SAP, APIs, sensores o hardware.',
      },
      {
        icon: 'Database',
        title: 'Volumen de datos',
        description: 'Miles o millones de transacciones. Cada proyecto escala diferente.',
      },
    ],
    guarantee: {
      title: 'Compromiso Scram',
      points: [
        'Presupuesto cerrado antes de iniciar',
        'Diagnóstico técnico previo a cualquier inversión',
        'Sin costos ocultos ni cambios sorpresa',
        'Código 100% tuyo, documentado y mantenible',
      ],
    },
    cta: {
      title: 'Presupuesto cerrado en 48 horas',
      subtitle: 'Platícanos de tu operación. Te entregamos un blueprint técnico y presupuesto detallado.',
      buttonText: 'Solicitar diagnóstico técnico',
    },
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Cómo funciona el modelo Try & Buy?',
        answer:
          'Realizamos un diagnóstico técnico y te presentamos un blueprint de arquitectura con presupuesto cerrado. Si nuestra propuesta hace sentido, procedemos. Si no, te quedas con el análisis completo sin compromiso. Nosotros asumimos el riesgo de demostrarte nuestra competencia.',
      },
      {
        question: '¿Qué pasa si el proyecto no cumple mis expectativas?',
        answer:
          'Solo avanzamos cuando estás satisfecho con los entregables de cada fase. Sin letras chicas, sin compromisos forzados. El código es tuyo desde el día uno.',
      },
      {
        question: '¿Trabajan presencial o remoto?',
        answer:
          'Operamos 100% remoto con arquitectos e ingenieros senior distribuidos en diferentes estados de México. Nuestra infraestructura es de grado empresarial y colaboramos en tiempo real. Si el proyecto requiere presencia física, nos desplazamos a donde sea necesario.',
      },
      {
        question: '¿Cómo garantizan que no van a desaparecer a mitad del proyecto?',
        answer:
          'Protocolo Glass Box: tienes acceso en tiempo real a repositorios y tableros de gestión. Ves cada commit, cada avance, cada obstáculo. Es imposible desaparecer cuando el cliente ve todo.',
      },
      {
        question: '¿Qué incluye el soporte post-lanzamiento?',
        answer:
          'Los primeros 3 meses de soporte y ajustes están incluidos. Después puedes contratar mantenimiento mensual o administrarlo tú mismo — el código es 100% tuyo, documentado y sin dependencias ocultas.',
      },
    ],
  },

  cta: {
    title: 'Demuéstrenos su reto más difícil',
    subtitle: '30 minutos con un Arquitecto Senior. Sin compromiso, sin presentaciones genéricas.',
    button: 'Agendar sesión de arquitectura',
    helperText: 'Respuesta en menos de 24 horas • Diagnóstico técnico incluido',
  },

  ui: {
    screenshotPlaceholder: 'Screenshot del sistema real',
    softwareRunning: 'Software funcionando en empresas reales',
    videoDemoHere: 'Video demo aquí',
    theChallenge: 'El reto:',
    theSolution: 'La solución:',
    traditionalMethod: 'Método tradicional',
    withAgenticArchitect: 'Con Agentic Architect',
    requestDiagnostic: 'Solicitar diagnóstico técnico',
    closedBudget48h: 'Presupuesto cerrado en 48 horas',
    scheduleCall: 'Agendar llamada',
    whatsAppDirect: 'WhatsApp directo',
    projectsDelivered: '+50 proyectos entregados',
    industriesBadge: 'Manufactura, logística y distribución',
    chatTitle: 'Chatea con un experto',
    chatSubtitle: 'Respuesta en menos de 15 minutos',
    chatMessage: 'Hola! Soy del equipo SCRAM. ¿En qué puedo ayudarte con tu proyecto de software?',
    chatNow: 'Ahora',
    startConversation: 'Iniciar conversación',
    chatSchedule: 'Lun-Vie 9:00-18:00 | Respuesta inmediata',
    copyright: '© 2026 Scram Consulting. Todos los derechos reservados.',
    tagline: 'Software empresarial que funciona',
    calendarTitle: 'Sesión de Arquitectura de Software - Scram Consulting',
    calendarDetails:
      'Sesión de diagnóstico técnico con el Ing. Armando Cortés.\n\nTemas a tratar:\n- Evaluación de necesidades de software\n- Arquitectura recomendada\n- Timeline y presupuesto estimado\n\nContacto: Ing. Armando Cortés\nWhatsApp: +52 221 106 5056\nEmail: contacto@scram2k.com',
    calendarLocation: 'Google Meet (se enviará enlace)',
    whatsAppHeroMsg: 'Hola, me interesa agendar una sesión de arquitectura de software para mi empresa.',
    whatsAppPricingMsg: 'Hola, me interesa solicitar un diagnóstico técnico para mi empresa.',
    whatsAppCtaMsg: 'Hola, me interesa agendar una sesión de arquitectura de software para mi empresa.',
    whatsAppTeamMsg: 'Hola Ing. Armando, me interesa conocer más sobre los servicios de arquitectura de software de Scram Consulting.',
    whatsAppFloatingMsg: 'Hola, me interesa conocer más sobre la Agentic Architect para mi empresa.',
  },

  metadata: {
    title: 'Agentic Architect | Software Empresarial | Scram Consulting',
    description:
      'Software empresarial desplegado en semanas, no en meses. IA + Ingenieros Senior con presupuesto cerrado. Manufactura, logística y distribución en todo México. Metodología Try & Buy.',
    ogTitle: 'Software Empresarial en Semanas | Scram Consulting',
    ogDescription:
      'Agentic Architect: IA + Ingenieros Senior. Presupuesto cerrado, transparencia total. Manufactura, logística y distribución en todo México.',
    twitterTitle: 'Software Empresarial en Semanas | Scram Consulting',
    twitterDescription:
      'IA + Ingenieros Senior. Presupuesto cerrado. Manufactura, logística y distribución en todo México.',
  },
};
