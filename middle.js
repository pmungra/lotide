const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle; 

