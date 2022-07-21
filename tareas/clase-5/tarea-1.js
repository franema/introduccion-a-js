const $botonCalcular = document.querySelector("#boton-calcular")


$botonCalcular.onclick = function calcularSalario() {
  const $salarioAnual = Number(document.querySelector("#salario-anual").value)
  const mesesPorAnio = 12
  let salarioMensual
  salarioMensual = $salarioAnual / mesesPorAnio
  document.querySelector("#salario-mensual").value = salarioMensual
  return false
}