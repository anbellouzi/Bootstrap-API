# Dockerfile
# ---- Base Node ----
FROM node:13.3
# Create app directory
WORKDIR /app
#  Copy dependencies
COPY package.json /app
# install app dependencies
RUN npm install
# copy project to app
COPY . .
# open port
EXPOSE 4040
# RUN node index.js
CMD ["node", "index.js"]


