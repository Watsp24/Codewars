// Multiplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.


const numb = prompt('Enter a number for multiplication table!')

if(numb < 2 || numb > 9){
    console.log('insufficient value')
}else if(numb > 2 && numb <= 9){

    for(i=1;i<=numb;i++){
        console.log(numb * i)
    }
}
