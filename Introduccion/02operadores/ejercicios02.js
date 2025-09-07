// 1. Crea una variable para cada operación aritmética
 let suma;
 suma = 2+2;
 let resta;
 resta = 2-3;
 let multiplicacion;
 multiplicacion = 3*3;
 let division;
 division = 2/2;
 let potencia;
 potencia = 2**4;
 let modulo;
 modulo = 5%3;
 let incremento;
 incremento = 3;
 incremento++;
 console.log(incremento);
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let  asignacionSuma = 1;
asignacionSuma += 1;
console.log(asignacionSuma)
let  asignacionResta = 1;
asignacionResta -=1;
console.log(asignacionResta)
let asignacionMult = 2
console.log(asignacionMult*=2);
let asignacionDiv = 2;
asignacionDiv/=2;
console.log (asignacionDiv);
let asignacionmod = 4;
asignacionmod %= 3;
console.log(asignacionmod)
let asignacionpot = 3;
asignacionpot **=3;
console.log(asignacionpot)


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let a = 5;
console.log (a==5);
console.log (a!=4);
console.log (a == "5");
console.log (a === 5)
console.log (0=="");
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a === "5");
console.log (a !== a);
console.log(a == 3);
console.log(a !="5");
console.log(a > a);
// 5. Utiliza el operador lógico and
console.log (a == 5 && a > 4);
// 6. Utiliza el operador lógico or
console.log (a == 5 || a > 4);
// 7. Combina ambos operadores lógicos
console.log((a > 6 || a ==5) && (4 > 3 || 3 > 4))
// 8. Añade alguna negación
console.log((a > 6 || a ==5) && (!(4 < 3) || 3 > 4))
// 9. Utiliza el operador ternario
a==5 ? console.log ("es verdadero"): console.log("no es verdadero");
// 10. Combina operadores aritméticos, de comparáción y logicas
console.log(3+2 == a && a >3)