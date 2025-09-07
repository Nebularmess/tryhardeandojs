//Map es una coleccion de elementos (no son unicos como los valores de array o sets) cada elemento es un par clave-valor
let myMap = new Map();
console.log(myMap);

// inicializacion
myMap = new Map([[0, "nico"],[1, 12], [2, true], [3, "soria"]]);
console.log(myMap);
//metodos y propiedades
//set actualizar un elemento o agregar uno
myMap.set("alias", "maxi");
myMap.set(0, "nicolas");
console.log(myMap);
//get recuperar un valor por la clave
console.log(myMap.get("alias"));
//has
console.log(myMap.has("alias"));
//keys
console.log(myMap.keys())
console.log(myMap.values())
//size
console.log(myMap.size)
//entrys
console.log(myMap.entries());
//delete
myMap.delete("alias");
console.log(myMap)
//borrar clear
myMap.clear();
console.log(myMap);