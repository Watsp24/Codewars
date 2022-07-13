// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


//Prep Parameters Return Example Psuedo
//parameters a string of words
//return the string in reverse
//example  "the dog walk" --> "walk dog the"

function reverseWords(str){
    return str.split(' ').reverse().join(' '); // reverse those words
  }