let nombre =["Andrea", "Pedro", "María", "Paula"];

console.log("ARRAY INCIAL", nombre);

//INSERTANDO EN UNA POSICIÓN ESPECÍFICA
nombre.splice (4, 0, "Ana");

console.log ("ARRAY MODIFICADO CON ANA ", nombre);

// ELIMINANDO ELEMENTOS

nombre.splice(2, 3);
console.log( "ARRAY CON ELEMENTO ELIMINADO ", nombre);

// ELIMINANDO TODOS DESDE CIERTA POSICIÓN

nombre.splice (0);
console.log( "ARRAY CON ELEMENTO ELIMINADO DESDE UNA POSICIÓN ", nombre);
