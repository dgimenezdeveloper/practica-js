/* 
Realizá un programa que permita al usuario ingresar el valor salarial de una hora de trabajo y la
cantidad de horas trabajadas por día. La computadora debe mostrar el valor del salario semanal,
asumiendo que trabaja todos los días hábiles y media jornada los sábados.
*/

let hora_laboral = parseInt(prompt('Ingresá el valor monetario de cada hora de trabajo:'))
let cantidad_horas = parseInt(prompt('Ingresá la cantidad de horas trabajadas:'))
let salario_semanal = ((5*cantidad_horas) + (cantidad_horas/2))*hora_laboral
console.log(`El salario mensual es de ${salario_semanal}`);
