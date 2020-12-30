FROM node:14-slim
WORKDIR /app
COPY . /app
RUN npm ci
RUN npm run compile
CMD  ["node", "dist/index.js"]
