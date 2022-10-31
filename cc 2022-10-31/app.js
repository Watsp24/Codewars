// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .


//Prep Parameters Return Example Psuedo


function minSum(arr) {
    // your code here
    let value = 0;
    var ans = arr.slice().sort((a,b) => a - b);
  
    while(ans.length)
      value += ans.shift() * ans.pop(); 
  
    return value;
  }