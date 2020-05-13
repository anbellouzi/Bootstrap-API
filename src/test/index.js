// const app = require("../index.js");
// const mongoose = require('mongoose');
// const chai = require('chai'); // eslint-disable-line import/newline-after-import
// const chaiHttp = require("chai-http");
// var assert = require('assert');


// chai.config.includeStack = true;

// chai.use(chaiHttp);

// /**
//  * root level hooks
//  */
// after((done) => {
//   // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
//   mongoose.models = {};
//   mongoose.modelSchemas = {};
//   mongoose.connection.close();
//   done();
// });

// describe('## Index', () => {
//   // TODO: Implement tests.
//   it('should load homepage', function(done) {
//     chai.request(app)
//     .get('/components')
//     .then(function(res) {
//       assert.equal(res.status, 200);
//       return done()
//     })
//     .catch(function(err) {
//       return done(err)
//     })
//   });

// });
