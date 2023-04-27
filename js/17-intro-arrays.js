/*
    // Recorrer vectores con for
    for (let i = 0; i < colores.length; i++) {
        const color = colores[i];
        console.log(color);
    }
*/


function mostrarArray(elArray) {
    // Recorrer vectores con for..of
    for (const elemento of elArray) {
        console.log(elemento);
    }
}

const colores = ["Rojo", "Negro", "Verde", "Azul", "Marron"];
mostrarArray(colores);
mostrarArray([5,10,15,20]);
