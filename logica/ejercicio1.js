

/*1) Programa una función que cuente el número de caracteres de una 
cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/

/*function miFuncion (cadena = "") {;
    if (!cadena) {
    console.warn("No ingresaste ninguna cadena");
    } else {
        console.info(`La cadena "${cadena}" tiene: ${cadena.length} caracteres.`);
    }
}*/

//Otra forma con CADENAS EXPRESADAS !!!!!

/*const miFuncion = (cadena = "") => 
    (!cadena) 
    ? console.warn("No number") 
    : console.info(`La cadena "${cadena}" tiene: ${cadena.length} caracteres.`);

miFuncion("Hola Mundo");*/


/*2) Programa una función que te devuelva el texto recortado según el número 
de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

let miFuncion2 = ("Hola Mundo");

console.log(miFuncion2.substring(4,0));   */

/*function miProblem (cadena = "") {
    if(!cadena) {
        console.warn("Ingresa txt bitch");
    } else {
        console.info(`El texto que solicitaste es: ${cadena.substring(4,0)}`);
    }
}

miProblem("Hola Mundo");
*/

/*
const miProblem = (cadena = "", longitud = undefined) =>
    (!cadena)
    ? console.warn("Ingresa txt bitch")
    : (longitud === undefined)
      ?console.warn("Ingresa txt a recortar")
      :console.info(`El texto que solicitaste es: ${cadena.substring(longitud,0)}`);
     

miProblem("Hola Mundo",4);
miProblem("Hola Hola");
miProblem("",4);
*/


/*3) Programa una función que dada una String te devuelva un Array de textos separados 
por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

let miArray = ("Hola que tal, soy el chico de la programacion.");
console.log(miArray.split(" "));   */

/*
const miArray = (cadena = "") =>
    (!cadena)
    ? console.warn("Wtf are u doing?")
    : console.info(cadena.split(" "));

miArray("Hola que tal, soy el chico de la programacion.");
*/

/*4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const miFuncion = (cadena = "", multiplicador = undefined) =>
    (!cadena)
        ? console.warn("???")
        : (multiplicador === undefined)
            ? console.warn("Ingresa multiplicador")
            : console.log(`${cadena}*${parseInt(multiplicador)}`);

miFuncion("Hola Mundo", 2);

console.clear();

const repetirTexto = (texto = "", veces = undefined) => {
    if (!texto) return console.warn("No ingresaste txt");
    if (veces === undefined) return console.warn("No ingresaste multiplicador");
    if (veces === 0) return console.error("Logical Error 'numero no puede ser div en 0'");
    if (Math.sign(veces) === -1) return console.error("El numero de veces no puede ser negativo");

    for (let i = 1; i <= veces; i++) {
        console.info(`${texto}, ${i}`);
    }
}

repetirTexto("Hola Mundo", 3);
repetirTexto("Hola mundo");
repetirTexto("Hola mundo", -2);
repetirTexto("Hola mundo", 0);


/*1.- Usar funciones expresadas con operadores ternarios para el retorno implícito - (Deja tu código simple, limpio y expresivo)
2.- Usar operadores ternarios concatenados e identados en lugar de if cuando este último no sea necesario - (Al igual que el anterior es más fácil de leer y mantener)
3.- Hacer las validaciones necesarias al comienzo de una función y al último solucionar el problema - (Deja la solución para el final y resuelve los posibles problemas primero con las validaciones)
4.- Definir valores por defecto en los parámetros de una función - (Mantén el control de los parámetros y anticipate a posibles valores vacíos)
5.- Usar el 'return' en condicionales if y alinear en código cuando sea de una sola línea - (evitar las llaves si el código de la condición tiene una sola línea)
6.- Si tu condición if ya tiene un return es redundante añadir un else. Evita anidar varios else if en una condición - (Hazlo simple y mantén el nivel sin utilizar tantos anidamientos en condiciones innecesarias)*/