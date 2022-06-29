carritoJson = JSON.parse(localStorage.getItem('carrito'))

for(let servicio of carritoJson){

    carrito.push( new Servicio(servicio.tratamiento, servicio.precio))
}

btnManicuria.addEventListener("click" , ()=> sumarAlCarrito(manicuria));
btnPeelingQuimico.addEventListener("click" , ()=> sumarAlCarrito(peelingQuimico));
btnAlisado.addEventListener("click" , ()=> sumarAlCarrito(alisado));
btnPedicuria.addEventListener("click" , ()=> sumarAlCarrito(pedicuria));
btnLimpiezaFacial.addEventListener("click" , ()=> sumarAlCarrito(limpiezaFacial));
btnBotox.addEventListener("click" , ()=> sumarAlCarrito(botox));
