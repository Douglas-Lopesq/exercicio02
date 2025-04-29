type Aluno = {
    nome: string;
    notas: number[];
};

function verificarAprovacao(alunos: Aluno[]): void {
    for (let i = 0; i < alunos.length; i++) {
        let media = 0;
        const aluno = alunos[i];

        for (let j = 0; j < aluno.notas.length; j++) {
            media += aluno.notas[j];
        }

        media /= aluno.notas.length;

        if (media >= 7) {
            console.log(`${aluno.nome} foi aprovado com média ${media.toFixed(2)}.`);
        } else {
            console.log(`${aluno.nome} foi reprovado com média ${media.toFixed(2)}.`);
        }
    }
}

const alunos: Aluno[] = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Bruno", notas: [5, 6, 5] },
    { nome: "Carlos", notas: [7, 7, 7] }
];

verificarAprovacao(alunos);
