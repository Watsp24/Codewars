// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.


//PREP
// parameters  - two sorted arrays
//return - a single combined array
//example - ([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6])


function mergeArrays(a, b) {
    // your code here
    return  Array.from(new Set (a.concat (b))).sort ((a,b) => a-b);
  }
  