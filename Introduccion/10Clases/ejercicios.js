// 1. Crea una clase que reciba dos propiedades
class Computadora {
    constructor(memoria, procesador) {
        this.memoria = memoria
        this.procesador = procesador
    }
    encender() {
        console.log("prendiendo pc")
    }
}
// 2. Añade un método a la clase que utilice las propiedades
Computadora.prototype.mostrarDetalle = function() {
    console.log(this.procesador + " " + this.memoria)
}
// 3. Muestra los valores de las propiedades e invoca a la función
compu = new Computadora(23, "intel")
compu.mostrarDetalle()
// 4. Añade un método estático a la primera clase
// no hace falta usar prototype
Computadora.procesar = function() {
    console.log("procesando")
}
// 5. Haz uso del método estático
Computadora.procesar()
// 6. Crea una clase que haga uso de herencia
class notebook extends Computadora {
    constructor(memoria, procesador, año) {
        super(memoria, procesador)
        this.año = año
    }
}
note = new notebook(12, "amd", 2020)
console.log(note)
// 7. Crea una clase que haga uso de getters y setters
class tablet {
    #memoria
    #procesador
    #modelo
    constructor(memoria, procesador, modelo) {
        this.#memoria = memoria
        this.#procesador = procesador
        this.#modelo = modelo
    }
    get modelo() {
        return this.#modelo
    }
    set modelo(modelo) {
        this.#modelo = modelo
    }
    get procesador() {
        return this.#procesador
    }
    get memoria () {
        return this.#memoria
    }
    set memoria(memoria) {
        this.#memoria = memoria
    }
    set procesador(procesador) {
        this.#procesador = procesador
    }
}
table = new tablet(16, "amd", "toyota")
console.log(table.modelo)
table.modelo = "apple"
console.log(table.modelo)
table.memoria = 23
table.procesador = "amd nuevo modelo"
console.log(table)

// 8. Modifica la clase con getters y setters para que use propiedades privadas
//hecho
// 9. Utiliza los get y set y muestra sus valores
//hecho
// 10. Sobrescribe un método de una clase que utilice herencia 
notebook.prototype.encender = function() {
    console.log("encendiendo notebook")
}
compu.encender()
note.encender()