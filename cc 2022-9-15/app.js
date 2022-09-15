// It started as a discussion with a friend, who didn't fully grasp some way of setting defaults, but I thought the idea was cool enough for a beginner kata: binary OR each matching element of two given arrays (or lists, if you do it in Python; vectors in c++) of integers and give the resulting ORed array [starts to sound like a tonguetwister, doesn't it?].

// If one array is shorter than the other, use the optional third parameter (defaulted to 0) to OR the unmatched elements.

// For example:

// orArrays([1,2,3],[1,2,3]) === [1,2,3]
// orArrays([1,2,3],[4,5,6]) === [5,7,7]
// orArrays([1,2,3],[1,2]) === [1,2,3]
// orArrays([1,2],[1,2,3]) === [1,2,3]
// orArrays([1,2,3],[1,2,3],3) === [1,2,3]


//Prep Parameters Return Example Psuedo
//Parameter 2 arrays
//Return matching elements of two arrays

function orArrays(arr1, arr2, extra = 0){
    while (arr1.length < arr2.length) arr1.push(extra);
    while (arr1.length > arr2.length) arr2.push(extra);
    return arr1.map((a, i) => arr1[i] | arr2[i]);
  }