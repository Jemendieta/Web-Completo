// Arreglos en JavaScript
// Forma estandar de crear arreglos
const numeros = [1,2,3,4,5,6,7,8];

// console.table(numeros);

const letras = new Array('a','b','c','d');

// console.log(letras);

// Acceder a los valores de una arreglo
// console.log(numeros[4]);

// Conocer la extensión de un arreglo
// console.log(numeros.length);

// Iterar los elementos de una arreglo
 letras.forEach(function(letra){
  //  console.log(letra);
 })

//  Métodos de los Arrays

numeros.push(9); //agrega el elemento al final
numeros.push(9,10,11); //agrega elementos al final

numeros.unshift(0); //agrega elementos al inicio

numeros.pop(); //elimina el último elemento
numeros.shift(); //elimina el primer elemento

numeros.splice(2,1); //  el primer valor es el elemento a aliminar y el segundo la cantidad de elementos a eliminar.

console.table(numeros);

// usando spread operator

const nuevaLetra = [...letras, "e"];
console.table(nuevaLetra);