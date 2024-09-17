// 14. Manipulando Objetos Complexos

let empresa = {
    departamentos: [
      { nome: 'RH', funcionarios: ['Felix', 'Maria'] },
      { nome: 'TI', funcionarios: ['Carlos', 'Ana'] }
    ]
  };
  
  for (let depto of empresa.departamentos) {
    for (let func of depto.funcionarios) {
      console.log(`${func} trabalha no departamento de ${depto.nome}`);
    }
  }
  