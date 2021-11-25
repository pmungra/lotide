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

//New Build

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false


assertEqual(eqObjects(ab,ba), true);
assertEqual(eqObjects(ab,abc), false);
assertEqual(eqObjects(cd,dc),true);
assertEqual(eqObjects(cd,cd2),false);