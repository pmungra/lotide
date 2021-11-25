/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};


const eqArrays = function(actual,expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};
*/
//New Build
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const item = sentence[i];
    if (!results[item]) {
      results[item] = [i];
    } else {
      results[item].push(i);
    }
  }

  console.log(results);
  return results;
};

//Test Run:
letterPositions('Hello');

letterPositions("lighthouse in the house");