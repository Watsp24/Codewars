// Check your arrows
// You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
// You need to verify that you have some good ones left, in order to prepare for battle:

// anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
// If an arrow in the quiver does not have a damaged status, it means it's new.

// The expected result is a boolean, indicating whether you have any good arrows left.


//prep
//parameters - an array of arrows  
//return - boolean result of true if you have a good arrow
//example - if array as no damage, its new, and good


function anyArrows(arrows){
    // arrow it
    return arrows.some( (x) => !x.damaged );
  }