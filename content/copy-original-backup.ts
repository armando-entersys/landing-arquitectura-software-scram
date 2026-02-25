export const content = {
  hero: {
    badges: [
      { icon: '⚡', text: 'Semanas, no meses' },
      { icon: '🔍', text: 'Transparencia total' },
      { icon: '🎯', text: 'Resultados garantizados' },
    ],
    eyebrow: 'Software empresarial',
    title: 'De la idea',
    titleHighlight: 'al deploy',
    titleContinued: 'en tiempo récord.',
    subtitle:
      'Combinamos ingenieros senior con IA de última generación para construir software empresarial robusto. Sin sorpresas, sin excusas, sin caja negra.',
    ctaPrimary: 'Agendar sesión técnica',
    ctaSecondary: 'Ver cómo trabajamos',
    helperText: 'Primera sesión sin costo · Respuesta en 15 minutos',
    clients: ['FEMSA', 'Grupo Modelo', 'Chedraui'],
  },

  problem: {
    eyebrow: 'El problema',
    title: 'La mayoría de proyectos de software fallan.',
    subtitle: 'No por falta de talento, sino por falta de transparencia.',
    intro:
      'Hemos visto el mismo patrón una y otra vez: empresas que invierten cientos de miles de dólares en proyectos que nunca llegan a producción, o peor, que lo hacen y colapsan al primer contacto con usuarios reales.',
    challenges: [
      {
        id: 1,
        title: 'La caja negra',
        description:
          'Tu proveedor desaparece durante semanas. Recibes reportes incomprensibles. No sabes qué está pasando realmente con tu inversión.',
        impact: 'Pierdes el control del proyecto',
      },
      {
        id: 2,
        title: 'Pagar por tiempo, no por resultados',
        description:
          'Te cobran por "horas-hombre" en lugar de funcionalidades entregadas. Un desarrollador junior te cuesta lo mismo que uno senior.',
        impact: 'Subsidias la ineficiencia',
      },
      {
        id: 3,
        title: 'Software que no funciona en el mundo real',
        description:
          'Se ve bien en PowerPoint, pero colapsa en producción. No soporta tu volumen de transacciones, tu conectividad, tus casos de uso reales.',
        impact: 'Inviertes dos veces',
      },
    ],
  },

  approach: {
    eyebrow: 'Nuestra metodología',
    title: 'Arquitectura Agentic Architect',
    subtitle: 'La combinación perfecta entre inteligencia artificial y experiencia humana.',
    intro:
      'No creemos en reemplazar ingenieros con IA. Creemos en potenciar el talento humano con herramientas de última generación.',

    pillars: [
      {
        id: 1,
        icon: '🤖',
        title: 'IA como copiloto',
        description:
          'Agentes de IA generan código boilerplate, tests, documentación. Los ingenieros se enfocan en la lógica compleja y la arquitectura.',
        benefits: [
          'Velocidad 3x en tareas repetitivas',
          'Tests automáticos desde el día 1',
          'Documentación siempre actualizada',
        ],
        caseStudy:
          'Sistema WMS: 16 semanas → 5 semanas. Mismo alcance, 68% más rápido.',
      },
      {
        id: 2,
        icon: '👥',
        title: 'Ingenieros senior al mando',
        description:
          'Cada proyecto es liderado por un arquitecto con 10+ años de experiencia. Nada llega a producción sin revisión humana.',
        benefits: [
          'Decisiones arquitectónicas sólidas',
          'Code reviews exhaustivos',
          'Seguridad y performance desde diseño',
        ],
      },
      {
        id: 3,
        icon: '🔍',
        title: 'Transparencia total',
        description:
          'Acceso directo a repositorios, tableros y canales de comunicación. No hay secretos ni cajas negras.',
        benefits: [
          'Ves cada commit en tiempo real',
          'Participas en decisiones clave',
          'Entiendes exactamente qué estás pagando',
        ],
      },
    ],
  },

  tryBuy: {
    title: '"No firme cheques en blanco. Pruebe nuestra ingeniería primero."',
    intro:
      'Entendemos el riesgo gigantesco que implica contratar desarrollo de software complejo y crítico. Por eso, hemos invertido el modelo de riesgo tradicional. No le pedimos fe ciega; le pedimos la oportunidad de demostrar nuestra competencia técnica.',
    phases: [
      {
        id: 1,
        title: 'Ingeniería de Valor',
        investment: '$0 (Scram invierte)',
        duration: '2-3 horas',
        deliverables: [
          'Inmersión técnica profunda de su dolor operativo',
          'Blueprint de arquitectura (diagramas de flujo, topología de red, stack tecnológico)',
          'Presupuesto cerrado con SLA garantizado (no estimaciones)',
          'Validación de factibilidad honesta (si su problema se resuelve con Excel, se lo diremos)',
        ],
      },
      {
        id: 2,
        title: 'Decisión Cliente',
        options: [
          '✅ Si Aprueba → Contrato maestro + Kickoff inmediato',
          '❌ Si Rechaza → Usted se lleva el diagnóstico completo SIN COSTO. Nos damos la mano como caballeros.',
        ],
      },
      {
        id: 3,
        title: 'Ejecución',
        note: 'Solo si firmó contrato',
        features: [
          '🚀 Desarrollo con Glass Box (acceso total en tiempo real)',
          '📊 Entregas semanales verificables',
          '🔒 Propiedad Intelectual 100% suya',
        ],
      },
    ],
    callout: {
      title: '⚠️ CALIFICACIÓN AUTOMÁTICA',
      requirements: [
        'Presupuesto operativo validado >$100,000 MXN',
        'Autoridad de decisión (C-level, Director, Gerente con poder de firma)',
        'Problema de misión crítica (sistemas que, si fallan, impactan operación 24/7)',
      ],
      note: 'Buscamos socios estratégicos, no aventuras.',
    },
    cta: 'Aplicar para Sesión Try & Buy',
  },

  socialProof: {
    title: 'Tecnología que Blinda Operaciones Críticas en Todo México',
    intro: 'No experimentamos con su negocio. Utilizamos estándares globales probados en combate.',
    partners: ['Cisco', 'Fortinet', 'Microsoft Partner', 'Google Cloud'],
    testimonial: {
      quote:
        'Teníamos tres sistemas desconectados: Inventario, Ventas y Embarques. Nuestra operación dependía de hojas de cálculo manuales propensas a error humano. Scram no solo desarrolló el middleware que conectó todo; diseñaron una arquitectura que resiste nuestros picos de temporada alta. Fueron la única consultora que se atrevió a mostrarnos la arquitectura completa antes de cobrarnos un peso. Esa transparencia y capacidad técnica nos dio la confianza para migrar toda nuestra operación crítica a su plataforma.',
      author: 'Director de Operaciones',
      company: 'Grupo Logístico Transnacional (Monterrey, NL)',
    },
    metrics: [
      { value: '25+ años', label: 'Sirviendo corporativos' },
      { value: '127 clientes', label: 'satisfechos' },
      { value: '99.5% uptime', label: 'promedio garantizado' },
    ],
  },

  faq: {
    title: 'Preguntas Incómodas. Respuestas Directas.',
    items: [
      {
        question: '¿Realmente es gratis la fase inicial de ingeniería? ¿Dónde está el truco?',
        answer:
          'No hay truco, es una estrategia de inversión. Bajo el modelo "Try & Buy", Scram invierte el tiempo de sus Arquitectos Senior (Diagnóstico y Diseño) para demostrar capacidad y reducir su percepción de riesgo. Sin embargo, para activar este beneficio, realizamos una breve calificación financiera y operativa previa. Queremos asegurarnos de que su empresa tiene un desafío real que vale la pena resolver y la capacidad para ejecutar la solución si el diseño es correcto.',
      },
      {
        question: '¿Necesitan venir físicamente a mis oficinas para desarrollar?',
        answer:
          'Para el 95% de los proyectos de software, la respuesta es NO. Nuestra metodología "Glass Box" y las herramientas de colaboración de Vibe Working nos permiten auditar, diseñar y desarrollar remotamente con total seguridad y eficiencia. Sin embargo, si su proyecto implica hardware físico (IoT, sensores en líneas de producción, servidores locales), desplegamos brigadas técnicas especializadas a cualquier parte de la República Mexicana para la instalación y puesta a punto.',
      },
      {
        question: '¿La IA escribirá mi código? ¿Es seguro y confiable?',
        answer:
          'Es una excelente pregunta. La IA (modelos LLM avanzados) genera la estructura base, el código repetitivo y las pruebas preliminares, lo que nos da velocidad. Pero JAMÁS dejamos a la IA sola. Nuestros Ingenieros Senior (Humanos) auditan cada línea, optimizan la lógica crítica y aseguran el cumplimiento de normativas de seguridad. Todo el código pasa por filtros estrictos de ciberseguridad (SAST/DAST) antes de cualquier entrega. Es lo mejor de dos mundos: Velocidad artificial + Criterio humano.',
      },
      {
        question: '¿Quién es el dueño legal del código y la propiedad intelectual?',
        answer:
          'Usted. Absolutamente. Practicamos la Soberanía Tecnológica. A diferencia de las agencias que "rentan" el código o lo secuestran en servidores propietarios, nosotros operamos con una política de entrega total. Al finalizar el proyecto, usted recibe: Código fuente completo (GitHub/GitLab), Documentación técnica exhaustiva, Credenciales de infraestructura (si aplica), Transferencia de dominios y certificados SSL. Todo queda bajo su control absoluto.',
      },
      {
        question: '¿Cuánto cuesta realmente? ¿Por qué no publican precios?',
        answer:
          'El desarrollo de software empresarial no tiene "precio de lista" porque cada proyecto tiene requerimientos únicos. Sin embargo, para anclar expectativas: nuestros proyectos típicos arrancan desde $100,000 MXN para sistemas de complejidad media (3-5 módulos, integraciones básicas) hasta $500,000+ MXN para arquitecturas complejas de misión crítica. En la Sesión Try & Buy, le entregamos un presupuesto cerrado (no estimado) basado en su scope específico. Sin sorpresas, sin "horas extra" no contempladas.',
      },
    ],
  },

  trybuy: {
    eyebrow: 'Try & Buy',
    title: 'Prueba sin riesgo',
    subtitle: 'No vendemos promesas. Vendemos resultados tangibles.',
    description:
      'La primera fase (diagnóstico + prototipo) es completamente sin costo si decides no continuar. Solo pagas cuando ves valor real.',
    cta: 'Agendar sesión técnica',
    helperText: 'Sin costo · Sin compromiso · Respuesta en 24h',
  },

  finalCta: {
    eyebrow: 'Empieza hoy',
    title: 'De la conversación al deploy en semanas',
    description:
      'No más meses de incertidumbre. No más presupuestos que se disparan. No más cajas negras. Solo ingeniería sólida con transparencia total.',
    cta: 'Agendar sesión técnica',
    helperText: 'Primera sesión sin costo · Respuesta en 15 minutos',
  },
};
