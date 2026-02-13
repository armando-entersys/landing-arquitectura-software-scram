# Sitio Web Scram Consulting - Documentacion Completa para Campanas

**Dominio:** https://arquitectura-software.scram2k.com
**Servidor:** Google Cloud Platform (us-central1-c)
**IP:** 34.59.193.54
**Tecnologia:** Next.js 16.1.6 + Docker + Traefik (SSL automatico)

---

## 1. QUE ES ESTE SITIO (En palabras simples)

Es una **landing page** (pagina de aterrizaje) diseñada con un solo objetivo: **convertir visitantes en leads** (personas interesadas que nos contacten).

No es un sitio web normal con muchas paginas. Es UNA SOLA PAGINA larga, optimizada para que alguien que llegue — ya sea de Google, Facebook, LinkedIn o donde sea — entienda rapidamente que hacemos, por que somos diferentes, y decida contactarnos.

### Que es una landing page?
Imagina un embudo: arriba entra mucha gente (trafico), y abajo salen los interesados (leads). La landing page ES ese embudo. Cada seccion esta diseñada para mover al visitante hacia abajo, hacia el momento de contacto.

### Que vendemos aqui?
**Software empresarial a la medida** para empresas de manufactura, logistica y distribucion en Mexico. Usamos una metodologia llamada **Agentic Architect** que combina inteligencia artificial con ingenieros senior para entregar software 3x mas rapido y 40% mas barato que el metodo tradicional.

---

## 2. ESTRUCTURA DEL SITIO (De arriba a abajo)

La pagina tiene **11 secciones** en este orden. Cada una tiene un proposito especifico:

### Seccion 1: Hero (Lo primero que ves)
- **Que es:** El area principal con el titulo grande, subtitulo y botones de accion
- **Proposito:** Capturar atencion en los primeros 3 segundos. Si no enganchas aqui, el visitante se va
- **Elementos:**
  - Logo de Scram Consulting
  - Titulo: "Tus sistemas listos **en semanas** no en meses"
  - Subtitulo explicando Agentic Architect
  - **Boton naranja** "Solicitar sesion de arquitectura" → Abre WhatsApp
  - **Boton blanco** "Ver casos de exito" → Baja a la seccion de testimonios
  - Mini estadisticas: 40% menos costo, 3x mas rapido, 50+ proyectos
  - Animacion visual (solo en desktop)
- **ID HTML:** No tiene ID propio (es la primera seccion)

### Seccion 2: Logos de clientes
- **Que es:** Franja con categorias de empresas que hemos atendido
- **Proposito:** Prueba social inmediata. "Si estas empresas confian en nosotros, tu tambien puedes"
- **Categorias:** Grupos Manufactureros, Empresas de Logistica, Comercializadoras, Distribuidoras, Industria Automotriz, Empresas de Construccion

### Seccion 3: Problema
- **Que es:** 3 tarjetas que describen los problemas comunes al contratar software
- **Proposito:** Hacer que el visitante se identifique con el dolor. "Si, a mi me pasa eso"
- **Los 3 problemas:**
  1. **La Caja Negra** - el proveedor desaparece despues del anticipo
  2. **Presupuesto que se dispara** - cobran por hora, incentivando ineficiencia
  3. **Software que no aguanta** - funciona en la demo pero falla en produccion
- Cada tarjeta incluye la solucion de Scram abajo
- **ID HTML:** `#problema`

### Seccion 4: Casos de exito
- **Que es:** 3 proyectos reales con resultados medibles
- **Proposito:** Demostrar que no es humo, son resultados reales
- **Proyectos:**
  1. **Baja Aqua Farms** - ERP de ordenes y facturacion (Oracle, CFDI, 16 bases de datos)
  2. **Coca-Cola FEMSA (KOF)** - Onboarding y certificacion industrial
  3. **Sistema de Gestion Logistica** - Rutas con IA, tracking, app movil
- **ID HTML:** `#casos-de-exito`

### Seccion 5: Metodologia Try & Buy (Como funciona)
- **Que es:** Timeline de 4 pasos con tiempos
- **Proposito:** Mostrar que el proceso es simple y sin riesgo
- **Pasos:**
  1. Sesion de arquitectura (30 min)
  2. Blueprint tecnico (2-3 dias)
  3. Prototipo funcional (1-2 semanas)
  4. Decision informada (sin presion)
- **ID HTML:** `#metodologia`

### Seccion 6: Beneficios (Agentic Architect)
- **Que es:** Grid de 6 tarjetas con beneficios clave
- **Proposito:** Resumir la propuesta de valor en puntos concretos
- **Beneficios:** Velocidad agéntica, Presupuesto cerrado, Glass Box, Try & Buy, A tu medida, Probado en campo
- **ID HTML:** `#beneficios`

