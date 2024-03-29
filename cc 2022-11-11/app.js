// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


//Prep Parameters Return Example Psuedo
//parameter - test values between 0 and 100
//return the average of 3 grades, and letter associated
//example - (getGrade(95,90,93), 'A')



function getGrade (s1, s2, s3) {
    // Code here
     let avg = Math.round(s1 + s2 + s3)/3;

     if(avg <= 100 && avg >= 90){
        return 'A';
     }else if(avg <= 90 && avg >= 80){
        return 'B';
     }else if(avg >= 70 && avg <= 79){
        return 'C';
     }else if(avg >= 60 && avg <= 69){
        return 'D';
     }else if(avg >= 0 && avg <= 59){
       return 'F';
     }     

  }