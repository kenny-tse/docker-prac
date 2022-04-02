FROM node:15
WORKDIR /app
COPY packaage.json .
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["node", "index.js"]