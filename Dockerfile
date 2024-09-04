# Utiliza una imagen base Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock,json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

#Expone el puerto 3000 que usará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node","app.js"]