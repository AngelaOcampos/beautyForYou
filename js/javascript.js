
function sumarAlCarrito(servicio){
    
    let incluidoEnCarrito;
    for(let objeto of carrito){
        if(servicio.tratamiento == objeto.tratamiento){
            incluidoEnCarrito = true;
        }
    }

    if(incluidoEnCarrito){
         alert("Servicio ya seleccionado, se permite solamente una vez")    
    }else{
        carrito.push(servicio);
        let carritoJson = JSON.stringify(carrito);
        localStorage.setItem("carrito", carritoJson);
        alert ("Se agrego " + servicio.tratamiento + " al carrrito")
    }
}

function cargarCarrito(servicio){
   
    const liNuevoServicio = document.createElement("li")
            liNuevoServicio.className = "border border-light"
            liNuevoServicio.innerHTML = `<strong>Servicio</strong>: ${servicio.tratamiento} <strong>Precio</strong>: ${servicio.precio}`
            liNuevoServicio.id = servicio.tratamiento + "EnCarrito"
            liNuevoServicio.addEventListener("dblclick", ()=> quitarDelCarrito(servicio)) 
            listadoCarrito.append(liNuevoServicio)
}

function quitarDelCarrito(servicio){

        carrito.splice(carrito.indexOf(servicio),1)
        let carritoJson = JSON.stringify(carrito);
        localStorage.setItem("carrito", carritoJson);
        
        const idServicio = servicio.tratamiento + "EnCarrito"
        const productoAremover = document.getElementById(idServicio)
        productoAremover.remove()
        textoTotalCarrito.innerText = "Total: $" + verTotalCarrito();
   
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