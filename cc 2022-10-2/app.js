// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.


//Prep Parameters Return Example Psuedo
//parameters default value
//return an array of numbers 
//example arr(5) // =>  [0,1,2,3,4]


//psuedo n must = n.length
const arr = N => [ /* the numbers 0 to N-1 */ ];

function arr(n){
    let result = [ ]

    for( let i = 0; i < n; i++){
        result.push[i];
}
return result;

}

//const arr = N => [ /* the numbers 0 to N-1 */ ];
function arr(N){
    let arr = [];
    for (let i = 0; i < N; i++){
      arr.push(i)
    }
    return arr;
    }