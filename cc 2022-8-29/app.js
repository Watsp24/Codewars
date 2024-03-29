// DESCRIPTION:
// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]


//Prep Parameters Return Example Psuedo



Array.prototype.filter = function (func) {
    //nothing here, you will feel pretty awesome to write down by yourself
    //have fun :)

    var result = [];
    for(let i =  0; i < this.length; i++){
      if(func(this[i])){
        result.push(this[i]);
      }
    }
    return result;
  }

  return this.reduce((pre, val) => fn(val) ? [...pre, val] : pre, []);
  