const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅  Assertion Passed: [actual] === [expected]");
  } else console.log("🛑🛑🛑  Assertion Failed: [actual] !== [expected]");
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hello", "Hello");
assertEqual("Hi", "Hello");
assertEqual(7, 8);
assertEqual(7, 7);
