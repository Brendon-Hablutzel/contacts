FROM node:24-alpine

WORKDIR /app
COPY package*.json .

RUN npm ci
# Note: Source files (frontend/src) are bind mounted into the container
COPY vite.config.ts index.html public /app/

ENTRYPOINT [ "/usr/local/bin/npm" ]
CMD ["run", "dev"]
