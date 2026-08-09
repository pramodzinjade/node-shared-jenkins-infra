FROM node:18
WORKDIR /node
COPY ./package*.json .
RUN npm install
COPY . .
ENTRYPOINT ["node"]
CMD ["app.js"]