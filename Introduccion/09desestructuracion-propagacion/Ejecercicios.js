// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let arreglo = [1,2,3,4,5]
let [elemento1, elemento2] = arreglo
console.log(elemento1, elemento2)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [elemento12, elemento22, elemento3, elemento4, elemento5, elemento6 = 0] = arreglo
console.log(elemento12, elemento22, elemento3, elemento4, elemento5, elemento6)
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let objeto =  {
    nombre : "caja",
    color : "rojo",
    tamaño : "mediano",
    funcion :  {
        utilidad : "almacen",
        razon: "trbajao"
    }
}
let objeto2 =  {
    acti : "flash",
    pipo : 20
}
let {nombre, color} = objeto
console.log (nombre, color)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {nombre : nombre2, color : colour} = objeto
console.log (nombre2, colour)



// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let {funcion:{utilidad : util, razon}} = objeto
console.log(util, razon)
// 6. Usa propagación para combinar dos arrays en uno nuevo
arreglo2 = ["nico", "guada"]
let arreglo3 = [...arreglo, ...arreglo2]
console.log(arreglo3)
// 7. Usa propagación para crear una copia de un array
let arreglocopia = [...arreglo2]
console.log(arreglocopia)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let objetoFusion = {...objeto, ...objeto2}
console.log(objetoFusion)

// 9. Usa propagación para crear una copia de un objeto
let objetoCopia = {...objeto2}
console.log(objetoCopia)

// 10. Combina desestructuración y propagación
let objeto23 = {...objeto, cbu : 1234}
console.log(objeto23)
let {nombre: nom23, color: colore, ...objeto5 } = objeto //la propagacion en la desestructuracion hace que el objeto herede las propiedades restantes
console.log (nom23, colore)
console.log (objeto5)
console.log (objeto5.nombre)


