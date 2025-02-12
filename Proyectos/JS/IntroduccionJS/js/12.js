// Object Methods en JavaScript
"use strict"; // modo estricto de JS

const usuario = {
  nombre: "jorge",
  edad: 38,
  empleo: false
};

// congelamos un objeto para evitar sea modificado.
Object.freeze(usuario);
// congela el objeto con la diferencia de que si permite modificar los valores existentes.
Object.seal(usuario);
// console.log(Object.isFrozen(usuario));
