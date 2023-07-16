let div = document.querySelector("div");

div.addEventListener ("click", function() {
    this.style.background = "green";
});

console.log(div.style);