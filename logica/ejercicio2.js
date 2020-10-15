   /*
5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
   */
/*
const miFuncion = (texto = "") =>
   (!texto)
   ? console.warn("Ingresa cadena de txt.")
   : console.log(`Resultado: ${texto.split("").reverse().join("")}`)

miFuncion();
miFuncion("Hola Mundo");
*/

   /*
6) Programa una función para contar el número de veces que se repite una palabra 
en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
   */
/*
const miBuscador = (texto = "", keyword = "") => {
   if (!texto) return console.warn("No ingresaste el texto largo");
   if (!keyword) return console.warn("No ingresaste palabra a buscar");
   
   let i = 0,
   contador = 0;

   while (i !== -1) {
      i = texto.indexOf(keyword, i);
      if (i !== -1) {
         i++;
         contador++;
      }
   }
   return console.info(`La palabra "${texto}" se repite "${contador}" veces.`);   
}

miBuscador("", "mundo");
miBuscador("hola mundo adios mundo","");
miBuscador("hola mundo adios mundo","mundo");
*/

/*
function miBuscador(text, keyword) {
   if (text === "") {
      console.warn("La cadena está vacia, debe ingresar un texto");
   } else if (keyword === "") {
      console.warn("Debes ingresar la palabra a buscar!");
   } else if (typeof text != "String") {
      console.error("Debes ingresar texto solamente!");
   } else if (typeof keyword != "String") {
      console.error("Debes ingresar texto solamente!!!");
   } else {

      text = text.toLowerCase();
      keyword = keyword.toLowerCase();
      var palabras = text.split(" ");
      let contador = 0;
      const patron = new RegExp(text, "i");

   for (let i = 0 ; i < palabras.length ; i++) {

   }


   }
}



miBuscador("","");
miBuscador("hola mundo adios mundo","");
miBuscador("","mundo");
miBuscador("hola mundo adios mundo","32");
miBuscador("324","mundo");
*/





   
/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
  */



 const palindromo = (palabra = "") => {
    if (!palabra) return console.warn("No ingresaste una palabra o frase");
    
   palabra = palabra.toLowerCase();
   let alReves = palabra.split("").reverse().join("");
   
   return (palabra === alReves)
      ? console.info(`Si es palindromo, ${palabra} y ${alReves}.`)
      : console.warn("No son pali");

 }

 palindromo("");
 palindromo("Salas");


   
//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
//pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

console.clear();
/*
function miFuncion (texto = "", patron = "") {
   
   texto = texto.split(" ");
   
   console.log(texto);
   console.log(texto[0]);
   console.log(texto.indexOf("xyz1,"));
}

miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5");*/

const eliminarCaracteres = (texto = "", patron = "") =>
   (!texto)
   ? console.warn("No ingresaste txt")
   : (!patron)
     ? console.warn("No ingresaste txt")
     : console.info(texto.replace(new RegExp(patron, "ig"),""));


eliminarCaracteres("");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");