// Objetos en JavaScript

const usuario = {
  nombre: "jorge",
  edad: 38,
  trabajando: false
};

console.log(usuario);

// Accediendo a nuestro objeto
console.log(usuario.nombre);
console.log(usuario.edad);
console.log(usuario.trabajando);

// Otra forma de acceder a nuestro objeto
console.log(usuario["edad"]);

// Cómo podemos modificar objetos?
// Agregando una propiedad
usuario.foto="foto.jpg"

console.log(usuario);

// Eliminando una propiedad
delete usuario.trabajando;

console.log(usuario);