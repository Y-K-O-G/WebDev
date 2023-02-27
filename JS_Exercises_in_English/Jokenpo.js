//A jokenpo (aka "Rock, paper, scissor") game.

function jokenpo() {
    
    var player = prompt('Choose "Rock", "Paper" or "Scissor".').toLowerCase();
    var cpu = Math.floor(Math.random() * 3);

    var rock = "    _______\n---'   ____)\n      (_____)\n      (_____)\n      (____)\n---.__(___)";
    var paper = "     _______\n---'    ____)____\n           ______)\n          _______)\n         _______)\n---.__________)";
    var scissor = "    _______\n---'   ____)____\n          ______)\n       __________)\n      (____)\n---.__(___)";
        
    
    if(player == "rock") {
        alert(rock);
    } else if(player == "paper"){
        alert(paper);
    } else if(player == "scissor") {
        alert(scissor);
    } else {
        alert("That is not a valid option.")
        return jokenpo();
    }

    if(cpu == 0) {
        alert(rock);
    } else if(cpu == 1){
        alert(paper);
    } else if(cpu == 2) {
        alert(scissor);
    }

    if(player == "rock" && cpu == 0 || player == "paper" && cpu == 1 || player == "scissor" && cpu == 2) {
        alert("It is a draw.");
        var playAgain = confirm("Do you want to pay again?");
        if(playAgain == true){
            return jokenpo();
        } else {
            alert("Game over.");
        }
    } else if(player == "rock" && cpu == 1 || player == "paper" && cpu == 2 || player == "scissor" && cpu == 0) {
        alert("You lost.");
        var playAgain = confirm("Do you want to pay again?");
        if(playAgain == true){
            return jokenpo();
        } else {
            alert("Game over.");
        } 
    } else if(player == "rock" && cpu == 2 || player == "paper" && cpu == 0 || player == "scissor" && cpu == 1) {
        alert("You won.");
        var playAgain = confirm("Do you want to pay again?");
        if(playAgain == true){
            return jokenpo();
        } else {
            alert("Game over.");
        }
    }
}

jokenpo();
