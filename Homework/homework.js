// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  var returnFirst = arr [0];
  return returnFirst
  
}

function returnLast(arr) {
  // return the last item of the array
  var returnLast = arr [arr.length -1];
  return returnLast
}

function getArrayLength(arr) {
  // return the length of the array
  var getArrayLength = arr.length;
  return getArrayLength;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  const incrementByOne = arr.map( arr => arr +1) 
    return incrementByOne;
} 

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  const addItemToArray = arr ;
  addItemToArray.push (item);
  return addItemToArray;
}


function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  //let newLength = fruits.unshift
  var addItemToFront = arr;
  addItemToFront.unshift (item);
  return addItemToFront;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  var wordsToSentence = words.join (" ");
  return wordsToSentence;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
if (arr.includes (item) ) {  
  return true;
}
return false;
}


function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  var addNumbers  = 0;
  for (var i=0; i < numbers.length; i ++){
    addNumbers = addNumbers + numbers[i];
  }
  return addNumbers;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  var averageTestScore  = 0;
  for (var i=0; i < testScores.length; i ++){
    averageTestScore = (averageTestScore + testScores[i]) ;
  }
  return averageTestScore / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let largestNumber = 0; 
  for (let i=0; i < numbers.length; i += 1){
    if (numbers [i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
var product = 1;

if (arguments.length === 0) {
  return 0;
}
else if (arguments.length === 1 ) {
  return arguments [0];
}
for (var i = 0; i<arguments.length; i++) {
  product *=arguments[i];
}
return product;
}


// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};