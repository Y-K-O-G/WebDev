//Uma calculadora simples de Índice de Massa Corporal que informa ao usuário se ele está abaixo, acima ou no peso ideal para a sua altura.

function calculadoraIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return Math.round(imc);
}

var imc = calculadoraIMC(prompt("Qual o seu peso em quilogramas?"), prompt("Qual a sua autura em metros?"));

if (imc < 18.5) {
    alert("Seu IMC é " + imc + " então você está abaixo do peso.");
  } else if (imc >= 18.5 && imc <= 29.9) {
    alert("Seu IMC é " + imc + ", então você está no peso normal.");
  } else {
    alert("Seu IMC é " + imc + ", então você está no sobrepeso.");
  }
