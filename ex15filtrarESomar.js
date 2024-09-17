// 15. Filtrando e Somando Valores

let transacoes = [
    { tipo: 'entrada', valor: 100 },
    { tipo: 'saida', valor: 50 }
  ];
  
  let saldo = 0;
  transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
      saldo += transacao.valor;
    } else {
      saldo -= transacao.valor;
    }
  });
  
  console.log(`Saldo final: ${saldo}`);
  