FROM node:12-alpine
WORKDIR /usr/src/app
LABEL Description="Pokedex Tutorial"
# Production packages install
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent
# Copy the source code and build the solution
COPY ./.next ./.next
# Enviroment por production
ENV NODE_ENV production
# Start command
CMD npm start