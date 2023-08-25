FROM node:16.17.0-alpine3.15
RUN mkdir -p /react-ts-starter-template
WORKDIR /react-ts-starter-template
COPY package.json .
COPY pnpm-lock.yaml .
RUN npm install -g pnpm
RUN pnpm install
COPY . .
EXPOSE 4050
CMD ["pnpm","dev"]
