// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "nico";
if("nico" == nombre) {
    console.log ("son el mismo")
} 
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "nimaxi"
let contraseña = "12345"
if ("nimaxi" == usuario && "12345" == contraseña){
    console.log("login exitoso")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let n = -1;
if (n > 0) {
    console.log("es positivo")
} else if (n < 0) {
    console.log("es negativo")
} else {
    console.log(" es cero")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 16
if (edad >= 18) {
    console.log("Puede votar")
} else {
    console.log("No puede votar le faltan " + (18 - edad)+ " años")
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let persona;
persona = edad >= 18 ? "adulta" : "menor";
console.log (persona)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes =5
switch (mes) {
    case 0:
        mes = "enero";
        break;
    case 1:
        mes = "febrero"
        break; 
    case 2: 
        mes = "marzo"
        break; 
    case 3:
        mes = "abril"
        break; 
    case 4:
        mes = "mayo"
        break;  
    case 5:
        mes = "junio"
        break; 
    case 6:
        mes = "julio"
        break; 
    case 7:
        mes = "agosto"
        break; 
    case 8:
        mes = "septiembre"
        break; 
    case 9:
        mes = "octubre"
        break; 
    case 10:
        mes ="noviembre"
        break; 
    case 11: 
        mes = "diciembre"
        break;    
    default:
        mes = "no valido"
        break;
}
console.log (mes)
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7