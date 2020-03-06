const User = require("../models/user");
const app = require("../index.js");
const mongoose = require('mongoose');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const chaiHttp = require("chai-http");
const should = chai.should();
chai.config.includeStack = true;
chai.use(chaiHttp);
const assert = chai.assert;

const agent = chai.request.agent(app);


describe("User", function() {
  // TESTS WILL GO HERE.
  it("should not be able to login if they have not registered", function(done) {
      agent.post("/auth/login", { email: "wrong@wrong.com", password: "nope" }).end(function(err, res) {
          res.status.should.be.equal(401);
          done();
      });
  });

  // signup
  it("should be able to signup", function(done) {
      User.findOneAndRemove({ username: "testone" }, function() {
          agent
          .post("/auth/sign-up")
          .send({ username: "testone", password: "password" })
          .end(function(err, res) {
              res.should.have.status(200);
              done();
          });
      });
  });

  // // login
  it("should be able to login", function(done) {
      agent
      .post("/auth/login")
      .send({ username: "testone", password: "password" })
      .end(function(err, res) {
          res.should.have.status(200);
          agent.should.have.cookie("nToken");
          done();
      });
  });

  // logout
  it("should be able to logout", function(done) {
      agent.get("/auth/logout").end(function(err, res) {
      res.should.have.status(200);
      agent.should.not.have.cookie("nToken");
      done();
      });
  });


  after(function () {
      agent.close()
  });

});
