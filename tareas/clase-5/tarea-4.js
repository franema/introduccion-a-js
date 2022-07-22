


function calcularPromedio(numeros) {
    let sumaTotal = 0
    for (i = 0; i < numeros.length; i++) {
        sumaTotal = sumaTotal + numeros[i]
    }

    return sumaTotal / numeros.length
}


function calcularMayor(numeros) {
    let numeroMayor = 0
    for (i = 0; i < numeros.length; i++) {
        if (numeroMayor < numeros[i]) {
            numeroMayor = numeros[i]
        }
    }
    return numeroMayor
}


function calcularMenor(numeros) {
    let numeroMenor = numeros[0]
    for (let i = 0; i < numeros.length; i++) {
        if (numeroMenor > numeros[i]) {
            numeroMenor = numeros[i]
        }
    }
    return numeroMenor
}

function calcularRepetido(numeros) {
    let numeroRepetido = 0
    let contador = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === numeros[i + 1]) {
            numeroRepetido = numeros[i]
        }
    }
    return numeroRepetido
}

function obtenerResultados() {
    const $numeros = document.querySelectorAll("li, ol")
    const numeros = obtenerNumeros($numeros)
    document.querySelector("#promedio").textContent = "el promedio es " + calcularPromedio(numeros)
    document.querySelector("#numero-menor").innerText = "el numero menor es " + calcularMenor(numeros)
    document.querySelector("#numero-mayor").innerText = "el numero mayor es " + calcularMayor(numeros)
    document.querySelector("#numero-repetido").innerText = "el numero mas repetido es " + calcularRepetido(numeros)
}  


function obtenerNumeros($numeros) {
    const numeros = []
    for (let i = 0; i < $numeros.length; i++) {
        numeros.push(Number($numeros[i].innerText))
    }
    return numeros
}

obtenerResultados()