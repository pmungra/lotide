const assertEqual = require('./assertEqual');

let tail = function(arrayInput) {
  let newArray = arrayInput.slice(1);
  return newArray;
};

module.exports = tail; 

