/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

function calcularSalarioMensual() {
    const salariosAnuales = document.querySelectorAll(".integrante")
    let salarioMensual = 0
    const mesesAnio = 12
    let salarioTotal = 0
    for (i = 0; i < salariosAnuales.length; i++) {
        salarioTotal = salarioTotal + Number(salariosAnuales[i].value)
    }
    salarioMensual = salarioTotal / mesesAnio
    document.querySelector("#resultado-mensual").textContent = `El salario mensual es ${salarioMensual}`
}

function calcularSalarioPromedio() {
    const salariosAnuales = document.querySelectorAll(".integrante")
    let salarioTotal = 0
    let salarioPromedio = 0
    for (i = 0; i < salariosAnuales.length; i++) {
        salarioTotal = salarioTotal + Number(salariosAnuales[i].value)
    }
    salarioPromedio = salarioTotal / salariosAnuales.length
    document.querySelector("#resultado-promedio").textContent = `El salario promedio es ${salarioPromedio}`
}

function calcularSalarioMayor() {
    const salariosAnuales = document.querySelectorAll(".integrante")
    let salarioMayor = 0
    for (i = 0; i < salariosAnuales.length; i++) {
        if (Number(salariosAnuales[i].value) > salarioMayor) {
            salarioMayor = Number(salariosAnuales[i].value)
        }
    }
    document.querySelector("#resultado-mayor").textContent = `El salario mayor es ${salarioMayor}`
}

function calcularSalarioMenor() {
    const salariosAnuales = document.querySelectorAll(".integrante")
    let salarioMenor = Number(salariosAnuales[0].value)
    for (i = 0; i < salariosAnuales.length; i++) {
        if (Number(salariosAnuales[i].value) < salarioMenor) {
            salarioMenor = Number(salariosAnuales[i].value)
        }
    }
    document.querySelector("#resultado-menor").textContent = `El salario menor es ${salarioMenor}`
}

const $botonCalcular = document.querySelector("#boton-calcular")
const $botonAgregar = document.querySelector("#boton-agregar")
const $botonQuitar = document.querySelector("#boton-quitar")
const $botonLimpiar = document.querySelector("#boton-limpiar")

$botonAgregar.onclick = function agregar() {
    const salariosAnuales = document.querySelectorAll(".integrante")
    const $nuevoInput = document.createElement("input")
    document.querySelector("form").appendChild($nuevoInput)
    $nuevoInput.className = "integrante"
    $nuevoInput.type = "number"
    $nuevoInput.id = "numero" + salariosAnuales.length

}

$botonQuitar.onclick = function quitar() {
    const $integrantes = document.querySelectorAll(".integrante")
    const a = $integrantes.length
    $integrantes[a - 1].remove()

}

$botonLimpiar.onclick = function limpiar() {
    const $integrantes = document.querySelectorAll(".integrante")
    const $resultados = document.querySelectorAll(".resultado")
    for (i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove()
    }
    for (i = 0; i < $resultados.length; i++) {
        $resultados[i].textContent = ""
    }
}

$botonCalcular.onclick = function calcular() {
    const salariosAnuales = document.querySelectorAll(".integrante")
    if (salariosAnuales.length === 0) {
        document.querySelector("#resultado-promedio").textContent = `No ingresaste ningun valor`
        return false
    } else {
        for (i = 0; i < salariosAnuales.length; i++) {
            if (Number(salariosAnuales[i].value) === 0) {
                salariosAnuales[i].remove()
                calcular()
                return false
            }           


        }

        calcularSalarioPromedio()
                calcularSalarioMayor()
                calcularSalarioMenor()
                calcularSalarioMensual()
                return false
    }


}