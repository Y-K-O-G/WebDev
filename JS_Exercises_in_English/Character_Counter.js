//A character counter made with "prompt" and "alert" commands on Chrome Dev Tools.

var message = prompt("Type your message");
alert("You typed " + message.length + " characters. You have " + (280-message.length) + " characters left.");
