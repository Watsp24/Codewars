// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


//prep
//parameters - beast and dish
//return - true or false to indicate whether the beast dish starts and ends the same letters as animal name
//example - chickadee is bringing chocolate cake.


function feast(beast, dish) {
    //slice  the first and last letters of beast name
    //slice the first and last letters of dish
    //compare the two -  if (a1 == b1) & (a.length - 1 ==  b.length - 1) : yes
    if(beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]){
      return true;
    }else{
      return false;
    }
}