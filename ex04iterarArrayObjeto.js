// 4. Iterando Sobre Arrays de Objetos

let pessoas = [
    { nome: 'João', idade: 25, cidade: 'São Paulo' },
    { nome: 'Maria', idade: 30, cidade: 'Rio de Janeiro' },
    { nome: 'Pedro', idade: 35, cidade: 'Belo Horizonte' }
  ];
  
  for (let pessoa of pessoas) {
    console.log(`${pessoa.nome}, ${pessoa.idade} anos, mora em ${pessoa.cidade}`);
  }
  