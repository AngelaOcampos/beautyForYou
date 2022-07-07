carritoJson = JSON.parse(localStorage.getItem('carrito'))

for(let servicio of carritoJson){

    carrito.push( new Servicio(servicio.tratamiento, servicio.precio))
}

btnManicuria.addEventListener("click" , ()=> sumarAlCarritoEInformar(manicuria));
btnPeelingQuimico.addEventListener("click" , ()=> sumarAlCarritoEInformar(peelingQuimico));
btnAlisado.addEventListener("click" , ()=> sumarAlCarritoEInformar(alisado));
btnPedicuria.addEventListener("click" , ()=> sumarAlCarritoEInformar(pedicuria));
btnLimpiezaFacial.addEventListener("click" , ()=> sumarAlCarritoEInformar(limpiezaFacial));
btnBotox.addEventListener("click" , ()=> sumarAlCarritoEInformar(botox));
