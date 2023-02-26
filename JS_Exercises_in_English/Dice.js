//A code that simulates dice by generating random numbers under the user's specification."

function dice() {
    
    var sides = prompt("How many sides do the dice have?");

    if(isNaN(sides + 0)) {
        
        alert("The number of sides must be a number.");
        return dice();
        
    } else if(sides < 3) {
        
        alert("Dice must have at least 3 sides.");
        return dice();
        
    } else {
        
        for(i = 0; i < numberOfDice; i++) {
        let number = Math.floor(Math.random() * sides + 1);
        alert(number);
        }
        
    }    
    
}

var numberOfDice = rollDice();

function rollDice() {
    
    var howMany = parseInt(prompt("How many dice do you want to roll?"));
    
    if(isNaN(howMany + 0)) {
        
        alert("The number of dice must be a number.");
        return rollDice();
        
    } else if(howMany < 1) {
        
        alert("You need to roll at least one die.");
        return rollDice();
        
    } else {
        
        return howMany;
        
    }
    
} 

dice();
