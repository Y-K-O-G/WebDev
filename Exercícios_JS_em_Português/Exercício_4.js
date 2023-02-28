//Um código que diz ao usuário se determinado ano é ou não é bissexto.

function bissexto(ano) {
      
    if(isNaN(parseInt(ano)) == true) {
        alert("O ano deve ser um número.");
        return bissexto(prompt("Digite um ano."));
    } else {
        if (ano % 4 == 0) {
            if (ano % 100 == 0) {
                if (ano % 400 == 0) {
                    alert("É bissexto.");
                } else {
                    alert("Não é bissexto.");
                }
            } else {
                alert("É bissexto.");
            }
        } else {
            alert("Não é bissexto.");
        }
    }
}

bissexto(prompt("Digite um ano."));
