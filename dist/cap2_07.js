"use strict";
const nome = 'Micahel Douglas';
let nota1 = 7;
let nota2 = 8;
let nota3 = 5;
let media = (nota1 + nota2 + nota3) / 3;
let frequencia = 85;
let reprovaPorFalta;
if (frequencia < 75) {
    console.log(nome + 'foi Reprovado por falta');
}
else {
    if (media >= 7) {
        console.log("Aprovado");
    }
    else if (media >= 5 && media <= 6.9) {
        console.log("Recuperação");
    }
    else {
        console.log("Reprovado");
    }
}
