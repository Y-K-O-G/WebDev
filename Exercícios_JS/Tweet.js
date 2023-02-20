/*Código que limita o número de caracteres digitados em 280, diz quantos caracteres foram digitados e quantos faltam até o limite (parecido com um tweet).
Feito no Dev Tools.*/

var message = prompt("Digite a sua mensagem");
var sliced = message.slice(0,280);
alert("Sua mensagem é: " + sliced + "\n" + "Você digitou " + sliced.length + " caracteres. Você tem " + (280-sliced.length) + " caracteres restantes.");
