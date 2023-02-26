//Um código que simula dados gerando números aleatórios sob a especificação do usuário.

function dado() {
    
  var lados = prompt("Quantos lados os dados têm?");

  if(isNaN(lados + 0)) {
      
      alert("O número de lados deve ser um número.");
      return dado();
      
  } else if(lados < 3) {
      
      alert("Dados devem ter pelo menos 3 lados.");
      return dado();
      
  } else {
      
      for(i = 0; i < numeroDeDados; i++) {
      let numero = Math.floor(Math.random() * lados + 1);
      alert(numero);
      }
      
  }    
  
}

var numeroDeDados = jogarDado();

function jogarDado() {
  
  var quantos = parseInt(prompt("Quantos dados você quer jogar?"));
  
  if(isNaN(quantos + 0)) {
      
      alert("A quantidade de dados precisa ser um número.");
      return jogarDado();
      
  } else if(quantos < 1) {
      
      alert("Você precisa jogar pelo menos um dado.");
      return jogarDado();
      
  } else {
      
      return quantos;
      
  }
  
} 

dado();
