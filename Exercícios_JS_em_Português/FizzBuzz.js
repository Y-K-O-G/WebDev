/*Este é o desafio FizzBuzz.
Baseado em um jogo infantil na Inglaterra, o código deve
criar um array vazio, então adiciona números de 1 a 100,
mas para múltiplos de 3 deve-se adicionar "Fizz" ao invés
do número, para múltiplos de 5 deve-se adicionar "Buzz",
e para múltiplos de ambos 3 e 5 deve-se adicionar "FizzBuzz".*/

var numeros = [];

function fizzBuzz() {
    var proximoNumero = numeros.push(numeros.length + 1);

    if(numeros.length < 100 && proximoNumero % 3 != 0 && proximoNumero % 5 != 0){
        fizzBuzz();
    } if(numeros.length < 100 && proximoNumero % 3 == 0 && proximoNumero % 5 != 0) {
        numeros.pop();
        numeros.push("Fizz");
        fizzBuzz();
    } if(numeros.length < 100 && proximoNumero % 5 == 0 && proximoNumero % 3 != 0) {
        numeros.pop();
        numeros.push("Buzz");
        fizzBuzz();
    } if(numeros.length < 100 && proximoNumero % 3 == 0 && proximoNumero % 5 == 0) {
        numeros.pop();
        numeros.push("FizzBuzz");
        fizzBuzz();
    }
}

fizzBuzz();
console.log(numeros);

/*O meu código mostra apenas o resultado final porque eu não quis
que ele mostrasse 100 resultados diferentes até o resultado final
e também não quis que o usuário tivesse que digitar "fizzBuzz()"
toda vez para ver cada reusltado.*/
