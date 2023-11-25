# Etapa de construcción
FROM node:16.13.0 AS build-steep

WORKDIR /app

COPY package*.json ./

# Instalar una versión específica de npm
RUN npm install -g npm@7.22.0

RUN npm install

COPY . .

RUN npm run build

# Etapa de producción
FROM nginx:1.17.1-alpine

# Copiar solo la carpeta 'dist'
COPY --from=build-steep /app/dist /usr/share/nginx/html

# Configuración adicional de NGINX si es necesario