### Seccion 7: Comparacion (Agentic Architect vs Tradicional)
- **Que es:** 5 filas comparando metodo tradicional vs Agentic Architect
- **Proposito:** Hacer obvio por que somos mejores
- **Aspectos:** Transparencia, Presupuesto, Velocidad, Riesgo, Calidad
- **Fondo oscuro** para crear contraste visual
- No tiene ID propio

### Seccion 8: Testimonios
- **Que es:** 3 citas de clientes con foto, nombre, puesto y empresa
- **Proposito:** Confianza. "Gente real dice cosas buenas de nosotros"
- **Testimonios de:** Roberto Sanchez (Director Ops), Ana Martinez (Gerente TI), Carlos Fernandez (COO)
- Usa fotos de Unsplash (placeholder)
- Se ve como carrusel horizontal en movil
- **ID HTML:** `#casos-de-exito` (comparte ID con la seccion anterior)

### Seccion 9: Equipo
- **Que es:** Tarjeta del Ing. Armando Cortes con foto real, titulo y botones
- **Proposito:** Poner cara humana. El visitante sabe con quien va a hablar
- **Botones:**
  - **"Agendar llamada"** → Abre Google Calendar con evento pre-llenado para el siguiente dia habil a las 10 AM
  - **"WhatsApp directo"** → Abre chat con Armando
- Estadisticas: 15+ años, 50+ proyectos, 100% en tiempo
- **ID HTML:** `#equipo`

### Seccion 10: Inversion (Pricing)
- **Que es:** Explicacion de como se determina el presupuesto
- **Proposito:** Responder "cuanto cuesta" sin dar precios (porque cada proyecto es diferente)
- **4 factores:** Complejidad operativa, Usuarios y ubicaciones, Integraciones, Volumen de datos
- **Caja verde** con garantias de Scram
- **Boton "Solicitar diagnostico tecnico"** → WhatsApp
- **ID HTML:** `#servicios`

### Seccion 11: FAQ (Preguntas frecuentes)
- **Que es:** 5 preguntas con respuestas desplegables (accordion)
- **Proposito:** Resolver objeciones finales antes de contactar
- **Preguntas:** Try & Buy, Expectativas, Presencial/remoto, Desaparecer, Soporte post-lanzamiento
- **ID HTML:** `#faq`

### Seccion 12: CTA Final
- **Que es:** Bloque naranja con llamada a la accion fuerte
- **Proposito:** Ultimo empujon. "Ya leiste todo, ahora contactanos"
- **Texto:** "Demuestrenos su reto mas dificil"
- **Boton blanco** → WhatsApp
- **ID HTML:** `#contacto`

### Footer
- Logo invertido (blanco)
- Copyright 2026

### Boton flotante de WhatsApp
- **Que es:** Boton verde fijo en la esquina inferior derecha
- **Proposito:** Que el visitante pueda contactarnos en CUALQUIER momento, sin importar donde este en la pagina
- Aparece despues de 3 segundos
- Tiene un badge rojo "1" que pulsa cada 10 segundos (crea urgencia)
- Al hacer clic, abre un mini-chat con mensaje de bienvenida
- El boton "Iniciar conversacion" abre WhatsApp con mensaje pre-escrito
- **Numero:** +52 221 106 5056 (Ing. Armando Cortes)

---

## 3. SISTEMA DE TRACKING (Como medimos todo)

### Que es el tracking?
Es como tener camaras de seguridad digitales en la pagina. Cada vez que un visitante hace algo (llega, hace clic, ve una seccion), queda registrado. Esto nos permite saber que funciona y que no.

### Como funciona?
El sitio tiene un **Universal Tracker** — un cerebro central que recibe cada accion del visitante y la envia a TODAS las plataformas de medicion al mismo tiempo. Esto significa que no tienes que configurar cada plataforma por separado.

```
Visitante hace clic
       |
       v
Universal Tracker (cerebro central)
       |
       +---> Google Tag Manager (GTM)
       +---> Meta Pixel (Facebook/Instagram)
       +---> LinkedIn Insight Tag
       +---> Google Ads Conversiones
       +---> Microsoft Clarity (grabacion de sesion)
       +---> Mautic CRM (leads)
       +---> Backend propio (almacena para Gemini AI)
```

### Plataformas de tracking soportadas

