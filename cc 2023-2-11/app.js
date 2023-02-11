// Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.


const num = Number(prompt("enter number less than 100 to escape the loop"));

while(num !== 100 || num > 100){
    prompt("enter number less than or equal too 100")
}