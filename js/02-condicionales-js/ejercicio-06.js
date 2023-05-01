/* 
Realizá un programa que permita al usuario ingresar la edad y el sueldo de cierto empleado. La
computadora muestra el monto del aporte al sindicato que se debe descontar del salario del
empleado, según el siguiente cuadro:

Escala salarial ----- Porcentaje a descontar
Menos de $20000         ----- 0.7%
Entre $20000 y $29999  ----- 1.4%
Entre $30000 y $39999  ----- 2.1%
$40000 o más            ----- 2.8%

Además, si la persona tiene 30 años o menos, se cobra un 30% adicional del valor del aporte.

*/

let edad = parseInt(prompt('Ingresá la edad del empleado: '));
let sueldo = parseInt(prompt('Ingresá el sueldo del empleado: '));

if (edad > 30 ) {
    if (sueldo < 20000){
        let aporte = sueldo * 0.007;
        descuento = aporte;
    } else if (sueldo >=20000 && sueldo <= 29999){
        let aporte = sueldo * 0.014;
        descuento = aporte;
    } else if (sueldo >30000 && sueldo <= 39999){
        let aporte = sueldo * 0.021;
        descuento = aporte;
    } else {
        let aporte = sueldo * 0.028;
        descuento = aporte;
    }
    console.log(`El valor del aporte es ${descuento}`);
    
} else {
    if (sueldo < 20000){
        let aporte = sueldo * 0.007;
        descuento = aporte + (aporte*0.30);
    } else if (sueldo >=20000 && sueldo <= 29999){
        let aporte = sueldo * 0.014;
        descuento = aporte+ (aporte*0.30);
    } else if (sueldo >30000 && sueldo <= 39999){
        let aporte = sueldo * 0.021;
        descuento = aporte+ (aporte*0.30);
    } else {
        let aporte = sueldo * 0.028;
        descuento = aporte+ (aporte*0.30);
    }
    console.log(`El valor del aporte es ${descuento}`);
}