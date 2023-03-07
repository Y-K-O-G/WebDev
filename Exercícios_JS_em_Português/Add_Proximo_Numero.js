/*Este primeiro desafio consiste em criar uma função que adiciona
o próximo número a um Array toda vez que a função é chamada.*/

var numeros = [];

function push() {
    numeros.push(numeros.length + 1);
    alert(numeros);
};

//Quando a função "push()" é chamada, o próximo número será adicionado.
