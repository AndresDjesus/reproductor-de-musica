const { application } = require("express");

const tituloCancion = document.querySelector('.reproductor-musica h1');  
const nombreArtista = document.querySelector('.reproductor-musica p');
const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');
const botonAtras = document.querySelector('.controles button.atras');  
const botonAdelante = document.querySelector('.controles button.adelante');
const iconoControl = document.getElementById('icono-control');
const botonReproducirPausar = document.querySelector('.controles button.boton-reproducir-pausar');

const canciones = [
    {
        titulo: 'A Year Ago ',
        nombre: 'NEFFEX',
        fuente: 'music/A Year Ago - NEFFEX.mp3'
    },
    {
        titulo: 'As You Fade Away ',
        nombre: 'NEFFEX',
        fuente: 'music/As You Fade Away - NEFFEX.mp3'
    },
    {
        titulo: 'Catch Me If I Fall ',
        nombre: 'NEFFEX',
        fuente: 'music/Catch Me If I Fall - NEFFEX.mp3'
    },
    {
        titulo: 'Chasing ',
        nombre: 'NEFFEX',
        fuente: 'music/Chasing - NEFFEX.mp3'
    },
    {
        titulo: 'Play Dead ',
        nombre: 'NEFFEX',
        fuente: 'music/Play Dead - NEFFEX.mp3'
    },

];

let indiceCancionActual = 0;

function actualizarInfoCacion() {
    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    nombreArtista.textContent = canciones[indiceCancionActual].nombre;
    cancion.src = canciones[indiceCancionActual].fuente;
    cancion.addEventListener('loadeddata', function(){});
};

botonReproducirPausar.addEventListener('click',reproducirPausar);

function reproducirPausar() {
    if (cancion.paused) {
      
    } else {
       
    }
}


actualizarInfoCacion();