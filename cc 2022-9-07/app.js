// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

//Prep Parameters Return Example Psuedo
//Parameter - string of words
//return - the longest word of the string group
//example - 'red white blue' //returns string value of white



  function longestWord(stringOfWords){
    //Give me back the longest word!
    return stringOfWords.split(' ').reduce(function(a,b) {
      return a.length > b.length ? a : b;
    });
  }


