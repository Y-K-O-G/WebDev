//A function exercise that tells the user how many days, weeks and months he/she has until he/she completes 90 years old based on his/her age.

function lifeInWeeks(age) {
    
/************Don't change the code above************/    
  var totalDays = 365 * 90;
    var totalWeeks = 52 * 90;
    var totalMonths = 12 * 90;
    var daysLeft = totalDays - (age * 365);
    var weeksLeft = totalWeeks - (age * 52);
    var monthsLeft = totalMonths - (age * 12);
    console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left until you complete 90 years old.");
}

lifeInWeeks(prompt ("How old are you?"));  
    //Write your code here.
    
    
    
    
    
/*************Don't change the code below**********/
