//concatenacion
let nombre = "nico";
let saludo = "Hola " + nombre;
console.log (saludo)
//longitud
console.log(nombre.length)
//Acceso a caracteres
console.log(nombre[0])
//metodos comunes
console.log(nombre.toUpperCase())
console.log(nombre.toLowerCase())
console.log(nombre.indexOf("i"))
console.log(nombre.includes("l"))
console.log(nombre.slice(0,3));
console.log(nombre.replace("i", "o"))
// template literals
//sirven para interpolar variables o para crear strings de varias lineas
let mensaje = `lorem ipsum askhdas 
aksjhdasodh`;
console.log (mensaje);
//solo se pueden usar con ``
console.log(`Hola, ${nombre}`)

