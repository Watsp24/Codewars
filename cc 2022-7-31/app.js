// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!


//Prep Parameters Return Example Psued
//Parameters an array of numbers
//return the first max and first min of two arrays followed by second max and second min
//example ([15,11,10,7,12]) = [15,7,12,10,11] - The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on



function solve(arr){
    const result = [];
    arr.sort((a, b)=> a - b);
    
    while( arr.length > 0 ){
      result.push(arr.pop())
      result.push(arr.shift())
    }
    return result.filter(e => e)
  };
