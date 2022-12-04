const btn1 = document.getElementById("btnnorte");
const btn2 = document.getElementById("btnnordeste");
const btn3 = document.getElementById("btncentrooeste");
const btn4 = document.getElementById("btnsudeste");
const btn5 = document.getElementById("btnsul");

btn1.addEventListener("click", FnNorte);
btn2.addEventListener("click", FnNordeste);
btn3.addEventListener("click", FnCentroOeste);
btn4.addEventListener("click", FnSudeste);
btn5.addEventListener("click", FnSul);

function FnNorte() {
  console.log("O frete das região Norte é: " + 15 + " reais");
  return;
}

function FnNordeste() {
  alert("O frete da região Nordeste é: " + 13 + " reais");
  return;
}

function FnCentroOeste() {
  alert("O frete da região Centro Oeste é: " + 18 + " reais");
  return;
}

function FnSudeste() {
  alert("O frete da região Sudeste é: " + 20 + " reais");
  return;
}

function FnSul() {
  alert("O frete da região Sul é: " + 22 + " reais");
  return;
}