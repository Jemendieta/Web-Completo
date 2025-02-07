// Números y Operadores
const num1 = 100;
const num2 = 200;

console.log(num1);

// podemos llevar a cabo operaciones básica con números
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
// (%) módulo nos permire obtener el residuo de una operación
console.log(num1 % num2); 

// El objeto Math
let resultado;
resultado = Math.PI;
resultado = Math.round(3.141516); //Redondea
resultado = Math.ceil(3.15); //Hacia arriba
resultado = Math.floor(3.6); //Hacia abajo

resultado = Math.sqrt(4); //raíz cuadrada
resultado = Math.abs(-4); //negativo a positivo
resultado = Math.min(4,3,5,6,3,2,-1); // mínumo número.
resultado = Math.max(4,3,5,6,3,2,-1); // máximo número.
resultado = Math.random(); // número aleatorio.
resultado = Math.floor(Math.random()*10); // número aleatorio.
console.log(Math.random() * 10); //eleatorio entre 0 y 10.


console.log(resultado)