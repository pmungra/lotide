const assert = require('chai').assert;
const tail= require('../head');

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5'); 
  });
  it(`returns '(["Hello", "Lighthouse", "Labs"])' for ["Lighthouse", "Labs"]`, () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]), '["Lighthouse", "Labs"])'); 
  });
  it(`returns '["Yo Yo", "Lighthouse", "Labs"]' for ['5']`, () => {
    assert.strictEqual((tail["Yo Yo", "Lighthouse", "Labs"]), '5'); 
  });
});