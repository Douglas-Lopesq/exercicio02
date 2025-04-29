let i: number = 1;
let soma: number = 0;

while (i <= 20) {
    if (i % 2 === 0) {
        soma += i;
    }
    i++;
};

console.log('A soma dos números pares de 1 á 20 é: ' + soma);