// 2. Verificando Propriedades

let livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1954,
    genero: 'Fantasia'
};
  
if (!('editora' in livro)) {
  livro.editora = 'HarperCollins';
}
  
console.log(livro);
  
