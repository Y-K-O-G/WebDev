//A code that capitalizes only the first letter of a name.

var name = prompt("What is your name?");

var firstLetter = name.slice(0,1).toUpperCase();

var restOfName = name.slice(1,name.length).toLowerCase();

alert ("Hi, " + firstLetter + restOfName + "!");
