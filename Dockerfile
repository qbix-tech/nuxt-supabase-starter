# Stage 1: Builder
FROM public.ecr.aws/docker/library/node:18-alpine as builder
RUN apk update && apk upgrade
RUN apk add --update --no-cache git python3 make g++
WORKDIR /app
COPY package.json ./
RUN npm install && npm cache clean --force
COPY . .
RUN npm run build

# Stage 2: Production
FROM public.ecr.aws/docker/library/node:18-alpine as production
COPY --from=builder /app/.output /app/.output
ENV HOST=0.0.0.0
ENV PORT=80
EXPOSE 80
ENV NODE_ENV=production
ENTRYPOINT ["node", "/app/.output/server/index.mjs" ]