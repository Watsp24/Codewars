document.querySelector('#smurf').addEventListener(click,play)

//rows execution for X
 
play(){
    //rows execution for X
    if (box1 == 'x' && box2 == 'x' && box3 == 'x' || box4 == 'x' && box5 =='x' && box6 == 'x' || box7 == 'x' && box8 == 'x' && box9 =='x'){
        console.log('X is the Winner! Three X\'s Left to Right!!');
    }

    //Column execution for X
    if (box1 == 'x' && box4 =='x' && box7 =='x' || box2 =='x' && box5 =='x' && box8 =='X' || box3 =='x' && box6 =='x' && box9=='x'){
        console.log('X is the Winner! Three X\'s from Top to Bottom!!')
    }

    //diagnal for X
    if (box1 == 'x' && box5 =='x' && box9 =='x' || box3 =='x' && box5 =='x' && box9 =='x'){
        console.log('X is the Winner! Three X\'s Diagnal Victory!!')
    }
}

   //rows execution for O
   if (box1 == 'o' && box2 == 'o' && box3 == 'o' || box4 == 'o' && box5 =='o' && box6 == 'o' || box7 == 'o' && box8 == 'o' && box9 =='o'){
    console.log('X is the Winner! Three X\'s Left to Right!!');
    }

    //Column execution for o
    if (box1 == 'o' && box4 =='o' && box7 =='o' || box2 =='o' && box5 =='o' && box8 =='o' || box3 =='o' && box6 =='o' && box9=='o'){
        console.log('X is the Winner! Three X\'s from Top to Bottom!!')
    }

    //diagnal for o
    if (box1 == 'o' && box5 =='o' && box9 =='o' || box3 =='o' && box5 =='o' && box9 =='o'){
        console.log('X is the Winner! Three X\'s Diagnal Victory!!')
    }
}
