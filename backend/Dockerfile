FROM node:24-alpine

WORKDIR /app
COPY package*.json .

RUN npm ci
COPY src/ /app/src/

CMD ["--experimental-strip-types", "src/index.ts"]
