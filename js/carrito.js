carritoJson = JSON.parse(localStorage.getItem('carrito'))

for(let servicio of carritoJson){

    carrito.push( new Servicio(servicio.tratamiento, servicio.precio))
}

for(let i=0; i < carrito.length;i++){

    cargarCarrito(carrito[i]);
}

textoTotalCarrito.innerText = "Total: $" + verTotalCarrito();

botonReservar.addEventListener("click", ()=> terminarReserva())
botonVaciar.addEventListener("click", ()=> vaciarCarrito())