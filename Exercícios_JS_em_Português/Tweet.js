/*Código que limita o número de caracteres digitados em 280, diz quantos caracteres foram digitados e quantos faltam até o limite (parecido com um tweet).
Feito no Dev Tools.*/

var mensagem = prompt("Digite a sua mensagem");
var limite = mensagem.slice(0,280);
alert("Sua mensagem é: " + limite + "\n" + "Você digitou " + limite.length + " caracteres. Você tem " + (280-limite.length) + " caracteres restantes.");
