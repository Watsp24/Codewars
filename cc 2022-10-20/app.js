// Given a number as an Input, print out every integer from 1 to that number. However, when the integer is from 1 to that number. However, when the integer is divisible by 3, print out 'Fizz'; when its divisible by 5, print out 'Buzz'; when its divisible by both 3 and 5, print out 'Buzz'.


//Prep Parameters Return Example Psuedo
//Parameters - array of integers
//Return fizz when divisible by 3, buzz when divisible by 5, and fizz buzz when 3 and 5.
//

function findDivisible(n){
    for(let i = 0; i < n; i++){
        if(n % 3 == 0){
            console.log('fizz');
        }else if( n % 5 == 0){
            console.log('buzz');
        }else if( n % 3 == 0 && n % 5 == 0){
            console.log('fizzbuzz');
        }
        else
            console.log('Houston, we have a probllem.')
        
    }
}
