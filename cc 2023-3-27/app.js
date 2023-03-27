// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.


//prep parameters result example pseudocode
//parameters last, today, cycleLength
//return true if #of days past from last to today > cycleLenthh



// function periodIsLate(last, today, cycleLength) {

//     let daysPast = last - today;
    
//     if(daysPast >= cycleLength){
//         return true;
//     }else{
//         return false;
//     }  
//   }

function periodIsLate(last, today, c){
    return (last.setDate(last.getDate()+c),last<today)
  }