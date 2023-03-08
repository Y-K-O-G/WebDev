/*A code that writes the lyrics of the song "99 Bottles of Beers" from "Melvins".*/

var bottlesOfBeer = 99;

function beer() {

    while (bottlesOfBeer > 1) {
        alert(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer.\nTake one down and pass it around, " + (bottlesOfBeer - 1) + " bottles of beer on the wall.");
        bottlesOfBeer--;
    }
    
    if (bottlesOfBeer == 1) {
        alert("1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, No more bottles of beer on the wall.");
        bottlesOfBeer--;
        beer();
    }

    if (bottlesOfBeer == 0) {
        alert("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
        bottlesOfBeer--;
        beer();   
    }
}

beer();
