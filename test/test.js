/**
 * Created by magrant on 12/9/15.
 */

//test framework http://unitjs.com/
//run in terminal with mocha test

var test = require('unit.js');
var session1 = require('../js/session1.js');

describe('Basic type checks', function() {
    it('Confirm this is a string', function() {
        var example = 'hello world';

        test.string(example)
    });

    it('Confirm this is a number', function() {
        var example = 1;

        test.number(example)
    });
});

describe('Session 1 method tests', function() {
    it("returns a string hello", function() {

        test.string(session1.sayHello());
    });

    it("returns the number 12", function() {

        var num = session1.addTheseNumbers(6, 6);
        test.assert(num === 12);
    });
});
