
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

// Changed Parameter to match the example
const eqArrays = function(actual,expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

// New Build function middle 

const middle = function(array) { 
  let middlevel =[];
  if (array.length <=2){
    return []
  }
  if (array.length%2 === 1){ 
    return array[Math.round(array.length/2)-1]
  }
  if (array.length%2 === 0){ 
    return [array[(array.length/2)-1],array[array.length/2]]
  }
}

//Test Runs
console.log(middle([]));
console.log(middle([1]));
console.log(middle([1,8]));
console.log(middle([1,5,8]));
console.log(middle([8,6,5,66]));
console.log(middle([1,5,7,"j",[]]));
console.log(middle([1,5,7,"j",[],[7,8],6,8]));
console.log(middle([1,5,7,"j",[],[7,8],6,8]));