| Plataforma | Variable de entorno | Para que sirve | Estado actual |
|---|---|---|---|
| **Google Tag Manager** | `NEXT_PUBLIC_GTM_ID` | Orquesta todos los eventos de Google (Analytics, Ads) | Pendiente de configurar |
| **Google Ads** | `NEXT_PUBLIC_GOOGLE_ADS_ID` | Mide conversiones de anuncios (cuantos clicks se vuelven leads) | Pendiente |
| **Meta Pixel** | `NEXT_PUBLIC_META_PIXEL_ID` | Mide conversiones de Facebook/Instagram, crea audiencias lookalike | Pendiente |
| **LinkedIn Insight** | `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` | Mide conversiones de LinkedIn Ads | Pendiente |
| **Microsoft Clarity** | `NEXT_PUBLIC_CLARITY_ID` | Graba sesiones reales de usuarios (como un video de lo que hacen) | **ACTIVO** (ID: vfllmftr67) |
| **Mautic CRM** | `NEXT_PUBLIC_MAUTIC_BASE_URL` | CRM para seguimiento automatico de leads | Pendiente |
| **Backend propio** | Automatico | Almacena eventos para analisis con Gemini AI | **ACTIVO** |

### Que eventos se trackean?

| Evento | Cuando se dispara | Donde se envia |
|---|---|---|
| `cta_click` | Cualquier boton de accion (WhatsApp, agendar, scroll) | Todas las plataformas |
| `whatsapp_click` | Click en boton de WhatsApp | Todas + conversion Google Ads + conversion LinkedIn |
| `form_submit` | Envio de formulario (cuando se implemente) | Todas + Mautic CRM + Clarity identify |
| `section_view` | Cuando el visitante ve una seccion | GTM + Backend |
| `visitor_profiled` | Cuando se detecta el perfil del visitante por query strings | GTM + Mautic + Clarity tags |

### Que es una "conversion"?
Una conversion es cuando un visitante hace lo que queremos que haga. En nuestro caso:
- **Conversion principal:** Click en WhatsApp (= nos va a escribir)
- **Conversion secundaria:** Agendar llamada en Google Calendar
- **Micro-conversion:** Ver una seccion especifica, hacer scroll profundo

### Que es el Session ID?
Cada visitante recibe un identificador unico cuando llega al sitio. Se guarda en el navegador mientras la pestaña esta abierta. Esto permite agrupar todos los eventos de un mismo visitante y entender su recorrido completo: "llego, vio el hero, bajo al problema, vio casos de exito, hizo clic en WhatsApp".

---

## 4. MICROSOFT CLARITY (Grabacion de sesiones)

### Que es?
Clarity es una herramienta gratuita de Microsoft que **graba literalmente lo que hace cada visitante** en el sitio. Puedes ver un video de como mueve el mouse, donde hace clic, hasta donde hace scroll.

### Que informacion da?
- **Grabaciones de sesion:** Video real de cada visita
- **Mapas de calor (heatmaps):** Imagen que muestra donde hacen clic la mayoria de visitantes
- **Scroll maps:** Hasta donde baja la gente en la pagina
- **Filtros por segmento:** Puedes filtrar grabaciones por intent, industria, persona, etc.

### Datos que se envian a Clarity automaticamente
Cuando un visitante llega con query strings (por ejemplo de una campaña), Clarity recibe estos tags:
- `intent`: high, problem_aware, comparing, exploring
- `industry`: manufacturing, logistics, retail, services
- `persona`: coo, cto, manager, technical
- `budget`: starter, growth, enterprise
- `utm_source`: de donde viene (google-ads, facebook, linkedin)
- `utm_campaign`: nombre de la campana

### Como acceder?
- Ir a https://clarity.microsoft.com
- Proyecto ID: `vfllmftr67`
- Ver grabaciones, heatmaps, scroll maps

### Ejemplo practico:
"Quiero ver que hacen los COOs de manufactura que vienen de Google Ads"
→ En Clarity, filtrar por tags: `persona=coo`, `industry=manufacturing`, `utm_source=google-ads`
→ Te muestra solo las grabaciones de ese segmento

---

## 5. SISTEMA DE PERSONALIZACION INTELIGENTE (AI Funnel)

### Que es esto?
Es un sistema que **cambia lo que el visitante ve** segun de donde viene y que busca. No todos los visitantes son iguales, entonces no todos deberian ver lo mismo.

### Como funciona? (Explicacion con ejemplo)

Imagina 2 personas:

**Persona A:** Un COO de una empresa de manufactura que busco "cotizacion software ERP" en Google y le salio nuestro anuncio.
→ URL: `?utm_source=google-ads&utm_medium=cpc&keywords=cotizacion,erp&intent=high&industry=manufacturing&persona=coo`
→ El sistema detecta: intent ALTO, manufactura, COO
→ Le muestra: CTA "Solicitar Sesion Try & Buy Ahora" (urgente, directo)

