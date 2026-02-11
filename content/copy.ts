export const content = {
  hero: {
    eyebrow: 'Ingeniería de Software Corporativo',
    title: 'Tus sistemas listos',
    titleHighlight: 'en semanas',
    titleContinued: 'no en meses',
    subtitle:
      'Arquitectura Centauro: IA + Ingenieros Senior desplegando software empresarial con transparencia total y presupuesto cerrado. Vea resultados antes de invertir.',
    ctaPrimary: 'Solicitar sesión de arquitectura',
    ctaSecondary: 'Ver casos de éxito',
    helperText: 'Sesión de diagnóstico sin compromiso • Respuesta en 24h',
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
    title: 'Sectores que transformamos',
    subtitle: 'Experiencia directa en manufactura, logística y distribución en México',
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
    subtitle: 'Proyectos entregados con presupuesto cerrado y en tiempo',
    cases: [
      {
        title: 'Sistema de Gestión de Almacén',
        company: 'Grupo Industrial',
        industry: 'Manufactura',
        challenge: 'Control manual de inventario con errores frecuentes y faltantes sin explicación que detenían la producción',
        solution: 'WMS con app móvil para operadores, códigos QR, alertas automáticas y reportes en tiempo real',
        results: [
          { metric: '↓ 85%', label: 'Errores de inventario' },
          { metric: '↑ 150%', label: 'Velocidad de picking' },
          { metric: '6 sem', label: 'En producción' },
        ],
        image: '/images/cases/wms-dashboard.jpg',
        testimonial: 'En 6 semanas teníamos control total. Antes tardábamos días en encontrar material.',
      },
      {
        title: 'ERP para Distribución',
        company: 'Comercializadora Regional',
        industry: 'Distribución',
        challenge: 'Operación basada en Excel: pedidos perdidos, facturación manual, inventario descontrolado',
        solution: 'ERP integrado con compras, ventas, inventario y facturación electrónica CFDI 4.0',
        results: [
          { metric: '↓ 70%', label: 'Tiempo de facturación' },
          { metric: '↑ 200%', label: 'Control de pedidos' },
          { metric: '10 sem', label: 'De Excel a ERP' },
        ],
        image: '/images/cases/erp-dashboard.jpg',
        testimonial: 'Dejamos Excel atrás en 10 semanas. El presupuesto nunca cambió.',
      },
      {
        title: 'Sistema de Rutas de Entrega',
        company: 'Logística Express',
        industry: 'Logística',
        challenge: 'Rutas ineficientes, GPS manual, clientes sin visibilidad de su entrega',
        solution: 'App de rutas optimizadas con IA, tracking en tiempo real y notificaciones automáticas',
        results: [
          { metric: '↓ 40%', label: 'Kilómetros recorridos' },
          { metric: '↑ 300%', label: 'Satisfacción cliente' },
          { metric: '8 sem', label: 'En producción' },
        ],
        image: '/images/cases/logistics-app.jpg',
        testimonial: 'Ahorramos 40% en combustible. Los clientes ven en tiempo real su pedido.',
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
          'Operamos remoto desde nuestro Command Center en Puebla con infraestructura de grado empresarial. Si hay hardware o instalaciones físicas, nos desplazamos a donde sea necesario en México.',
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
