//Um jogo simples de Jokenpo (também conhecido como "Pedra, papel ou tesoura").

function jokenpo() {
    
    var jogador = prompt('Escolha "Pedra", "Papel" ou "Tesoura".').toLowerCase();
    var cpu = Math.floor(Math.random() * 3);

    var pedra = "    _______\n---'   ____)\n      (_____)\n      (_____)\n      (____)\n---.__(___)";
    var papel = "     _______\n---'    ____)____\n           ______)\n          _______)\n         _______)\n---.__________)";
    var tesoura = "    _______\n---'   ____)____\n          ______)\n       __________)\n      (____)\n---.__(___)";
        
    
    if(jogador == "pedra") {
        alert(pedra);
    } else if(jogador == "papel"){
        alert(papel);
    } else if(jogador == "tesoura") {
        alert(tesoura);
    } else {
        alert("Essa não é uma opção válida.")
        return jokenpo();
    }

    if(cpu == 0) {
        alert(pedra);
    } else if(cpu == 1){
        alert(papel);
    } else if(cpu == 2) {
        alert(tesoura);
    }

    if(jogador == "pedra" && cpu == 0 || jogador == "papel" && cpu == 1 || jogador == "tesoura" && cpu == 2) {
        alert("É um empate.");
        var jogarNovamente = confirm("Você quer jogar novamente?");
        if(jogarNovamente == true){
            return jokenpo();
        } else {
            alert("Fim de jogo.");
        }
    } else if(jogador == "pedra" && cpu == 1 || jogador == "papel" && cpu == 2 || jogador == "tesoura" && cpu == 0) {
        alert("Você perdeu.");
        var jogarNovamente = confirm("Você quer jogar novamente?");
        if(jogarNovamente == true){
            return jokenpo();
        } else {
            alert("Fim de jogo.");
        } 
    } else if(jogador == "pedra" && cpu == 2 || jogador == "papel" && cpu == 0 || jogador == "tesoura" && cpu == 1) {
        alert("Você ganhou.");
        var jogarNovamente = confirm("Você quer jogar novamente?");
        if(jogarNovamente == true){
            return jokenpo();
        } else {
            alert("Fim de jogo.");
        }
    }
}

jokenpo();
