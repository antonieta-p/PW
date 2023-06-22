let Total = 0;
console.log("Hola");
function sumarprecio(valorproducto) {
  Total = Total + valorproducto;
  document.getElementById("Total").innerHTML =
    "TOTAL: " + "$" + Total ;
}
function Borrar() {
  Total = 0;
  document.getElementById("Total").innerHTML = "TOTAL:" + " $" + 0 ;
}
