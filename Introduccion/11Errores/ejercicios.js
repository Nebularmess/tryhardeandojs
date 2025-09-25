// 1. Captura una excepción utilizando try-catch
try {
    console.log(person.name)
} catch (error) {
    console.log("error: " + error.message)
}
// 2. Captura una excepción utilizando try-catch y finally
    try {
        console.log(a)
    } catch (error) {
        error.messaje
    } finally {
        console.log("verifica que sea una cadena")
    }

// 3. Lanza una excepción genérica
function div (a,b) {
    if(b === 0) {
        throw new Error("no se puede dividir por ce")
    } 
    return a / b;
}
try {
    div(12, 0)
} catch (error) {
    console.log(error.message)
}
// 4. Crea una excepción personalizada
class ErrorFabricandoInsufIng extends Error {
    constructor(message, ing1, ing2) {
        super(message)
        this.ing1 = ing1
        this.ing2 = ing2
    }
    printCantidades() {
        console.log("Falta cantidad de ingredientes, ingresaste " + this.ing1 + " " + this.ing2)
    }
}
// 5. Lanza una excepción personalizada
function hacerGalletas (harina, agua) {
    if(typeof harina !== "number" || typeof agua  !== "number") {
        throw new TypeError("error de tipo")
    } else if (harina >= 1 && agua >= 0.5){
        console.log("fabricadas 10 galletas")
        } else {
            throw new ErrorFabricandoInsufIng("cantidades insuficientes", harina, agua)
        }
    }
try {
    hacerGalletas(1, 1)
} catch (error) {
    console.log (error.message)
    error.printCantidades()
}
// 6. Lanza varias excepciones según una lógica definida // 7. Captura varias excepciones en un mismo try-catch
try {
    hacerGalletas("a" , 1)
} catch (error) {
    if(error instanceof ErrorFabricandoInsufIng) {
        console.log("Se ha producido un error por insuficiencia de ing" + error.message)
    }
    if (error instanceof TypeError) {
        console.log("Hay un error de tipo las cantidades deben ser numericas" + error.message)
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10