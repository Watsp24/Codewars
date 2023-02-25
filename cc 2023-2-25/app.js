// Improved hello
// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.
// Say hello to the user

const firstName = prompt("Enter your first Name;")

const lastName = prompt("Enter your last Name;")

function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
  }
  
  sayHello(firstName,lastName);
  // TODO: ask user for first and last name
  // TODO: call sayHello() and show its result