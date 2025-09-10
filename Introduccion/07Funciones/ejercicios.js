// 1. Crea una función que reciba dos números y devuelva su suma
function sum (a,b) {
    return a+b
}
console.log(sum(1,3))
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function arrieglo (arreglo) {
    let con = 0;
    let mayor = 0;
    for (numero of arreglo) {
        if (con == 0) {
            mayor = numero
            con++
        }
        if (numero > mayor) {
            mayor = numero
        }
    }
    return mayor
}
function arrieglo (arreglo) {
    let con = 0;
    let mayor = 0;
    arreglo.forEach(element => {
        if(con == 0) {
            mayor = element;
            con++
        } else {
            if (element > mayor){
                mayor = element
            }
        }

    });
    return mayor
}
let arregllo = [3,9,5,4,7,-2]
console.log(arrieglo(arregllo))
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let oracion = "aaaaap";
function vocales(parrafo) {
    let vocales = []
    for (letra of parrafo) {
        if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
            vocales.push(letra)
        }
    }
    return vocales.length
}
console.log(vocales(oracion))
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado