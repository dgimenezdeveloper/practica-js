/* 
Realizá un programa que permita al usuario ingresar un número entero entre 1 y 12. La
computadora debe mostrar por pantalla el nombre del mes del año que representa tal número. Si se
ingresa un número fuera de rango, debe mostrar un error.
*/

// Pedimos al usuario que ingrese un número entero entre 1 y 12
let numero = parseInt(prompt("Ingrese un número entero entre 1 y 12: "));

// Verificamos si el número está dentro del rango permitido
if (numero >= 1 && numero <= 12) {
    // Convertimos el número a su nombre de mes correspondiente
    let mes;
    switch (numero) {
        case 1:
            mes = "enero";
            break;
        case 2:
            mes = "febrero";
            break;
        case 3:
            mes = "marzo";
            break;
        case 4:
            mes = "abril";
            break;
        case 5:
            mes = "mayo";
            break;
        case 6:
            mes = "junio";
            break;
        case 7:
            mes = "julio";
            break;
        case 8:
            mes = "agosto";
            break;
        case 9:
            mes = "septiembre";
            break;
        case 10:
            mes = "octubre";
            break;
        case 11:
            mes = "noviembre";
            break;
        case 12:
            mes = "diciembre";
            break;
    }

    // Mostramos el nombre del mes por pantalla
    console.log("El número " + numero + " corresponde al mes de " + mes + ".");
} else {
    console.log("Error: el número ingresado está fuera de rango.");
}
