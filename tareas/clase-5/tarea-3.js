const $boton = document.querySelector("#boton")

$boton.onclick = function calcularDuracionVideos() {

    const horasVideos = document.querySelectorAll(".horas")
    const minutosVideos = document.querySelectorAll(".minutos")
    const segundosVideos = document.querySelectorAll(".segundos")

    let horasTotales = sumarTiempoVideos(horasVideos)
    let minutosTotales = sumarTiempoVideos(minutosVideos)
    let segundosTotales = sumarTiempoVideos(segundosVideos)

    while (minutosTotales >= 60) {
        minutosTotales = minutosTotales - 60
        horasTotales = horasTotales + 1
    }

    while (segundosTotales >= 60) {
        segundosTotales = segundosTotales - 60
        minutosTotales = minutosTotales + 1
    }

    document.querySelector("#resultado").innerText = `La duracion total es de ${horasTotales} horas, ${minutosTotales} minutos y ${segundosTotales} segundos`
    return false
}

function sumarTiempoVideos (tiempo) {
    let tiempoTotal = 0
    for (i=0; i<tiempo.length; i++) {
        tiempoTotal = tiempoTotal + Number(tiempo[i].value)
    }
    return tiempoTotal
}