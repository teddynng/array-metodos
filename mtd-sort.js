/*sort() é usada para ordenar os elementos de um array com base em uma função de comparação ou por padrão, como strings Unicode.
O método sort() altera o array original e não cria um novo array ordenado.
*/

const numeros = [4, 2, 8, 6, 1, 9, 3];
numeros.sort(function(a, b) {
  return a - b;
});

console.log(numeros); // Saída: [1, 2, 3, 4, 6, 8, 9]

// sort() com uma função de comparação que subtrai a de b para ordenar os números em ordem crescente.

// ---------------------------------------------------------------------------------------------------------------------------------------------

const nomes = ['Maria', 'João', 'Ana', 'Pedro', 'Carla'];
nomes.sort();

console.log(nomes); // Saída: ['Ana', 'Carla', 'João', 'Maria', 'Pedro']

// sort() sem uma função de comparação. Isso fará com que as strings sejam ordenadas em ordem alfabética (em ordem Unicode).

// ---------------------------------------------------------------------------------------------------------------------------------------------

const pessoas = [
    { nome: 'Alice', idade: 30 },
    { nome: 'Bob', idade: 25 },
    { nome: 'Carol', idade: 35 }
  ];
  
  pessoas.sort(function(a, b) {
    return a.idade - b.idade;
  });
  
  console.log(pessoas);
  // Saída:
  // [
  //   { nome: 'Bob', idade: 25 },
  //   { nome: 'Alice', idade: 30 },
  //   { nome: 'Carol', idade: 35 }
  // ]
  
  //sort() com uma função de comparação que compara as idades das pessoas para ordenar o array de objetos pessoas com base nas idades.