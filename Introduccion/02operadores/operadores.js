//Aritmeticos 
let a = 5;
a=a+5;// suma
console.log(a);
a=a-2;// resta
console.log(a);

a=a/2;//div
console.log(a);

a=a*2;//mult
console.log(a);

a=a%3;//mod
console.log(a);

a=a**a; // potencia
console.log(a);

a++// incremento
console.log(a);

a-- // decremento
console.log(a);
//asignacion
let variable = 2;
variable+=2;
console.log(variable)
variable*=3;
console.log(variable);
variable/=2;
console.log(variable);
variable **=2;
console.log(variable);
// variables de 
let comparacion = 5;
console.log (5 > 4);
console.log (5 < 4);
console.log (5 >= 4);
console.log (5 <= 4);
//igualdad por valor
console.log (comparacion == 5);
console.log (comparacion == "5");
//igualdad por valor y tipo
console.log (comparacion === 5); //true
console.log (comparacion === "5");//false
console.log (comparacion != 5);
console.log (comparacion !== "5");

//casos particulares

console.log (0 == false); //true
console.log (0 == true); //falso
console.log (1 == true);// true
console.log (2 == false);//falso

console.log (0 == '');//true
console.log (0 == ' ');//true
console.log(0 == "falso"); //falso
console.log(0 === "")//falso
console.log (undefined == null); // verdadero
console.log (undefined === null) // falso

/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 
*/

//OPERADORES LOGICOS (COMPARAN SU VALORE BOOLEANOS)
// and (&&)
console.log (5 < 10 && 15 > 20); //falso
// or (||)

console.log (5 > 10 || 20 >15) //true

// not !
console.log (!(5 > 10 || 20 >15)) //falso
//Operadores ternarios permiten escribir condiciones
const isRaining = false;
isRaining ? console.log("esta lloviendo"): console.log ("no esta lloviendo")
//accede a la variable + ? si es verdadero ejecuta lo de la izquierda si es falso lo de la derecha











