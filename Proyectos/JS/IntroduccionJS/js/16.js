// Funciones en JavaScript

//1 declaración de la función (inicia con la palabra function)
function sumar() {
  console.log(10 * 10);
}
// ahora llamamos a la función.
sumar();

//2 Expresión de la función (la función va dentro de una variable)
const sumarDos = function () {
  console.log(3 + 3);
};
sumarDos();

//3 IIFE (funciones que se llaman a si mismas)
(function () {
  console.log("Esto es una función");
})(); //este paréntesis hace que la función se ejecute sola
