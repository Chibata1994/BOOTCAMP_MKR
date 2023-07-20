// Cambio de título //
console.log("TITULO", document.title);
document.title = "NUEVO TÍTULO";
console.log("Nuevo Título", document.title);

// Obtener el elemento Form //

let form = document.querySelector("form#my-form");
console.log("TAGNAME", form.tagName);
console.log("ID", form.id);
console.log("ESTILOS", form.style);
console.log("ATRIBUTOS", form.attributes);

// Obtener varios elementos//

let divs = document.querySelectorAll("div");
for (let div of divs.entries()) {
    console.log("DIV--",div)
}

//Insertar elementos

let p = document.createElement("p");
let myDiv = document.querySelector("div#my-div");

myDiv.appendChild(p);

//Opción 1 para agregar texto//

let text = document.createTextNode("Este es un texto");
p.appendChild(text);

// OPción 2 para agregar texto//

p.innerHTML = "Texto añadido con atributo inner HTML";

//Opción 3 para agregar texto//
p.textContent = "Texto añadido con atributo textContent";

//Remover elementos//

let element = document.querySelector("div#my-div-2");
element.parentNode.removeChild(element);

//Agregar y eliminar clases//

let div3 = document.querySelector("div#my-div-3");
console.log("CLASES DIV3:", div3.classList);

div3.classList.add("four");
div3.classList.remove("one");

console.log("CLASES DIV3 NUEVAS: ", div3.classList);

div3.classList.toggle("five");
div3.classList.toggle("two");

console.log("CLASES DIV3 TOGGLE: ", div3.classList);
