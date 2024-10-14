FROM node:22.9-alpine3.19 AS builder

ARG http_proxy=http://10.55.123.98:3333
ARG https_proxy=http://10.55.123.98:3333

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build


FROM nginx:1.27.2-alpine AS runner

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
