
//12) Programa una función que determine si un número es primo 
//    (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.


/*
const primo = (num) => {
    if (!num) return console.warn("Introduce un valor")
    if (typeof num != "number") return console.warn("Introduce un numero")
    if (Math.sign(num) === -1) return console.warn("Introduce un valor positivo")

    for (let i = 2 ; i < num/2 ; i++) {
        if (num%i === 0) return console.log(`El numero "${num}" No es un numero primo`);
    }

    return console.log(`El numero "${num}" Sí ES un numero primo`);
}
primo(-2);
primo(13);
primo(200);

*/



//13) Programa una función que determine si un número es par o impar, 
//    pe. miFuncion(29) devolverá Impar.

/*
const par = (num=undefined) => {
    if (!num) return console.warn("Introduce un valor")
    if (typeof num != "number") return console.warn("Introduce un numero")

    return (num%2 === 0)
        ? console.log(`El numero "${num}" es PAR`)
        : console.log(`El numero "${num}" es IMPAR`);
}

par(0);
par(14);
par(7);
par(2);
par(-29);
*/


//14) Programa una función para convertir grados Celsius a Fahrenheit 
//    y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

function convertor (num=undefined, escala="") {
    if (!num) return console.warn("Ingresa grado a convertir.");
    if (typeof num !== "number") return console.error("El valor ingresado NO es un numero.");
    if (escala.length !== 1) return console.error("Valor de unidad no reconocido.");
    if (!escala) return console.warn("Ingresa un valor de conversion.");

    let celsius = Math.round((num-32)*5/9);
    let fahrenheit = ((num*9/5)+32);

    return (escala.toUpperCase() === "C")
    ? console.log(`Tu conversion de ${num}°F en Celsius es: ${celsius}°C`)
    : (escala.toUpperCase() === "F")
      ? console.log(`Tu conversion de ${num}°C en Fahrenheit es: ${fahrenheit}°F`)
      : console.error("Conversion NO valida.");
}  


convertor(4,);
convertor("d","c");
convertor(0,"f");
convertor(32,"f");
convertor(32,"c");
convertor(-6,"cg");





