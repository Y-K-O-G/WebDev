//A code that tells the user if some year is or is not a leap year.

function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    
    if(isNaN(parseInt(year)) == true) {
        alert("The year must be a number.");
        return isLeap(prompt("Input a year."));
    } if(isNaN(parseInt(year)) == false) {
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    alert("Leap Year.");
                } else {
                    alert("Not leap year.");
                }
            } else {
                alert("Leap year.");
            }
        } else {
            alert("Not leap year.");
        }
    }
/**************Don't change the code below****************/    

}

isLeap(prompt("Input a year."));
