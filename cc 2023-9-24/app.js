// DESCRIPTION:
// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []


//prep
//parameter- an array of values
//return- the 2 highest values in descending order
//example- [4, 10, 10, 9]  =>  [10, 9]



function twoHighest(arr) {
    let value = []
    arr.sort((a,b) => b - a)
    if(arr.length <= 1){
      return arr
    } else if(arr.length >= 2){
    value.push(arr[0])
      for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[0]){
          value.push(arr[i])
        }
      }
      for(let i = 0; i < arr.length; i++){
        if(value.length > 2){
          value.pop()
        }
      }
    }
    return value
  }