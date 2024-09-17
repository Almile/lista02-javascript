// 8. Criando Novos Arrays a Partir de Objetos

let filmes = [
    { titulo: 'Inception', diretor: 'Christopher Nolan', anoLancamento: 2010 },
    { titulo: 'The Matrix', diretor: 'Wachowskis', anoLancamento: 1999 }
  ];
  
  let titulos = [];
  filmes.forEach(filme => {
    titulos.push(filme.titulo);
  });
  
  console.log(titulos);
  