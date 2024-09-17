// 3. Filtrando Propriedades de Objetos

let produto = {
    nome: 'Smartphone',
    preco: 1500,
    garantia: 2,
    estoque: 30
  };
  
  function filtrarPropriedades(obj, valorFiltro) {
    let newObj = {};
    for (let prod in obj) {
      if (obj[prod] > valorFiltro) {
        newObj[prod] = obj[prod];
      }
    }
    return newObj;
  }
  
  console.log(filtrarPropriedades(produto, 1400));
  