**Persona B:** Un CTO que vio un post de LinkedIn y solo esta explorando.
→ URL: `?utm_source=linkedin&utm_medium=sponsored&persona=cto&intent=exploring`
→ El sistema detecta: CTO explorando
→ Le muestra: CTA "Ver Arquitectura Tecnica" (informativo, sin presion)

### Que cambia segun el perfil?
| Propiedad | Que significa |
|---|---|
| **Texto del CTA** | El texto del boton principal cambia segun lo que el visitante necesita oir |
| **Seccion enfatizada** | Que parte de la pagina se destaca visualmente |
| **Nivel de urgencia** | Si se muestra alto, medio o bajo |
| **Tipo de testimonio** | Se muestran testimonios relevantes al rol del visitante |

### Parametros que puedes usar en la URL

#### UTM (estandar de la industria — Google, Facebook, LinkedIn los usan)
| Parametro | Que es | Ejemplo |
|---|---|---|
| `utm_source` | De donde viene el trafico | `google-ads`, `facebook`, `linkedin` |
| `utm_medium` | Tipo de trafico | `cpc` (pago por clic), `paid-social`, `email` |
| `utm_campaign` | Nombre de tu campana | `manufactura-q1`, `retargeting`, `enterprise` |
| `utm_content` | Variante del anuncio | `coo-banner`, `cto-video` |

#### Personalizacion (propios de Scram)
| Parametro | Valores | Que hace |
|---|---|---|
| `intent` | `high`, `problem_aware`, `comparing`, `exploring` | Define la intencion de compra |
| `industry` | `manufacturing`, `logistics`, `retail`, `services` | Industria del visitante |
| `budget` | `starter`, `growth`, `enterprise` | Tamaño de empresa/presupuesto |
| `persona` | `coo`, `cto`, `manager`, `technical` | Rol del visitante |
| `keywords` | Separadas por coma | Las palabras que busco en Google |

### Persistencia (se acuerda del visitante)
Cuando alguien llega con query strings, su perfil se guarda en el navegador por **30 dias**. Si regresa despues (sin query strings), el sitio recuerda quien es y le muestra la experiencia personalizada.

---

## 6. ANALISIS CON INTELIGENCIA ARTIFICIAL (Gemini)

### Que es?
El sitio almacena todos los eventos de los visitantes en un archivo interno. Hay un endpoint (URL especial) que toma esos datos, se los manda a **Google Gemini** (la IA de Google), y Gemini genera un **reporte ejecutivo** con recomendaciones.

### Como consultar el reporte?

Desde la terminal o cualquier herramienta que haga peticiones HTTP:

```bash
curl -H "x-api-key: Op3r4c10n3s.2026" "https://arquitectura-software.scram2k.com/api/analytics/insights?days=7"
```

- `days=7` → Ultimos 7 dias
- `days=30` → Ultimo mes
- `days=1` → Solo hoy

### Que devuelve?
1. **Resumen Ejecutivo** - 3 puntos clave
2. **Metricas de Conversion** - tasa de conversion, donde se pierden leads
3. **Comportamiento del Usuario** - scroll depth, secciones mas vistas, CTAs mas efectivos
4. **Perfil del Visitante Ideal** - basado en datos reales
5. **Recomendaciones Accionables** - 5 acciones concretas
6. **Oportunidades de Personalizacion** - que segmentos priorizar

### Endpoint de eventos crudos

Si quieres ver los eventos sin procesar:

```bash
curl -H "x-api-key: Op3r4c10n3s.2026" "https://arquitectura-software.scram2k.com/api/analytics/events?days=7"
```

### Seguridad
Ambos endpoints estan protegidos con un API key que se envia en el header `x-api-key`. Sin la clave correcta, devuelve error 401.

---

## 7. SEO Y GEO (Para que nos encuentren)

### Que es SEO?
**Search Engine Optimization** — que Google nos muestre cuando alguien busca "software empresarial Mexico" o cosas similares. Es trafico gratis (no pagamos por clic).

### Que es GEO?
**Generative Engine Optimization** — que las IAs (ChatGPT, Gemini, Perplexity, Claude) nos mencionen cuando alguien les pregunta "recomiendame una empresa de software en Mexico". Es lo nuevo y cada vez mas importante.

### Que tiene el sitio para SEO?

