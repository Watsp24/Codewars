// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

//Prep  // Parameters Return Example Psuedo Code
//Parameters flower 1 and 2, even numbers or odd
//Return - even number and odd number mean love
//Example 

function lovefunc(flower1, flower2){
    //odd and even number means love
    // moment of truth
    return flower1 % 2 !== flower2 % 2;
  }