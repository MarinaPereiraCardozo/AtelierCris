FROM node 

WORKDIR /usr/system

COPY ./package*.json ./

RUN ls

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm", "run", "start"]