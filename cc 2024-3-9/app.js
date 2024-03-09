// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//prep


function removeEveryOther(arr){
    //your code here
    // const ans = arr.splice((index) => )

    for (let i = 1;i < arr.length; i++){
        arr.splice(i,1);
    }
return arr;
  }






  

  function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }