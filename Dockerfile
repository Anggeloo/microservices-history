FROM node:21.7.3
WORKDIR /usr/src/service-history
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3010
CMD ["node", "app.js"]
