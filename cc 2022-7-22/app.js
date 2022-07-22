// DESCRIPTION:
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

//Prep Parameters Return Example Psuedo
//Parameters,2 strings 
//Return 2 integers as summed up strings 
//Example // "4",  "5" --> "9"




function sumStr(a,b) {
  //takes strings, converts to integers, sums them up, reverts back to string
  return String(Number(a)+Number(b))
}
