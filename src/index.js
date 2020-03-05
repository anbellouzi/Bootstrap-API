const mongoose = require('mongoose');
const util = require('util');

require('dotenv').config();

const app = require('./config/express');
const router = require('./controllers/index.js');

mongoose.Promise = Promise;

// connect to mongo db
// const mongoUri = "mongodb://localhost:27017/auth-api-starterpack";
const mongo_uri = process.env.MONGODB_URI
// mongoose.connect(
//   mongoUri,
//   { server: { socketOptions: { keepAlive: 1 } } }
// );
// mongoose.connection.on('error', () => {
//   throw new Error(`unable to connect to database: ${mongoUri}`);
// });


mongoose.connect(mongo_uri)

// # TODO: Any additional config changes belong here.

// Routes
app.use(router);


// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  const port = process.env.PORT
  app.listen(port, () => {
    console.info(`server started on port ${port} (development)`); // eslint-disable-line no-console
  });
  
  
}

module.exports = app;