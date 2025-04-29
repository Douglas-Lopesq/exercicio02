const aluno = {
    nome: "Maria",
    idade: 21,
    curso: "Análise e Desenvolvimento de Sistemas"
};
  
for (const chave in aluno) {
    if (Object.prototype.hasOwnProperty.call(aluno, chave)) {
        console.log(`${chave}: ${aluno[chave as keyof typeof aluno]}`);
    }
}
  