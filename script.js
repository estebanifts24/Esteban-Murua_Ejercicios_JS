//Calcular Promedio Escribir una función que
//  tome un array de números y 
// calcule el promedio.

var numeros = [3,5,23,14,9];
var promedio=0;
var suma=0;

suma= numeros.reduce((acumulador, numero )=> acumulador+numero,9)
promedio=suma/numeros.length;
console.log("el promedio es:" + promedio)


