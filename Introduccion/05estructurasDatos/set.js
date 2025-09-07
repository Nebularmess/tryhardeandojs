//sets
let mySet = new Set();
let mySet2 = {};

mySet = new Set(["nico", "maxim", "soria", 27]); // corchetes para incializar con datos
console.log(mySet)
console.log(mySet2)

//metodos comunes
// add y delete
mySet.add("utn");
console.log(mySet)
console.log(mySet.delete("maxim"))// se tiene que apsar el valor del dato y no el indice devuelve TRUE si existe y elimina 
console.log(mySet) //y False si no existe y no elimina nada

//has verifica si existe un elimento true o false
console.log(mySet.has("nico"))
// size (longitud)
console.log(mySet.size);
//convertir set en array
let arreglo = Array.from(mySet);
console.log(arreglo)
mySet= new Set(arreglo);
console.log(mySet)

// su principal diferencia con los arrrays es que no admite duplicados

mySet.add("nico");
mySet.add("Nico")// con algun cambio minimo como mayuscula si lo guarda
console.log(mySet)
