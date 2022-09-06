// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.



//Prep Parameters Return Example Psuedo
//Parameter turn a sequence of strings in an array
//return an array of numbers from string 
//Example  ie:["1", "2", "3"] to [1, 2, 3]


function toNumberArray(stringarray){
    //psuedo code 
    //use the map function to search each element of the array and the Number method to convert the array
    var toNumberArray = stringarray.map(Number)
    return toNumberArray
}




