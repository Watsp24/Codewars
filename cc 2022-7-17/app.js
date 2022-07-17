// DESCRIPTION:
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//Prep Parameters Return Example Psuedo
// parameters positive integers
//return associated number with a sheep counterpart
// example  "1 sheep...2 sheep...3 sheep..."

var countSheep = function (num){
    //your code here
    //num += 1
    var message = "";
    for (var i = 1; i <= num; i++){
      
        message += i + " sheep..."
    }
    return message;
  }
 