// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.


//Prep Parameters Return Example Psuedo



function arraySum(i) {
    var sum=0;
    for(var a=0;a<i.length;a++){
        if(typeof i[a]=="number"){
            sum+=i[a];
        }else if(i[a] instanceof Array){
            sum+=arraySum(i[a]);
        }
    }
    return sum;
}
