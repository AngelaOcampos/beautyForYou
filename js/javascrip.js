let carrito = {
    total: 0,
    cantidadServicios: 0,
    vacio: true

}

function Servicio(tratamiento, precio){

    this.tratamiento = tratamiento;
    this.precio = precio;
    this.agregadoAlCarrito = false;

}

let depilacion = new Servicio("Depilacion", 1200);
let manicuria = new Servicio("Manicuría", 1000);
let pedicuria = new Servicio("Pedicuría", 1800)
let liftingPestanias = new Servicio("Lifting de Pestañas", 800)
let peelingQuimico = new Servicio("Peeling Químico", 2000)
let keratina = new Servicio("Keratina", 2200)

function sumarAlCarrito(Servicio){
    if(Servicio.agregadoAlCarrito){
         alert("Servicio ya seleccionado, se permite solamente una vez")    
    }else{
        carrito.total = carrito.total + Servicio.precio;
        carrito.cantidadServicios++;
        carrito.vacio = false;
        Servicio.agregadoAlCarrito = true; 
        return console.log("Agregaste", Servicio.tratamiento,"exitosamente")
        
    }
}

function quitarDelCarrito(Servicio){
    if(Servicio.agregadoAlCarrito == true){
        Servicio.agregadoAlCarrito = false;
        carrito.cantidadServicios--;
        carrito.total = carrito.total - Servicio.precio;
        console.log("total de carrito actual", carrito.total);
        if(carrito.cantidadServicios == 0){
            carrito.vacio = true;
            alert ("Su carrito esta vacío")
        }
    } else{
        alert("No se encuantra cargado")
    }
}

function terminarReserva(){

    if(carrito.vacio){
        alert("Aún no agregaste nada al carrito")
    } else if (confirm("¿Listo para finalizar tu reserva?")){
        carrito.total = 0;
        carrito.cantidadServicios = 0;
        carrito.vacio = true;
        alert("'Tu reserva a sido un éxito, nos comunicaremos en la brevedad!") 
    }
}
