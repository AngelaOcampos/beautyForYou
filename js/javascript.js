
function sumarAlCarrito(servicio){
   
    if(carrito.includes(servicio)){
         alert("Servicio ya seleccionado, se permite solamente una vez")    
    }else{
        carrito.push(servicio);
        console.log("Agregaste", servicio.tratamiento,"exitosamente")
        
    }
}

function quitarDelCarrito(servicio){
    if(carrito.includes(servicio)){
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
    
    console.log("El total es de", total);
    return total;
}

function listarCarrito(){
    console.table(carrito);
}

function terminarReserva(){

    if(verTotalCarrito() == 0){
        alert("Aún no agregaste nada al carrito") 
    } else if (confirm("¿Listo para finalizar tu reserva?")){
        while (carrito.length > 0){
            quitarDelCarrito(carrito[0]);
        }
        alert("'Tu reserva a sido un éxito, nos comunicaremos en la brevedad!") 
    }else {
        console.log ("Puede continuar reservando")
    }
}
