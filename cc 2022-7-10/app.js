// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//Prep Parameters Return Example Psuedo
//Parameters array of numbers
//return vales multiplied in order
//example 2*3*4*5 6*4 = 24 * 5 = 121


function grow(x){
    result = x[0];
for(let i = 1; i < x.length; i++){
    result *= x[i]
}
return result;
}

