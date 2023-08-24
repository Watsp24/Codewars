// DESCRIPTION:
// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!


//prep parameters result example pseudocode
//parameters  are name,city, state
//return a welcome consisting of name joined by a space 
//example ['John', 'Smith'], 'Phoenix', 'Arizona'  Hello, John Smith! Welcome to Phoenix, Arizona!



function sayHello( name, city, state ) {
 //psuedo array.join(" ")
    return    `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}


