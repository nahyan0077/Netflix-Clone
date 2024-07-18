FROM node:18

WORKDIR /app

COPY package.json ./

RUN npm start

COPY . .

EXPOSE 3000

CMD [ "executable" ]

