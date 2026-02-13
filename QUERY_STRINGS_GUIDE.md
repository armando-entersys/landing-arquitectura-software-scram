# Guia de Query Strings - Sistema de Personalizacion Inteligente

## Arquitectura del Sistema

```
URL con Query Strings
        |
        v
useAIFunnel (hook)
        |
        v
buildVisitorProfile()
   |    |    |    |
   v    v    v    v
 Intent Industry Budget Persona
        |
        v
generatePersonalizationStrategy()
        |
        v
  +-----+-----+-----+
  |     |     |     |
  v     v     v     v
 CTA  Hero  Section Urgency
 Text Variant Emphasis Level
        |
        v
tracker.trackVisitorProfile()
   |    |    |    |    |
   v    v    v    v    v
  GTM  Meta LinkedIn Mautic Clarity
```

## Parametros Disponibles

### UTM (Estandar de Google Analytics)

| Parametro | Descripcion | Ejemplo |
|---|---|---|
| `utm_source` | Plataforma de origen | `google-ads`, `facebook`, `linkedin`, `direct` |
| `utm_medium` | Tipo de trafico | `cpc`, `paid-social`, `sponsored`, `organic`, `email` |
| `utm_campaign` | Nombre de la campana | `manufactura`, `retargeting`, `enterprise` |
| `utm_content` | Variante del anuncio | `coo-banner`, `cto-video`, `tech-whitepaper` |
| `utm_term` | Keyword de busqueda | `software+erp+manufactura` |

### Personalizacion (Propios de Scram)

| Parametro | Valores aceptados | Descripcion |
|---|---|---|
| `intent` | `high`, `problem_aware`, `comparing`, `exploring` | Nivel de intencion de compra |
| `industry` | `manufacturing`, `logistics`, `retail`, `services` | Industria del visitante |
| `budget` | `starter`, `growth`, `enterprise` | Rango de presupuesto |
| `persona` | `coo`, `cto`, `manager`, `technical` | Rol del visitante |
| `keywords` | Separadas por coma | Keywords que activo el anuncio |

**Nota:** Tambien acepta valores en espanol: `manufactura`, `logistica`, `comercio`, `servicios`, `pequeno`, `medio`, `grande`, `director-operaciones`, `director-ti`, `gerente`, `tecnico`.

---

## Deteccion de Intent (Intencion de compra)

El sistema detecta la intencion de compra en este orden de prioridad:

### 1. Intent explicito en URL
```
?intent=high           -> Alta intencion (listo para comprar)
?intent=problem_aware  -> Sabe que tiene un problema
?intent=comparing      -> Comparando opciones
?intent=exploring      -> Solo explorando
```

### 2. Inferencia por UTM Medium + Keywords
Si viene de CPC (Google Ads):
```
keywords=precio,cotizacion    -> high (busca precios = listo para comprar)
keywords=mejor,vs,comparar    -> comparing (esta evaluando opciones)
keywords=erp,manufactura      -> problem_aware (busca soluciones)
```

### 3. Inferencia por fuente
```
utm_source=linkedin + utm_medium=social  -> problem_aware
utm_campaign=retargeting                 -> comparing (ya nos visito)
utm_campaign=remarketing                 -> comparing
```

---

## Deteccion de Industria

### 1. Parametro directo
```
?industry=manufacturing   -> Manufactura
?industry=logistics       -> Logistica
?industry=retail          -> Comercio
?industry=services        -> Servicios
```

### 2. Inferencia por keywords
```
keywords=manufactura,planta,produccion   -> manufacturing
keywords=logistica,almacen,wms           -> logistics
keywords=retail,tienda,e-commerce        -> retail
```

### 3. Inferencia por campana
```
utm_campaign=manufacturing   -> manufacturing
utm_campaign=automotive      -> manufacturing
utm_campaign=logistics       -> logistics
utm_campaign=warehouse       -> logistics
```

---

## Deteccion de Presupuesto

### 1. Parametro directo
```
?budget=starter     -> Starter (pyme)
?budget=growth      -> Growth (mediana)
?budget=enterprise  -> Enterprise (corporativo)
```

### 2. Inferencia por campana
```
utm_campaign=enterprise   -> enterprise
utm_campaign=corp         -> enterprise
utm_campaign=smb          -> starter
utm_campaign=pyme         -> starter
```

---

## Deteccion de Persona

### 1. Parametro directo
```
?persona=coo        -> Director de Operaciones
?persona=cto        -> Director de Tecnologia
?persona=manager    -> Gerente
?persona=technical  -> Perfil tecnico
```

### 2. Inferencia por utm_content
```
utm_content=coo-banner       -> coo
utm_content=operations-video -> coo
utm_content=cto-whitepaper   -> cto
utm_content=tech-demo        -> cto
```

---

## Estrategias de Personalizacion

Segun el perfil del visitante, el sistema genera una estrategia que modifica la experiencia:

### Intent HIGH (Listo para comprar)
| Propiedad | Valor |
|---|---|
| Hero | ROI (enfasis en retorno de inversion) |
| CTA | "Solicitar Sesion Try & Buy Ahora" |
| Muestra precios | Si |
| Seccion enfatizada | Try & Buy |
| Urgencia | Alta |

### Intent PROBLEM_AWARE (Sabe que tiene un problema)
| Propiedad | Valor |
|---|---|
| Hero | Authority (posicionamiento de autoridad) |
| CTA | "Ver Como Funciona Agentic Architect" |
| Muestra precios | No |
| Seccion enfatizada | Problema |
| Urgencia | Media |

### Intent COMPARING (Comparando opciones)
| Propiedad | Valor |
|---|---|
| Hero | Trust (prueba social, confianza) |
| CTA | "Comparar con Try & Buy Gratis" |
| Muestra precios | Si |
| Seccion enfatizada | Social Proof |
| Urgencia | Media |

### Persona CTO (sin intent definido)
| Propiedad | Valor |
|---|---|
| Hero | Technical (arquitectura, stack) |
| CTA | "Ver Arquitectura Tecnica" |
| Muestra precios | No |
| Seccion enfatizada | Solucion |
| Urgencia | Baja |

### Persona COO (sin intent definido)
| Propiedad | Valor |
|---|---|
| Hero | ROI (retorno de inversion) |
| CTA | "Calcular ROI de Agentic Architect" |
| Muestra precios | Si |
| Seccion enfatizada | Problema |
| Urgencia | Media |

### Default (sin datos)
| Propiedad | Valor |
|---|---|
| Hero | Authority |
| CTA | "Solicitar Sesion Try & Buy" |
| Muestra precios | No |
| Seccion enfatizada | Solucion |
| Urgencia | Media |

---

## URLs de Ejemplo por Canal

### Google Ads (CPC)

**Manufactura - Intent alto:**
```
https://arquitectura-software.scram2k.com/?utm_source=google-ads&utm_medium=cpc&utm_campaign=manufactura&keywords=software,erp,manufactura,cotizacion&intent=high&industry=manufacturing
```

**Logistica - Comparando opciones:**
```
https://arquitectura-software.scram2k.com/?utm_source=google-ads&utm_medium=cpc&utm_campaign=logistica&keywords=wms,almacen,mejor&intent=comparing&industry=logistics
```

**Busqueda generica:**
```
https://arquitectura-software.scram2k.com/?utm_source=google-ads&utm_medium=cpc&utm_campaign=software-empresarial&keywords=desarrollo,software,a,la,medida
```

### Facebook / Instagram Ads

**Retargeting (ya visito el sitio):**
```
https://arquitectura-software.scram2k.com/?utm_source=facebook&utm_medium=paid-social&utm_campaign=retargeting&industry=manufacturing&persona=coo
```

**Prospeccion fria:**
```
https://arquitectura-software.scram2k.com/?utm_source=facebook&utm_medium=paid-social&utm_campaign=awareness&industry=logistics
```

### LinkedIn Ads

**Enterprise - Director de TI:**
```
https://arquitectura-software.scram2k.com/?utm_source=linkedin&utm_medium=sponsored&utm_campaign=enterprise&persona=cto&budget=enterprise&utm_content=cto-whitepaper
```

**Gerentes de operaciones:**
```
https://arquitectura-software.scram2k.com/?utm_source=linkedin&utm_medium=sponsored&utm_campaign=operations&persona=coo&industry=manufacturing&utm_content=coo-banner
```

### Email Marketing (Mautic)

**Nurturing - Segundo contacto:**
```
https://arquitectura-software.scram2k.com/?utm_source=mautic&utm_medium=email&utm_campaign=nurturing-2&intent=comparing&industry=manufacturing
```

**Newsletter:**
```
https://arquitectura-software.scram2k.com/?utm_source=mautic&utm_medium=email&utm_campaign=newsletter-feb
```

