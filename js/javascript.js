function guardarCarritoEnLocalStorage(){
    let carritoJson =JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJson);
}
function descargarCarritoDeLocalStorage(){
    localStorage.getItem("carrito") ?? localStorage.setItem("carrito", '[]');

    let carritoJson = JSON.parse(localStorage.getItem('carrito'))

    for (let servicio of carritoJson){
        sumarAlCarrito(new Servicio (servicio.tratamiento, servicio.precio));
    }
}



function sumarAlCarrito(servicio){
    
    let incluidoEnCarrito;
    let seAgrego = false;
    for(let objeto of carrito){
        if(servicio.tratamiento == objeto.tratamiento){
            incluidoEnCarrito = true;
        }
    }

    if(incluidoEnCarrito){
         //alert("Servicio ya seleccionado, se permite solamente una vez")    
        yaIncluido()
    }else{
        carrito.push(servicio);
        let carritoJson = JSON.stringify(carrito);
        localStorage.setItem("carrito", carritoJson);
        // alert ("Se agrego " + servicio.tratamiento + " al carrrito")
        seAgrego = true;
    }

    return seAgrego
}

function sumarAlCarritoEInformar(servicio){
    
    sumarAlCarrito(servicio) && sumadoAlCarrito(servicio.tratamiento);
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
        guardarCarritoEnLocalStorage();
        
        const idServicio = servicio.tratamiento + "EnCarrito"
        const productoAremover = document.getElementById(idServicio)
        productoAremover.remove()
        textoTotalCarrito.innerText = "Total: $" + verTotalCarrito() || "carrito vacío"
   
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
                        title: 'Reserva exitosa',
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
        confirmarReserva();
    }
}
                
    
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

