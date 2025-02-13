// Más métodos de Arrays

// includes(): usado para arreglos planos

const letras = new Array("a", "b", "c", "d", "e");

const letra = letras.includes("a");
console.log(letra);

// arreglo de objetos y metodo some(): recomendado apra arreglos de objetos

const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 45 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Auriculares", precio: 60 },
  { nombre: "Impresora", precio: 150 },
];

let producto = productos.some(function (equipo) {
  return equipo.nombre === "Laptop";
});

console.log(producto); // devuelve true

// Usando arrows functions
let verProducto = productos.some((equipo) => equipo.nombre === "Laptop");

console.log(verProducto); //devuelve true

// Usando método reduce():

let sumarPrecio = productos.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);

console.log(sumarPrecio);

// Usando método filter() nos permite filtrar uno o varios elementos de un arreglo
let filtrado = productos.filter(function (producto) {
  return producto.precio > 100;
});
console.log(filtrado);
