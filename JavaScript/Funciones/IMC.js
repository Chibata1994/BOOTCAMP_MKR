// FÓRMULA DEL IMC = peso/ (altura^2)

function imc(peso, altura){
    return peso / (altura ** 2)
}

let imcCalculo = imc (80, 1,70);

console.log("Tu IMC es: " + imcCalculo);