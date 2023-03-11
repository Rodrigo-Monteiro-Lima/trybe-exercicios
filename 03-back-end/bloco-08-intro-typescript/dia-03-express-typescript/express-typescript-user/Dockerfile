FROM node:16-alpine
WORKDIR /app
COPY package* ./
RUN npm install
EXPOSE 3000
COPY . .
CMD ["npm", "start"]