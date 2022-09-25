// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata



//Prep Parameters Return Example Psuedo
//Parameters strings - lower case vowels
//return - strings with the vowel missing
//example - "hello"     -->  "hll"


function shortcut (string) {
    return string.replace(/[aeiou]/gi,'');

  }
//