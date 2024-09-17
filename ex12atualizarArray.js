// 12. Atualizando um Array de Objetos

let estoque = [
    { produto: 'Camisa', quantidade: 5, minimo: 10 },
    { produto: 'Calça', quantidade: 8, minimo: 10 }
  ];
  
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2;
    }
  });
  
  console.log(estoque);
  