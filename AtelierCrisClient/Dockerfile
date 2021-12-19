FROM node 

WORKDIR /usr/client

COPY package.json ./

RUN npm install

COPY . . 

EXPOSE 7080

CMD ["npm", "run", "dev"]