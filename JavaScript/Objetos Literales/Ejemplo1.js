let persona = {
    name: "Ana",
    Apellido: "Romero",
    Edad: 45,
    estatura: 1.65
}

console.log("Objeto Persona", persona);
let llave = "name"
console.log(persona[llave]);
console.log(persona.Apellido);
console.log(persona["Edad"]);
console.log(persona["estatura"]);

//Agregar llave nueva
persona.peso = 85;
console.log("Objeto Persona modificado", persona);

// Modificar llave
persona.Edad = 36;
console.log("Objeto Persona modificado Edad", persona);

//Borrar llave
delete persona.Edad;
console.log("Objeto persona eliminado", persona);



