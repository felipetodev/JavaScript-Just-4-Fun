


//15) Programa una función para convertir números de base binaria a decimal 
//    y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

/*
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if(numero === undefined) return console.warn("No ingresaste el numero a convertir");
  if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un numero`);
  if(base === undefined) return console.warn("No ingresaste la base a convertir");
  if(typeof base !== "number") return console.error(`El valor "${base}" ingresado, NO es un numero`);

  if(base === 2) {
    return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
  } else if (base === 10) {
    return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`)
  }
}

convertirBinarioDecimal();
convertirBinarioDecimal("2");
convertirBinarioDecimal(100);
convertirBinarioDecimal(100,"2");
convertirBinarioDecimal(100,2);

*/

//16) Programa una función que devuelva el monto final después de aplicar un 
//    descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

/*
const descto = (monto=undefined, porcentaje=undefined) => {
    if(Math.sign(monto) === -1 || Math.sign(porcentaje) === -1) return console.error("Debes ingresar un monto positivo.");
    if(monto === undefined) return console.warn("No ingresaste datos.")
    if(typeof monto !== "number") return console.error("No ingreses texto en campo NUMERICO.")
    if(porcentaje >= 100) return console.error(`El descuento aplicado de ${porcentaje}% es incorrecto.`);

    (!monto)
    ? console.warn("El monto ingresado no es correcto, vuelve a intentar.")
    : (!porcentaje)    
      ? console.warn(`No ingresaste descuento al valor $${monto}`)
      : console.log(`Monto final con descuento: $${monto-(monto*porcentaje/100)}`)
}

descto();
descto(1000, 20);
descto(1500, 50);
descto(2500, 120);
descto(-12, 10);
descto(1000, -20);
*/


//17) Programa una función que dada una fecha válida determine cuantos años han 
//    pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).


function funcionAnos(ano=undefined, mes=undefined, dia=undefined) {
  //if(ano === undefined || mes === undefined || dia === undefined) return console.warn("No ingresaste valor")
  if(!ano || !mes || !dia) return console.warn("Ingresa un año valido");
  if(typeof ano !== "number") return console.error("Debes ingresar año valido.")

  let date = new Date(ano,mes,dia).getFullYear();
  let actualDate = new Date().getFullYear();

    (date === actualDate)
    ? console.warn("error")
    : console.log(`Tienes ${actualDate-date} años de edad en ${actualDate}.`);

}

//Formato: (año/mes/dia)
funcionAnos();
funcionAnos(1984,4,23);
funcionAnos(1990,3,2);
funcionAnos(1991,0,20);
funcionAnos("asd34",4,2);
