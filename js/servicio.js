class Servicio{
    constructor (tratamiento, precio){

    this.tratamiento = tratamiento;
    this.precio = parseFloat(precio);
    }

    modificarPrecio (precio) {
        if (parseFloat(precio) >= 0 ){
            this.precio = parseFloat(precio);
        } else {
            alert ( "El producto no puede ser menor que cero")
        }
    }
}



const manicuria                 = new Servicio("Manicuría", 2500);
const peelingQuimico            = new Servicio("Peeling Químico", 1800)
const alisado                   = new Servicio("Alisado", 3000);
const pedicuria                 = new Servicio("Pedicuría", 2700)
const limpiezaFacial            = new Servicio("Limpieza Facial", 2000)
const botox                     = new Servicio("Botox", 3000)

