//Filtrar Números Pares Crear una función que reciba 
// un array con números del 0 al 10, y devuelva un nuevo 
// array que contenga solo los números pares.

const numeros= [0,1,2,3,4,5,6,7,8,9,10];
const numPares=numeros.filter((num) =>num%2===0)

console.log(numPares);

