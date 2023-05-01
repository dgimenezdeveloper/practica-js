/* 
Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe
indicar si el mayor es divisible por el menor.
Un número entero a es divisible por un número entero b cuando el cociente entre a y b equivale a 0.
*/

let num1 = parseInt(prompt('Ingresá el primer número:'));
let num2 = parseInt(prompt('Ingresá el segundo número:'));

if (num1 > num2) {
    if (num1 % num2 == 0){
        console.log(`${num1} es divisible por ${num2}`);
    } else {
        console.log(`${num1} NO es divisible por ${num2}`);
    }
} else {
    if (num2 % num1 == 0) {
        console.log(`${num2} es divisible por ${num1}`);
    } else {
        console.log(`${num2} NO es divisible por ${num1}`);
    }
}


/* VERSION 2 - REFACTORIZADA */
const numero1 = parseInt(prompt('Ingrese el primer número entero:'));
const numero2 = parseInt(prompt('Ingrese el segundo número entero:'));

const mayor = numero1 > numero2 ? numero1 : numero2;
const menor = numero1 < numero2 ? numero1 : numero2;

if (mayor % menor === 0) {
    console.log(`${mayor} es divisible por ${menor}`);
} else {
    console.log(`${mayor} NO es divisible por ${menor}`);
}
