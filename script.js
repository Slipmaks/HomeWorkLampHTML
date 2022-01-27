let btn = document.getElementById("btn");
let light = document.getElementById("light");
let offCanvas = document.getElementById("off-canvas");

function toggleBtn() {
  btn.classList.toggle("active-toggle");
  light.classList.toggle("light-on");
}
function toggleCanvas() {
  offCanvas.style.width = "250px";
}

function closeOffCanvas() {
  offCanvas.style.width = "0px";
}
