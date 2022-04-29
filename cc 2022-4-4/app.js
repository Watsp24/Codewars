//If you can't sleep, just count sheep!!

//Given a non-negative integer, 3 for example, return a string with a murmur:
// "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    //your code here
    num += 1
    if(i = 1, i < num, i++){
      
     return(`${num} sheep... ${num} sheep... ${num} sheep...`) 
    }
    
  }
  
  //correct code

  var countSheep = function (num){
      let str = " "
      for (let 1 = 1; i <= num; i++) { str+= `${i} sheep ...` }
      return str;
  }