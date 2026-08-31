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






