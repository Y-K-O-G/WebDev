//Desafio FizzBuzz usando o loop "while".

var numbers = [];

var n = 1; 

function fizzBuzz() {
    while (n < 101) {
        if (n % 3 == 0 && n % 5 == 0){
            numbers.push("FizzBuzz");   
        } else if (n % 3 == 0) {
            numbers.push("Fizz");
        } else if (n % 5 == 0) {
            numbers.push("Buzz");
        } else {
            numbers.push(n)
        }
        n++; 
    }
    console.log(numbers);
}

fizzBuzz();
