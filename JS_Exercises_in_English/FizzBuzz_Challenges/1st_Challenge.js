/*This 1st challenge consists in creating a function that adds the
next number to a Array every time the function is called.*/

var numbers = [];

function push() {
    numbers.push(numbers.length + 1);
    alert(numbers);
};

//When the "push()" function is called, the next number will be added.
