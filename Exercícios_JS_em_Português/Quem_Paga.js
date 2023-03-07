/*Um código simples que escolhe um nome aleatório em um array.*/

function quemPaga(nomes) {
    
    var pessoas = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var nomes = Math.random() * pessoas.length;
    return(pessoas[Math.trunc(nomes)] + " vai pagar o almoço hoje!");
      
}

alert(quemPaga());
