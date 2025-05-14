//Contador con Botones Crear un botón para incrementar y otro para decrementar un contador mostrado en un elemento div. Actualizar el texto del div al hacer click

const contadorDiv = document.getElementById('contador');
const incrementarBtn = document.getElementById('incrementar');
const decrementarBtn = document.getElementById('decrementar');

let contador = 0;

        // Función para actualizar el contador
        function actualizarContador() {
            contadorDiv.textContent = contador;
        }

        // Evento para incrementar el contador
        incrementarBtn.addEventListener('click', () => {
            contador++;
            actualizarContador();
        });
         decrementarBtn.addEventListener('click', () => {
            contador--;
            actualizarContador();
        });