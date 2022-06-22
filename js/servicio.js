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



const depilacion = new Servicio("Depilacion", 1200);
const pedicuria = new Servicio("Pedicuría", 1800)
const manicuria = new Servicio("Manicuría", 1000);
const liftingPestanias = new Servicio("Lifting de Pestañas", 800)
const peelingQuimico = new Servicio("Peeling Químico", 2000)
const keratina = new Servicio("Keratina", 2200)

