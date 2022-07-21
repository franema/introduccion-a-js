const $boton = document.querySelector("#boton")

$boton.onclick = function hacerLista() {
    const $primerNombre = document.querySelector("#primer-nombre").value
    const $segundoNombre = document.querySelector("#segundo-nombre").value
    const $apellido = document.querySelector("#apellido").value
    const $edad = document.querySelector("#edad").value
    let listaFinal

    listaFinal = `Su primer nombre es ${$primerNombre}, su segundo nombre es ${$segundoNombre}, su apellido es ${$apellido}, y su edad es ${$edad}`

    document.querySelector("h1").textContent = `Bienvenido ${$primerNombre}!`
    document.querySelector("#lista-final").textContent = listaFinal
    return false
}