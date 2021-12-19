FROM node

WORKDIR /usr/api

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 7070

CMD ["npm", "run", "dev"]