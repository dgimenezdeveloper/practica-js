/* 
Realizá un programa en javascript que permita al usuario ingresar una letra, correspondiente a un dígito del
sistema de numeración romano.La computadora debe mostrar su correspondiente valor decimal.
Si se ingresa una letra inexistente, la computadora debe informar que no existe tal dígito.
*/

const letra = prompt('Ingrese una letra correspondiente a un dígito del sistema de numeración romano:').toUpperCase();

let valor;

switch (letra) {
    case 'I':
        valor = 1;
        break;
    case 'V':
        valor = 5;
        break;
    case 'X':
        valor = 10;
        break;
    case 'L':
        valor = 50;
        break;
    case 'C':
        valor = 100;
        break;
    case 'D':
        valor = 500;
        break;
    case 'M':
        valor = 1000;
        break;
    default:
        console.log('No existe tal dígito.');
        break;
}

if (valor !== undefined) {
    console.log(`El valor decimal correspondiente a ${letra} es ${valor}.`);
}
