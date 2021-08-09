FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install npm@latest -g

RUN npm install rimraf -g

RUN npm install -g @nestjs/cli

RUN npm install --no-optional && npm cache clean --force

COPY . .

CMD [ "npm", "run", "start" ]