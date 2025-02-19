// Funciones con parámetros

function sumar(numero1, numero2) {
  //par+ametros
  console.log(numero1 + numero2);
}

sumar(3, 6); //Argumentos
sumar(3, 5); //Argumentos
sumar(3, 4); //Argumentos
sumar(3, 3); //Argumentos

// Funciones con parámetros por default

const saludo = function (nombre = "Jorge Mendieta") {
  console.log("Hola " + nombre);
};
saludo();
