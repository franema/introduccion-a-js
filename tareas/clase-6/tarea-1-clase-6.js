/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonContinuar = document.querySelector("#continuar")
const $botonCalcular = document.querySelector("#calcular")
const $botonReiniciar = document.querySelector("#reiniciar")
const $resultados = document.querySelector("strong")

$botonContinuar.onclick = function iniciar() {
    const integrantes = Number(document.querySelector("#integrantes").value)
    agregarIntegrantes(integrantes)
    mostrarBotones($botonCalcular)
    mostrarBotones($botonReiniciar)
}




function agregarIntegrantes(integrantes) {
    for (let i = 0; i < integrantes; i++) {
        const $edades = document.createElement("input")
        document.querySelector("#tabla").appendChild($edades)
        $edades.className = "edades"
        $edades.type = "number"
        const $labels = document.createElement("label")
        document.querySelector("#tabla").appendChild($labels)
        $labels.className = "labels"
        $labels.textContent = "integrante numero" + (i + 1)
    }
}

function mostrarBotones(boton) {
    boton.className = ""
}


function obtenerEdades() {
    const $edades = document.querySelectorAll(".edades")
    const edades = []
    for (let i = 0; i < $edades.length; i++) {
        edades.push(Number($edades[i].value))
    }
    return edades
}

$botonCalcular.onclick = function obtenerResultados() {
    const edades = obtenerEdades()
    const edadMayor = calcularMayorEdad(edades)
    const edadMenor = calcularMenorEdad(edades)
    const edadPromedio = calcularPromedioEdad(edades)
    $resultados.textContent = `La mayor edad es ${edadMayor}, la menor edad es ${edadMenor}, y la edad promedio es ${edadPromedio}`

}




function calcularMayorEdad(edades) {
    let edadMayor = 0
    for (let i = 0; i < edades.length; i++) {
        if (edadMayor < edades[i]) {
            edadMayor = edades[i]
        }
    }
    return edadMayor
}


function calcularMenorEdad(edades) {
    let edadMenor = edades[0]
    for (let i = 0; i < edades.length; i++) {
        if (edadMenor > edades[i]) {
            edadMenor = edades[i]
        }
    }
    return edadMenor
}

function calcularPromedioEdad(edades) {
    let edadPromedio = 0
    for (let i = 0; i < edades.length; i++) {
        edadPromedio = edadPromedio + edades[i]
    }
    return edadPromedio / edades.length
}

$botonReiniciar.onclick = function reiniciar () {
    borrarIntegrantes()
    borrarResultados()
    ocultarBotones($botonCalcular)
    ocultarBotones($botonReiniciar)
}

function borrarResultados () {
    $resultados.textContent = ""
}

function borrarIntegrantes() {
    const $edades = document.querySelectorAll(".edades")
    const $labels = document.querySelectorAll(".labels")
    for(let i = 0; i<$edades.length; i++) {
        $edades[i].remove()
    }
    for(let i = 0; i<$labels.length; i++) {
        $labels[i].remove()
    }
    document.querySelector("#integrantes").value = ""
}

function ocultarBotones(boton) {
    boton.className = "oculto"
}