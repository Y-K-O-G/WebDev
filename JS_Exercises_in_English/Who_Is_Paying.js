/*A simple code that picks a random name from a array.*/

function whosPaying(names) {
    
    var people = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var names = Math.random() * people.length;
    return(people[Math.trunc(names)] + " is going to buy lunch today!");
      
}

alert(whosPaying());
