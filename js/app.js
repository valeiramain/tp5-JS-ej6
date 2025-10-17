
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
    cronometro.textContent = horas + ':' + minutos + ':' + segundos
}


// **** DOM Y LOGICA
//variables
let intervalo = null
let corriendo = false // bandera para continuar con el cronometro o volver a 0
let horas = 0
let minutos = 0
let segundos = 0


// elementos del DOM
const cronometro = document.querySelector('h1')
const btnIniciar = document.querySelector('.btn-success')
const btnPausar = document.querySelector('.btn-danger')
const btnReiniciar = document.querySelector('.btn-warning')

btnIniciar.addEventListener('click', () => {
    if (!corriendo && horas === 0 && minutos === 0 && segundos === 0) {
        corriendo = true
        horas = 0
        minutos = 0
        segundos = 0
    }
    btnPausar.disabled = false
    btnReiniciar.disabled = false

    intervalo = setInterval(actualizarCronometro, 1000)
})

btnPausar.addEventListener('click', () => {

    clearInterval(intervalo);
    corriendo = true

})


btnReiniciar.addEventListener('click', () => {

    clearInterval(intervalo);
    horas = 0
    minutos = 0
    segundos = 0
    intervalo = setInterval(actualizarCronometro, 1000)
})
