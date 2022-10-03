// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

//Prep Parameters Return Example Psuedo
//parameters object and feature strings
//return combined template literal or concatonated string with are in the middle
//example "objects are features"


var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`;
  }