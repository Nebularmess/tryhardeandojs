//if y else
if(5 > 3) {
    console.log("mayor")
} else {
    console.log("menor")
}
let edad = 27;
let message;
message = edad == 27 ? "la edad es 27" : "la edad no es 27";
console.log(message)
5 == 3 ? console.log("5 = 3") : console.log("!=3")
//switch
let day = 4;
switch (day) {
    case 0:
        day = "lunes";
        break;
    case 1:
        day ="martes";
        break;
    case 2:
        day = "miercoles";
        break;
    case 3: 
        day = "cualquier otro";
        break;
    default: 
        day = "no valido";
}
console.log(day)