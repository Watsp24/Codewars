// Task
// Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

// If arr is not an array, function should return:

// "It's a fake array"
// If arr contains elements 5 and 13, function should return:

// "It's a black array"
// If arr contains neither 5 nor 13, function should return:

// "It's a white array"
// Examples
// blackAndWhite(5,13) should return "It's a fake array"
// blackAndWhite([5,13]) should return "It's a black array"
// blackAndWhite([5,12]) should return "It's a white array" 
// Using string template and ternary operator can make your work easier.


//Prep Parameters Return Example Psuedo
//parameters array with integer
//return 1 of 3 statements, fake array, black array, white array
//example blackAndWhite([5,13]) should return "It's a black array"

function blackAndWhite(arr){
    //coding here...
    if(!Array.isArray(arr)) {
        return 'It\'s a fake array';
    }
    else if(arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1){
        return 'It\'s a black array';
    }
    else
        return 'It\'s a white array';
    }






    // function blackAndWhite (arr) {
    //     if (!Array.isArray(arr)) {
    //       return 'It\'s a fake array';
    //     }
        
    //     const color = arr.includes(5) && arr.includes(13)
    //       ? 'black'
    //       : 'white';
        
    //     re


  