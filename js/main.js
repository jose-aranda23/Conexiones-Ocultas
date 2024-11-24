const imagenes = document.getElementsByClassName("pokebola");

let fotos = [
  "img/darkrai.jpeg",
  "img/dewot.jpeg",
  "img/dialga.jpeg",
  "img/gyarados.jpeg",
  "img/picahu.jpeg",
  "img/rowlet.png",
  "img/sylveon.jpeg",
  "img/zeroara.jpg",
  "img/darkrai.jpeg",
  "img/dewot.jpeg",
  "img/dialga.jpeg",
  "img/gyarados.jpeg",
  "img/picahu.jpeg",
  "img/rowlet.png",
  "img/sylveon.jpeg",
  "img/zeroara.jpg",
];

fotos = fotos.sort(() => Math.random() - 0.5);
console.log(fotos);

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].setAttribute("id-unico", i);
  imagenes[i].addEventListener("click", cambio);
}

let fotoClick = [];
let primeraImagen, segundaImagen;
let parejasEncontradas = 0;
let totalParejas = 8;

function cambio(event) {
  const unico = event.target.getAttribute("id-unico");
  event.target.src = fotos[unico];
  fotoClick.push(fotos[unico]);

  if (fotoClick.length === 1) {
    primeraImagen = event.target;
  } else if (fotoClick.length === 2) {
    segundaImagen = event.target;
    if (fotoClick[0] === fotoClick[1]) {
      console.log("Pareja encontrada");
      parejasEncontradas++;
      actualizarPuntaje();
    } else {
      setTimeout(ocultarImagenes, 1000);
    }
    fotoClick = [];
  }

  console.log(fotoClick);
}

function ocultarImagenes() {
  primeraImagen.src = "img/pokebola.jpg";
  segundaImagen.src = "img/pokebola.jpg";
  primeraImagen = null;
  segundaImagen = null;
}

function actualizarPuntaje() {
  document.getElementById("parejas-encontradas").innerText = parejasEncontradas;
  document.getElementById("parejas-faltantes").innerText =
    totalParejas - parejasEncontradas;
}

function reiniciarJuego() {
  parejasEncontradas = 0;
  actualizarPuntaje();
  fotoClick = [];
  primeraImagen = null;
  segundaImagen = null;
  fotos = fotos.sort(() => Math.random() - 0.5);

  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].src = "img/pokebola.jpg";
    imagenes[i].addEventListener("click", cambio);
  }

  console.log("Juego reiniciado");
}
