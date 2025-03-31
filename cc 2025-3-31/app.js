// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// Example:
// arguments: 1, 2, "+"
// should return 3

// arguments: 1, 2, "&"
// should return "unknown value"

// arguments: 1, "k", "*"
// should return "unknown value"


//prep
//parameters there are two numbers and a string to indicatte a + - / *
//return  the result of the two numbers having been ran through each math indicator
//example (1,2) =  3, -1, 1, 2
//psuedo a + b, a - b, a / b, a * b 







function calculator(a,b,sign){

    if(typeof a === 'string') {
        return ('unknown value');
    }
    if(typeof b === 'string') {
        return ('unknown value');
    }
    if(sign != "+" && sign != "-" && sign != "/" && sign != "*"){
      return ('unknown value');
    }
    if(sign ===  "+") return a + b;
    if(sign === "-")  return a - b;
    if(sign ===   "/") return a/b;
    if(sign ===  "*") return a * b;
    
     
    }