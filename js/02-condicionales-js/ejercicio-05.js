/* 
Realizá un programa que permita al usuario ingresar su edad (entre 1 y 120 años) y su género
('F' para mujeres, 'M' para hombres). La computadora debe indicar si la persona está en edad de
jubilarse

. En caso de haber ingresado valores erróneos (edad fuera de rango o género inválido),
informar tal situación.
*/

const MIN_EDAD = 1;
const MAX_EDAD = 120;

let edad = parseInt(prompt(`¿Su edad? Entre ${MIN_EDAD} y ${MAX_EDAD}`));

if (edad >= MIN_EDAD && edad <= MAX_EDAD) {
    let genero = prompt(`¿Su género? M ó F`);
    if (genero === "M" || genero === "F" || genero === "m" || genero === "f") {
        if (edad >= 65 || (edad >= 60 && genero === "F")) {
            console.log("Se jubila");
        } else {
            console.log("No se jubila");
        }
    } else {
        console.log("Género inválido");
    }
} else {
    console.log("Edad inválida");
}
