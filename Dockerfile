FROM node:15.11.0-alpine

WORKDIR /app

ENV PATH="./node_modules/.bin:$PATH"

COPY package.json package-lock.json ./
RUN npm ci
RUN npm install react-scripts@4.0.3 -g --silent

#COPY . /app

CMD ["npm", "start"]