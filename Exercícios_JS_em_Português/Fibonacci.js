/*Um código que gera a Sequência de Fibonacci.
Ela consiste em somar 0 +1, então somar o segundo
número com o resultado da primeira soma, depois o
novo segundo número com o novo resultado e assim
por diante.*/

function fibonacciGenerator (n) {
    var output = [];
    
    for (loop = 0; loop < n; loop++) {
        var first = output[output.length - 1];
        var second = output[output.length - 2];
        if (output.length == 0) {
            output.push(0);
        } else if (output.length == 1) {
            output.push(1);
        } else {
            var result = first + second;
            output.push(result);
        }
    }
    console.log(output);
}

fibonacciGenerator (10); //Chamando a função 10 vezes.
//Só mudar o valor da funcão para mudar o número de resultados.
