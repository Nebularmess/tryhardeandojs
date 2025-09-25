class Pedido {
    static ESTADOS_VALIDOS = ["pendiente", "preparando", "listo", "entregado"]

    constructor(id, cliente, bebida, precio, estado = "pendiente") {
        this.id = id
        this.cliente = cliente
        this.bebida = bebida
        if(precio <= 0){
            throw new PrecioInvalidoError()
        }
        this.precio = precio
        this.estado = estado
    }
}
Pedido.prototype.MarcarListo = function (){
    this.estado = "listo"
}
class PrecioInvalidoError extends Error {
    constructor(message = "Precio no valido, es igual o menor a 0") {
        super(message)
        this.name = "PrecioInvalidoError"
    }
}