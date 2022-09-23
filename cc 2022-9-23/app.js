// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!c



//Prep Parameters Return Example Psuedo
//Parameters integer filled arrays greater than 1
//return true is a group squared is larger than the b group cubed.
//([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3


function arrayMadness(a, b) {
    // Ready, get set, GO!!!

 let aresult = a.map((a) => a * 2).reduce((sum, current) => sum + current, 0);
 let bresult = b.map((b) => b * 3).reduce((sum, current) => sum + current, 0);

     if(aresult > bresult){
        return 'true'
     }else{
        return 'false'
     }
    
    
  }
