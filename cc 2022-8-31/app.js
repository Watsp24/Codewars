// DESCRIPTION:
// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

// Example 1
// var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
// var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
// Example 2
// var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
// var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];

// returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
// Each element in the arrays will start with a unique letter so there will only be a single match for each element.


//Prep Parameters Return Example Psuedo
//Parameters - array of words
//return - words in array 2 that have matching beginner letters in array 1
//example - // Example 2
// var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
// var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];

function sortArray(a1, a2) {
  let result = [];

for(let i = 0; i < a1.length; i++) {
    for(let j = 0; j < a2.length; j++) {
        if(a2[j][0] === a1[i][0]) result.push(a2[j])
    }
}
    return result
}

