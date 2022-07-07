descargarCarritoDeLocalStorage();

for(let i = 0; i < carrito.length; i++){
    cargarCarrito(carrito[i]);
}

textoTotalCarrito.innerText = "Total: " + verTotalCarrito() || "carrito vacío"

botonReservar.addEventListener("click", ()=> terminarReserva())
botonVaciar.addEventListener("click", ()=> vaciarCarrito())

