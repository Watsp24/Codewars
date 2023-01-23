// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];


//Prep Parameters Return Example Psuedo
//Parameters - is an integer 


  function first(arr, n) {
    if(n == undefined) return arr.slice(0, 1);
    if(n == 0) return [];
    let newArr = [];
    if(n <= arr.length){
      for(let i = 0; i < n; i++){
        newArr.push(arr[i])
      } return newArr
    } return arr
  }