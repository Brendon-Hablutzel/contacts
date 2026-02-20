FROM node:24-alpine

WORKDIR /app
COPY package*.json .

RUN npm ci
COPY src/ /app/src/
COPY vite.config.ts index.html public /app/

ENTRYPOINT [ "/usr/local/bin/npm" ]
CMD ["run", "dev"]
