//Your boss decided to save money by purchasing some cut-rate optical character recognition
// software for scanning in the text of old novels to your database. At first it seems to 
//capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

//Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the 
//numbers. Your program will take in a string and clean out all numeric characters, and return a string with 
//spacing and special characters ~#$%^&!@*():;"'.,? all intact.


function stringClean(s){
    // Function will return the cleaned string
    return s.replace(/[0-9]/g,'');
  }

  //   Used regex: \d+ the d will replace all digits and the plus sign the adjacent digits
//   The /g means global, so it  does it in one go. Also could work with (/[0-9]/g, '') instead.