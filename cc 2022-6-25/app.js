// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//Prep  // Parameters Return Example Psuedo Code
//parameters string of digits - 
//return - below 5 return '0', above 5 return '1'
//example 


function fakeBin(x){

    let result = '';

    for (let i = 0; i < x.length; i++){
        x[i] < 5 ? result += '0' : result += '1';
           
        }
        return result

}
