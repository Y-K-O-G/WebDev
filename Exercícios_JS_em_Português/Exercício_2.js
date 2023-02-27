function tempoAteOs90(idade) {
 
    var diasTotais = 365 * 90;
    var semanasTotais = 52 * 90;
    var mesesTotais = 12 * 90;
    var diasRestantes = diasTotais - (idade * 365);
    var semanasRestantes = semanasTotais - (idade * 52);
    var mesesRestantes = mesesTotais - (idade * 12);
    alert("Você tem " + diasTotais + " dias, " + semanasTotais + " semanas, e " + mesesTotais + " meses restantes até os 90 anos.");
}

tempoAteOs90(prompt ("Qual é a tua idade?"));  
