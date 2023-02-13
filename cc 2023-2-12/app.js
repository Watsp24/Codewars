// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

function filterRangeInPlace(arr,a,b){
    

    for(let i = 0; i < arr.length; i++){
        let numb = arr[i];

        if(numb < a || numb > b){
            arr.splice(i,1);
            i--;
        }
    }
 
}