### Directo (Sin campaña, con personalizacion)

**Demo para manufactura:**
```
https://arquitectura-software.scram2k.com/?industry=manufacturing&persona=coo&intent=high&budget=enterprise
```

**Explorador tecnico:**
```
https://arquitectura-software.scram2k.com/?persona=cto&intent=exploring
```

---

## Persistencia y Ciclo de Vida

1. **Primera visita con query strings** -> Se construye perfil y se guarda en `localStorage`
2. **Visitas subsecuentes** -> Se recupera el perfil guardado (no se sobrescribe)
3. **Expiracion** -> El perfil se borra automaticamente despues de **30 dias**
4. **Sin query strings** -> Si no hay datos utiles, no se guarda perfil (experiencia default)

### Datos que se guardan en localStorage:
```json
{
  "intent": "high",
  "industry": "manufacturing",
  "budget": "enterprise",
  "persona": "coo",
  "source": "google-ads",
  "medium": "cpc",
  "campaign": "manufactura",
  "keywords": ["software", "erp", "cotizacion"],
  "timestamp": 1707600000000
}
```

---

## Tracking Multi-plataforma

Cada perfil de visitante se trackea automaticamente en todas las plataformas configuradas:

| Plataforma | Que se envia | Para que sirve |
|---|---|---|
| **GTM / GA4** | Evento `visitor_profiled` con intent, industry, persona, budget, UTMs | Segmentos de audiencia en Analytics |
| **Meta Pixel** | Eventos estandar (Lead, ViewContent) | Audiencias lookalike en Facebook Ads |
| **LinkedIn** | Conversiones por ID | Atribucion de leads |
| **Google Ads** | Conversiones por label | ROAS por campana |
| **Mautic CRM** | Tags: intent, industry, persona | Lead scoring y nurturing |
| **Clarity** | Custom tags por sesion | Filtrar grabaciones por segmento |
| **Backend** | Evento completo en /api/analytics/events | Analisis con Gemini AI |

---

## Configuracion en Google Ads

Al crear un anuncio en Google Ads, en la URL final agrega el sufijo:

**Plantilla de tracking:**
```
{lpurl}?utm_source=google-ads&utm_medium=cpc&utm_campaign={campaignid}&utm_content={adgroupid}&utm_term={keyword}&keywords={keyword}&intent=high&industry=manufacturing
```

**Para cada campana, ajusta:**
- `industry` segun la segmentacion del grupo de anuncios
- `intent` segun la etapa del funnel (high para busquedas de precio/cotizacion)
- `persona` si el grupo de anuncios apunta a un rol especifico
- `budget` si la campana es para enterprise o pyme

---

## Configuracion en Facebook Ads

En el campo "URL Parameters" del anuncio:
```
utm_source=facebook&utm_medium=paid-social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&industry=manufacturing&persona=coo
```

---

## Configuracion en LinkedIn Ads

En la URL de destino del anuncio:
```
https://arquitectura-software.scram2k.com/?utm_source=linkedin&utm_medium=sponsored&utm_campaign=enterprise-cto&persona=cto&budget=enterprise&industry=manufacturing
```

---

## Consultar Insights con Gemini

Despues de acumular visitas, consulta el analisis automatico:

```bash
curl -H "x-api-key: Op3r4c10n3s.2026" \
  "https://arquitectura-software.scram2k.com/api/analytics/insights?days=7"
```

Parametros:
- `days=7` -> Ultimos 7 dias (default)
- `days=30` -> Ultimo mes
- `days=1` -> Solo hoy

El endpoint retorna:
- **summary**: Metricas agregadas (sesiones, CTAs, perfiles, dispositivos)
- **analysis**: Analisis generado por Gemini con recomendaciones accionables

---

## Archivos del Sistema

| Archivo | Funcion |
|---|---|
| `lib/personalization/ai-funnel.ts` | Logica de deteccion y estrategias |
| `lib/personalization/useAIFunnel.ts` | Hook React que conecta URL -> perfil -> personalizacion |
| `lib/tracking/universal-tracker.ts` | Dispatch multi-plataforma de eventos |
| `components/providers/TrackingProvider.tsx` | Inicializa tracking al cargar la app |
| `app/api/analytics/events/route.ts` | Almacena eventos para analisis |
| `app/api/analytics/insights/route.ts` | Genera analisis con Gemini AI |
