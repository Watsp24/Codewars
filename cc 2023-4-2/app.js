// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

//prep parameters result example pseudocode
//parameters - accepts day of the week
//return the following day of the chosen week day
//example - wednesday -> thursday
//

const weekday = prompt("Enter any day of the week");

switch (weekday){
    case "monday":
        console.log("tuesday");
    break;
    case "tuesday":
        console.log("wednesday");
    break; 
    case "wednesday":
    console.log("thursday");
    break; 
    case "thursday":
    console.log("friday");
    break; 
    case "friday":
    console.log("saturday");
    break; 
    case "saturday":
    console.log("sunday");
    break; 
    case "sunday":
    console.log("monday");
    break;
}