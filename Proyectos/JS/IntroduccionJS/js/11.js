// creando varaibles a partir de las propiedades de un objeto.

const usuario = {
  nombre: "jorge",
  edad: 38,
  trabajando: false
};

// creando variables

const usuario_uno = usuario.nombre;
console.log(usuario_uno);

// Destructuring(sacar de una estrcutura) de Objetos

const {nombre, edad} = usuario;
console.log(nombre, edad);
