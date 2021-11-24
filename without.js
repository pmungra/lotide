
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};


const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
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

// Without Code

  
const without = function (source, itemsToRemove) {
  
  let newArr = [];
  
  for (i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) { 
      continue;
    } else {
      newArr.push(source[i]);
    }
  }
  return newArr;
}


//Test Case
const words = ["hello", "world", "lighthouse"]; 
console.log(without(words, ["lighthouse"])); 
console.log(without(words, [])); 
console.log(without([], 'lighthouse')); 
console.log(without([1,2,3,4,5], [2,'3',4]));


assertArraysEqual(words, ["hello", "world", "lighthouse"]); 