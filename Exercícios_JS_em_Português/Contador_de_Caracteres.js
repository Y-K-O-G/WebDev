//Um contador de caracteres feito com os comandos "prompt" e "alert" feito no Dev Tools do Chrome.

var mensagem = prompt("Digite a sua mensagem");
alert("Você digitou " + mensagem.length + " caracteres. Você tem " + (280-mensagem.length) + " caracteres restantes.");
