//variables para obtener los elementos de la tabla 
let mouseDown = document.getElementById("onmousedown");
mouseDown.addEventListener("mousedown", () => {
  mouseDown.classList.add("mousedown");
})
let mouseMove = document.getElementsByTagName("body")[0];
mouseMove.addEventListener("mousemove", () => {
  let x = window.event.clientX;
  let y = window.event.clientY;
  let pMouseMove = document.getElementById("mouseMove");
  pMouseMove.getElementsByTagName("p")[0].innerText = `Tu cursor se encuentra en x: ${x} y en y: ${y}.`;
})
let mouseOut = document.getElementById("mouseOut");
mouseOut.addEventListener("mouseout", () => {
  mouseOut.classList.add("mouseout");
  mouseOut.getElementsByTagName("p")[0].innerText = "Ya no me quito";
})
let wheel = document.getElementById("onwheel");
wheel.addEventListener("wheel", ()=>{
  wheel.style.color = "#" + Math.round(Math.random() * 999999);
})
