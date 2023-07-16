let num = 100;

if (num > 100) {
    console.log("El número es mayor a 100")
} else if (num < 100) {
    console.log("El número es menor a 100")
} else if (num === 100) {
    console.log("El número es igual 100")
} else {
    console.log("No cumple con ninguna condición")
}
// CONDICIONALES OPERADOR TERNARIO

num <= 100 ? console.log("El número es menor o igual a 100") : console.log("El número es mayor a 100");


// CONDICIÓN COMPUESTA

let numero = 16;

if (numero >= 10 && numero <= 20){
    console.log("El número esta entre 10 y 20")
} else {
    console.log("El número no esta entre esos dos números")
}

let color = "negro"

if ( color === "negro" ||  color === "rojo") {
    console.log("Que lindo color!")
} else {
    console.log("Esta feo, quitatelo!")
}



