let str ="Hola Daniela";

for(let i = 0; i < str.length; i++){
    console.log(str[i]);
}

//SPLIT
let strConv = str.split("");
console.log("Cadena a Arreglo: ", strConv);


let strConv2 = str.split(" ");
console.log("Cadena a Arreglo: ", strConv2);

let palabra = "Prueba, separa, cadena, con, comas";

let palabraArr = palabra.split(",");
console.log("Arreglo con comas: ", palabraArr);


