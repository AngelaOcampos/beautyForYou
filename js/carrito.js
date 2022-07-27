descargarCarritoDeLocalStorage();

// añade el contenido del carrito al Html
for(let i = 0; i < carrito.length; i++){
    cargarCarrito(carrito[i]);
}

// para calcular el valor total del carrito 
textoTotalCarrito.innerText = "Total: " + verTotalCarrito() || "carrito vacío"

// botones para carrito.html
botonReservar.addEventListener("click", ()=> terminarReserva())
botonVaciar.addEventListener("click", ()=> vaciarCarrito())

