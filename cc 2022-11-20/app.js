// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"


//Prep Parameters Return Example Psuedo


var Ball = function(ballType) {
    // your code goes here
    this.ballType = ballType ? ballType : "regular";

    // if(!ballType){
    //     this.ballType = 'regular';
    //   }else 
    //     this.ballType = 'super';
    // };
  };

