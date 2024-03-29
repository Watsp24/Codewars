// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


//Prep
//Parameters  height and weight 
//Returns   underweight, normal, overweight, obese
//Example
//Pseudo Code

function bmi(weight, height) {

    var bmi = weight/Math.pow(height,2);

    if (bmi <= 18.5){
        return "Underweight";
    }else if(bmi <= 25.0){
        return "Normal";
    }else if(bmi <= 30.0){
        return "Overweight";
    }else {
        return "Obese";
    }
    
  }