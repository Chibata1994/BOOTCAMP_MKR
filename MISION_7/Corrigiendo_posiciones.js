//SOLUCION

let arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];

let nuevoArreglo = ["Quinto", "Sexto"];

arr.splice(4, 0, nuevoArreglo);

console.log("RESULTADO ESPERADO: " + arr);

//*EJERCICIO
//Corrigiendo posiciones Objetivo: Escribe un programa que inserte cada uno de los
//elementos del arreglo nuevoArreglo, en el arreglo resultante del reto anterior arr, e imprima cada uno de los elementos en la consola.
//let arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];
//let newArray = ["Quinto", "Sexto"];

//Resultado esperado:
//Primero
//Segundo
//Tercero
//Cuarto
//Quinto
//Sexto
//Soy el último elemento