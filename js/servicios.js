descargarCarritoDeLocalStorage();

const retornoCardContenido = (contenido) => {
    

    const {imagen, nombre, precio, idHtml} = contenido
    let  retorno = {
        servicio: idHtml,
        nombre: nombre,
        precio: precio,
        codigoHtml:`
            <div class="col">
                <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="${imagen}" alt="${nombre}">
                    <div class="card-block">
                    <h3 class="card-text">${nombre}</h3>
                    <p class ="card-text"><strong>${precio}</strong></p>
                    <a href="#" class=" btn btn-secondary" id="${idHtml}">RESERVAR TURNO</a>
                    </div>
                </div>
            </div>
          `
    }
    return retorno        
}

const registros = [];
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
            let nombreServicio = registros[i].servicio;

            botonServicio.addEventListener("click", ()=> sumarAlCarritoEInformar(new Servicio(registros[i].nombre, registros[i].precio)));
        }
    })
    
}

obtenerContenido(URL)
// btnManicuria.addEventListener("click" , ()=> sumarAlCarritoEInformar(manicuria));
// btnPeelingQuimico.addEventListener("click" , ()=> sumarAlCarritoEInformar(peelingQuimico));
// btnAlisado.addEventListener("click" , ()=> sumarAlCarritoEInformar(alisado));
// btnPedicuria.addEventListener("click" , ()=> sumarAlCarritoEInformar(pedicuria));
// btnLimpiezaFacial.addEventListener("click" , ()=> sumarAlCarritoEInformar(limpiezaFacial));
// btnBotox.addEventListener("click" , ()=> sumarAlCarritoEInformar(botox));
