Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "aeiou" --> "!!!!!"
// "ABCDE" --> "!BCD!"



//prep
//parameters  -  
//return - exclamation marks instead of vowels
//example  - "ABCDE" --> "!BCD!"
//pseudo - change all vowels to exclamation 


function replace(s) {
    //coding and coding....
    
      return s.replace(/[aeiouAEIOU]/g, "!");
  }