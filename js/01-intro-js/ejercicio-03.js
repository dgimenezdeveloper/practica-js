/* 
Realizá un programa que permita al usuario ingresar 3 notas pertenecientes a tres trimestres
distintos para cierto alumno. La computadora debe mostrar la nota promedio.
*/
let nota_uno = parseInt(prompt('Ingresá la nota del 1° trimestre: '))
let nota_dos = parseInt(prompt('Ingresá la nota del 2° trimestre: '))
let nota_tres = parseInt(prompt('Ingresá la nota del 3° trimestre: '))

let promedio = (nota_uno+nota_dos+nota_tres)/3
console.log(`La nota promedio es ${promedio}`);
