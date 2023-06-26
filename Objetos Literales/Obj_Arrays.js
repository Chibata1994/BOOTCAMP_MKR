
let products = [
    { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
    { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
    { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
];

for (let i = 0; i < products.length; i++) {
    let producto = products [i];
    console.log("ID:", producto.id);
    console.log("NOMBRE:", producto.name);
    console.log("PRECIO:", producto.price);
    console.log("CATEGORIAS:", producto.categories.join(", "));
}

