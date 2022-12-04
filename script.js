const botao1 = document.getElementById("btnnorte")
const botao2 = document.getElementById("btnnordeste")
const botao3 = document.getElementById("btncentrooeste")
const botao4 = document.getElementById("btnsudeste")
const botao5 = document.getElementById("btnsul")

botao1.addEventListener("click", FnNorte)
botao2.addEventListener("click", FnNordeste)
botao3.addEventListener("click", FnCentroOeste)
botao4.addEventListener("click", FnSudeste)
botao5.addEventListener("click", FnSul)

function FnNorte() {
  alert("O frete da região Norte é: " + 15 + " reais")
  return
}

function FnNordeste() {
  alert("O frete da região Nordeste é: " + 13 + " reais")
  return
}

function FnCentroOeste() {
  alert("O frete da região Centro Oeste é: " + 18 + " reais")
  return
}

function FnSudeste() {
  alert("O frete da região Sudeste é: " + 20 + " reais")
  return
}

function FnSul() {
  alert("O frete da região Sul é: " + 22 + " reais")
  return
}