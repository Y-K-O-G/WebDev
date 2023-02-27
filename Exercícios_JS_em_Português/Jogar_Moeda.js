//Um código que joga uma moeda e diz ao usuário se deu "Cara" ou "Coroa".

function jogarMoeda() {
    let moeda = Math.floor(Math.random() * 2);
    if(moeda == 0) {
        alert("Cara")
        var JogarNovamente =confirm("Você quer jogar a moeda novamente?");
        if(JogarNovamente == true) {
            return jogarMoeda();
        } else {
            alert("A moeda foi destruida!");
        }
    } else {
        alert("Coroa")
        var JogarNovamente =confirm("Você quer jogar a moeda novamente?");
        if(JogarNovamente == true) {
            return jogarMoeda();
        } else {
            alert("A moeda foi destruida!");
        }
    }
}

var comecar = confirm("Você quer jogar uma moeda?");

if(comecar == true) {
    jogarMoeda();
} else {
    alert("Então o que você veio fazer aqui?");
}
