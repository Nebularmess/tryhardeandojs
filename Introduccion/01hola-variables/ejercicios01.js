// 1. Escribe un comentario en una línea
console.log("hola")
// 2. Escribe un comentario en varias líneas
console.log("hola")
console.log("mundo")
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let num = 2;
let oracion = "hola";
let bandera = true;
let undefinedww;
let simbolo = Symbol ("simbolo");
let nullea = null;
let bigintt= BigInt(12341412412412424123123123123124124124124123123123123)
let bigintt2 = 12341412412412424123123123123124124124124123123123123n;


// 4. Imprime por consola el valor de todas las variables
console.log(num);
console.log(oracion); 
console.log(bandera); 
console.log(undefinedww);
console.log(simbolo);
console.log(nullea);
console.log(bigintt);
console.log(bigintt2);
 
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof(bigintt2));
console.log(typeof(bigintt));
console.log(typeof(nullea));
console.log(typeof(undefinedww));
console.log(typeof(bandera));
console.log(typeof(oracion));
console.log(typeof(num));
console.log(typeof(simbolo));
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
num = 3;
oracion = "mundo"
bandera = false;
nullea = null;
undefinedww = undefined;
bigintt = 111111111111111111111111111111111111111111111111111111111111111111111111111111111111n;
bigintt2 = 22222222222222222222222222222222222222222222222222222222222222222222222222222222222n;
simbolo = Symbol("unico")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
num = 'hola';
oracion = Symbol("oracion");
bandera = undefined;
nullea = true;
undefinedww = null;
bigintt = 111111111111111111111111111111111111111111111111111111111111111111111111111111111111n;
bigintt2 = 22222222222222222222222222222222222222222222222222222222222222222222222222222222222n;
simbolo=123;
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const numConst= 1;
const simConst = Symbol("constanteSimbolo");
const trueConst = true;
const bigIntConst = BigInt(122222222222222222222222222222222222222222222222222222222222222222222222222222);
const undeConst = undefined;
console.log(typeof(undeConst))
const nullConst = null;
const stringConst = "string constante";



// 9. A continuación, modifica los valores de las constantes
//numConst = 2; // no se puede cambiar son constantes
//nullConst = 2;
//trueConst = false;
//stringConst = "opa";
//simConst = Symbol ("opa");
//bigIntConst = 1111111111111111111111111111111111111111111111111111111111111111111111111111n
//undeConst = 1;
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse