//Definir las constantes de tamaño
const width = 500;
const height = 500;
//Funcion para dibujar el retangulo
function dibujarRect(context, color) {
    context.clearRect(-width / 2, -height / 2, width, height);
    context.beginPath();
    context.rect(-100, -200, 200, 400);
    context.lineWidth = 5;
    context.fillStyle = color;
    context.fill();
}
//Funcion para dibuhar el circulo
function dibujarCirc(context, color) {
    context.clearRect(-width / 2, -height / 2, width, height);
    context.beginPath();
    context.arc(0, 0, 200, 0, Math.PI * 2);
    context.lineWidth = 5;
    context.fillStyle = color;
    context.fill();
}
//Funcion para dibujar a Mickey Mouse
function dibujarMickey(context, color) {
    context.clearRect(-width / 2, -height / 2, width, height);
    context.beginPath();
    context.arc(0, 0, 150, 0, Math.PI * 2)
    context.moveTo(125, -125);
    context.arc(125, -125, 100, 0, Math.PI * 2);
    context.moveTo(-130, -130);
    context.arc(-130, -130, 100, 0, Math.PI * 2);
    context.lineWidth = 5;
    context.fillStyle = color;
    context.fill();
}
$(document).ready(() => {
  //Para obtener el canvas
  let canvas = document.getElementById('canvas');
  //Obtener sus medidas
  canvas.width = width;
  canvas.height = height;
  let ctx = canvas.getContext("2d");
  ctx.translate(width / 2, height / 2);
  //lo que hara al presionar dibujar
  $("#Dibujar").on("click", (e) => {
    e.preventDefault()
    let fondo = $("#fondo").val();
    //Si figura es igual a rectangulo hara el if
    if ($("#Figura").val() == "rectangulo") {
      dibujarRect(ctx, fondo);
    }
    //Si figura es igual a circulo hara el else if
    else if ($("#Figura").val() == "circulo") {
      dibujarCirc(ctx, fondo);
    }
    //Si figura es igual a mickey hara el else if 
    else if ($("#Figura").val() == "mickey") {
      dibujarMickey(ctx, fondo);
    }
  })
})