| Elemento | Que es | Para que sirve |
|---|---|---|
| **Meta title** | "Agentic Architect \| Software Empresarial \| Scram Consulting" | Lo que sale en la pestaña del navegador y en Google |
| **Meta description** | "Software empresarial desplegado en semanas..." | El texto que sale debajo del titulo en Google |
| **Keywords** | 16 palabras clave | Ayudan a Google a entender de que trata la pagina |
| **Open Graph** | Titulo, descripcion, imagen para redes sociales | Lo que sale cuando compartes el link en WhatsApp, Facebook, LinkedIn |
| **Twitter Card** | Titulo, descripcion, imagen para Twitter/X | Lo que sale cuando compartes el link en Twitter |
| **Structured Data (JSON-LD)** | 4 esquemas de datos | Le dice a Google EXACTAMENTE que somos: organizacion, servicio, FAQ, pagina web |
| **Canonical URL** | URL unica de la pagina | Evita que Google nos penalice por contenido duplicado |
| **robots.txt** | Reglas para crawlers | Le dice a Google y a las IAs que pueden leer todo el sitio |
| **sitemap.xml** | Mapa del sitio | Le dice a Google que paginas indexar |
| **Geo tags** | `geo.region=MX`, `geo.placename=Mexico` | Le dice a Google que somos de Mexico |
| **hreflang** | `es-MX` | El sitio esta en español de Mexico |

### Que tiene el sitio para GEO?

| Archivo | Que es | Para que sirve |
|---|---|---|
| **`/llms.txt`** | Archivo de texto plano | Cuando una IA lee nuestro sitio, este archivo le resume TODO sobre nosotros en un formato facil de entender. Es como un curriculum para IAs |
| **`/.well-known/ai-plugin.json`** | Archivo JSON estandar | Le dice a las IAs que somos un "plugin" de informacion. Incluye nombre, descripcion, contacto |
| **`/robots.txt`** | Permisos para IAs | Permitimos TODOS los crawlers de IA: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Baiduspider, etc. |

### Structured Data (los 4 esquemas)

En palabras simples, son "etiquetas invisibles" que le dicen a Google exactamente que somos:

1. **Organization** — Somos Scram Consulting, empresa mexicana, fundada en 2010, contacto +52 221 106 5056
2. **Service** — Ofrecemos desarrollo de software empresarial con metodologia Agentic Architect
3. **FAQPage** — Tenemos 5 preguntas frecuentes (Google puede mostrarlas directamente en resultados)
4. **WebPage** — Esta pagina esta en español de Mexico y trata sobre desarrollo de software

---

## 8. INFRAESTRUCTURA TECNICA (Como esta montado)

### Arquitectura

```
Internet
    |
    v
Traefik (reverse proxy + SSL automatico con Let's Encrypt)
    |
    v
Docker Container (node:20-alpine)
    |
    v
Next.js 16.1.6 (servidor Node.js en puerto 3000)
    |
    +---> Paginas estaticas (pre-renderizadas, super rapidas)
    +---> API routes (endpoints dinamicos para analytics)
    +---> Archivos estaticos (imagenes, logo, favicon)
```

### Que es cada cosa?

- **Traefik:** Es como un portero inteligente. Recibe todas las peticiones que llegan al servidor, les pone SSL (el candadito verde en la URL), y las manda al contenedor correcto. No tienes que preocuparte por certificados SSL — se renuevan automaticamente
- **Docker:** Es como una caja cerrada donde corre la aplicacion. Tiene todo lo que necesita adentro y no afecta al resto del servidor. Si algo sale mal, solo se reinicia la caja
- **Next.js:** Es el framework (esqueleto) sobre el que esta construida la pagina. Hecho por Vercel, lo usan Netflix, TikTok, Notion, etc. Es rapido y bueno para SEO
- **Node.js 20 Alpine:** Es la version de Node.js mas ligera posible (Alpine = minimalista). Usa poca memoria y arranca rapido

### Recursos del servidor
- **CPU:** 0.50 cores (medio procesador)
- **RAM:** 512 MB maximo, 256 MB reservados
- **Reinicio:** Automatico si se cae (unless-stopped)

### Donde se guardan los datos de analytics?
En un **Docker volume** llamado `analytics-data`. Esto significa que aunque el contenedor se reconstruya (por ejemplo al hacer un deploy), los datos de eventos NO se pierden. Estan en un disco separado.

### Variables de entorno
El archivo `.env` contiene todas las claves y configuraciones. Este archivo:
- **NO esta en Git** (esta en `.gitignore`) para seguridad
- **Esta directamente en el servidor** en `/srv/landing-arquitectura-software-scram/.env`
- Si necesitas cambiar una variable, hay que editarlo directamente en el servidor

---

## 9. COMO DESPLEGAR CAMBIOS

### Flujo de 2 pasos

