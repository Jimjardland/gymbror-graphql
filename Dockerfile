FROM node:latest

RUN mkdir -p /www
WORKDIR /www

COPY package.json /www/
RUN npm install

COPY . /www

CMD ["npm", "start"]
