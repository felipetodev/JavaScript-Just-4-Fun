//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
//pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.



const miFuncion = (texto= "") => {
    if(!texto) return console.warn("Introduce texto a evaluar.");
    if(typeof texto === "number") return console.error("Introduce solo cadenas de texto");
    
    const noVocales = texto.match(/[^ áéíóúüaeiou]/gi);
    const vocales = texto.match(/[áéíóúüaeiou]/gi);
    
    if(vocales === null) {
        return console.log(`Palabra "${texto}" contiene: ${noVocales.length} Consonantes.`);
    } else if (noVocales === null) {
        return console.log(`Palabra "${texto}" contiene: ${vocales.length} Vocales.`);
    } else if (vocales !== noVocales) {
        return console.log(`Palabra "${texto}" contiene: ${vocales.length} Vocales, ${noVocales.length} Consonantes.`);
    } else {
        return console.error("Revisar error no cacho na compare.");
    }

}


miFuncion();
miFuncion("");
miFuncion("Hola Mundo");
miFuncion("oa oo ao");
miFuncion("tkm tk");
miFuncion("Brócoli");




//19) Programa una función que valide que un texto sea un nombre válido, 
//pe. miFuncion("Jonathan MirCha") devolverá verdadero.


/*
const validarNombre = (nombre = "") => {
 if(!nombre) return console.warn("No ingresaste un nombre");
 if(typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado, NO es una cadena de texto.`);

 let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

 return (expReg)
 ? console.info(`"${nombre}", es un nombre válido`)
 : console.warn(`"${nombre}" no es válido`);
}

validarNombre();
validarNombre(3);
validarNombre("23425");
validarNombre("Felipe Andrés");

*/

//20) Programa una función que valide que un texto sea un email válido,
//pe. miFuncion("jonmircha@gmail.com") devolverá verdadero
/*
const validarEmail = (email = "") => {
if(!email) return console.warn("No ingresaste un email");
if(typeof email !== "string") return console.error(`El valor ${email} ingresado, NO es una cadena de texto`);

let expReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);

    return (expReg)
    ? console.info(`"${email}", es un email valido.`)
    : console.warn(`"${email}", NO es un email valido.`);
}

validarEmail();
validarEmail(34);
validarEmail("fe,ossandon,u@gmail.com");
validarEmail("fe.ossandon.u@gmail.com");
*/

/*

function validarEmail(valor) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
     alert("La dirección de email " + valor + " es correcta!.");
    } else {
     alert("La dirección de email es incorrecta!.");
    }
  }

  valor.test("fe.ossandon.u@gmail.com");*/