// Inicializar el mapa centrado en Las Mercedes, Caracas, Venezuela
let map = L.map('map').setView([10.488, -66.852], 10);

// Añadir las capas del mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añadir un marcador en Las Mercedes
L.marker([10.488, -66.852]).addTo(map)
    .bindPopup('Las Mercedes, Caracas, Venezuela')
    .openPopup();