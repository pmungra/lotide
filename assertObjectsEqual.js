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

//

const eqObjects = function(object1, object2) {
  var obj1 = Object.keys(object1);
  var obj2 = Object.keys(object2);
  if(obj1.length !== obj2.length){
    return false;
  } else {
    for(i of obj1){
      if(Array.isArray(object1[i])){
        return eqArrays(object1[i],object2[i]);
      } else if(object1[i] !== object2[i]){
        return false;
      };
    };
    return true;
  };
};

// New Build
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual,expected)){
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`)
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`)
  }
};


//Test Run -1
let fruit1 = { orange:"citrus", mango:"Sweet"}
let fruit2 = { mango:"Sweet", orange:"citrus"}


assertObjectsEqual(fruit1, fruit2);

//Test Run- 2


let fruit3 = {mango:"Sweet", orange:"citrus"}
let fruit4 = {mango:"Sweet", grape:"citrus"}


assertObjectsEqual(fruit3, fruit4);
