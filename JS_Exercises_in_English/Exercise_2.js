//A function exercise that tells the user how many days, weeks and months he/she has until he/she completes 90 years old based on his/her age.

function timeLeft(age) {
     
    var totalDays = 365 * 90;
    var totalWeeks = 52 * 90;
    var totalMonths = 12 * 90;
    var daysLeft = totalDays - (age * 365);
    var weeksLeft = totalWeeks - (age * 52);
    var monthsLeft = totalMonths - (age * 12);
    alert("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left until you complete 90 years old.");
}

timeLeft(prompt ("How old are you?"));  
