# Dockerfile
# ---- Base Node ----
FROM node:13.3

# Create app directory
RUN mkdir -p /usr/src/app

# set work directory
WORKDIR /usr/src/app

#  Copy dependencies
COPY ./package.json /usr/src/app/

# install app dependencies
RUN npm install && npm cache clean --force

# copying project 
COPY ./ /usr/src/app

# setting env
ENV NODE_ENV production

# env port
ENV PORT 4040

# open port
EXPOSE 4040

# RUN node index.js
CMD ["node", "index.js"]


