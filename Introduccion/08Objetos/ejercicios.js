// 1. Crea un objeto con 3 propiedades
gato = {
    raza : "carei",
    nombre: "Bruma",
    edad: 5
}
// 2. Accede y muestra su valor
console.log(gato.nombre + "  raza: " + gato.raza + " edad " + gato.edad)
// 3. Agrega una nueva propiedad
 gato.castrado = true;
 console.log (gato.castrado)
// 4. Elimina una de las 3 primeras propiedades
delete gato.raza;
// 5. Agrega una función e invócala
gato.ruido = function() {
    console.log("meow");
};
gato.ruido()
// 6. Itera las propiedades del objeto
for(valor in gato) {
    console.log(valor + " " + gato[valor])
}
// 7. Crea un objeto anidado
animal =  {
    reino: "animal",
    especie: {
        nombre: "GATO",
        nombreCientifico: "felino"
    }
}
// 8. Accede y muestra el valor de las propiedades anidadas
console.log (animal.especie.nombre + " " + animal.especie.nombreCientifico )
// 9. Comprueba si los dos objetos creados son iguales
console.log(animal === animal.especie)
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(gato.nombre == gato.edad)
console.log(gato.nombre === gato.edad)
