// DESCRIPTION:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]


//prep parameters result example pseudocode
//parameters array of numbers 
//return the array with duplicates removed, with same order sequence
//example [1, 2, 1, 1, 3, 2] -> [1, 2, 3]


function distinct(a) {
    //pseudo - remove duplicates from array
    //maintain order
    //loop around array, where i = a[i], you know you have a dup 

    let ans = [];

    for(i = 0; i < a.length; i++){
        if(!ans.includes(a[i])){
            ans.push(a[i]);
        }
    }
    return ans;
  }
 

//   return Array.from(new Set(array));