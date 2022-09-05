// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

//Prep Parameters Return Example Psuedo
//Parameters two sets of strings
//Return true if equal false if not equal in ascii code
//example "AD", "BC"  -> equal "AD", "DD"  -> not equal

function compare(s1, s2) {
//pseudo toUpperstring 
//strings with numbers equal zero 

    function sum(s) {
      let a = (s||'').toUpperCase().split('');
      return a.every( (v) => /[A-Z]/.test(v) ) ? a.reduce( (r, v) => r + v.codePointAt(0),0) : 0;
    }
    return sum(s1) === sum(s2);
  
}