
/*
14) Realizá un programa que permita al usuario ingresar personas (para cada una, nombre y edad). La carga termina cuando en el nombre de la persona se ingresa un asterisco ('*'). La computadora debe indicar cómo se llama la persona más joven.
*/
const EDAD_MAXIMA = 120;
const CORTE = "*";
let edad, nombre;

let nombreMasJoven;
let edadMinima = EDAD_MAXIMA;

nombre = prompt("Ingresá un nombre");
while (nombre != CORTE) {
    edad = parseInt(prompt(`Ingresá la edad para ${nombre}`));
    while ( !(edad > 0 && edad < EDAD_MAXIMA) ) {
        edad = parseInt(prompt(`ERROR. Ingresá la edad para ${nombre}`));
    }
    if (edad < edadMinima) {
        edadMinima = edad;
        nombreMasJoven = nombre;
    }    
    nombre = prompt("Ingresá otro nombre");
}

if (nombreMasJoven != undefined) { // (!nombreMasJoven)
    console.log(`La persona más joven fue ${nombreMasJoven} con ${edadMinima} años`);
} else {
    console.log("No se ingresó ninguna edad");
}