// haciendo uso de return
function sumar(n1, n2) {
  return n1 + n2;
}
// ahora asignamos la función a una variable
const resultado = sumar(2, 3);
console.log(resultado);

// Ejemplo 2

let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}

function impuesto(total) {
  return 1.5 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);
console.log(total);

const totalPago = impuesto(total);
console.log(`El total a pagar con impuesto es: $${totalPago}`);
