FROM node:24-alpine

WORKDIR /app
COPY package*.json .

RUN npm ci
# Note: Source files (backend/src) are bind mounted into the container

CMD ["--experimental-strip-types", "--watch", "/app/src/index.ts"]
