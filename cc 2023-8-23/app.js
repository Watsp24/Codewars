DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!



//prep parameters result example pseudocode
//parameters - a given string
//return - string with each character repeated
//example - "String"      -> "SSttrriinngg"


function doubleChar(str) {
    // Your code here
    //break down string to individual characters then double 
    return str.split('').map( x => x + x).join('');
  }
  


