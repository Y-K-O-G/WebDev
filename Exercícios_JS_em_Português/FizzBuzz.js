/*Este é o desafio FizzBuzz.
Baseado em um jogo infantil na Inglaterra, o código deve
criar um array vazio, então adiciona números de 1 a 100,
mas para múltiplos de 3 deve-se adicionar "Fizz" ao invés
do número, para múltiplos de 5 deve-se adicionar "Buzz",
e para múltiplos de ambos 3 e 5 deve-se adicionar "FizzBuzz".*/

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

/*O meu código mostra apenas o resultado final porque eu não quis
que ele mostrasse 100 resultados diferentes até o resultado final
e também não quis que o usuário tivesse que digitar "fizzBuzz()"
toda vez para ver cada reusltado.*/
