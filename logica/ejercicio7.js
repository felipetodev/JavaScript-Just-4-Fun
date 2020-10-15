

//21) Programa una función que dado un array numérico devuelve otro array con los
//números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].


/*
const arrayAlCuadrado = (array=undefined) => {
    if (!array) return console.warn("No ingresate ningun Array.");
    if (!(array instanceof Array)) return console.error("El valor que ingresaste no es un arreglo.");
    if (array.length === 0) return console.error("Arreglo está vacio.");
    
    for (let num of array) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero.`);
    }
    
    var newArr = array.map(num => num*num);

        return console.log(`Arreglo original: ${array},\nArreglo elevado al cuadrado: ${newArr}`);
}

arrayAlCuadrado();
arrayAlCuadrado(true);
arrayAlCuadrado({});
arrayAlCuadrado([]);
arrayAlCuadrado([0, "3", 6]);
arrayAlCuadrado([0, 4, {}]);
arrayAlCuadrado([1, 4, 8]);

*/



//22) Programa una función que dado un array devuelva el número mas alto y el más 
//bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].


const arrayAlCuadrado = (arr=undefined) => {
    if (!array) return console.warn("No ingresate ningun Array.");
    if (!(array instanceof Array)) return console.error("El valor que ingresaste no es un arreglo.");
    if (array.length === 0) return console.error("Arreglo está vacio.");
    
    
    
    
}

//arrayAlCuadrado([1, 4, 5, 99, -60]);





//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos
//en el primero almacena los números pares y en el segundo los impares, 
//pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.