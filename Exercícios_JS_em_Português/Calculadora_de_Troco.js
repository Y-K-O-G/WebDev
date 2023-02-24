/*Primeira parte do que planejo ser um caixa de super mercado que informa ao usuário tudo o que está comprando, valor total e troco.
Esta primeira versão processa apenas várias quantidades de um mesmo produto, mas a próxima versão usará array para armazenar o valor
de vários produtos e terá a opção "cancelar compra".*/

function compra() {

    let precoDoProduto = parseFloat(prompt("Qual o preço do produto que você está comprando?"))
    let preco = precoDoProduto + 0;
  
    if(isNaN(preco)) {
        alert("O preço deve ser um número.");
        return compra();
    } else {
        return preco;
    }
    
}

function quantos() {

    let quantosProdutos = parseFloat(prompt("Quantos deste mesmo produto você está comprando?"))
    let conta = quantosProdutos + 0;
  
    if(isNaN(conta)) {
        alert("A quantidade deste produto deve ser um número.");
        return quantos();
    } else {
        return conta;
    }
    
}

function pagamento() {

    let dinheiro = parseFloat(prompt("Quanto dinheiro você está usando para pagar?"))
    let dinheiroUtilizado = dinheiro + 0;
    
    if(isNaN(dinheiroUtilizado)) {
        alert("O valor do dinheiro deve ser um número.");
        return pagamento();
    } else if(dinheiroUtilizado < totalDoProduto) {
        alert("Esta quantidade de dinheiro não é suficiente para pagar por este produto.");
        return pagamento();
    } else {
        return dinheiroUtilizado;
    }
  
}

var compra = compra();

var quantos = quantos();

var totalDoProduto = compra * quantos;

var pagamento = pagamento();
    
var troco = pagamento - totalDoProduto;

function mercado() {
    alert("Seu troco é de "+ (Math.round(troco * 100) / 100) + " reais.");
}

mercado();
