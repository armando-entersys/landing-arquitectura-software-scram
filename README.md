# 🚀 Landing Centauro - Arquitectura de Software

Landing page de clase mundial para el servicio de Arquitectura de Software Centauro de Scram Consulting.

## ✨ Características de Nivel Silicon Valley

- 🧠 **Personalización con IA:** Embudos inteligentes basados en query strings
- 🎨 **Material Design 3:** Sistema de diseño moderno de Google
- ⚡ **Next.js 16:** Performance de clase mundial (PageSpeed 95-100)
- 📊 **Analytics Avanzado:** GTM + Google Ads + tracking completo
- 🐳 **Docker Optimizado:** Multi-stage build para producción
- 🔒 **Security First:** Headers de seguridad, type-safety total

## 🏗️ Stack Tecnológico

- **Framework:** Next.js 16 + React 18
- **Styling:** Tailwind CSS 3.4 + Material Design 3
- **Forms:** React Hook Form + Zod validation
- **Analytics:** Google Tag Manager + Google Ads
- **Deploy:** Docker + Traefik reverse proxy
- **Language:** TypeScript (strict mode)

## 🚀 Quick Start (Desarrollo)

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus valores

# Correr en desarrollo
npm run dev

# Abrir http://localhost:3000
```

## 🐳 Deploy a Producción

### Pre-requisitos

- Servidor con Docker y Docker Compose
- Red Traefik configurada (traefik-public)
- Dominio apuntando al servidor: arquitectura-software.scram2k.com

### Pasos de Deploy

```bash
# 1. Transferir código al servidor
scp -r . user@servidor:/path/to/landing-centauro

# 2. SSH al servidor
ssh user@servidor
cd /path/to/landing-centauro

# 3. Configurar variables de entorno
cp .env.example .env
nano .env  # Editar con valores reales

# 4. Build y Deploy
docker-compose build
docker-compose up -d

# 5. Verificar logs
docker-compose logs -f landing-centauro

# 6. Verificar salud
curl https://arquitectura-software.scram2k.com
```

## 🧪 Testing de Personalización con IA

Prueba los embudos inteligentes con estos URLs:

### Alta Intención (High Intent)
```
https://arquitectura-software.scram2k.com/?intent=high&industry=manufacturing
```
**Comportamiento esperado:** Auto-scroll al formulario Try & Buy

### Problema Consciente (Problem Aware)
```
https://arquitectura-software.scram2k.com/?intent=problem_aware&persona=coo
```
**Comportamiento esperado:** Énfasis en sección de Problemas

### Comparando Opciones (Comparing)
```
https://arquitectura-software.scram2k.com/?intent=comparing&utm_source=google-ads
```
**Comportamiento esperado:** Mostrar prueba social y testimonios

### Google Ads Campaign
```
https://arquitectura-software.scram2k.com/?utm_source=google-ads&utm_medium=cpc&utm_campaign=desarrollo-software&keywords=desarrollo+software+empresarial
```
**Comportamiento esperado:** Tracking completo + personalización automática

## 📊 Monitoreo de Performance

### Métricas Objetivo

- **PageSpeed Score:** 95-100
- **First Contentful Paint:** <1.2s
- **Largest Contentful Paint:** <2.0s
- **Cumulative Layout Shift:** <0.1
- **Time to Interactive:** <2.5s

### Verificar Performance

```bash
# Lighthouse CI
npx lighthouse https://arquitectura-software.scram2k.com --view

# WebPageTest
# https://www.webpagetest.org/
```

## 🔧 Mantenimiento

### Ver Logs

```bash
docker-compose logs -f landing-centauro
```

### Reiniciar Servicio

```bash
docker-compose restart landing-centauro
```

### Actualizar Código

```bash
git pull
docker-compose build
docker-compose up -d
```

### Limpiar Recursos

```bash
docker system prune -af
```

## 📝 Estructura del Proyecto

```
landing-centauro/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Layout principal con GTM
│   ├── page.tsx             # Home page
│   ├── globals.css          # Estilos globales
│   └── api/                 # API routes
├── components/
│   ├── ui/                  # Componentes M3 reutilizables
│   ├── sections/            # Secciones de landing
│   ├── forms/               # Formularios
│   └── tracking/            # Componentes de tracking
├── lib/
│   ├── personalization/     # Sistema de personalización IA
│   ├── tracking/            # GTM, Google Ads, analytics
│   ├── integrations/        # Mautic, SendGrid, etc.
│   └── utils/               # Utilidades
├── Dockerfile               # Multi-stage build
├── docker-compose.yml       # Orquestación
└── tailwind.config.ts       # Configuración M3
```

## 🎯 Next Steps

1. ✅ Estructura base creada
2. ⬜ Completar secciones de landing
3. ⬜ Integrar Mautic CRM
4. ⬜ Setup Google Ads conversions
5. ⬜ Testing A/B con variantes
6. ⬜ Optimización de imágenes
7. ⬜ Deploy a producción

## 📚 Documentación Adicional

- [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md) - Guía de implementación paso a paso
- [COMPLETE_CODE.md](./COMPLETE_CODE.md) - Código completo de todos los componentes
- [SCRAM_LANDING_STRATEGY_MASTERPLAN.md](../SCRAM_LANDING_STRATEGY_MASTERPLAN.md) - Estrategia general
- [SCRAM_MARKET_RESEARCH_DEEP_DIVE.md](../SCRAM_MARKET_RESEARCH_DEEP_DIVE.md) - Investigación de mercado

## 🤝 Equipo

- **Arquitectura:** Claude Sonnet 4.5 (Anthropic)
- **Cliente:** Scram Consulting
- **Objetivo:** Convertirse en unicornio con propuesta de valor irresistible

---

**🎯 Esta landing está diseñada para ser la mejor de México. Let's ship it. 🚀**
