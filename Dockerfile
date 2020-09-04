FROM node:12-alpine
WORKDIR /usr/src/app
LABEL Description="Pokedex Tutorial"
EXPOSE 3000/tcp
# Production packages install
COPY ["package.json", "package-lock.json*", "./"]
# Compile
COPY ["package.json", "package-lock.json*", "./source/"]
RUN cd source;npm install
COPY "./" "./source"
RUN cd source;npm run build
RUN cd source;mv ./.next ../.next 
RUN cd source;mv ./public ../public
RUN rm -rf source
# Install production modules
RUN npm install --production --silent
# Enviroment por production
ENV NODE_ENV production
# Start command
CMD npm start