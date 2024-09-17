// 13. Implementando um Carrinho de Compras

let carrinho = {
    itens: [
      { nome: 'Camiseta', quantidade: 2, precoUnitario: 50 },
      { nome: 'Calça', quantidade: 1, precoUnitario: 100 }
    ]
  };
  
  let totalCarrinho = 0;
  carrinho.itens.forEach(item => {
    totalCarrinho += item.quantidade * item.precoUnitario;
  });
  
  console.log(`Total do carrinho: ${totalCarrinho}`);
  