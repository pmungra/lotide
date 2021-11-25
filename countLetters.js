const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

//  Implementing countLetters

const countLetters = function(word) {
  const result = {};
  for (let letter of word) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  } return result;
};


//Test Run
console.log(countLetters("LHL"));
console.log(countLetters("lighthouse in the house"));//Needs Improvement as it also counts space
console.log(assertEqual(countLetters('LHL'),{L:2,H:1}));