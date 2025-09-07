// array = estructura de datos permiten almacenar varios valores de una variable

let arreglo = [];
let arreglo2 = new Array();
// ingresa el valor de 1 al arreglo
arreglo =   [1];
// reservar un espacio de memoria
arreglo2 = new Array(3)
console.log(arreglo)
console.log(arreglo2)
arreglo2 [0] = "nico";
arreglo2 [1] = "soria";
arreglo2 [2] = "maximiliano";
console.log(arreglo2);
//si se llena un indice X con X indices anteriores, si no estan cargados con alguna valor reserva el espacio y deja los indices anteriores en vacio
//Metodos comunes
arreglo = [];
//push agrega en la ultima posicion
arreglo.push("as");
arreglo.push("dw");
arreglo.push("123");
console.log(arreglo)
//pop quita el ultimo elemento y lo devuelve
console.log(arreglo.pop());
console.log(arreglo);
//Shift y unshift
//shift elimina y devuelve el primer elemento del array
arreglo.shift();
console.log(arreglo);
//unshift agrega uno o mas elemento al inicio del array
arreglo.unshift("nico", "soria");
arreglo.unshift("maxi", "fifu")
console.log(arreglo);
//lenght
console.log(arreglo.length);
//clear se reinicialza el array borrando todos:
//arreglo = []
//slice devuelve una copia como nuevo array con las posiciones seleccionadas
console.log(arreglo.slice(1,3)) // no incluye el indice final
console.log(arreglo);
//splice
console.log(arreglo.splice(1,3)) //elimina y devuelve los valores entre los indices este SI tiene en cuenta el indice final
console.log(arreglo);
arreglo.unshift("nico", "soria");
arreglo.unshift("maxi", "fifu")
console.log(arreglo);
arreglo.splice(1,3, "facu", "cristina", "cfk") // elimina los elementos entre los indices y agrega los que integres como arg
console.log(arreglo);