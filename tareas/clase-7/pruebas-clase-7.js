function sumar(n1, n2) {
    return n1 + n2
}

console.assert(sumar(1, 2) === 3, "la suma de 2 + 1 no dio 3")




function probarValidarNombre() {

    console.assert(validarNombre("") === "este campo debe tener al meno 1 caracter",
        "fallo la validacion de nombre vacio")

    console.assert(validarNombre("asdasdasdasdasdasdasdasdasdasdasdasdasdasdadsdasdasd") ===
        "este campo debe enter menos de 50 caractares",
        "fallo la validacion de nombre mayor a 50 caracteres")

    console.assert(validarNombre("juan") === "", "fallo la validacion con nombre valido")
}

probarValidarNombre()


function probarValidarCiudad() {
    console.assert(validarCiudad("") === "debe seleccionar una ciudad",
        "fallo la validacion de ciudad")
}

probarValidarCiudad()

function probarValidarComportamiento() {
    console.assert(validarComportamiento("") === "Debe seleccionar un comportamiento",
        "fallo la validacion de comportamiento")
}

probarValidarComportamiento()


function probarValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo("") === "debe agregar una descripcion del regalo",
        "fallo la validacion de la descripcion del regalo vacia")

    console.assert(validarDescripcionRegalo("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") ===
        "la descripcion del regalo debe ser menor a 100 caracteres",
        "fallo la validacion de la descripcion del regalo muy larga")

    console.assert(validarDescripcionRegalo("..,") === "El campo descripcion regalo solo acepta letra y numeros",
        "fallo la validacion de caracteres")
}

probarValidarDescripcionRegalo()