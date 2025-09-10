//Estructuras de control para manejar flujo de codigo en bloques
// for ejecutarse segun lo lanzamos, si es tru sigue ejecutando
arreglo = [1,2,3,4,5]
for(let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i])
}
//while
let i = 0;
while (i < arreglo.length) {
    console.log (arreglo[i])
    i++
}
// do while
i = 0;
do {
     console.log (arreglo[i] + 1)
    i++
} while (i < arreglo.length);
mySet = new Set(["nico", "maxim", "soria", 27]);
myMap = new Map([[0, "nico"],[1, 12], [2, true], [3, "soria"]]);
// for of
for (let valor of mySet) {
    console.log(valor)
};
for (let [clave, valor] of myMap) {
    console.log(clave, valor)
};
myString = "Hola Mundo";
for (let letra of myString) {
    console.log(letra)
};
//break y continue
//continue, el bucle continua a la siguiente iteracion
//break termina el bucle
