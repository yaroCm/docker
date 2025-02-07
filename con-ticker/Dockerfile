#TODAS LAS DEPENDENCIAS 
FROM  node:19.2-alpine3.16 as deps
WORKDIR /app
COPY package.json ./
RUN npm install

#REALIZAR EL TEST 
FROM  node:19.2-alpine3.16 as builder 
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test

FROM  node:19.2-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod

#EJECUTAR APP 
FROM  node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
#comandos 
CMD ["node", "app.js"]