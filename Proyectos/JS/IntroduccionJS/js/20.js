// Métodos de Propiedad
const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo canción con el Id: ${id}`);
  },
  pausar: function () {
    console.log("Pausando...");
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando playlist: ${nombre}`);
  },
  reproducirPlaylist: function (nombre) {
    console.log(`Reproduciendo playlist: ${nombre}`);
  },
};

reproductor.borrarCancion = function (id) {
  console.log(`Borrando la canción: ${id}`);
};

reproductor.reproducir(3840); //Reproduciendo...
reproductor.pausar(); //pausando...
reproductor.borrarCancion(20);
reproductor.crearPlaylist("Heavy metal");
reproductor.reproducirPlaylist("Heavy metal");
