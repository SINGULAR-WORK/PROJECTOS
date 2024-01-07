function toggleContenido() {
    var contenido = document.getElementById('menu-desplegable');
    var iconoMenu = document.getElementById('icono-menu');

    if (contenido.style.maxHeight === '0px' || contenido.style.maxHeight === '') {
        contenido.style.display = 'block';
        iconoMenu.classList.add('rotar');
        contenido.style.maxHeight = contenido.scrollHeight + 'px';
    } else {
        iconoMenu.classList.remove('rotar');
        contenido.style.maxHeight = '0px';
        setTimeout(function () {
            contenido.style.display = 'none';
        }, 300); 
    }
}


  // Coordenadas del centro del mapa
  var ubicacion = [51.505, -0.09];

  // Crea un mapa en el contenedor con ID 'mapa'
  var mapa = L.map('mapa').setView(ubicacion, 13);

  // Añade una capa de mapa (puedes explorar otras opciones de capas)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(mapa);

  // Añade un marcador en el centro del mapa
  L.marker(ubicacion).addTo(mapa)
    .bindPopup('¡Hola! Este es tu mapa.');
