export const content = {
  hero: {
    eyebrow: 'Software empresarial que funciona',
    title: 'Tus sistemas listos',
    titleHighlight: 'en semanas',
    titleContinued: 'no en meses',
    subtitle:
      'Desarrollamos el software que tu operación necesita. Rápido, transparente y sin sorpresas. Pruébalo gratis antes de pagar.',
    ctaPrimary: 'Comenzar gratis',
    ctaSecondary: 'Ver cómo funciona',
    helperText: 'Primera sesión sin costo • Respuesta en 24h',
    stats: [
      { value: '40%', label: 'Menos costo' },
      { value: '3x', label: 'Más rápido' },
      { value: '15m', label: 'Primera respuesta' },
    ],
  },

  problem: {
    title: '¿Por qué otros proyectos de software fallan?',
    subtitle: 'No es por falta de talento. Es por falta de claridad.',
    challenges: [
      {
        icon: 'SearchX',
        title: 'No sabes en qué van',
        description: 'Pasan semanas sin saber si están avanzando. Recibes reportes que no entiendes.',
        solution: 'Te damos acceso directo. Ves el progreso real cada día.',
      },
      {
        icon: 'TrendingUp',
        title: 'El presupuesto se dispara',
        description: 'Te cobran por horas, no por resultados. Terminas pagando más de lo planeado.',
        solution: 'Precio fijo desde el inicio. Si el costo sube, es problema nuestro.',
      },
      {
        icon: 'AlertTriangle',
        title: 'El software no aguanta',
        description: 'Se ve bien en la demo, pero falla cuando lo usan tus equipos.',
        solution: 'Construimos pensando en tu operación real, no en presentaciones bonitas.',
      },
    ],
  },

  howItWorks: {
    title: 'Cómo trabajamos contigo',
    subtitle: 'Proceso simple. Resultados reales.',
    steps: [
      {
        number: '1',
        title: 'Platicamos 30 minutos',
        description: 'Entendemos qué necesitas. Sin tecnicismos, solo preguntamos sobre tu negocio.',
        time: '30 min',
      },
      {
        number: '2',
        title: 'Te mostramos el plan',
        description: 'En 2-3 días te presentamos cómo lo haríamos, cuánto cuesta y cuánto tarda.',
        time: '2-3 días',
      },
      {
        number: '3',
        title: 'Construimos una versión funcional',
        description: 'En 1-2 semanas tienes algo que puedes usar y probar. De verdad.',
        time: '1-2 semanas',
      },
      {
        number: '4',
        title: 'Decides si continuamos',
        description: 'Si te gusta, seguimos. Si no, te quedas con lo que hicimos. Sin costo.',
        time: 'Tú decides',
      },
    ],
  },

  benefits: {
    title: 'Por qué somos diferentes',
    items: [
      {
        icon: 'Zap',
        title: 'Rapidez real',
        description: 'Lo que otros hacen en 4 meses, nosotros en 4 semanas.',
        metric: '3x más rápido',
      },
      {
        icon: 'DollarSign',
        title: 'Precio fijo',
        description: 'Te decimos cuánto cuesta desde el inicio. Sin extras ocultos.',
        metric: '40% menos',
      },
      {
        icon: 'Eye',
        title: 'Ves todo',
        description: 'Entras cuando quieras a ver el avance. Sin reportes raros.',
        metric: '100% transparencia',
      },
      {
        icon: 'Shield',
        title: 'Sin riesgo',
        description: 'Primero ves resultados. Luego decides si pagas.',
        metric: 'Gratis al inicio',
      },
      {
        icon: 'Target',
        title: 'Para tu negocio',
        description: 'No es una plantilla. Es software hecho para tu forma de trabajar.',
        metric: 'A tu medida',
      },
      {
        icon: 'Rocket',
        title: 'Funciona de verdad',
        description: 'Probamos con tus equipos reales, en tus condiciones reales.',
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
    title: 'Casos de éxito reales',
    subtitle: 'Proyectos entregados, empresas transformadas',
    cases: [
      {
        title: 'Sistema de Gestión de Almacén',
        company: 'Grupo Industrial',
        industry: 'Manufactura',
        challenge: 'Control manual de inventario, errores frecuentes, faltantes sin explicación',
        solution: 'WMS con app móvil para operadores, códigos QR, alertas automáticas',
        results: [
          { metric: '↓ 85%', label: 'Errores de inventario' },
          { metric: '↑ 150%', label: 'Velocidad de picking' },
          { metric: '6 sem', label: 'Tiempo de implementación' },
        ],
        image: '/images/cases/wms-dashboard.jpg',
        testimonial: 'En 6 semanas teníamos control total. Antes tardábamos días en encontrar material.',
      },
      {
        title: 'ERP para Distribución',
        company: 'Comercializadora Regional',
        industry: 'Distribución',
        challenge: 'Excel descontrolado, pedidos perdidos, facturación manual',
        solution: 'ERP integrado con compras, ventas, inventario y facturación electrónica',
        results: [
          { metric: '↓ 70%', label: 'Tiempo de facturación' },
          { metric: '↑ 200%', label: 'Control de pedidos' },
          { metric: '10 sem', label: 'De Excel a ERP completo' },
        ],
        image: '/images/cases/erp-dashboard.jpg',
        testimonial: 'Dejamos Excel atrás en 10 semanas. El presupuesto nunca cambió.',
      },
      {
        title: 'Sistema de Rutas de Entrega',
        company: 'Logística Express',
        industry: 'Logística',
        challenge: 'Rutas ineficientes, GPS manual, clientes sin información de entrega',
        solution: 'App de rutas optimizadas, tracking en tiempo real, notificaciones a clientes',
        results: [
          { metric: '↓ 40%', label: 'Kilómetros recorridos' },
          { metric: '↑ 300%', label: 'Satisfacción del cliente' },
          { metric: '8 sem', label: 'En producción' },
        ],
        image: '/images/cases/logistics-app.jpg',
        testimonial: 'Ahorramos 40% en combustible. Los clientes ven en tiempo real su pedido.',
      },
    ],
  },

  comparison: {
    title: 'Nosotros vs el método tradicional',
    subtitle: 'Por qué empresas están cambiando a Arquitectura Centauro',
    items: [
      {
        aspect: 'Transparencia',
        traditional: 'Reportes cada 2 semanas que no entiendes',
        centauro: 'Ves el progreso cada día en tiempo real',
        icon: 'Eye',
      },
      {
        aspect: 'Presupuesto',
        traditional: 'Se dispara 40-60% durante el proyecto',
        centauro: 'Precio fijo desde el inicio, garantizado',
        icon: 'DollarSign',
      },
      {
        aspect: 'Tiempo',
        traditional: '4-6 meses para ver algo funcional',
        centauro: '1-2 semanas para primer prototipo',
        icon: 'Clock',
      },
      {
        aspect: 'Riesgo',
        traditional: 'Pagas por adelantado, sin garantías',
        centauro: 'Pruebas gratis, pagas si te convence',
        icon: 'Shield',
      },
      {
        aspect: 'Calidad',
        traditional: 'Se ve bien en demo, falla en producción',
        centauro: 'Probamos con tus equipos reales',
        icon: 'CheckCircle',
      },
    ],
  },

  team: {
    title: 'El equipo detrás del código',
    subtitle: 'Ingenieros senior con más de 15 años transformando operaciones',
    description:
      'No somos una agencia gigante. Somos un equipo pequeño de ingenieros experimentados que realmente entienden cómo funcionan las empresas manufactureras, comercializadoras y logísticas en México.',
    stats: [
      { value: '15+', label: 'Años de experiencia' },
      { value: '50+', label: 'Proyectos entregados' },
      { value: '100%', label: 'Clientes satisfechos' },
    ],
    contact: {
      name: 'Ing. Armando Cortés',
      role: 'Director de Proyectos',
      description: '15 años desarrollando sistemas empresariales. Tu contacto directo durante todo el proyecto.',
      image: '/images/team/armando.jpg',
    },
  },

  testimonials: {
    title: 'Empresas que confiaron en nosotros',
    items: [
      {
        quote: 'Necesitábamos un sistema para el almacén. En 6 semanas estaba funcionando. Antes esperábamos 4 meses con otros proveedores.',
        author: 'Roberto Sánchez',
        role: 'Director de Operaciones',
        company: 'Grupo Industrial del Bajío',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces',
      },
      {
        quote: 'El presupuesto nunca cambió. Eso solo nunca había pasado con ningún proyecto de sistemas.',
        author: 'Ana Martínez',
        role: 'Gerente de TI',
        company: 'Comercializadora del Norte',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces',
      },
      {
        quote: 'Poder ver cada día qué están haciendo cambió completamente nuestra confianza. Ya no es una caja negra.',
        author: 'Carlos Fernández',
        role: 'COO',
        company: 'Logística Express',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces',
      },
    ],
  },

  pricing: {
    title: '¿Cómo funciona la inversión?',
    subtitle: 'Transparencia total desde el inicio. Así determinamos tu presupuesto:',
    factors: [
      {
        icon: 'Target',
        title: 'Complejidad de tu operación',
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
        description: 'Conexión con tus sistemas actuales, APIs, sensores o hardware existente.',
      },
      {
        icon: 'Database',
        title: 'Volumen de datos',
        description: 'Miles o millones de transacciones. Cada proyecto escala diferente.',
      },
    ],
    guarantee: {
      title: 'Nuestra garantía',
      points: [
        'Precio fijo acordado antes de empezar',
        'Primera fase gratis para evaluar sin riesgo',
        'Sin costos ocultos ni cambios sorpresa',
        'Presupuesto detallado en 48 horas',
      ],
    },
    cta: {
      title: 'Cotización en 48 horas',
      subtitle: 'Platícanos de tu proyecto. Te damos un presupuesto claro y detallado.',
      buttonText: 'Solicitar cotización',
    },
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿De verdad es gratis al inicio?',
        answer:
          'Sí. Hacemos el diagnóstico y te mostramos un prototipo funcional. Si decides no continuar, no pagas nada y te quedas con todo el análisis.',
      },
      {
        question: '¿Qué pasa si me arrepiento?',
        answer:
          'Nada. Solo pagas si decides continuar después de ver el prototipo. Sin compromisos, sin letras chicas.',
      },
      {
        question: '¿Tienen que venir a mi empresa?',
        answer:
          'No para la mayoría de proyectos. Trabajamos remoto con acceso a tus sistemas. Si hay hardware (sensores, impresoras, etc.), vamos donde sea necesario en México.',
      },
      {
        question: '¿Cómo sé que no van a desaparecer?',
        answer:
          'Porque ves el progreso cada día. Entras a nuestra plataforma y ves qué estamos haciendo. Cualquier día, a cualquier hora.',
      },
      {
        question: '¿Y si necesito cambios después?',
        answer:
          'Los primeros 3 meses de soporte están incluidos. Después puedes contratar mantenimiento o hacerlo tú mismo (el código es 100% tuyo).',
      },
    ],
  },

  cta: {
    title: 'Comienza hoy, sin riesgo',
    subtitle: 'Habla con nosotros 30 minutos. Te mostramos cómo podemos ayudarte.',
    button: 'Agendar llamada gratis',
    helperText: 'Respuesta en 24 horas • Sin compromiso',
  },
};
