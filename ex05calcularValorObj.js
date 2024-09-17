//5. Calculando Valores em Arrays de Objetos

let alunos = [
    { nome: 'Ana', nota1: 8, nota2: 7 },
    { nome: 'Carlos', nota1: 7, nota2: 4 },
    { nome: 'Felix', nota1: 10, nota2: 10 }
  ];
  
  for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`${aluno.nome} - Média: ${media}`);
  }
  