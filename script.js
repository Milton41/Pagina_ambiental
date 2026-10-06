// MENÚ PARA CELULAR

const botonMenu = document.getElementById("botonMenu");
const menu = document.querySelector(".menu");

botonMenu.addEventListener("click", function () {

    menu.classList.toggle("activo");

});


// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN

const enlaces = document.querySelectorAll(".menu a");

enlaces.forEach(function(enlace) {

    enlace.addEventListener("click", function() {

        menu.classList.remove("activo");

    });

});


// BOTÓN PLANTAR ÁRBOL

const botonBosque = document.getElementById("botonBosque");
const mensajeArbol = document.getElementById("mensajeArbol");

let arboles = 0;

botonBosque.addEventListener("click", function() {

    arboles++;

    if (arboles === 1) {

        mensajeArbol.innerHTML =
            "🌱 ¡Plantaste simbólicamente tu primer árbol!";

    } else {

        mensajeArbol.innerHTML =
            "🌳 Ya plantaste " + arboles + " árboles simbólicos.";

    }

});