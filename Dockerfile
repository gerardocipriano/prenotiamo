# Utilizzare un'immagine Node.js come base
FROM node:lts-slim

# Impostare la directory di lavoro
WORKDIR /app

# Copiare i file package.json e package-lock.json
COPY package*.json ./

# Installare le dipendenze
RUN npm install

# Copiare il resto dei file dell'applicazione
COPY . .

# Esporre la porta 3000
EXPOSE 3000

# Avviare l'applicazione
CMD [ "npm", "run", "dev" ]