/*Code that limits the number of characters typed in 280, tells how many characters were typed and how many are left until the limit (like a tweet).
Made on Dev Tools.*/

var message = prompt("Type your message:");
var limit = message.slice(0,280);
alert("Your message is: " + limit + "\n" + "You typed " + limit.length + " characters. You have " + (280-limit.length) + " characters left.");
