// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


//Prep Parameters, Return, Example, Psuedo

//Parameters array-list of numbers
//Return the sum
//Example

function find_average(array) {
    // math.pow(array)
   //Reduce
    
   return array.length > 0 ? array.reduce((a,b) => a + b) / array.length : 0;
  }