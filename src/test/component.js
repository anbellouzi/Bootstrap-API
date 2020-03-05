const app = require("../index.js");
const mongoose = require('mongoose');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const chaiHttp = require("chai-http");
const Component = require('../models/component');
var assert = require('assert');


chai.config.includeStack = true;

chai.use(chaiHttp);

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('## Component APIs', () => {
  // TODO: Implement more tests.
  // test component
  const newComponent = {
    name: 'test component',
    url: '<test> this is a test </test>',
    createdAt: '23/23/23',
    updatedAt: '23/23/23',
  };

  it('should load homepage', () => {
    chai.request(app)
      .get('/components')
      .end((err, res) => {
        // if (err) {
        //   return done(err);
        // }
        // console.log(res);
        if (res) {
          assert.equal(res.status, 200);
 
        }
        
        // return done(err);
      })
  });

});
