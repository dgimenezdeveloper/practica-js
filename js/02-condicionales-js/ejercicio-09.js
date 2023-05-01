/* 
Realizá un programa que permita al usuario ingresar los lados a, b y c de un triángulo. La
computadora informa si el triángulo es o no válido. Según el teorema de desigualdad triangular, un triángulo es válido si se cumple que cada uno de los lados no puede ser
más largo que la suma de los otros dos. En caso afirmativo, además informa si es equilátero, isósceles o escaleno.
Un triángulo equilátero es aquel que tiene sus tres lados iguales. Un triángulo isósceles es aquel que tiene dos de sus
lados iguales. Un triángulo escaleno es aquel que tiene sus tres lados desiguales.
*/

// Pedimos al usuario que ingrese los tres lados del triángulo
let a = parseFloat(prompt("Ingrese el lado a: "));
let b = parseFloat(prompt("Ingrese el lado b: "));
let c = parseFloat(prompt("Ingrese el lado c: "));

// Comprobamos si el triángulo es válido según el teorema de desigualdad triangular
if (a + b > c && a + c > b && b + c > a) {
    console.log("El triángulo es válido.");

    // Comprobamos qué tipo de triángulo es
    if (a === b && b === c) {
        console.log("El triángulo es equilátero.");
    } else if (a === b || a === c || b === c) {
        console.log("El triángulo es isósceles.");
    } else {
        console.log("El triángulo es escaleno.");
    }
} else {
    console.log("El triángulo no es válido.");
}
