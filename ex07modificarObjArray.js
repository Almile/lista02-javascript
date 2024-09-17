// 7. Modificando Objetos em um Array

let produtos = [
    { nome: 'Camisa', preco: 50.99, desconto: 0.1 },
    { nome: 'Calça', preco: 100.99, desconto: 0.1 }
  ];
  
  produtos.forEach(produto => {
    produto.preco = produto.preco - (produto.preco * produto.desconto);
    console.log(`${produto.nome} - Novo Preço: ${Math.floor(produto.preco)}`);
  });
  