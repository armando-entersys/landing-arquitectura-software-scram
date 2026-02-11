# Deployment Guide - Landing Arquitectura de Software Scram

## Datos del Entorno

| Campo | Valor |
|-------|-------|
| **Repositorio** | `https://github.com/armando-entersys/landing-arquitectura-software-scram` |
| **Servidor** | `prod-server` (GCP, zone `us-central1-c`) |
| **IP Externa** | `34.59.193.54` |
| **Ruta en servidor** | `/srv/landing-arquitectura-software-scram/` |
| **Dominio** | `arquitectura-software.scram2k.com` |
| **Puerto interno** | `3000` |
| **Contenedor** | `scram-landing-arquitectura-software-scram` |
| **Red Docker** | `traefik-public` (externa, gestionada por Traefik) |

## Flujo de Despliegue (Push Local + Pull en Servidor)

### Paso 1: Push desde la maquina local

```bash
cd "C:\Landing Arquitectura Software Scram\landing-centauro"
git add -A
git commit -m "Descripcion del cambio"
git push origin main
```

### Paso 2: Pull y rebuild en el servidor

```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="cd /srv/landing-arquitectura-software-scram && sudo git pull origin main && sudo docker compose up -d --build"
```

Eso es todo. Dos pasos: **push local, pull + rebuild en servidor.**

## Comando Completo (One-Liner desde Windows)

Si quieres hacerlo todo en un solo comando desde tu maquina local:

```bash
cd "C:\Landing Arquitectura Software Scram\landing-centauro" && git add -A && git commit -m "Deploy update" && git push origin main && gcloud compute ssh prod-server --zone=us-central1-c --command="cd /srv/landing-arquitectura-software-scram && sudo git pull origin main && sudo docker compose up -d --build"
```

## Verificacion Post-Deploy

### Verificar que el contenedor esta corriendo:

```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="docker ps --filter name=scram-landing-arquitectura-software-scram"
```

### Ver logs del contenedor:

```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="docker logs scram-landing-arquitectura-software-scram --tail 20"
```

### Verificar respuesta HTTP:

```bash
curl -I https://arquitectura-software.scram2k.com
```

## Rollback

Si algo falla, revertir al commit anterior:

```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="cd /srv/landing-arquitectura-software-scram && sudo git log --oneline -5"
```

Identificar el commit bueno y:

```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="cd /srv/landing-arquitectura-software-scram && sudo git reset --hard <COMMIT_HASH> && sudo docker compose up -d --build"
```

## Notas Importantes

- El archivo `.env` NO esta en el repositorio (esta en `.gitignore`). Si necesitas actualizar variables de entorno, editalas directamente en el servidor en `/srv/landing-arquitectura-software-scram/.env`
- El `docker-compose.yml` ya incluye labels de Traefik para SSL automatico con Let's Encrypt
- El build usa multi-stage Docker (node:20-alpine) con output `standalone` de Next.js
- Limite de recursos: 512MB RAM, 0.50 CPU
- Para desarrollo local usa `npm run dev` (usa `--webpack` por incompatibilidad de Turbopack con Windows)
