// Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.


//prep parameters result example pseudocode
//parameters - two integers
//return - comparison of numbers
//example - a:9 is greater than b:5

const numbA = Number(prompt("enter your first Number"));
const numbB = Number(prompt("enter your second Number"));

if(numbA === numbB){
    console.log(`${numbA} is equal to ${numbB}`);
}else if (numbA < numbB){
    console.log(`${numbA} is less than ${numbB}`)
}else if (numbA > numbB){
    console.log(`${numbA} is greater than ${numbB}`)
}else{
    console.log("houston we have a problem")
}