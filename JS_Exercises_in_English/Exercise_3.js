//A simple Body Mass Index calculator that tells the user if he/she is under, over or at normal weight for his/her height.

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return Math.round(bmi);
}

var bmi = bmiCalculator(prompt("What is your weight in kilograms?"), prompt("What is your height in meters?"));

if (bmi < 18.5) {
    alert("Your BMI is " + bmi + " so you are under weight.");
  } else if (bmi >= 18.5 && bmi <= 29.9) {
    alert("Your BMI is " + bmi + ", so you are at normal weight.");
  } else {
    alert("Your BMI is " + bmi + ", so you are overweight.");
  }
