// DESCRIPTION:
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.


//Prep Parameters Return Example Psuedo
// parameter - a positive whole number - size
//return - a list of 1 and 0 the length of size
//example - 4 would yield 1010


function stringy(size) {

    // your code here   
    //psuedo
    var str = '';
    for( var i = 1; i <= size; i++)
    str+=i%2;
    return str;
  }