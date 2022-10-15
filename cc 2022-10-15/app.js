// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.


//Prep Parameters Return Example Psuedo
//parameters - two sets of 3 numbers integers above 0
//return the difference of the volume between set a and set b
//example - ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.  



findDifference = (a, b) => Math.abs(a.reduce((x,y) => x*y) - b.reduce((m,n) => m*n))