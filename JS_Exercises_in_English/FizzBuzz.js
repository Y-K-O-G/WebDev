/*That is the FizzBuzz Challenge.
Based on a game that kids play in England, the code must
create an empty array, then add numbers to it from 1 to 100,
but for multiples of 3 it must add "Fizz" instead of the number,
for multiples of 5 it must add "Buzz, and for multiples of
both 3 and 5, it must add "FizzBuzz".*/

var numbers = [];

function fizzBuzz() {
    var nextNumber = numbers.push(numbers.length + 1);

    if(numbers.length < 100 && nextNumber % 3 != 0 && nextNumber % 5 != 0){
        fizzBuzz();
    } if(numbers.length < 100 && nextNumber % 3 == 0 && nextNumber % 5 != 0) {
        numbers.pop();
        numbers.push("Fizz");
        fizzBuzz();
    } if(numbers.length < 100 && nextNumber % 5 == 0 && nextNumber % 3 != 0) {
        numbers.pop();
        numbers.push("Buzz");
        fizzBuzz();
    } if(numbers.length < 100 && nextNumber % 3 == 0 && nextNumber % 5 == 0) {
        numbers.pop();
        numbers.push("FizzBuzz");
        fizzBuzz();
    }
}

fizzBuzz();
console.log(numbers);

/*My code prints only the final result because i didn't want it
to print 100 different results until the final one and didn't want
the user to type "fizzBuzz()" everytime to see each result.*/
