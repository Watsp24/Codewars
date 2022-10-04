// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


//Prep Parameters Return Example Psuedo
//Parameters mixed array
//return sum of array as a number
//example 


function sumMix(x){
    return NUmber(x.reduce((sum, current) => +sum + +current),0);
}