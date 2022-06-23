// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//Prep  // Parameters Return Example Psuedo Code

//Parameters - array of numbers, negative or positive.
//return - console log the invert to each number
//example 

function invert(array) {
    //take array, split into substring, invert the number
    //join the array back together 

    let arr = []

    for (let i = 0; i < array.length; i++){
        arr.push(-array[i])
    }
    return arr
 }