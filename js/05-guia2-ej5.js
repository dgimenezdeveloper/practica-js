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
