FROM node:12-alpine
WORKDIR /usr/src/app
LABEL Description="Pokedex Tutorial"
# Production packages install
COPY ["package.json", "package-lock.json*", "./"]
# Compile
COPY "./" "./source"
RUN cd source & npm install & npm run build
RUN cd source & npm run build
RUN cd source & mv ./.next ../.next 
RUN rm -rf source
# Install production modules
RUN npm install --production --silent
# Enviroment por production
ENV NODE_ENV production
# Start command
CMD npm start