// 1. Concatena dos cadenas de texto
let nombre = "nico";
let apellido = "Soria";
console.log ("Hola " + nombre + " " + apellido)
// 2. Muestra la longitud de una cadena de texto
console.log(nombre.length)
// 3. Muestra el primer y último carácter de un string
console.log(nombre[0] + " " + nombre [3]);
// 4. Convierte a mayúsculas y minúsculas un string
console.log(nombre.toUpperCase() + " " + apellido.toLowerCase());
// 5. Crea una cadena de texto en varias líneas
let texto = ` hola
 varias
 lineas
`
console.log(texto);
// 6. Interpola el valor de una variable en un string
console.log(`hola ${nombre}`);
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log (texto.replaceAll(" ", "-"));
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(texto.includes("varias"));
// 9. Comprueba si dos strings son iguales
let nombre2 = "nico";
console.log(nombre2 == nombre);
// 10. Comprueba si dos strings tienen la misma longitud
console.log(nombre.length == apellido.length);