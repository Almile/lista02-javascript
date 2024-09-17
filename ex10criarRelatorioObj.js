// 10. Criando Relatórios com Objetos e Arrays

let vendas = [
    { produto: 'Camisa', quantidade: 2, valor: 50 },
    { produto: 'Calça', quantidade: 1, valor: 100 }
  ];
  
  let totalVendas = 0;
  vendas.forEach(venda => {
    totalVendas += venda.quantidade * venda.valor;
  });
  
  console.log(`Valor total das vendas: ${totalVendas}`);
  