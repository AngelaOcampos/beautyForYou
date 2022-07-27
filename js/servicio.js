// definición de los objetos tipo Tratamiento
class Servicio{
    constructor (tratamiento, precio){

    this.tratamiento = tratamiento;
    this.precio = parseFloat(precio);
    }
}


// instanciando productos para que el usuario pueda sumar al carrito
const manicuria                 = new Servicio("Manicuría", 2500);
const peelingQuimico            = new Servicio("Peeling Químico", 1800)
const alisado                   = new Servicio("Alisado", 3000);
const pedicuria                 = new Servicio("Pedicuría", 2700)
const limpiezaFacial            = new Servicio("Limpieza Facial", 2000)
const botox                     = new Servicio("Botox", 3000)

