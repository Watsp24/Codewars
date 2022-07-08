// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//Prep Parameters Return Example Psuedo
//Parameter a given number or interger 
//Return number multiply by 8 if even or 9 if odd or otherwise
//Example 2 even number, would be multiplied by 8 = 16 or 3 by 9 = 27


function simpleMultiplication(number) {
    // your code........
    if(number % 2 == 0){
       return number * 8;
    }
    else
        return number * 9;
    
}
