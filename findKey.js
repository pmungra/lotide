const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};



const findKey = (object, callback) => {
  let returnvalue;
for(let key in object) {
    if(callback(object[key])){
        returnvalue = key;
        return returnvalue;
    }

}
}

output= findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

//Test Runs:
assertEqual(output, 'noma') 
assertEqual(output, 'noma5') 