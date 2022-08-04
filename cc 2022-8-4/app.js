// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.



//Prep Parameters Return Example Psuedo
//parameters - two sets of arrays with numbers
//return - the sum of all their elements
//example - 


function arrayPlusArray(arr1, arr2) {
  //something went wrong
    initialValue = 0;
    arr1.reduce ((currentValue,previousValue) => currentValue + previousValue, initialValue);
    arr2.reduce ((currentValue,previousValue) => currentValue + previousValue, initialValue);
    return arr1 + arr2;
  }


