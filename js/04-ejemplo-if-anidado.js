let num = parseInt(prompt("Ingresá un número"));
let resultado;

// Es positivo, negativo o neutro

// FORMA 1
/*
if (num > 0) {
    resultado = "POSITIVO";
} else {
    if (num < 0) {
        resultado = "NEGATIVO";
    } else {
        resultado = "NEUTRO";
    }
}*/

// FORMA 2
if (num > 0) {
    resultado = "POSITIVO";
} else if (num < 0) {
    resultado = "NEGATIVO";
} else {
    resultado = "NEUTRO";
} 

console.log(`El número ${num} es ${resultado}`);