// 11. Agrupando Elementos com forEach

let pedidos = [
    { cliente: 'João', produto: 'Camisa', quantidade: 2 },
    { cliente: 'Maria', produto: 'Calça', quantidade: 1 }
  ];
  
  let agrupamento = {};
  
  pedidos.forEach(pedido => {
    if (!agrupamento[pedido.cliente]) {
      agrupamento[pedido.cliente] = 0;
    }
    agrupamento[pedido.cliente] += pedido.quantidade;
  });
  
  console.log(agrupamento);
  