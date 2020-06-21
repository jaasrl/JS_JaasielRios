//Declarar las variables
const width = 500;
const height = 500;
let canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
let context = canvas.getContext("2d");
context.translate(width / 2, height / 2);
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let minutesInt = 0;
let secondsInt = 0;
let milisecondsInt = 0;
let reloj = undefined;
let lapsos = 0;
context.beginPath();
context.arc(0, 0, 230, 0, Math.PI * 2);
context.stroke()
minutos(0);
segundos(0);
milisegundos(0);
manecillas();
//Funcion para dibujar el reloj
function dibujarReloj() {
    context.clearRect(-width / 2, -height / 2, width, height);
    context.beginPath();
    context.arc(0, 0, 230, 0, Math.PI * 2);
    context.strokeStyle = "black";
    context.stroke()
    manecillas();
    minutos(minutes);
    segundos(seconds);
    milisegundos(miliseconds);
    requestAnimationFrame(dibujarReloj);
}
//Funcion para dibujar las manecillas
function manecillas() {
    context.beginPath();
    context.strokeStyle = "black";
    for (let i = 0; i < 6; i++) {
        context.rotate(i * Math.PI / 6);
        context.moveTo(0, -230);
        context.lineTo(0, -200);
        context.stroke();
        context.moveTo(0, 230);
        context.lineTo(0, 200);
        context.stroke();
        context.rotate(-i * Math.PI / 6);
    }
}
//Funcion para lo manecilla de los minutos
function minutos(min) {
    context.beginPath()
    context.moveTo(0, 0);
    context.rotate(min * Math.PI / 30);
    context.lineTo(0, -190);
    context.lineWidth = 8;
    context.strokeStyle = "black";
    context.stroke();
    context.rotate(-min * Math.PI / 30);
}
//Funcion para la manecilla de los segundos
function segundos(sec) {
    context.beginPath()
    context.moveTo(0, 0);
    context.rotate(sec * Math.PI / 30);
    context.lineTo(0, -170);
    context.lineWidth = 6;
    context.strokeStyle = "black";
    context.stroke();
    context.rotate(-sec * Math.PI / 30);
}
//Funcion para la manecilla de los milisegundos
function milisegundos(mil) {
    context.beginPath()
    context.moveTo(0, 0);
    context.rotate(mil * Math.PI / 500);
    context.lineTo(0, -150);
    context.lineWidth = 4;
    context.strokeStyle = "red";
    context.stroke();
    context.rotate(-mil * Math.PI / 500);
}
//Para que al dar click en iniciar empiece a moverse las manecillas
$("#iniciar").on("click", (e) => {
    e.preventDefault()
    reloj = setInterval(() => {
        miliseconds += 10;
        seconds += 1 / 100;
        minutes += 1 / 6000;
        milisecondsInt += 10;
        secondsInt += 1 / 100;
        minutesInt += 1 / 6000;
        //Si milisegundos es menor o igual a 1000 hara el if
        if (miliseconds >= 1000) {
            miliseconds = 0;
        }
        //Si los segundos son menores o iguales a 60 hara el if
        if (seconds >= 60) {
            seconds = 0;
        }
        //Si los milisegundos son menor o igual a 1000 hara el if
        if (milisecondsInt >= 1000) {
            milisecondsInt = 0;
        }
        //Si los segundos son menores o iguales a 60 hara el if
        if (secondsInt >= 60) {
            secondsInt = 0;
        }
    }, 10);
    //Para poder hacer la animacion del reloj
    requestAnimationFrame(dibujarReloj)
});
//Si da click en pausar detendra el reloj
$("#pausar").on("click", (e) => {
    e.preventDefault()
    clearInterval(reloj);
});
//Si da click en intervalo mostrara el tiempo transcurrido hasta el momento
$("#intervalo").on("click", (e) => {
    e.preventDefault();
    lapsos++;
    minutesInt = Math.floor(minutesInt);
    secondsInt = Math.floor(secondsInt);
    let inter = $("<h4>");
    $(inter).text(`Lapso ${lapsos}: ${minutesInt}:${secondsInt}:${milisecondsInt}`);
    $("#intervalos").append(inter);
    minutesInt = 0;
    secondsInt = 0;
    milisecondsInt = 0;
});
//Si da click en parar
$("#reiniciar").on("click", (e) => {
  e.preventDefault()
  clearInterval(reloj)
  let inter = $("<h3>");
  minutes = Math.floor(minutes);
  seconds = Math.floor(seconds);
  $(inter).text(`Tiempo final: ${minutes}:${seconds}:${miliseconds}`);
  $("#intervalos").append(inter);
  miliseconds = 0;
  minutes = 0;
  seconds = 0;
  lapsos = 0;
});
