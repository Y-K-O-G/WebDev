//A code that flips a coin and tell if the result is "Heads" or "Tails".

function flipCoin() {
    let coin = Math.floor(Math.random() * 2);
    if(coin == 0) {
        alert("Heads")
        var playAgain =confirm("Do you wanna tossa the coin again?");
        if(playAgain == true) {
            return flipCoin();
        } else {
            alert("The coin has been destroyed!");
        }
    } else {
        alert("Tails")
        var playAgain =confirm("Do you wanna tossa the coin again?");
        if(playAgain == true) {
            return flipCoin();
        } else {
            alert("The coin has been destroyed!");
        }
    }
}

var start = confirm("Do you want to toss a coin?");

if(start == true) {
    flipCoin();
} else {
    alert("So what are you doing here?");
}
