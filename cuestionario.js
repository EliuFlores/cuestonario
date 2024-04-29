// Función para iniciar el cronómetro
function iniciarCronometro() {
    var minutos = 5;
    var segundos = 0;

    var interval = setInterval(function() {
        segundos--;
        if (segundos < 0) {
            minutos--;
            segundos = 59;
        }
        if (minutos < 0) {
            clearInterval(interval);
            alert("¡Tiempo finalizado! La encuesta ha terminado.");
            
        }
        actualizarCronometro(minutos, segundos);
    }, 1000);
}

// Función para actualizar el cronómetro en la página
function actualizarCronometro(minutos, segundos) {
    var minutosStr = minutos < 10 ? "0" + minutos : minutos;
    var segundosStr = segundos < 10 ? "0" + segundos : segundos;
    document.getElementById("minutos").textContent = minutosStr;
    document.getElementById("segundos").textContent = segundosStr;
}

document.addEventListener("DOMContentLoaded", function() {
    iniciarCronometro();
});

document.getElementById('terminar-encuesta').addEventListener('click', function() {
    // Obtener respuestas del usuario
    var respuestas = document.querySelectorAll('#encuesta input[type="radio"]:checked, #encuesta select');
    var puntajeTotal = 0;

    // Calcular puntaje total sumando los valores de las respuestas
    respuestas.forEach(function(respuesta) {
        puntajeTotal += parseInt(respuesta.value);
    });

    // Mostrar el puntaje en la ventana emergente
    var popup = document.getElementById('popup');
    var puntajeTexto = document.getElementById('puntajeTexto');
    puntajeTexto.textContent = "Tu puntaje es: " + puntajeTotal;
    popup.style.display = 'block';
});

document.getElementById('popup-close').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
});
