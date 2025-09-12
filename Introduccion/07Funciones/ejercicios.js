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
//function arrieglo (arreglo) {
  //  let con = 0;
   // let mayor = 0;
    //arreglo.forEach(element => {
      //  if(con == 0) {
        //    mayor = element;
          //  con++
     //   } else {
       //     if (element > mayor){
         //       mayor = element
           // }
  //      }
//
 //   });
   // return mayor
//}
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
let arreglo2 = []
arreglo2 [0] = "nico";
arreglo2 [1] = "soria";
arreglo2 [2] = "maximiliano";
function mayusculas(arr) {
    let arreglo = [];
    arr.forEach(oracion => arreglo.push(oracion.toUpperCase()));
    return arreglo;
}
console.log(mayusculas(arreglo2))
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(num) {
    let primoCon= 0
    for (i = 1; i<=num; i++) {
        if (num % i == 0)
        primoCon++;
    }
    if(primoCon == 2) {
        return true;
    } else if(primoCon>2) {
        return false;
    } {
        return false;
    }
    
}
console.log(esPrimo(98));
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let arrnum = [21,3,4,2]
let arrnum2 = [1,1,1,1]

function comunes(arr, arr2) {
    let arregloComunes = [];
    arr.forEach((valor =>  {
        arr2.forEach((v=> {
            if(valor == v) {
                let bandera = false;
                for(i = 0; i<arregloComunes.length; i++) {
                    if (valor == arregloComunes[i]) {
                        bandera = true;
                    }
                }
                if (bandera == false) {
                    arregloComunes.push(valor)
                }         
            }
        }))
    }))
    return arregloComunes;
}
console.log(comunes(arrnum, arrnum2))
// 7. Crea una función que  reciba un array de números y devuelva la suma de todos los números pares
function sumaPares(arr) {
    let suma = 0;
    arr.forEach(valor => {
        if (valor % 2 == 0) {
            suma += valor
        }
    })
    return suma
}
console.log(sumaPares(arrnum))
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function arrayCuadra(arr) {
    arregloCuadrado = []
    arr.forEach(valor => {
        arregloCuadrado.push(valor * valor)
    })
    return arregloCuadrado
}
console.log(arrayCuadra(arrnum))
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let or = 'pajara   pintada en un hermoso color';
function inversa(oracion) {
  aux = [];
  invertida = '';
  conAux = 0;
    if (oracion.includes(" ")) {
        for(caracter of oracion) {
            conAux++
            if (caracter == " ") {
                aux.unshift(conAux)
            }}
            indiceAux = oracion.length;
            aux.forEach(indice => {
                invertida = invertida + (oracion.slice(indice, indiceAux)) + " "
                indiceAux = indice - 1;
            })
            invertida =  invertida + (oracion.slice(0, indiceAux))
    } else {
        invertida = oracion
    }
    
  return invertida;
}
console.log(inversa(or));
// 10. Crea una función que calcule el factorial de un número dado
function factorial (num) {
    for(i = num - 1; i > 0; i--) {
        num = num * i
    }
    return num
}
console.log(factorial(14))