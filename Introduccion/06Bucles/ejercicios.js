/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (i = 0; i < 20; i++) {
    console.log(i+1)
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
for (i =0; i < 100; i++) {
    suma = suma + (i+1)
    if (i === 99) {
        console.log (suma)
    }
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (i=1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let arreglo= ["nico", "maxi", "simon", "juampi"]
for (nombre of arreglo) {
    console.log(nombre)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let string = "camus hacker"
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
        let suma2 = 0;
for (letra of string){
    if (letra == "o" || letra == "a" || letra == "e" || letra == "i" || letra == "u") {
        suma2 = suma2 +1;
    }
}
console.log (" tiene " + suma2+ " vocales")
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (i = 0; i <= 10; i++) {
    console.log(i + " x 5 = " + (i*5))
}
// 8. Usa un bucle para invertir una cadena de texto
let stringInvertido = "";
for (i = string.length; i > 0; i--) {
    console.log(string[i - 1 ])
    stringInvertido = stringInvertido + string[i - 1] //rekcah sumac
}
console.log(" es: " + stringInvertido)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let numero = [];
for(i = 0; i < 10; i++){  
    if (i == 0){
        numero [0] = 0;
        console.log(numero[i])
    } else if ( i == 1) {
        numero[i] = 1
        console.log(numero[i]) 
    } else {
        numero[i] = numero[i - 1] + numero [i -2];
        console.log(numero[i]) 
    }
}
numero = [];
for (i = 0; i< 10; i++) {
    if(numero[0] == undefined) {
        numero[i] = 0;
        console.log(numero[i])
        continue
    }
    if(numero[i-1] == undefined || numero[i-2]==undefined) {
        numero[i] = 1
        console.log(numero[i])
        continue
    }
    numero[i] = numero[i-1] + numero[i-2]
    console.log(numero[i])
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numerosMayores =[];
for(numeros of numero) {
    if(numeros > 10) {
        numerosMayores.push(numeros)
    }
}
console.log(numerosMayores)