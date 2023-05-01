/* 
Realizá un programa que permita al usuario ingresar la cantidad de inscriptos a una conferencia
y la cantidad de asientos disponibles el auditorio. La computadora debe indicar si alcanzan los
asientos, en caso contrario, indicar cuántos faltan para que todos los inscriptos puedan sentarse.
*/
let inscriptos = parseInt(prompt('¿Cuántos inscriptos hay?'));
let asientos = parseInt(prompt('¿Cuántos asientos disponibles hay?'));

if (inscriptos < asientos) {
    console.log('Alcanzan los asientos');
    
} else {
    console.log(`Faltan ${inscriptos - asientos}`);
}