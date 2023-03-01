//Um exercício sobre arrays que checa se o usuário está em uma lista pré-definida de convidados.

var ListaConv = ["Angela" , "Jack" , "Pam" , "James", "Lara" , "Jason"];

var nomeConv = prompt("Qual é o teu nome?");

var checarNome = nomeConv.slice(0, 1).toUpperCase() + nomeConv.slice(1, nomeConv.lenght).toLowerCase();

if(ListaConv.includes(checarNome)){
    alert("Bem vindo à festa, " + checarNome + "!!!")
} else {
    alert("Desculpe, " + checarNome + ", mas você não foi convidado.")
}
