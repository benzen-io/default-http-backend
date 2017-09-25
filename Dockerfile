FROM node:boron
RUN mkdir -p /var/default-http-backend
COPY . /var/default-http-backend
WORKDIR /var/default-http-backend
RUN npm install
EXPOSE 8080
CMD npm start
