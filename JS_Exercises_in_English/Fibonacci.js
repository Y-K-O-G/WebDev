/*A code that generates the Fibonacci Sequence.
It consists of adding 0 + 1, then add the second number
and the result of the first sum, then the new second
number and the new result and so on.*/

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

fibonacciGenerator (10); //Calling function 10 times.
//Just change function value to change the number of results.
