const $form = document.querySelector("#carta-a-santa")
const nombre = $form.nombre.value // es lo mismo que decir nombre = document.querySelector("[name=nombre]").value
const ciudad = $form.ciudad.value
let comportamiento = $form.comportamiento.value
let descripcionRegalo = $form["descripcion-regalo"].value
console.log(nombre)
console.log(ciudad)
console.log(comportamiento)
console.log(descripcionRegalo)

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "este campo debe tener al meno 1 caracter"
    }

    if (nombre.length >= 50) {
        return "este campo debe enter menos de 50 caractares"
    }

    if (!/^[A-z]+$/.test(nombre)) {
        return "el campo nombre solo acepta letras"
    }

    return ""
}

console.log(validarNombre(nombre))

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "debe seleccionar una ciudad"
    }

    return ""
}

console.log(validarCiudad(ciudad))

function validarComportamiento(comportamiento) {

    if (comportamiento.length === 0) {
        return "Debe seleccionar un comportamiento"
    }

    return ""
}

console.log(validarComportamiento(comportamiento))

function validarDescripcionRegalo(descripcionRegalo) {


    if (descripcionRegalo.length === 0) {
        return "debe agregar una descripcion del regalo"
    }
    if (descripcionRegalo.length >= 100) {
        return "la descripcion del regalo debe ser menor a 100 caracteres"
    }

    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return "El campo descripcion regalo solo acepta letra y numeros"
    }
    return ""
}

console.log(validarDescripcionRegalo(descripcionRegalo))



function validarFormulario(event) {
    const $form = document.querySelector("#carta-a-santa")
    const nombre = $form.nombre.value // es lo mismo que decir nombre = document.querySelector("[name=nombre]").value
    const ciudad = $form.ciudad.value
    let comportamiento = $form.comportamiento.value
    let descripcionRegalo = $form["descripcion-regalo"].value


    const errorNombre = validarNombre(nombre)
    const errorCiudad = validarCiudad(ciudad)
    let errorComportamiento = validarComportamiento(comportamiento)
    let errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo)

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        comportamiento: errorComportamiento,
        "descripcion-regalo": errorDescripcionRegalo,
    }

    console.log(errores)
    manejarErrores(errores)

    event.preventDefault() //mata el evento. Evita que se envie el formulario
}

function manejarErrores(errores) {
    const keys = Object.keys(errores)
    console.log(keys)
    const $errores = document.querySelector("#errores")
    const $erroresAnteriores = document.querySelectorAll("#mensaje-error")
    console.log($erroresAnteriores)
    let cantidadErrores = 0

    keys.forEach(function (key) {
        console.log(errores[key])
        const error = errores[key]
        if (error) {
            cantidadErrores++
            $form[key].className = "error"
            const $error = document.createElement("li")
            $error.id = "mensaje-error"
            $error.innerText = error
            $errores.appendChild($error)
        } else {
            $form[key].className = ""
        }
    })
    $erroresAnteriores.forEach(function (mensajes) {
        mensajes.remove()
    })

    if (cantidadErrores === 0) {
        document.querySelector("#exito").className = ""
        $form.className = "oculto"
    }

    return cantidadErrores
}

$form.onsubmit = validarFormulario