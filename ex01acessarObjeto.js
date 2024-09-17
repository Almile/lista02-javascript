// 1. Acessando Propriedades de Objetos

let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    cor: 'Branco'
  };
  
  for (let car in carro) {
    console.log(`${car}: ${carro[car]}`);
  }
  