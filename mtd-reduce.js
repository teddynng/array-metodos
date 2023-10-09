/* reduce() permite reduzir (ou acumular) todos os elementos de um array em um único valor, aplicando uma função de redução a cada elemento. 
O resultado acumulado é retornado como o valor final.
Especialmente útil quando você precisa realizar operações complexas em um array e obter um valor agregado.
*/

const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce(function(acumulador, elemento) {
  return acumulador + elemento;
}, 0);

console.log(soma); // Saída: 15

// reduce() para somar todos os elementos do array numeros. O 0 passado como segundo argumento é o valor inicial do acumulador.

// ---------------------------------------------------------------------------------------------------------------------------------------------

const palavras = ['Olá', ' ', 'Mundo', '!'];
const frase = palavras.reduce(function(acumulador, palavra) {
  return acumulador + palavra;
}, '');

console.log(frase); // Saída: 'Olá Mundo!'

// reduce() para concatenar todas as strings do array palavras em uma única frase. A string vazia '' é usada como valor inicial do acumulador.

// ---------------------------------------------------------------------------------------------------------------------------------------------

const numeros = [8, 12, 4, 21, 6];
const maximo = numeros.reduce(function(acumulador, numero) {
  return Math.max(acumulador, numero);
});

console.log(maximo); // Saída: 21

// reduce() para encontrar o valor máximo no array de números numeros. A função Math.max() é usada para comparar os valores e encontrar o máximo.


