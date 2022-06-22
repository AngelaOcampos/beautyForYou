
function sumarAlCarrito(servicio){
   
    if(carrito.includes(servicio)){
         alert("Servicio ya seleccionado, se permite solamente una vez")    
    }else{
        carrito.push(servicio);
        const liNuevoServicio = document.createElement("li")
              liNuevoServicio.className = "border border-light"
              liNuevoServicio.innerHTML = `<strong>Servicio</strong>: ${servicio.tratamiento} <strong>Precio</strong>: ${servicio.precio}`
              liNuevoServicio.id = servicio.tratamiento + "EnCarrito"
              liNuevoServicio.addEventListener("dblclick", ()=> quitarDelCarrito(servicio)) 
              listadoCarrito.append(liNuevoServicio)
    }
}

function quitarDelCarrito(servicio){
    if(carrito.includes(servicio)){
        const idServicio = servicio.tratamiento + "EnCarrito"
        const productoAremover = document.getElementById(idServicio)
        productoAremover.remove()
        carrito.splice(carrito.indexOf(servicio),1)
    } else { 
        alert ("El servicio no se encuentra en el carrito")
    }
}

function verTotalCarrito(){
    const valoresCarrito =[];
    carrito.forEach((servicio) => {
        valoresCarrito.push(servicio.precio);
    } )
    const total = valoresCarrito.reduce((acumulador, valor) => acumulador + valor, 0)
    
    return total;
}

function listarCarrito(){
    console.table(carrito);
}

botonReservar.addEventListener("click", terminarReserva);

function terminarReserva(){

    if(verTotalCarrito() == 0){
        alert("Aún no agregaste nada al carrito") 
    } 
    else {
        if (confirm("El total sería de " + verTotalCarrito() + " ¿Listo para finalizar tu reserva?")){
        while (carrito.length > 0){
            quitarDelCarrito(carrito[0]);
        }
        console.log("'Tu reserva a sido un éxito, nos comunicaremos en la brevedad!") 
    }else {
        console.log ("Puede continuar reservando")
    }
}}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){
    if(carrito.length > 0){
        while (carrito.length > 0){
            quitarDelCarrito(carrito[0]);
        }
    }
    else { 
        alert ("El carrito ya se encuentra vacio")
    }
}