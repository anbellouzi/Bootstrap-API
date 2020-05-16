# Dockerfile
# ---- Base Node ----
FROM node:13.3

# Create app directory
RUN mkdir -p /app

# set work directory
WORKDIR /app

#  Copy dependencies
COPY ./package.json /app

# install app dependencies
RUN npm install && npm cache clean --force

# copying project 
COPY ./src/ /app

# setting env
ENV NODE_ENV production

# env port
ENV PORT 4040

# open port
EXPOSE 4040

# RUN node index.js
CMD ["npm", "start"]


