const nome: string = 'Micahel Douglas';

let nota1: number = 7;
let nota2: number = 8;
let nota3: number = 5;
let media: number = (nota1 + nota2 + nota3)/3;

let frequencia: number = 85;
let reprovaPorFalta: boolean;

if (frequencia < 75 ) {
    console.log(nome + 'foi Reprovado por falta')
} else {
    if (media >= 7) {
        console.log("Aprovado");
    } else if (media >= 5 && media <= 6.9) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }    
}