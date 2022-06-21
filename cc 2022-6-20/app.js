// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//Prep  // Parameters Return Example Psuedo Code
//parameters - a non negative number
//Return - console log numbers 1 - n
//Example

function powersOfTwo(n){
    //loop
    //conditionals 
    let array = []
    for(let i = 1; i <= n; i++) {
        array.push(2 ** i)
    }
    return array
    
  }

