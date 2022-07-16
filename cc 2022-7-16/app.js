// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

//Prep Parameters Return Example Psuedo
//parameters different number of days you can have the vehicle
//return cost minus discount
//example  


function rentalCarCost(d) {

let dayRate = 40;
var total;

   if(d >= 7){
       total = (dayRate * d) - 50;
     
   }else if(d >= 3){
       total = (dayRate * d) - 20;
     
   }else
       total = (dayRate *d);
       
       return total;
}
 



    // Your solution here
    // $40 a day for car
    // 7 days or more $50 dollar discount
    // 3 days or more $20 dollar discount

//     let dayRate = 40;
//     var total;
  
//        if(day >= 7){
//            total = (dayRate * d) - 50;
//        }else if(day >= 3){
//            total = (dayRate * d) - 20;
//        }else(day < 3)
//            total = (dayRate *d);
           
//            return total;
//    }