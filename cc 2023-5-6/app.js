// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then,

// ((P-1)! + 1) / (P * P)
// should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.


//prep parameters result example pseudocode
//parameters - prime number
//return - true if prime is wilson
//example - 



function amIWilson(p) {
    // check if prime is Wilson
    return ( p === 5 || p === 13 || p ===563 ) ? true : false;

  }

