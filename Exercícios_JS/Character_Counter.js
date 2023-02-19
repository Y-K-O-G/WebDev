//Um contador de caracteres feito com os comandos "prompt" e "alert" feito no Dev Tools do Chrome.

var message = prompt("Digite a sua mensagem");
alert("Você digitou " + message.length + " caracteres. Você tem " + (280-message.length) + " caracteres restantes.");
