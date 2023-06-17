let array = [1, "Daniela", 22, "Pedro", 12, 152,"Maria"];

//POSICIÓN
const pos = array [4];
console.log ("Esta es mi posición: " + pos)


//RECORRER UN ARREGLO
for (let i = 0; i < array.length; i++) {
    console.log("Este es mi dato en la posición " + i + ": " + array [i])

}

// REASIGNANDO UN VALOR
array [3] = "Hola";

console.log(array [3]);

console.log ("ARRAY**: " + array);
