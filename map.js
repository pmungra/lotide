const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback){
    const results = [];
    for ( let item of array) {
        results.push(callback(item));
    }
    return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);

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

// Fixing assertEqual && eqArrays

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

//Test Runs
assertArraysEqual(words, ['a','b','c','d','e']);
assertArraysEqual(words, words); 
assertArraysEqual(words, []); 
assertArraysEqual(words, [1,2]); 

