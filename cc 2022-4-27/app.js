//Write a method, that will get an integer array as parameter and will process every number from this array.

//Return a new array with processing every number of the input-array like this:

//If the number has an integer square root, take this, otherwise square the number.

//The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {

    const squareOrSquareRoot = array = array.map(n => Math.sqrt(n) % 1 == 0 ? n : (n * n))
    return array;  
  }