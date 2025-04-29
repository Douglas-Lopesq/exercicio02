"use strict";
let linguagem;
const variavel = 2;
switch (variavel) {
    case 1:
        linguagem = 'TypeScript';
        break;
    case 2:
        linguagem = 'JavaScript';
        break;
    case 3:
        linguagem = 'Python';
        break;
    default:
        linguagem = 'Linguagem Não cadastrada';
}
console.log(linguagem);
