/* 
Realizá un programa que permita al usuario ingresar el día y el mes de su cumpleaños (de manera
independiente). La computadora debe indicar cuál es su signo del zodiaco. Deben validarse tanto el
día como el mes.
*/

const dia = parseInt(prompt('Ingrese el día de su cumpleaños:'));
const mes = parseInt(prompt('Ingrese el mes de su cumpleaños:'));

if (mes < 1 || mes > 12) {
    console.log('Mes inválido.');
} else if (dia < 1 || dia > 31) {
    console.log('Día inválido.');
} else {
    let signo;
    if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
        signo = 'Acuario';
    } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
        signo = 'Piscis';
    } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
        signo = 'Aries';
    } else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
        signo = 'Tauro';
    } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
        signo = 'Géminis';
    } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
        signo = 'Cáncer';
    } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
        signo = 'Leo';
    } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
        signo = 'Virgo';
    } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
        signo = 'Libra';
    } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
        signo = 'Escorpio';
    } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
        signo = 'Sagitario';
    } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
        signo = 'Capricornio';
    }
    console.log(`Tu signo del zodiaco es ${signo}.`);
}