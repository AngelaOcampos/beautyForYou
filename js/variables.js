const carrito = [];
const servicios= [];

const listadoCarrito = document.querySelector(".listadoCarrito");
const botonReservar = document.getElementById("botonReservar")
const botonVaciar = document.getElementById("botonVaciar")
const textoTotalCarrito = document.querySelector("#totalCarrito")


const btnManicuria = document.getElementById("manicuria")
const btnPeelingQuimico = document.getElementById("peelingQuimico")
const btnAlisado = document.getElementById("alisado")
const btnPedicuria = document.getElementById("pedicuria")
const btnLimpiezaFacial = document.getElementById("limpiezaFacial")
const btnBotox = document.getElementById("botox") 

const yaIncluido = () => {
    Swal.fire({
        text: "Servicio ya seleccionado, se permite solamente una vez",
        icon: 'warning',
        toast: true,
        timer: 2000,
        timerProgressBar: true,
    })
}

const sumadoAlCarrito = (tratamientoServicio) => {
    Swal.fire({
        text: "Agrego exitosamente " + tratamientoServicio + " al carrito",
        icon: "success",
        toast: true,
        timer: 3000,
        timerProgressBar: true,
    })
}

const carritoVacio =()=> {
    Swal.fire({
        title: ' Puede continuar con su reserva',
        toast: true,
        timer: 3000,
        timerProgressBar: true,
    })
}

const continuarReserva = ()=> {
    Swal.fire({
        title: 'Puede continuar reservando',
        icon: 'info',
        toast: true,
        timer: 3000,
        timerProgressBar: true,
    })
}
