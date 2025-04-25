FROM node:22.14-alpine AS build

WORKDIR /apps

COPY ../package*.json ./
RUN npm install

COPY . .
RUN npm run build:fix-error

FROM node:22.14-alpine

WORKDIR /apps

COPY ../package*.json ./
COPY --from=build /apps/dist ./dist
COPY --from=build /apps/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "dist/apps/fix-error/main"]