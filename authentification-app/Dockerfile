FROM node
# create app directory
RUN mkdir -p /usr/src/app
# make the 'app' folder the current working directory
WORKDIR /usr/src/app
# copy both 'package.json' and 'package-lock.json'
COPY package.json /usr/src/app/
# install project dependencies
RUN npm install
# copy project files and folders to the current working director
COPY . /usr/src/app/
EXPOSE 8080
# command to run
CMD ["npm", "run", "serve"]