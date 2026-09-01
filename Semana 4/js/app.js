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

const botonPromocion = document.getElementById("boton-promocion");
const promocion =document.getElementById("promocion");

//botonPromocion.addEventListener("click",function(){
//    promocion.classList.remove("d-none");
//});

botonPromocion.addEventListener("click",function(){
    promocion.classList.toggle("d-none");

    if(promocion.classList.contains("d-none")){
        botonPromocion.textContent="Mostrar Promoción";
    }
    else{
        botonPromocion.textContent="Ocultar Promoción";
    }

});

const bontonesAgregar =document.querySelectorAll(".boton-agregar");
const contador = document.getElementById("contador-productos");
const ultimoProducto = document.getElementById("ultimo-producto");

let cantidadProductos = 0;

bontonesAgregar.forEach(function(boton){
    boton.addEventListener("click",function(){
        const nombreProducto =boton.dataset.producto;
        //console.log("Producto Seleccionado: "+ nombreProducto);

        cantidadProductos=cantidadProductos +1

        contador.textContent=cantidadProductos;

        ultimoProducto.textContent =nombreProducto+" fue agregado correctamente";

    });
});

// ***** uso de formularios ******
//rescatar los datos 
const formulario = document.getElementById("formulario-reserva");
const campoNombre = document.getElementById("nombre");
const campoCorreo = document.getElementById("correo");
const campoPersonas = document.getElementById("personas");
const campoFecha = document.getElementById("fecha");
const campoHorario = document.getElementById("horario");
const mensajeResultado = document.getElementById("mensaje-resultado");

formulario.addEventListener("submit",function(evento){
    evento.preventDefault();

    const nombre = campoNombre.value.trim();
    const correo = campoCorreo.value.trim();
    const personas = Number(campoPersonas.value);
    const fecha = campoFecha.value;
    const horario = campoHorario.value;

    //validar
    if(
        nombre === "" ||
        correo === "" ||
        fecha === "" ||
        horario === ""

    ){
        mensajeResultado.textContent = "Debe completar todos los campos";

        mensajeResultado.className = "alert alert-danger mt-4";

        return;
    }

    if (personas < 1 || personas > 10){
        mensajeResultado.textContent = "La reseva debe ser entre 1 y 10 personas";

        mensajeResultado.className = "alert alert-danger mt-4";

        return;
    }

    mensajeResultado.textContent = 
    "Reserva cofirmada para" + nombre + " el dia " + fecha +" a las "+horario +" para "+personas + " persona(s)";

    mensajeResultado.className = "alert alert-success mt-4";

    formulario.reset();

});






