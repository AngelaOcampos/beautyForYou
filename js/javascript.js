// función que permite guardar el carrito en el localStorage
function guardarCarritoEnLocalStorage(){
    let carritoJson =JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJson);
}

// función que descarga el carrito del localStorage 
function descargarCarritoDeLocalStorage(){
    localStorage.getItem("carrito") ?? localStorage.setItem("carrito", '[]');

    let carritoJson = JSON.parse(localStorage.getItem('carrito'))

    for (let servicio of carritoJson){
        sumarAlCarrito(new Servicio (servicio.tratamiento, servicio.precio));
    }
}


// es la función que permite agregar la reserva al carrito validando que el tratamiento elegido no este sumado mas de una vez 
function sumarAlCarrito(servicio){
    
    let incluidoEnCarrito;
    let seAgrego = false;
    for(let objeto of carrito){
        if(servicio.tratamiento == objeto.tratamiento){
            incluidoEnCarrito = true;
        }
    }

    if(incluidoEnCarrito){     
        yaIncluido()
    }else{
        carrito.push(servicio);
        let carritoJson = JSON.stringify(carrito);
        localStorage.setItem("carrito", carritoJson);
        seAgrego = true;
    }

    return seAgrego
}

function sumarAlCarritoEInformar(servicio){
    
    sumarAlCarrito(servicio) && sumadoAlCarrito(servicio.tratamiento);
}
    
// función que carga los servicios al carrito.html
function cargarCarrito(servicio){
   
    const liNuevoServicio = document.createElement("li")
            liNuevoServicio.className = "border border-light"
            liNuevoServicio.innerHTML = `<strong>Servicio</strong>: ${servicio.tratamiento} <strong>Precio</strong>: ${servicio.precio}`
            liNuevoServicio.id = servicio.tratamiento + "EnCarrito"
            liNuevoServicio.addEventListener("dblclick", ()=> quitarDelCarrito(servicio)) 
            listadoCarrito.append(liNuevoServicio)
}

// función que quita el servicio del carrito.hmtl
function quitarDelCarrito(servicio){

        carrito.splice(carrito.indexOf(servicio),1)
        guardarCarritoEnLocalStorage();
        
        const idServicio = servicio.tratamiento + "EnCarrito"
        const productoAremover = document.getElementById(idServicio)
        productoAremover.remove()
        textoTotalCarrito.innerText = "Total: $" + verTotalCarrito() || "carrito vacío"
   
    }

 // función que nos retorna el total del carrito 
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


// función que permite terminar la reserva y retorna mensajes al usuario para que sepa que realizo la reserva 
function terminarReserva(){

    if(verTotalCarrito()== 0){
        carritoVacio();
    }
    else{
        const confirmarReserva = ()=> {
            Swal.fire({
                title: "El total es de " + verTotalCarrito() + " ¿Quiere hacer su reserva?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Reservar',
                cancelButtonText: 'Seguir con la reserva',

            }) .then((result)=>{
                if (result.isConfirmed){
                    while(carrito.length > 0){
                        quitarDelCarrito(carrito[0]);
                    }
                    Swal.fire({
                        title: 'Reserva exitosa, nos comunicaremos con usted en la brevedad.',
                        icon: 'success',
                        toast: true,
                        timer: 5000,
                        timerProgressBar: true,
                    })
                } else{
                    continuarReserva()

                }
            })
        }
        confirmarReserva();
    }
}
                
//  función que permite vaciar conntenido de carrito.html   
function vaciarCarrito(){
    if (verTotalCarrito() == 0){
        carritoVacio();
    }
    else{
        const vaciarCarrito = ()=> { 
            Swal.fire({
                title: "¿Seguro quiere vaciar el carrito?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: "Sí, quiero",
                cancelButtonText: 'Continuar con la reserva',
            }) .then((result) => {
                if (result.isConfirmed){
                    while(carrito.length > 0 ){
                        quitarDelCarrito(carrito[0]);
                    }
                    Swal.fire({
                        title: "Se vacío el carrito",
                        icon: 'success',
                        toast: true,
                        timer: 2000,
                        timerProgressBar: true,
                    })
                } else{
                    continuarReserva()
                }
            })
            } 
            vaciarCarrito();
        }
    }

