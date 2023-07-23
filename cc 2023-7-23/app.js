// DESCRIPTION:
// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.


//prep
//parameters -  integer representing last, today, cyclelength
//return -  if cyclength is less than number of days past from last to day return true 



function periodIsLate(last, today, cycleLength) {
    let ans = (today - last)/86400000;
    
    if( ans > cycleLength ){
        return true;
    }


    return false;
  }

