// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.



//prep

function count (string) {  
    // The function code should be here
     //create obj
     //loop-> check val exist ? val++ : val -1
     let countObj = {}
     for(const c of string){
        if(countObj[c] ){
            countObj[c]++
        }else{
            countObj[c] = 1
        }
     }
     return countObj
  }


  console.log(countChars('aba'),"{'a': 2, 'b': 1}")
  console.log(countChars('dog'), "{'d':1, 'o':1, 'g':1}")