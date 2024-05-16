# Imagen base oficial de Node.js
FROM node:18-alpine

# Se establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Se realiza una copia del archivo de dependencias y se realiza la instalación
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Compilamos la app y exponemos el puerto 🎉
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Define el comando por defecto para ejecutar la aplicación
CMD ["npm", "start"]
