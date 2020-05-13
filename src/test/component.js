// const app = require("../index.js");
// const mongoose = require('mongoose');
// const chai = require('chai'); // eslint-disable-line import/newline-after-import
// const chaiHttp = require("chai-http");
// const Component = require('../models/component');
// var assert = require('assert');
// const User = require("../models/user");

// chai.config.includeStack = true;

// chai.use(chaiHttp);
// const agent = chai.request.agent(app);

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

// describe('## Component APIs', () => {
//   // TODO: Implement more tests.
//   // test component
//   const newComponent = {
//     name: 'test component',
//     url: '<test> this is a test </test>',
//     createdAt: '23/23/23',
//     updatedAt: '23/23/23',
//   };
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

//   after(function () {
//     agent.close()
// });

  

// });
