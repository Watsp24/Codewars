// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


//prep
//paramter - integer 
//return - integer * 50 + 6
//example - 2    would be 2 * 500 = 100 + 6 = 106


function problem(x){
    //your code here
    return typeof x == 'string' ? 'Error' : (x * 50 + 6);
}