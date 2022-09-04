// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:


//Prep Parameters Return Example Psuedo
//parameters object containing a number of strings
//return number of strings in the object
// 
// strCount({
//     first: "1",
//     second: "2",
//     third: false,
//     fourth: ["anytime",2,3,4],
//     fifth:  null
//     })
//     //returns 3


function strCount(obj){
    let sum = 0;
      for (let key in obj) {
        if (typeof obj[key] === "string") sum++;
        if (typeof obj[key] === "object") sum += strCount(obj[key])
      }
      return sum
    }