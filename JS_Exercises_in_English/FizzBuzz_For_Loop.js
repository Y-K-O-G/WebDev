//FizzBuzz challenge using "for" loop.

var numbers = [];

function fizzBuzz() {
    for (n = 1; n < 101; n++) {
        if (n % 3 == 0 && n % 5 == 0){
            numbers.push("FizzBuzz");   
        } else if (n % 3 == 0) {
            numbers.push("Fizz");
        } else if (n % 5 == 0) {
            numbers.push("Buzz");
        } else {
            numbers.push(n)
        }
    }
    console.log(numbers);
}

fizzBuzz();
