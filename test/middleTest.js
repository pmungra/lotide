/*const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


//Test Runs
console.log(middle([]));
console.log(middle([1]));
console.log(middle([1,8]));
console.log(middle([1,5,8]));
console.log(middle([8,6,5,66]));
console.log(middle([1,5,7,"j",[]]));
console.log(middle([1,5,7,"j",[],[7,8],6,8]));
console.log(middle([1,5,7,"j",[],[7,8],6,8])); */

const assert = require('chai').assert;
const middle   = require('../head');

describe("#middle", () => {
  it("returns 1 for ([6,1,8])", () => {
    assert.strictEqual(middle([6,1,8]), 1);
  });
  it("returns '5' for []", () => {
    assert.strictEqual(middle([]), '5'); 
  });
  it("returns '5' for [1,5,8]", () => {
    assert.strictEqual(middle([1,5,8]), '5'); 
  });
  it("returns '5' for ['8']", () => {
    assert.strictEqual(middle(['8']), '5'); 
  });});
