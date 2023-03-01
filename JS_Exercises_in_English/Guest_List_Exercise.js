//A exercise about arrays that checks if the user is on a predefined guest list.

var guestList = ["Angela" , "Jack" , "Pam" , "James", "Lara" , "Jason"];

var guestName = prompt("What is your name?");

var checkName = guestName.slice(0, 1).toUpperCase() + guestName.slice(1, guestName.lenght).toLowerCase();

if(guestList.includes(checkName)){
    alert("Welcome to the party!!!")
} else {
    alert("Sorry, but you were not invited.")
}
