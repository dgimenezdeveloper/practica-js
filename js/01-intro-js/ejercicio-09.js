/* 
Realizá un programa que permita al usuario ingresar dos números enteros, que representan las
medidas en grados de dos ángulos interiores de cierto triángulo. La computadora debe mostrar el
valor en grados del ángulo restante.
*/
let primer_angulo = parseInt(prompt('Ingresá el primer ángulo:'));
let segundo_angulo = parseInt(prompt('Ingresá el segundo ángulo:'));
let suma_angulos_interiores = 180;
let tercer_angulo = suma_angulos_interiores - (primer_angulo + segundo_angulo);
console.log(`El ángulo restante mide ${tercer_angulo}°`);
