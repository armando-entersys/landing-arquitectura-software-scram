export const content = {
  hero: {
    eyebrow: 'Ingeniería de Software Corporativo | Alcance Nacional',
    title: 'Tus sistemas listos',
    titleHighlight: 'en semanas',
    titleContinued: 'no en meses',
    subtitle:
      'Arquitectura Centauro: IA + Ingenieros Senior desplegando software empresarial para manufactura, logística y distribución en todo México. Presupuesto cerrado. Transparencia total.',
    ctaPrimary: 'Solicitar sesión de arquitectura',
    ctaSecondary: 'Ver casos de éxito',
    helperText: 'Diagnóstico sin compromiso • Respuesta en 24h • Cobertura nacional',
    stats: [
      { value: '40%', label: 'Menos costo' },
      { value: '3x', label: 'Más rápido' },
      { value: '50+', label: 'Proyectos' },
    ],
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
    title: 'Arquitectura Centauro',
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
        title: 'Gestión de Briefs y Materiales',
        company: 'Natura & Avon',
        industry: 'Corporativo Multinacional',
        challenge: 'Coordinación caótica entre equipos de marketing y producción creativa. Briefs perdidos en cadenas de email, entregas sin fecha clara y cero visibilidad del estado de cada material.',
        solution: 'Plataforma web con flujo de aprobación por roles, tablero Kanban por estatus, calendario de entregas, alertas automáticas con SignalR en tiempo real, reportes Hoshin Kanri y exportación a Excel.',
        results: [
          { metric: '↓ 90%', label: 'Briefs perdidos' },
          { metric: '3 roles', label: 'Admin, Solicitante, Producción' },
          { metric: '13+', label: 'Alertas automatizadas' },
        ],
        image: '/images/cases/natura-dashboard.jpg',
        testimonial: 'Pasamos de perder briefs en el correo a tener visibilidad total de cada material en tiempo real.',
      },
      {
        title: 'Onboarding y Certificación Industrial',
        company: 'Coca-Cola FEMSA (KOF)',
        industry: 'Manufactura / Bebidas',
        challenge: 'Capacitación de seguridad industrial obligatoria para todo el personal que accede a planta. Proceso 100% manual: listas en papel, certificados en Word, verificación imposible en punto de acceso.',
        solution: 'Plataforma digital con video anti-skip, examen de 30 preguntas por sección (seguridad, inocuidad, ambiental), certificado PDF automático con QR verificable, credencial digital y sincronización con Smartsheet.',
        results: [
          { metric: '< 2s', label: 'Genera certificado' },
          { metric: '↓ 90%', label: 'Carga administrativa' },
          { metric: 'QR', label: 'Validación instantánea' },
        ],
        image: '/images/cases/kof-onboarding.jpg',
        testimonial: 'Eliminamos el papeleo por completo. El guardia escanea el QR y en un segundo sabe si la persona está certificada.',
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
        image: '/images/cases/scram-logistics.jpg',
        testimonial: 'Los clientes ven su pedido en tiempo real. Las entregas fallidas bajaron drásticamente.',
      },
    ],
  },

  comparison: {
    title: 'Centauro vs método tradicional',
    subtitle: '4 de cada 10 empresas mexicanas pierden $1-5 MDD anuales por fallas de software',
    items: [
      {
        aspect: 'Transparencia',
        traditional: 'Reportes cada 2 semanas que no entiendes',
        centauro: 'Acceso en tiempo real a repositorios y tableros',
        icon: 'Eye',
      },
      {
        aspect: 'Presupuesto',
        traditional: 'Se dispara 40-60% durante el proyecto',
        centauro: 'Precio cerrado desde el inicio, garantizado por contrato',
        icon: 'DollarSign',
      },
      {
        aspect: 'Velocidad',
        traditional: '4-6 meses para ver algo funcional',
        centauro: '1-2 semanas para primer prototipo operativo',
        icon: 'Clock',
      },
      {
        aspect: 'Riesgo',
        traditional: 'Anticipo grande sin garantías reales',
        centauro: 'Try & Buy: evalúa antes de comprometerte',
        icon: 'Shield',
      },
      {
        aspect: 'Calidad',
        traditional: 'Funciona en la demo, falla en producción',
        centauro: 'Validado con tu operación real en campo',
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
        quote: 'Necesitábamos un WMS para el almacén. En 6 semanas estaba operando. Con el proveedor anterior llevábamos 4 meses sin ver nada funcional.',
        author: 'Roberto Sánchez',
        role: 'Director de Operaciones',
        company: 'Grupo Industrial del Bajío',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces',
      },
      {
        quote: 'El presupuesto nunca cambió. En 15 años de contratar sistemas, eso jamás me había pasado.',
        author: 'Ana Martínez',
        role: 'Gerente de TI',
        company: 'Comercializadora del Norte',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces',
      },
      {
        quote: 'Poder ver cada día qué están haciendo cambió completamente la dinámica. Ya no es una caja negra, es un cristal transparente.',
        author: 'Carlos Fernández',
        role: 'COO',
        company: 'Logística Express',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces',
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
};
