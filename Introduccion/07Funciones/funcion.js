//funciones
//bloques de codigo para realizar una tarea concreta
//
function myFunction () {
    console.log(".")
}
function funcionParametro (nombre) {
    console.log(nombre)
}
funcionParametro("hola")
//funciones anonimas no tienen nombre definido
const a = function (name) {
    console.log(name)
}
a("nico")
//arrow funtion
const nam = (name) => {
    console.log(name)
}
nam("hola")
const namero = (name) => console.log(name)
namero("maxi")
//parametros

function sum (a, b) {
    return a+b
}

//funcion anidada
function anidada () {
    console.log("arafue")
    function interna () {
        console.log("anidada")
    }
    interna()
}
anidada()
//funcion de orden superior
//funciones que reciben otras funciones como argumento
function superior(func, parametro) {
    func(parametro)  
}
superior(namero, "simon")
//for each
let arreglo= ["nico", "maxi", "simon", "juampi"]
arreglo.forEach(function (value) {
    console.log(value)
})