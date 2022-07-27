// descarga el carrito del localStorage para que el usuario pueda solamente agregar una sola reserva por cada tratamiento
descargarCarritoDeLocalStorage();


// función para generar el HTML de servicios.json y así poder cargarlo en servicios.html
const retornoCardContenido = (contenido) => {
    

    const {imagen, nombre, precio, idHtml} = contenido
    let  retorno = {
        servicio: idHtml,
        tratamiento: nombre,
        precio: precio,
        codigoHtml:`
            <div class="col">
                <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="${imagen}" alt="${nombre}">
                    <div class="card-block">
                    <h3 class="card-text">${nombre}</h3>
                    <p class ="card-text"><strong>$${precio}</strong></p>
                    <a href="#" class=" btn btn-secondary" id="${idHtml}">RESERVAR TURNO</a>
                    </div>
                </div>
            </div>
          `
    }
    return retorno        
}


// constantes y funciones que permiter mantener un orden al contenido Html al cargar en servicios.html
const registros = [];
// el listeners sirve para almacenar los botones que se podran usar para agregar los tratamientos al carrito.
const listeners = [];
const obtenerContenido = (URL) => {
    let cardsVista = ""

    fetch(URL)
    .then ((response)=> response.json() )
    .then ((data)=> {
        for(contenido of data){
            cardsVista += retornoCardContenido(contenido).codigoHtml
            registros.push(retornoCardContenido(contenido));
        }
        contenidoDOM.innerHTML = cardsVista

        for(let i = 0; i < registros.length; i++){
            
            let btn = document.getElementById(registros[i].servicio)
            listeners.push(btn);
        }
        for(let i = 0; i < registros.length; i++){
            let botonServicio = listeners[i];
            let tratamiento = registros[i].tratamiento;
            let precio = registros[i].precio;

            botonServicio.addEventListener("click", ()=> sumarAlCarritoEInformar(new Servicio(tratamiento, precio)));
        }
    })
    
}

obtenerContenido(URL)
