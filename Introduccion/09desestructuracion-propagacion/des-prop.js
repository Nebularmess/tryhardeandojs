//desesctructuracion manera de extraer valores sintaxis que permite extraer valores de arrays y objetos y asignarlos a variables 
let myarray = [1,2,3,4]
person3 = {
    nombre : "nico",
    age: 27,
    profesion:"profersor",
    caminar : function() {
        console.log("Caminar")
    },
    actividad : {
        alias : "maxi"
    }
}
let myvalue = myarray[1];
let myname = person3.name;
//desesctruracion con una unica definiccio es capaz de crear varias variable sy asignarles valores
let [myarray0, myarray1] = myarray
console.log(myarray0, myarray1)
//sintaxis de arrays con valores por defecto
let = [myarray0 = 0, myarray1, myarray2,myarray3,myarray4 = 0] = myarray
console.log(myarray0, myarray1, myarray2,myarray3,myarray4)
//ignorar propiedades
let = [myarray10, , ,myarray13,myarray14] = myarray
console.log(myarray10,myarray13,myarray14)
//sintaxis objetos
let{nombre, age, profesion} = person3
console.log(nombre, age, profesion)
let{nombre2, age2, profesion2, email = "nico@"} = person3 // debe ser con el nombre de la prop
console.log(nombre2, age2, profesion2, email)
//sintaxis objectos con nuevos nombres de variables
let{nombre: nom2, age : age3, profesion: prof2, email2 = "nico@"} = person3 // debe ser con el nombre de la prop
console.log(nom2, age3, prof2, email2)
// objetos anidados 
let {nombre : nom4, actividad: {alias : alia}} = person3
console.log(nom4, alia)
//Propagacion  (...)
let myarrayProp = [... myarray] 
let myarray50 = [...myarray, ...myarrayProp]
console.log(myarrayProp)
console.log(myarray50)
//objetos 
let person4 = {...person3, cbu : 21341231,}
console.log(person4)








