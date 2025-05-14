// Ejercicio 1: Filtrar Números Pares
function filtrarPares(array) {
    return array.filter(num => num % 2 === 0);
}

// Ejercicio 2: Calcular Promedio
function calcularPromedio(array) {
    const suma = array.reduce((acc, num) => acc + num, 0);
    return suma / array.length;
}

// Ejercicio 3: Imprimir con Retraso
function imprimirConRetraso(array) {
    array.forEach((elemento, index) => {
        setTimeout(() => {
            console.log(elemento);
        }, (index + 1) * 1000);
    });
}

// Ejercicio 4: Operación con Callback
function operar(callback, a, b) {
    return callback(a, b);
}

const sumar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

// Ejercicio 5: Contador con Botones
let contador = 0;
const divContador = document.getElementById('contador');
document.getElementById('incrementar').addEventListener('click', () => {
    contador++;
    divContador.textContent = contador;
});
document.getElementById('decrementar').addEventListener('click', () => {
    contador--;
    divContador.textContent = contador;
});

// Ejercicio 6: Cambiar Texto de Párrafos
document.getElementById('cambiarTexto').addEventListener('click', () => {
    const parrafos = document.querySelectorAll('p');
    parrafos.forEach((p, index) => {
        p.textContent = `Párrafo cambiado ${index + 1}`;
    });
});

// Ejercicio 7 y 8: Agregar y Eliminar Elementos de una Lista
let numeroElemento = 1;
const lista = document.getElementById('lista');

document.getElementById('agregarElemento').addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = `Elemento ${numeroElemento++}`;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.style.marginLeft = '10px';
    botonEliminar.addEventListener('click', () => {
        lista.removeChild(li);
    });

    li.appendChild(botonEliminar);
    lista.appendChild(li);
});
