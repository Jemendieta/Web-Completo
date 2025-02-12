// Unir Objetos : Spread Operator

const usuario = {
  nombre: "jorge",
  edad: 38,
  empleo: false
};

const area ={
  ubicacion: "sala",
  tamaño: "10 metros"
};

// uniendo dos objetos 

const nuevoUsuario ={...usuario, ...area};
console.log(nuevoUsuario);