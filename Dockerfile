# ---- Base Node ----
FROM node
# Create app directory
WORKDIR /app

# ---- Dependencies ----
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json /app

# install app dependencies including 'devDependencies'
RUN npm install

COPY . .

EXPOSE 4040
# Build react/vue/angular bundle static files
# RUN npm run build
CMD ["node", "index.js"]