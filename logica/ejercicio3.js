

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

/*
const aleatorio = (min="", max="") =>
    (!min)
    ? console.warn("Ingresa")
    : (!max)
      ? console.warn("Ingresa")
      : console.log(Math.random()*(max - min) + min);

aleatorio(501,600);

const aleatorio = () => console.info(Math.round(Math.random()*100+500));
aleatorio();*/

//10) Programa una función que reciba un número y evalúe si es capicúa o no 
//(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

/*
const capicua = (num = "") => {
    let numRevertido = parseInt(num.split("").reverse().join(""));
    if (parseInt(num) === numRevertido) return console.log(`${num} es capi`);
    else return console.warn(`${num} no es capi`);
}

capicua("123456789");
capicua("2002");


console.clear();*/


/*
const capicua = (num = 0) => {
    if (!num) return console.warn("No ingresaste numero");
    if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un numero.`);
    
    num = num.toString();
    let numRevertido = num.split("").reverse().join("");
    
    return (num === numRevertido)
    ? console.log(true)
    : console.warn(false);
}

capicua(2000);
capicua(2002);
capicua("hola");
capicua(18.99);
capicua(212.212);

*/



//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n,
//se define como el producto de todos los números enteros positivos desde 1 hasta n), 
//pe. miFuncion(5) devolverá 120.   5! = 5 x 4 x 3 x 2 x 1 = 120



function factorial (num = undefined) {
    var result = num;
    
    if (num === undefined || typeof num != "number") return console.warn("Ingresa un numero");
    if (num <= 0 || num === 1) return console.error("Syntax Error, Ingresa un numero positivo mayor que 1");

    while (num > 1) {
        num--;
        result *= num;
    }
    console.log(`Resultado: ${result}`);

}

factorial();
factorial(5);
factorial(-5);
factorial("5");