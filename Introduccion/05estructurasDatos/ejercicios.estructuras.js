// 1. Crea un array que almacene cinco animales
let array = ["gato", "perro", "raton", "serpiente", "gorila"];
console.log(array)
// 2. Añade dos más. Uno al principio y otro al final
array.push("anaconda");
array.unshift("mono");
console.log(array);
// 3. Elimina el que se encuentra en tercera posición
array.splice(3,1)
console.log(array)
// 4. Crea un set que almacene cinco libros
mySet = new Set(["fiisca", "quimica", "libro", "quijote", "geografia"]);
console.log(mySet)
// 5. Añade dos más. Uno de ellos repetido
mySet.add("historia");
mySet.add("matematica");
mySet.add("matematica");

console.log(mySet);
// 6. Elimina uno concreto a tu elección
mySet.delete("matematica");
console.log(mySet)
// 7. Crea un mapa que asocie el número del mes a su nombre
myMap = new Map([[1, "enerto"], [2, "febrero"], [3, "marzo"], [4, "Abril"], [5, "Mayo"], [6, "Junio"], [7, "Julio"], [8, "Agosto"], [9, "Septiembre"], [10, "Octubro"], [11, "noviembre"], [12, "Diciembre"]])
console.log(myMap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(myMap.has(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
myMap.set(13, verano = ["Diciembre", "Enero", "Febrero"])
console.log(myMap.get(13))
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let colores = ["azul", "rojo", "amarillo"];
let SetArray = new Set(colores);
console.log(SetArray)
let mapaSet = new Map()
mapaSet.set("set", SetArray)
console.log(mapaSet)
