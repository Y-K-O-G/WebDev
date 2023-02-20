//Um código que deixa apenas a primeira letra de um nome maiúscula.

var nome = prompt("Qual é o seu nome?");

var primeiraLetra = nome.slice(0,1).toUpperCase();

var restoDoNome = nome.slice(1,nome.length).toLowerCase();

alert ("Olá, " + primeiraLetra + restoDoNome + "!");