**Paso 1: Push desde tu maquina**
```bash
cd "C:\Landing Arquitectura Software Scram\landing-centauro"
git add -A
git commit -m "Descripcion del cambio"
git push origin main
```

**Paso 2: Pull y rebuild en el servidor**
```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="cd /srv/landing-arquitectura-software-scram && sudo git pull origin main && sudo docker compose up -d --build"
```

### One-liner (todo junto)
```bash
cd "C:\Landing Arquitectura Software Scram\landing-centauro" && git add -A && git commit -m "Deploy update" && git push origin main && gcloud compute ssh prod-server --zone=us-central1-c --command="cd /srv/landing-arquitectura-software-scram && sudo git pull origin main && sudo docker compose up -d --build"
```

### Verificar que funciona
```bash
# Ver si el contenedor esta corriendo
gcloud compute ssh prod-server --zone=us-central1-c --command="docker ps --filter name=scram-landing-arquitectura-software-scram"

# Ver logs
gcloud compute ssh prod-server --zone=us-central1-c --command="docker logs scram-landing-arquitectura-software-scram --tail 20"

# Verificar HTTP
curl -I https://arquitectura-software.scram2k.com
```

### Actualizar .env en produccion
```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="sudo nano /srv/landing-arquitectura-software-scram/.env"
```
Despues de editar el .env, reiniciar el contenedor:
```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="cd /srv/landing-arquitectura-software-scram && sudo docker compose up -d --build"
```

---

## 10. COMO CONFIGURAR CAMPANAS

### Google Ads

**Paso 1:** Crear cuenta de Google Ads y obtener el ID (formato: AW-XXXXXXXXX)

**Paso 2:** Crear conversiones en Google Ads:
- Conversion 1: "WhatsApp Click" (valor: $100 MXN)
- Conversion 2: "Form Submit" (valor: $500 MXN)
- Anotar los labels de cada conversion

**Paso 3:** Actualizar .env en el servidor:
```
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GADS_FORM_LABEL=xxxxxxxxxxxxx
NEXT_PUBLIC_GADS_WHATSAPP_LABEL=xxxxxxxxxxxxx
```

**Paso 4:** Configurar la URL de destino de cada anuncio con query strings:

Para campaña de manufactura con intent alto:
```
https://arquitectura-software.scram2k.com/?utm_source=google-ads&utm_medium=cpc&utm_campaign=manufactura&keywords={keyword}&intent=high&industry=manufacturing
```

Para campaña de logistica comparando opciones:
```
https://arquitectura-software.scram2k.com/?utm_source=google-ads&utm_medium=cpc&utm_campaign=logistica&keywords={keyword}&intent=comparing&industry=logistics
```

**Plantilla de tracking para Google Ads:**
```
{lpurl}?utm_source=google-ads&utm_medium=cpc&utm_campaign={campaignid}&utm_content={adgroupid}&utm_term={keyword}&keywords={keyword}&intent=high&industry=manufacturing
```

Ajustar `intent`, `industry`, `persona` y `budget` segun la segmentacion de cada grupo de anuncios.

### Facebook / Instagram Ads

**Paso 1:** Obtener el Pixel ID de Meta Business Suite (formato: numero largo)

**Paso 2:** Actualizar .env:
```
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX
```

**Paso 3:** En cada anuncio, configurar URL Parameters:
```
utm_source=facebook&utm_medium=paid-social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&industry=manufacturing&persona=coo
```

Para retargeting:
```
utm_source=facebook&utm_medium=paid-social&utm_campaign=retargeting&intent=comparing&industry=manufacturing&persona=coo
```

### LinkedIn Ads

**Paso 1:** Obtener Partner ID del LinkedIn Insight Tag

**Paso 2:** Crear conversiones en Campaign Manager y obtener IDs

**Paso 3:** Actualizar .env:
```
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=XXXXXXX
NEXT_PUBLIC_LINKEDIN_FORM_CONVERSION=XXXXXXX
NEXT_PUBLIC_LINKEDIN_WHATSAPP_CONVERSION=XXXXXXX
```

**Paso 4:** URL de destino:
```
https://arquitectura-software.scram2k.com/?utm_source=linkedin&utm_medium=sponsored&utm_campaign=enterprise-cto&persona=cto&budget=enterprise&industry=manufacturing
```

### Google Tag Manager + Analytics (GA4)

**Paso 1:** Crear contenedor GTM y obtener ID (formato: GTM-XXXXXXX)

**Paso 2:** Crear propiedad GA4 y vincular con GTM

