console.log("JavaScript está funcionado!!")

const titulo = document.getElementById("titulo-sitio");
titulo.textContent = "Bienvenido a Café NANO";
console.log(titulo)

const botonBienvenida = document.getElementById("boton-bienvenida");
const mensajeBienvenida = document.getElementById("mensaje-bienvenida");

botonBienvenida.addEventListener("click",function() {
    //console.log("El usuario presionó el botón");
    mensajeBienvenida.textContent = "Bienvenido!!, esparamos que disfrutes nuestros productos";

    botonBienvenida.textContent = "Bienvenida mostrada"
});

