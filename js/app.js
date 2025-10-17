
function actualizarCronometro() {

    if (segundos < 59) {
        segundos++
    } else {
        segundos = 0
        if (minutos < 59) {
            minutos++
        } else {
            minutos = 0
            horas++
        }
    }

    horas = String(horas).padStart(2, '0');
    minutos = String(minutos).padStart(2, '0');
    segundos = String(segundos).padStart(2, '0');
    console.log('hora: ' + horas + '  minutos: ' + minutos + '  segundos: ' + segundos)
    cronometro.textContent = horas + ':' + minutos + ':' + segundos
}


// **** DOM Y LOGICA
//variables
let intervalo = null
// let tiempoInicial = 0
// let tiempoTranscurrido = 0
let corriendo = false
let horas = 0
let minutos = 0
let segundos = 0


// elementos del DOM
const cronometro = document.querySelector('h1')
const btnIniciar = document.querySelector('.btn-success')
const btnPausar = document.querySelector('.btn-danger')
const btnReiniciar = document.querySelector('.btn-warning')

btnIniciar.addEventListener('click', () => {
    if (!corriendo) {
        corriendo = true
        horas = 0
        minutos = 0
        segundos = 0

        intervalo = setInterval(actualizarCronometro, 1000)
        btnIniciar.disabled = true;
        btnPausar.disabled = false;
        btnReiniciar.disabled = false;
    }
})

btnPausar.addEventListener('click', () => {
     if (corriendo) {
        corriendo = false;
        clearInterval(intervalo);
        btnIniciar.disabled = false;
        btnPausar.disabled = true;
      }
})


btnReiniciar.addEventListener('click', () => {

    corriendo = false
    clearInterval(intervalo)

    horas = 0
    minutos = 0
    segundos = 0
    cronometro.textContent = '00:00:00'
    intervalo = setInterval(actualizarCronometro, 1000)
    btnIniciar.disabled = false;
    btnPausar.disabled = false;
    btnReiniciar.disabled = true;


})
