/*
    El usuario ingrese su año de nacimiento
    y la computadora le indique su edad de
    forma aproximada.
*/
let edad;
let anioDeNacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
let anioActual = new Date().getFullYear(); // Año actual en JS

edad = anioActual - anioDeNacimiento;

console.log("Tu edad es de " + edad + " ó " + (edad - 1) + " años" );
console.log(`Tu edad es de ${edad} ó ${edad-1} años`); // Templates Literales