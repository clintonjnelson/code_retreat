'use strict';
// mocha-chai tests

// var test = require('unit.js');
var chai     = require('chai');
var expect   = chai.expect;
var session1 = require('../js/session1.js');

describe('Session1', function() {
  describe("Say Hello", function() {
    it("returns a string", function() {
      expect(session1.getHello()).to.be.a('string');
    });
    it("returns 'hello'", function() {
      expect(session1.getHello()).to.equal('hello');
    });
  })

  describe("Add", function() {
    it("returns a number", function() {
      var sum = session1.add(6, 6);
      expect(sum).to.be.a('number');
    });
    it("returns a the sum of the two inputs", function() {
      var sum = session1.add(6, 6);
      expect(sum).to.equal(12)
    });
  });
});
