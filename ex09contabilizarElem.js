// 9. Contabilizando Elementos com uma Condição

let clientes = [
    { nome: 'João', idade: 35, cidade: 'São Paulo' },
    { nome: 'Maria', idade: 25, cidade: 'Rio de Janeiro' }
];
  
let contador = 0;
clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contador++;
    }
});

console.log(`Clientes com mais de 30 anos: ${contador}`);
