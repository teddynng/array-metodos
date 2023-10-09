/*
.find()
Usamos esse método quando queremos encontrar algum elemento dentro no Array. 
Para isso, passamos uma função que irá retornar true ou false. 
O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.
*/


const numeros = [1, 3, 5, 4, 7, 8, 9];
const primeiroPar = numeros.find(function(numero) {
  return numero % 2 === 0;
});

console.log(primeiroPar); // resultado: 4

//find() é usado para encontrar o primeiro número par no array numeros.

// ---------------------------------------------------------------------------------------------------------------------------------------------

const pessoas = [
    { nome: 'Alice', idade: 30 },
    { nome: 'Bob', idade: 25 },
    { nome: 'Carol', idade: 35 }
  ];
  
  const pessoa = pessoas.find(function(p) {
    return p.nome === 'Bob';
  });
  
  console.log(pessoa); // resultado: { nome: 'Bob', idade: 25 }
  
//find() é usado para encontrar um objeto no array pessoas com a propriedade nome igual a "Bob".

// ---------------------------------------------------------------------------------------------------------------------------------------------

const numeros = [10, 20, 30, 40, 50];
const valorAlvo = 25;

const primeiroMaior = numeros.find(function(numero) {
  return numero > valorAlvo;
});

console.log(primeiroMaior); // Saída: 30

//find() é usado para encontrar o primeiro elemento no array numeros que seja maior que o valorAlvo.

// ---------------------------------------------------------------------------------------------------------------------------------------------
