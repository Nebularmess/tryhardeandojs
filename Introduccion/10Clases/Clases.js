class Person {
    constructor(name, age,alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

person = new Person("nico", 27, "nebular")
console.log(typeof person)
class defaultPerson {
        constructor(name = "indefinido", age,alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}
personDef = new defaultPerson()
console.log(personDef)
console.log(person.name)
person.name = "macaco"
console.log(person.name)
class Person2 {
    constructor(name, age,alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
    camina () {
        console.log("camina")
    }
}
person2 = new Person2("nico", 27, "personaconmetodo");
person2.camina()
class PrivatePerson {
    #bank
    #age
    #name
    #alias
    constructor(name, age,alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    //getter y setter
    get name() {
        return this.#name
    }
    set newBank(bank){
        this.#bank = bank
    }
    get bank() {
        return this.#bank
    }
    camina () {
        console.log("camina")
    }
}
personPrivate = new PrivatePerson("maxi", 27, "nebular", 123)
console.log(personPrivate.name)
personPrivate.newBank = 123456
console.log(personPrivate.bank)
//herencia
class Animal {
    constructor(nombre) {
        this.nombre = nombre
    }
    sound() {
        console.log("sonido")
    }
}
class Perro extends Animal {
    run() {
        console.log("corre")
    }
}
miPerro = new Perro("floki")
console.log(miPerro)
miPerro.run()
miPerro.sound()
class Pez extends Animal {
    constructor(name, tamaño) {
        super(name)
        this.tamaño = tamaño
    }
    nadar() {
        console.log("nada")
    }
    sound() {
        console.log("glup glup")
    }
}
miPez = new Pez("pez", 18)
console.log(miPez)
miPez.nadar()
miPez.sound()
miPerro.sound()
//metodos estaticos
class MathOperations{
    static sum(a,b) {
        return a+b
    }
}
//mate = new MathOperations();
//console.log(mate.sum(2,3))
console.log(MathOperations.sum(2,3))