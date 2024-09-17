# 🛠️ **Exercícios de Manipulação de Objetos e Arrays em JavaScript**

Seja bem-vindo(a) ao repositório que contém uma coleção de **exercícios práticos** voltados para a **manipulação de objetos e arrays em JavaScript**, acompanhadas de instruções para configurar e executar cada exercício localmente.

## 🚀 **Sobre o Repositório**

Este projeto contém **15 exercícios** que abordam desde o básico da manipulação de objetos até o uso de arrays de objetos e estruturas mais complexas.

## 📋 **Exercícios**
**1. Acessando Propriedades de Objetos**
- Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.
  
**2. Verificando Propriedades**
- Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
  
**3. Filtrando Propriedades de Objetos**
- Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.
  
**4. Iterando Sobre Arrays de Objetos**
- Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.

**5. Calculando Valores em Arrays de Objetos**
- Objetivo: Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.

**6. Filtrando Arrays de Objetos**
- Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

**7. Modificando Objetos em um**
- Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.

**8. Criando Novos Arrays a Partir de Objetos**
- Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.

**9. Contabilizando Elementos com uma Condição**
- Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.

**10. Criando Relatórios com Objetos e Arrays**
- Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.
  
**11. Agrupando Elementos com forEach**
- Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.
  
**12. Atualizando um Array de Objetos**
- Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

**13. Implementando um Carrinho de Compras**
- Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.

**14. Manipulando Objetos Complexos**
- Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

**15. Filtrando e Somando Valores**
- Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.


## 🔧 **Como Configurar e Executar os Exercícios Localmente**

Siga as instruções abaixo para configurar o ambiente e rodar os exercícios em sua máquina local:

### **Pré-requisitos**

- **Node.js** instalado (recomendado: versão LTS mais recente)
- Um editor de texto ou IDE de sua preferência (recomendado: **VS Code**)
  
### **Passo a Passo**

1. **Clone o Repositório**
   
   Primeiro, clone este repositório no seu ambiente local:
   ```bash
   git clone https://github.com/Almile/lista02-javascript.git
   ```

2. **Acesse a Pasta do Projeto**
   
   Navegue até a pasta que contém o projeto:
   ```bash
   cd lista02-javascript

   ```

3. **Instale o Node.js (opcional)**
   
   Se você quiser usar o **Node.js** para rodar os exercícios no terminal, certifique-se de que o Node está instalado corretamente executando:
   ```bash
   node -v
   ```

4. **Execute os Exercícios**
   
   Para rodar um exercício específico, abra o arquivo correspondente e execute o comando abaixo no terminal:
   ```bash
   node nome-do-exercicio.js
   ```
   **Exemplo**: Para rodar o exercício 1:
   ```bash
   node ex01acessarObjeto.js
   ```

