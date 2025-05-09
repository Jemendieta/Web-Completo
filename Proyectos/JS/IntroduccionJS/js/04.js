// Cadenas de Texto o Strings
const producto = "monitor de 14 pulgadas";

// Creando strings usando el constructor
const productoDos = String("Monitor de 30 pulgadas");

// tercera forma de crear strings
const productoTres = new String("Monitor de 80 pulgadas");
// cuando usamos new Js lo reconoce como un objeto

// Si queremos colocar comillas dentro del string debemos escapar con una barra inclinada.
// o colocar comillas simples y comillas dobles luego
const productoCuatro = 'Monitor de 80"';
const productoCinco = 'Monitor de 70"';

console.log(typeof producto); //typeof nos permite saber el tipo de variable.
console.log(productoDos);
console.log(productoTres);
console.log(productoCuatro);
console.log(productoCinco);
