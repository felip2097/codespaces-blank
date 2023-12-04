let disciplina = prompt("Qual disciplina você deseja cursar? Responda: 1- Front-End 2-Back-End");
let materia;
let especializacao = ["React", "Vue", "C#", "Java"];
let x = 0;
let resposta = 0;
let tecnologia;
let contador;

switch (disciplina) {
    case "1":
        materia = prompt("Qual matéria do Front-End você deseja aprender? Responda: 1-React 2-Vue");
        if (materia == "1") {
            x = 0;
        } else if (materia == "2") {
            x = 1;
        } else {
            alert("Você não digitou uma resposta válida. Por favor, digite 1 ou 2.");
        }
        break;

    case "2":
        materia = prompt("Qual matéria do Back-End você deseja aprender? Responda: 1-C# 2-Java");
        if (materia == "1") {
            x = 2;
        } else if (materia == "2") {
            x = 3;
        } else {
            alert("Você não digitou uma resposta válida. Por favor, digite 1 ou 2.");
        }
        break;

    default:
        alert("Você não digitou uma resposta válida.");
}

resposta = prompt("Você prefere se especializar em " + especializacao[x] + " ou se tornar um FullStack? Responda: 1 " + especializacao[x] + " ou 2-FullStack");

switch (resposta) {
    case "1":
        alert("Muito bem! Boa sorte com sua especialização em " + especializacao[x]);
        break;

    case "2":
        alert("Parabéns! Boa sorte na sua jornada como FullStack!");
        break;

    default:
        alert("Você não digitou uma resposta válida.");
}

while (contador != "0") {
    tecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Escreva abaixo:");
    alert("Muito bem! Continue assim! Boa sorte com " + tecnologia);
    contador = prompt("Tem mais alguma tecnologia? Digite 1- Continuar ou digite 0-Encerrar o programa");
}