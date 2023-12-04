let frutas = [];
let laticinios = [];
let carnes = [];
let guloseimas = [];
let resposta = "sim";
let comida = "";
let categoria = 0;

while(resposta == "sim") {
    resposta = prompt("Você deseja adicionar um alimento a sua Lista de Compras? Responda sim ou não");
    
    if(resposta == "sim") {
        comida = prompt("Qual comida você deseja inserir? Escreva abaixo:");
        categoria = prompt("Em qual categoria este alimento se encaixa? 1-Frutas 2-Laticineos 3-Carnes 4- Guloseimas");

        if(categoria == "1") {
            frutas.push(comida);
        } else if(categoria == "2") {
            laticinios.push(comida);
        } else if(categoria == "3") {
            carnes.push(comida);
        } else if(categoria == "4") {
            guloseimas.push(comida);
        } else {
            alert("Você digitou uma opção inválida, tente novamente.");
        }
    } else if(resposta == "não") {
        alert("Lista de Compras:\n Frutas: " + frutas + "\n Laticínios: " + laticinios + "\n Carnes: " + carnes + "\n Guloseimas: " + guloseimas);
        break;
    } else {
        alert("Resposta inválida, enceraremos o programa.");
        break;
    }
}