**Paso 3:** Actualizar .env:
```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

GTM ya esta pre-integrado en el layout.tsx — solo necesita el ID para activarse.

---

## 11. URLs LISTAS PARA CAMPANAS

### Google Ads - Manufactura (Intent alto)
```
https://arquitectura-software.scram2k.com/?utm_source=google-ads&utm_medium=cpc&utm_campaign=manufactura&keywords=software,erp,manufactura,cotizacion&intent=high&industry=manufacturing
```

### Google Ads - Logistica (Comparando)
```
https://arquitectura-software.scram2k.com/?utm_source=google-ads&utm_medium=cpc&utm_campaign=logistica&keywords=wms,almacen,mejor&intent=comparing&industry=logistics
```

### Google Ads - Generico
```
https://arquitectura-software.scram2k.com/?utm_source=google-ads&utm_medium=cpc&utm_campaign=software-empresarial&keywords=desarrollo,software,a,la,medida
```

### Facebook - Retargeting COO manufactura
```
https://arquitectura-software.scram2k.com/?utm_source=facebook&utm_medium=paid-social&utm_campaign=retargeting&industry=manufacturing&persona=coo
```

### Facebook - Prospeccion fria logistica
```
https://arquitectura-software.scram2k.com/?utm_source=facebook&utm_medium=paid-social&utm_campaign=awareness&industry=logistics
```

### LinkedIn - Enterprise CTO
```
https://arquitectura-software.scram2k.com/?utm_source=linkedin&utm_medium=sponsored&utm_campaign=enterprise&persona=cto&budget=enterprise&utm_content=cto-whitepaper
```

### LinkedIn - COO operaciones manufactura
```
https://arquitectura-software.scram2k.com/?utm_source=linkedin&utm_medium=sponsored&utm_campaign=operations&persona=coo&industry=manufacturing&utm_content=coo-banner
```

### Email - Nurturing segundo contacto
```
https://arquitectura-software.scram2k.com/?utm_source=mautic&utm_medium=email&utm_campaign=nurturing-2&intent=comparing&industry=manufacturing
```

### Directo - Demo para enterprise manufactura
```
https://arquitectura-software.scram2k.com/?industry=manufacturing&persona=coo&intent=high&budget=enterprise
```

---

## 12. PUNTOS DE CONTACTO (Donde llegan los leads)

Actualmente, TODOS los puntos de contacto van a WhatsApp del Ing. Armando Cortes:

| Boton | Ubicacion | Mensaje pre-escrito |
|---|---|---|
| "Solicitar sesion de arquitectura" | Hero (arriba) | "Hola, me interesa agendar una sesion de arquitectura de software para mi empresa." |
| "Solicitar diagnostico tecnico" | Seccion Pricing | "Hola, me interesa solicitar un diagnostico tecnico para mi empresa." |
| "Agendar sesion de arquitectura" | CTA final | "Hola, me interesa agendar una sesion de arquitectura de software para mi empresa." |
| Boton flotante WhatsApp | Toda la pagina | "Hola, me interesa conocer mas sobre la Agentic Architect para mi empresa." |
| "WhatsApp directo" | Seccion Equipo | "Hola Ing. Armando, me interesa conocer mas sobre los servicios de arquitectura de software de Scram Consulting." |
| "Agendar llamada" | Seccion Equipo | Abre Google Calendar con evento pre-llenado |

**Numero de WhatsApp:** +52 221 106 5056
**Email de contacto:** contacto@scram2k.com

---

## 13. ARCHIVOS CLAVE DEL PROYECTO

| Archivo | Que hace |
|---|---|
| `app/page.tsx` | La pagina principal — tiene todas las secciones, botones y logica |
| `app/layout.tsx` | Metadata SEO, structured data, GTM script, fuentes |
| `content/copy.ts` | TODO el texto del sitio en un solo archivo (facil de editar) |
| `lib/tracking/universal-tracker.ts` | El cerebro del tracking — envia eventos a todas las plataformas |
| `lib/personalization/ai-funnel.ts` | Logica de personalizacion — detecta intent, industry, persona, budget |
| `lib/personalization/useAIFunnel.ts` | Hook React que conecta la URL con la personalizacion |
| `components/providers/TrackingProvider.tsx` | Inicializa todos los pixels al cargar la pagina |
| `components/ui/FloatingWhatsApp.tsx` | Boton flotante de WhatsApp |
| `components/sections/Team.tsx` | Seccion del equipo con foto de Armando y botones de contacto |
| `components/sections/Comparison.tsx` | Tabla comparativa Agentic Architect vs tradicional |
| `components/sections/CaseStudies.tsx` | Casos de exito |
| `components/sections/ClientLogos.tsx` | Logos de clientes |
| `app/api/analytics/events/route.ts` | Endpoint que almacena eventos de visitantes |
| `app/api/analytics/insights/route.ts` | Endpoint que analiza eventos con Gemini AI |
| `app/robots.ts` | robots.txt dinamico (permite IAs) |
| `app/sitemap.ts` | sitemap.xml dinamico |
| `public/llms.txt` | Archivo para que las IAs nos lean |
| `public/.well-known/ai-plugin.json` | Plugin de IA |
| `.env` | Variables de entorno (claves, IDs, configuracion) |
| `docker-compose.yml` | Configuracion de Docker (como se despliega) |
| `Dockerfile` | Receta para construir la imagen Docker |

---

## 14. PENDIENTES Y OPORTUNIDADES

### Para activar inmediatamente (solo se necesita el ID)
1. Google Tag Manager → Poner `NEXT_PUBLIC_GTM_ID` en .env del servidor
2. Google Ads conversiones → Poner ID y labels en .env
3. Meta Pixel → Poner ID en .env
4. LinkedIn Insight → Poner Partner ID y Conversion IDs en .env
5. Google Search Console → Verificar dominio y poner ID en .env

### Para implementar
6. **Formulario de contacto** — Capturar leads con email (hoy solo WhatsApp)
7. **Mautic CRM** — Automatizar seguimiento de leads
8. **Actualizar .env en servidor** — `NEXT_PUBLIC_SITE_NAME` aun dice "Centauro" en produccion

### Para crecer
9. **Blog / contenido SEO** — Articulos para trafico organico
10. **A/B testing** — Probar variantes de textos y CTAs
11. **Lighthouse audit** — Optimizar velocidad y accesibilidad
12. **Mas casos de exito** con fotos y datos reales
13. **Video testimoniales** — Mas impactantes que texto

---

## 15. GLOSARIO (Terminos tecnicos en español)

| Termino | Que significa |
|---|---|
| **Landing page** | Pagina de aterrizaje. Una sola pagina diseñada para convertir visitantes en leads |
| **Lead** | Persona interesada que nos deja sus datos o nos contacta |
| **CTA** | Call To Action. El boton que queremos que hagan clic ("Solicitar sesion") |
| **Conversion** | Cuando un visitante hace lo que queremos (clic WhatsApp, llenar formulario) |
| **Bounce rate** | Porcentaje de gente que llega y se va sin hacer nada |
| **UTM** | Parametros en la URL que nos dicen de donde viene el trafico |
| **Pixel** | Codigo invisible que se carga en la pagina para medir visitas y conversiones |
| **Query string** | Todo lo que va despues del `?` en una URL. Ejemplo: `?utm_source=google` |
| **Tracking** | Medicion de todo lo que hacen los visitantes |
| **Cookie** | Archivo pequeño que el navegador guarda para recordar al visitante |
| **localStorage** | Similar a cookie pero mas grande. Guardamos el perfil del visitante aqui |
| **sessionStorage** | Como localStorage pero se borra cuando cierras la pestaña |
| **Session** | Una visita completa. Desde que alguien llega hasta que se va |
| **Endpoint** | Una URL especial en el servidor que recibe o devuelve datos |
| **API key** | Una contraseña para acceder a un endpoint protegido |
| **SEO** | Optimizacion para buscadores (Google). Trafico gratis |
| **GEO** | Optimizacion para IAs (ChatGPT, Gemini, etc.). Trafico del futuro |
| **Docker** | Caja cerrada donde corre la aplicacion. Aislada del resto del servidor |
| **SSL** | El candadito verde. Cifra la comunicacion para que sea segura |
| **Deploy** | Subir cambios al servidor para que el sitio se actualice |
| **Git** | Sistema de control de versiones. Guarda el historial de todos los cambios |
| **Heatmap** | Mapa de calor. Imagen que muestra donde hacen clic los visitantes |
| **Scroll depth** | Hasta donde baja la gente en la pagina (en porcentaje) |
| **Lookalike** | Audiencia similar. Facebook busca personas parecidas a tus clientes actuales |
| **Retargeting** | Volver a mostrar anuncios a gente que ya visito tu sitio |
| **Nurturing** | Cultivar un lead con contenido hasta que este listo para comprar |
| **ROAS** | Return On Ad Spend. Cuanto ganas por cada peso que inviertes en anuncios |
| **Funnel** | Embudo de ventas. El camino que recorre alguien de desconocido a cliente |
| **CRM** | Sistema para gestionar relaciones con clientes y leads |
| **Crawlers** | Robots que leen paginas web (de Google, de IAs, etc.) |
| **Structured data** | Datos organizados que le dicen a Google exactamente que somos |
