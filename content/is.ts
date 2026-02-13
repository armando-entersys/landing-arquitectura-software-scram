import type { SiteContent } from './types';

export const is: SiteContent = {
  hero: {
    eyebrow: 'Hugbúnaðarverkfræði fyrir fyrirtæki | Landsþekja',
    title: 'Kerfin þín tilbúin',
    titleHighlight: 'á vikum',
    titleContinued: 'ekki mánuðum',
    subtitle:
      'Agentic Architect: gervigreind + reyndir verkfræðingar sem þróa fyrirtækjahugbúnað fyrir framleiðslu, flutningastarfsemi og dreifingu um allt Mexíkó. Fast verð. Full gagnsæi.',
    ctaPrimary: 'Bóka arkitektúrfund',
    ctaSecondary: 'Sjá tilviksrannsóknir',
    helperText: 'Mat án skuldbindinga • Svar innan 24 klst. • Landsþekja',
    stats: [
      { value: '40%', label: 'Lægri kostnaður' },
      { value: '3x', label: 'Hraðar' },
      { value: '50+', label: 'Verkefni' },
    ],
  },

  problem: {
    title: 'Hvers vegna mistakast hugbúnaðarverkefni?',
    subtitle: '70% verkefna fara fram úr fjárhagsáætlun. 75% ERP-innleiðinga ná ekki markmiðum. Þetta er ekki óheppni — þetta er kerfisbundið vandamál.',
    challenges: [
      {
        icon: 'SearchX',
        title: 'Svarti kassinn',
        description: 'Þú undirritar fyrirframgreiðslu og birginn hverfur. Vikur líða án afurða, stöðuskýrslur fullar af tækniorðum sem þú skilur ekki. Þú missir stjórnina.',
        solution: 'Glass Box samskiptareglur: rauntíma aðgangur að hugbúnaðargeymslu og verkefnaspjöldum. Þú sérð hvert framfaraskref, hverja hindrun.',
      },
      {
        icon: 'TrendingUp',
        title: 'Kostnaður sem springur',
        description: 'Þeir rukka á tímagjaldi sem hvetur til óhagkvæmni. 70% verkefna kosta 27% meira en áætlað var.',
        solution: 'Fast verð, tryggt. Ef kostnaður hækkar, þá er það okkar vandamál — ekki þitt.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Hugbúnaður sem gefst upp',
        description: 'Hann lítur frábærlega út í kynningu í fundarherberginu en hrynur þegar teymi þín nota hann á verksmiðjugólfinu eða í akri.',
        solution: 'Við prófum á raunverulegri starfsemi þinni: léleg tenging, mikið gagnamagn, aðstæður á vettvangi.',
      },
    ],
  },

  howItWorks: {
    title: 'Try & Buy aðferðafræðin',
    subtitle: 'Ekki skrifa undir auða ávísun. Prófaðu verkfræðina okkar fyrst.',
    steps: [
      {
        number: '1',
        title: 'Arkitektúrfundur',
        description: 'Tæknilegt ráðgjafasamtal þar sem við greinum raunverulegan rekstrarvanda þinn. Þetta er ekki sölukall.',
        time: '30 mín',
      },
      {
        number: '2',
        title: 'Tæknileg hönnunarskrá',
        description: 'Arkitektúrmyndir, tæknistaflinn og fast verð. Þú sérð lausnina áður en þú kaupir hana.',
        time: '2-3 dagar',
      },
      {
        number: '3',
        title: 'Virkur frumgerður',
        description: 'Virk útgáfa sem teymið þitt getur prófað. Raunverulegur hugbúnaður, ekki skissar.',
        time: '1-2 vikur',
      },
      {
        number: '4',
        title: 'Upplýst ákvörðun',
        description: 'Ef tillaga okkar er skynsamleg, höldum við áfram. Ef ekki, tökumst við í hendur og þú heldur greiningunni.',
        time: 'Enginn þrýstingur',
      },
    ],
  },

  benefits: {
    title: 'Agentic Architect',
    items: [
      {
        icon: 'Zap',
        title: 'Gervigreindarhraði',
        description: 'Gervigreind framleiðir 80% af kóðagrunninum. Reyndir verkfræðingar endurskoða og hanna viðskiptarökfræðina.',
        metric: '3x hraðar',
      },
      {
        icon: 'DollarSign',
        title: 'Fast verð',
        description: 'Læst verð frá fyrsta degi. Engin óvænt aukagjöld eða falinn kostnaður.',
        metric: '40% minna',
      },
      {
        icon: 'Eye',
        title: 'Glass Box',
        description: 'Fullur aðgangur að hugbúnaðargeymslum og verkefnaspjöldum. Eins og teymið vinni á bak við glervegg.',
        metric: 'Full gagnsæi',
      },
      {
        icon: 'Shield',
        title: 'Try & Buy',
        description: 'Tæknilegt mat áður en þú fjárfestir. Við tökum áhættuna á að heilla þig.',
        metric: 'Engin áhætta',
      },
      {
        icon: 'Target',
        title: 'Byggt fyrir þinn rekstur',
        description: 'Hugbúnaður hannaður í kringum raunverulegt verkflæði þitt, ekki staðlaðar sniðmát.',
        metric: 'Sérsmíðað',
      },
      {
        icon: 'Rocket',
        title: 'Prófað á vettvangi',
        description: 'Staðfest með raunverulegum teymum þínum, við raunverulegar rekstraraðstæður.',
        metric: 'Tryggt',
      },
    ],
  },

  clientLogos: {
    title: 'Fyrirtæki sem treysta okkur',
    subtitle: 'Við vinnum með leiðtogum í framleiðslu, flutningum og verslun um allt Mexíkó',
    categories: [
      'Framleiðslufyrirtæki',
      'Flutningafyrirtæki',
      'Viðskiptafyrirtæki',
      'Dreifingarfyrirtæki',
      'Bílaiðnaður',
      'Byggingarfyrirtæki',
    ],
  },

  caseStudies: {
    title: 'Sannanlegur árangur',
    subtitle: 'Raunveruleg verkefni afhent á föstu verði og á réttum tíma',
    cases: [
      {
        title: 'Pöntunar- og reikningakerfi',
        company: 'Baja Aqua Farms',
        industry: 'Fiskeldi / Útflutningur',
        challenge: 'Sundurgreint pöntunarferli dreift á eldri kerfi, Oracle Cloud og Salesforce. Handvirk CFDI-reikningagerð, engin sjálfvirk birgðafrátekning á stykki og engin rekjanleiki í pöntun-til-greiðslu ferlinu.',
        solution: 'API-gátt (.NET 8) sem stjórnar öllu flæðinu: val á birgðum eftir stykki → pöntunargerð í Oracle OIC → sjálfvirk frátekning → AutoInvoice → CFDI rafræn reikningagerð í gegnum PAC. 4 bakgrunnsverkefni með endurtilraunum, læsingum og fullri endurskoðunarslóð.',
        results: [
          { metric: '4 verk', label: 'Sjálfvirk keðja 24/7' },
          { metric: '16 gagnagrunnar', label: 'Sameinaðir í einni gátt' },
          { metric: 'CFDI', label: 'Sjálfvirk rafræn reikningagerð' },
        ],
        image: '/images/cases/aquafarms-erp.jpg',
        testimonial: 'Frá pöntun í stimplaðan reikning á mínútum, ekki dögum. Keðjan keyrir sjálf og hvert skref er endurskoðað.',
      },
      {
        title: 'Innleiðing og vottun iðnaðar',
        company: 'Coca-Cola FEMSA (KOF)',
        industry: 'Framleiðsla / Drykkir',
        challenge: 'Skyldubundin öryggisþjálfun fyrir allt starfsfólk sem kemst inn á verksmiðjusvæðið. 100% handvirkt ferli: pappírslistar, skírteini í Word, ómögulegt að staðfesta á aðgangsstaðnum.',
        solution: 'Stafrænn vettvangur með myndbandsnotkun án flýtispoilun, 30 spurningapróf á hluta (öryggi, matvælaöryggi, umhverfismál), sjálfvirkt PDF-skírteini með sannanlegu QR, stafræn skilríki og samstilling við Smartsheet.',
        results: [
          { metric: '< 2s', label: 'Skírteini búið til' },
          { metric: '↓ 90%', label: 'Stjórnunarbyrði' },
          { metric: 'QR', label: 'Staðfesting í rauntíma' },
        ],
        image: '/images/cases/kof-onboarding.jpg',
        testimonial: 'Við upprættum pappírsvinnu algjörlega. Öryggisverðurinn skannar QR-kóðann og veit samstundis hvort viðkomandi er vottaður.',
      },
      {
        title: 'Flutningastjórnunarkerfi',
        company: 'Landsvíðtæk dreifingarstarfsemi',
        industry: 'Flutningar og dreifing',
        challenge: 'Leiðir skipulagðar í Excel, engin sýnileiki fyrir viðskiptavini, misheppnaðar sendingar vegna fjarveru, afhendingarsönnun á pappír og engar ánægjumælingar.',
        solution: 'Heildarkerfi með ERP-samstillingu (Bind), sjónræn leiðaáætlun á korti með gervigreindarbestun (Google Routes), farsímaforrit sem virkar án nettengingar fyrir bílstjóra með stafrænni undirskrift og mynd, örugg opin rakning og sjálfvirkar CSAT-kannanir.',
        results: [
          { metric: '↓ 40%', label: 'Eknar mílur' },
          { metric: 'Rauntíma', label: 'Rakning viðskiptavina' },
          { metric: '5 hlutverk', label: 'Innkaup, Umferð, Bílstjóri, Sala, Forstjóri' },
        ],
        image: '/images/cases/scram-logistics.jpg',
        testimonial: 'Viðskiptavinir sjá pöntun sína í rauntíma. Misheppnaðar afhendingar minnkuðu verulega.',
      },
    ],
  },

  comparison: {
    title: 'Agentic Architect vs. hefðbundin aðferð',
    subtitle: '4 af hverjum 10 mexíkóskum fyrirtækjum tapa 1-5 milljónum USD árlega vegna hugbúnaðarbilunar',
    items: [
      {
        aspect: 'Gagnsæi',
        traditional: 'Stöðuskýrslur á tveggja vikna fresti sem þú skilur ekki',
        agenticArchitect: 'Rauntíma aðgangur að hugbúnaðargeymslum og verkefnaspjöldum',
        icon: 'Eye',
      },
      {
        aspect: 'Fjárhagsáætlun',
        traditional: 'Hækkar um 40-60% á meðan á verkefninu stendur',
        agenticArchitect: 'Fast verð frá upphafi, tryggt með samningi',
        icon: 'DollarSign',
      },
      {
        aspect: 'Hraði',
        traditional: '4-6 mánuðir áður en þú sérð eitthvað virka',
        agenticArchitect: '1-2 vikur að virkum frumgerði',
        icon: 'Clock',
      },
      {
        aspect: 'Áhætta',
        traditional: 'Stór fyrirframgreiðsla án raunverulegra trygginga',
        agenticArchitect: 'Try & Buy: metið áður en þú skuldbindur þig',
        icon: 'Shield',
      },
      {
        aspect: 'Gæði',
        traditional: 'Virkar í kynningu, bilar í framleiðslu',
        agenticArchitect: 'Staðfest með raunverulegum rekstri á vettvangi',
        icon: 'CheckCircle',
      },
    ],
  },

  team: {
    title: 'Teymið á bak við kóðann',
    subtitle: 'Reyndir verkfræðingar með 15+ ára reynslu af umbreytingu iðnaðarstarfsemi',
    description:
      'Við erum ekki risastór stofnun. Við erum þéttskipað teymi reyndra verkfræðinga sem skilja hvernig framleiðslu-, dreifingar- og flutningafyrirtæki starfa raunverulega í Mexíkó. Við tölum rekstrarmálið þitt.',
    stats: [
      { value: '15+', label: 'Ára reynsla' },
      { value: '50+', label: 'Verkefni afhent' },
      { value: '100%', label: 'Á réttum tíma og fjárhagsáætlun' },
    ],
    contact: {
      name: 'Verk. Armando Cortés',
      role: 'Verkefnastjóri',
      description: '15 ára reynsla af þróun fyrirtækjakerfa fyrir framleiðslu og flutninga. Beinn tengiliður þinn í gegnum allt verkefnið.',
      image: '/images/team/armando.jpg',
    },
  },

  testimonials: {
    title: 'Hvað viðskiptavinir okkar segja',
    items: [
      {
        quote: 'Við þurftum WMS-kerfi fyrir vöruhúsið. Það var í gangi á 6 vikum. Fyrri birgir hafði látið okkur bíða í 4 mánuði án þess að sjá neitt.',
        author: 'Roberto Sánchez',
        role: 'Rekstrarstjóri',
        company: 'Grupo Industrial del Bajío',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces',
      },
      {
        quote: 'Fjárhagsáætlunin breyttist aldrei. Á 15 árum af hugbúnaðarkaupum hafði þetta aldrei gerst.',
        author: 'Ana Martínez',
        role: 'Upplýsingatæknistjóri',
        company: 'Comercializadora del Norte',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces',
      },
      {
        quote: 'Að geta séð hvað þeir eru að gera á hverjum degi breytti allri samspelinni. Þetta er ekki svartur kassi lengur — þetta er glerveggur.',
        author: 'Carlos Fernández',
        role: 'Framkvæmdastjóri rekstrar',
        company: 'Logística Express',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces',
      },
    ],
  },

  pricing: {
    title: 'Hvernig virkar verðlagningin?',
    subtitle: 'Fast verð innan 48 klukkustunda. Þessir þættir ákvarða umfangið:',
    factors: [
      {
        icon: 'Target',
        title: 'Flækjustig rekstrar',
        description: 'Hversu mörg ferli við sjálfvirknivæðum og hversu einstaklegt verkflæðið þitt er.',
      },
      {
        icon: 'Users',
        title: 'Notendur og staðsetningar',
        description: 'Hvort sem er fyrir 5 manns eða 500, eina skrifstofu eða 20 útibú.',
      },
      {
        icon: 'Plug',
        title: 'Nauðsynlegar samþættingar',
        description: 'Tenging við núverandi kerfi þín: ERP, SAP, API-viðmót, skynjara eða vélbúnað.',
      },
      {
        icon: 'Database',
        title: 'Gagnamagn',
        description: 'Þúsundir eða milljónir viðskipta. Hvert verkefni stækkar á mismunandi hátt.',
      },
    ],
    guarantee: {
      title: 'Loforð Scram',
      points: [
        'Fast verð áður en við byrjum',
        'Tæknilegt mat áður en fjárfest er',
        'Enginn falinn kostnaður eða óvæntar breytingar',
        'Kóðinn er 100% þinn, skjalfestur og viðhaldshæfur',
      ],
    },
    cta: {
      title: 'Fast verð innan 48 klukkustunda',
      subtitle: 'Segðu okkur frá rekstri þínum. Við skilum tæknilegri hönnunarskrá og ítarlegu verðtilboði.',
      buttonText: 'Biðja um tæknilegt mat',
    },
  },

  faq: {
    title: 'Algengar spurningar',
    items: [
      {
        question: 'Hvernig virkar Try & Buy líkanið?',
        answer:
          'Við framkvæmum tæknilegt mat og kynnum arkitektúrhönnun með föstu verði. Ef tillaga okkar er skynsamleg, höldum við áfram. Ef ekki, heldur þú öllu greiningunni — án skuldbindinga. Við tökum áhættuna á að sanna hæfni okkar.',
      },
      {
        question: 'Hvað ef verkefnið uppfyllir ekki væntingar mínar?',
        answer:
          'Við höldum aðeins áfram þegar þú ert ánægð/ur með afurðir hvers áfanga. Engar smáletrar, enginn þvingaður samningur. Kóðinn er þinn frá fyrsta degi.',
      },
      {
        question: 'Vinnið þið á staðnum eða í fjarvinnu?',
        answer:
          'Við starfum 100% í fjarvinnu með reyndum arkitektum og verkfræðingum víðs vegar um Mexíkó. Innviðir okkar eru á fyrirtækjastigi og við vinnum saman í rauntíma. Ef verkefni krefst nálægðar, ferðumst við þangað sem þarf.',
      },
      {
        question: 'Hvernig tryggið þið að þið hverfið ekki mitt í verkefni?',
        answer:
          'Glass Box samskiptareglur: þú hefur rauntíma aðgang að hugbúnaðargeymslum og verkefnastjórnunarspjöldum. Þú sérð hvert commit, hvert framfaraskref, hverja hindrun. Það er ómögulegt að hverfa þegar viðskiptavinurinn sér allt.',
      },
      {
        question: 'Hvað felst í stuðningi eftir ráðsetningu?',
        answer:
          'Fyrstu 3 mánuðir stuðnings og aðlögunar eru innifaldir. Eftir það getur þú valið mánaðarlega viðhaldsáætlun eða séð um kerfið sjálfur — kóðinn er 100% þinn, vel skjalfestur og án falinna tenginga.',
      },
    ],
  },

  cta: {
    title: 'Vísið okkur á erfiðustu áskorunina',
    subtitle: '30 mínútur með reyndum arkitekt. Engin skuldbinding, engar almennar kynningar.',
    button: 'Bóka arkitektúrfund',
    helperText: 'Svar innan 24 klukkustunda • Tæknilegt mat innifalið',
  },

  ui: {
    screenshotPlaceholder: 'Skjámynd af raunverulegu kerfi',
    softwareRunning: 'Hugbúnaður sem keyrir í raunverulegum fyrirtækjum',
    videoDemoHere: 'Myndbandssýning hér',
    theChallenge: 'Áskorunin:',
    theSolution: 'Lausnin:',
    traditionalMethod: 'Hefðbundin aðferð',
    withAgenticArchitect: 'Með Agentic Architect',
    requestDiagnostic: 'Biðja um tæknilegt mat',
    closedBudget48h: 'Fast verð innan 48 klukkustunda',
    scheduleCall: 'Bóka símtal',
    whatsAppDirect: 'WhatsApp beint',
    projectsDelivered: '50+ verkefni afhent',
    industriesBadge: 'Framleiðsla, flutningar og dreifing',
    chatTitle: 'Spjallaðu við sérfræðing',
    chatSubtitle: 'Svar innan 15 mínútna',
    chatMessage: 'Hæ! Ég er úr SCRAM teyminu. Hvernig get ég aðstoðað þig með hugbúnaðarverkefnið þitt?',
    chatNow: 'Núna',
    startConversation: 'Hefja samtal',
    chatSchedule: 'Mán-Fös 9:00-18:00 | Skjótt svar',
    copyright: '© 2026 Scram Consulting. Öll réttindi áskilin.',
    tagline: 'Fyrirtækjahugbúnaður sem virkar',
    calendarTitle: 'Arkitektúrfundur hugbúnaðar - Scram Consulting',
    calendarDetails:
      'Tæknilegt matsfundur með verk. Armando Cortés.\n\nUmræðuefni:\n- Mat á hugbúnaðarþörfum\n- Ráðlögð arkitektúr\n- Tímaáætlun og áætlaður kostnaður\n\nTengiliður: Verk. Armando Cortés\nWhatsApp: +52 221 106 5056\nNetfang: contacto@scram2k.com',
    calendarLocation: 'Google Meet (hlekkur verður sendur)',
    whatsAppHeroMsg: 'Hæ, ég hef áhuga á að bóka arkitektúrfund hugbúnaðar fyrir fyrirtækið mitt.',
    whatsAppPricingMsg: 'Hæ, ég hef áhuga á að biðja um tæknilegt mat fyrir fyrirtækið mitt.',
    whatsAppCtaMsg: 'Hæ, ég hef áhuga á að bóka arkitektúrfund hugbúnaðar fyrir fyrirtækið mitt.',
    whatsAppTeamMsg: 'Hæ verk. Armando, ég hef áhuga á að fræðast meira um arkitektúrþjónustu hugbúnaðar hjá Scram Consulting.',
    whatsAppFloatingMsg: 'Hæ, ég hef áhuga á að fræðast meira um Agentic Architect fyrir fyrirtækið mitt.',
  },

  metadata: {
    title: 'Agentic Architect | Fyrirtækjahugbúnaður | Scram Consulting',
    description:
      'Fyrirtækjahugbúnaður settur upp á vikum, ekki mánuðum. Gervigreind + reyndir verkfræðingar með föstu verði. Framleiðsla, flutningar og dreifing um allt Mexíkó. Try & Buy aðferðafræði.',
    ogTitle: 'Fyrirtækjahugbúnaður á vikum | Scram Consulting',
    ogDescription:
      'Agentic Architect: Gervigreind + reyndir verkfræðingar. Fast verð, full gagnsæi. Framleiðsla, flutningar og dreifing um allt Mexíkó.',
    twitterTitle: 'Fyrirtækjahugbúnaður á vikum | Scram Consulting',
    twitterDescription:
      'Gervigreind + reyndir verkfræðingar. Fast verð. Framleiðsla, flutningar og dreifing um allt Mexíkó.',
  },
};
