FROM node:19-alpine
WORKDIR /react-app
COPY package*.json .
COPY yarn*.json .
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g server
# ENTRYPOINT [ "npm", "start" ]
CMD [ "server", "-s", "build" ]

# FROM nginx:1.19.0
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/build .
# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]