FROM node:boron
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /var/default-http-backend && cp -a /tmp/node_modules /var/default-http-backend/
ADD . /var/default-http-backend
WORKDIR /var/default-http-backend
EXPOSE 8080
CMD npm start
