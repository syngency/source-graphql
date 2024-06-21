FROM --platform=linux/x86_64 node:18
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

EXPOSE 8080
CMD [ "node", "dist/app.js" ]
