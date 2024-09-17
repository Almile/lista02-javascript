// 6. Filtrando Arrays de Objetos

let funcionarios = [
    { nome: 'José', cargo: 'Gerente', salario: 5000 },
    { nome: 'Paula', cargo: 'Analista', salario: 3000 }
  ];
  
  let salarioMinimo = 4000;
  for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
      console.log(funcionario.nome);
    }
  }
  