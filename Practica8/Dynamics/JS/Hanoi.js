//Declramos las posiciones de las piezas
let pos1 = undefined;
let pos2 = undefined;
let pos3 = undefined;
let pos4 = undefined;
let pos5 = undefined;
//Busca si las cookies ya estan generdas
let cookiepos = buscarCookie(1);
//Si las cookies ya estan generadas hara el if
if (cookiepos != false) {
  //les asigna los valores de las cookies
  let indice1 = buscarCookie(1).search(/=/);
  pos1 = buscarCookie(1).substr(parseInt(indice1) + 1, 1);
  let indice2 = buscarCookie(2).search(/=/);
  pos2 = buscarCookie(2).substr(parseInt(indice2) + 1, 1);
  let indice3 = buscarCookie(3).search(/=/);
  pos3 = buscarCookie(3).substr(parseInt(indice3) + 1, 1);
  let indice4 = buscarCookie(4).search(/=/);
  pos4 = buscarCookie(4).substr(parseInt(indice4) + 1, 1);
  let indice5 = buscarCookie(5).search(/=/);
  pos5 = buscarCookie(5).substr(parseInt(indice5) + 1, 1);
}
//Si no generara las cookies
else {
  pos1 = 1;
  pos2 = 1;
  pos3 = 1;
  pos4 = 1;
  pos5 = 1;
  document.cookie = "pos1=1";
  document.cookie = "pos2=1";
  document.cookie = "pos3=1";
  document.cookie = "pos4=1";
  document.cookie = "pos5=1";
  let inicio = new Date();
  //inicio.setTime(inicio.getTime());
  document.cookie = "inicio=" + inicio.getTime();
}

//creamos los elementos
let tam1 = document.createElement("div");
tam1.classList.add("tam1");
let tam2 = document.createElement("div");
tam2.classList.add("tam2");
let tam3 = document.createElement("div");
tam3.classList.add("tam3");
let tam4 = document.createElement("div");
tam4.classList.add("tam4");
let tam5 = document.createElement("div");
tam5.classList.add("tam5");
let contenedor = document.getElementsByClassName("container")[0];
let torre1 = document.getElementById("torre1");
let torre2 = document.getElementById("torre2");
let torre3 = document.getElementById("torre3");
let salida = "";
let llegada = "";
generar();

//genera el tiempo en ganar y borra las cookies de las posiciones
function ganar() {
  let fin = new Date();
  let borrarCookie = new Date();
  borrarCookie.setTime(borrarCookie.getTime() - 10000);
  document.cookie = "pos1=1;expires=" + borrarCookie;
  document.cookie = "pos2=1;expires=" + borrarCookie;
  document.cookie = "pos3=1;expires=" + borrarCookie;
  document.cookie = "pos4=1;expires=" + borrarCookie;
  document.cookie = "pos5=1;expires=" + borrarCookie;
  let body = document.getElementsByTagName("body")[0];
  let tiempo = document.createElement("h3");
  body.appendChild(tiempo);
  let tInicio = document.cookie;
  let regexTiempo = /inicio=/;
  indiceInicio = tInicio.search(regexTiempo);
  indiceInicio += 7;
  tInicio = tInicio.substr(indiceInicio, 13);
  let diferencia = fin.getTime() - tInicio;
  let minutos = Math.floor(diferencia / 60000);
  let segundos = (diferencia / 1000) - (60 * minutos);
  segundos = segundos.toFixed(3);
  tiempo.innerText = `Su tiempo fue: ${minutos}:${segundos}`;
}

//busca las cookies de las posiciones
function buscarCookie(pos) {
  let a = undefined;
  let cookies = document.cookie;
  //Si pos es igual a 1 hara el if
  if (pos == 1) {
    let regex = /pos1=[1-3]/;
    let indice = cookies.search(regex);
    if (indice != -1) {
      a = cookies.substr(indice, 6);
    }
    else {
      a = false;
    }
  }
  //Si pos es igual a 2 hara el if
  if (pos == 2) {
    let regex = /pos2=[1-3]/;
    let indice = cookies.search(regex);
    if (indice != -1) {
      a = cookies.substr(indice, 6);
      }
      else {
        a = false;
      }
    }
    //Si pos es igual a 3 hara el if
    if (pos == 3) {
      let regex = /pos3=[1-3]/;
      let indice = cookies.search(regex);
      if (indice != -1) {
        a = cookies.substr(indice, 6);
      }
      else {
        a = false;
      }
    }
    //Si pos es igual a 4 hara el if
    if (pos == 4) {
      let regex = /pos4=[1-3]/;
      let indice = cookies.search(regex);
      if (indice != -1) {
        a = cookies.substr(indice, 6);
      }
      else {
        a = false;
      }
    }
    //Si pos es igual a 5 hara el if
    if (pos == 5) {
      let regex = /pos5=[1-3]/;
      let indice = cookies.search(regex);
      if (indice != -1) {
        a = cookies.substr(indice, 6);
      }
      else {
        a = false;
      }
    }
    return a;
}
//valida que la ficha que se mueve no sea mas grande que la que esta en la fila a donde se va a mover
function validar(ficha, llegada) {
  let a = true;
  //Si ficha es igual a tam2 hara el if
  if (ficha == "tam2") {
    if (llegada == pos1) {
      a = false;
    }
    }
    //Si ficha es igual a tam3 hara el else if
    else if (ficha == "tam3") {
      if (llegada == pos1 || llegada == pos2) {
        a = false;
      }
    }
    //Si ficha es igual a tam4 hara el else if
    else if (ficha == "tam4") {
      if (llegada == pos1 || llegada == pos2 || llegada == pos3) {
        a = false;
      }
    }
    //Si ficha es igual a tam5 hara el else if
    else if (ficha == "tam5") {
      if (llegada == pos1 || llegada == pos2 || llegada == pos3 || llegada == pos4) {
        a = false;
      }
    }
  return a;
}

//valida que la celda de llegada exista
function validLlegada(llegada) {
  let a = true;
  if (llegada != 1 && llegada != 2 && llegada != 3) {
    a = false;
  }
  return a;
}

//actualiza la posicion de las fichas
function pos(ficha, llegada){
  //Si ficha es igual a tam1 hara el if
  if (ficha == "tam1") {
    pos1 = llegada;
    document.cookie = "pos1=" + pos1;
  }
  //Si ficha es igual a tam2 hara el else if
  else if (ficha == "tam2") {
    pos2 = llegada;
    document.cookie = "pos2=" + pos2;
  }
  //Si ficha es igual a tam3 hara el else if
  else if (ficha == "tam3") {
    pos3 = llegada;
    document.cookie = "pos3=" + pos3;
  }
  //Si ficha es igual a tam4 hara el else if
  else if (ficha == "tam4") {
    pos4 = llegada;
    document.cookie = "pos4=" + pos4;
  }
  //Si ficha es igual a tam5 hara el else if
  else if (ficha == "tam5") {
    pos5 = llegada;
    document.cookie = "pos5=" + pos5;
  }
}
//Funcion para genera el tablero
function generar() {
  //Si pos 1 es igual a 1 hara el if
  if (pos1 == 1) {
    torre1.appendChild(tam1);
  }
  //Si pos 1 es igual a 2 hara el else if
  else if (pos1 == 2) {
    torre2.appendChild(tam1);
  }
  //Si pos 1 es igual a 3 hara el else if
  else if (pos1 == 3) {
    torre3.appendChild(tam1);
  }
  //Si pos 2 es igual a 1 hara el if
  if (pos2 == 1) {
    torre1.appendChild(tam2);
  }
  //Si pos 2 es igual a 2 hara el else if
  else if (pos2 == 2) {
    torre2.appendChild(tam2);
  }
  //Si pos 2 es igual a 3 hara el else if
  else if (pos2 == 3) {
    torre3.appendChild(tam2);
  }
  //Si pos 3 es igual a 1 hara el if
  if (pos3 == 1) {
    torre1.appendChild(tam3);
  }
  //Si pos 3 es igual a 2 hara el else if
  else if (pos3 == 2) {
    torre2.appendChild(tam3);
  }
  //Si pos 3 es igual a 3 hara el else if
  else if (pos3 == 3) {
    torre3.appendChild(tam3);
  }
  //Si pos 4 es igual a 1 hara el if
  if (pos4 == 1) {
    torre1.appendChild(tam4);
  }
  //Si pos 4 es igual a 2 hara el else if
  else if (pos4 == 2) {
    torre2.appendChild(tam4);
  }
  //Si pos 4 es igual a 3 hara el else if
  else if (pos4 == 3) {
    torre3.appendChild(tam4);
  }
  //Si pos 5 es igual a 1 hara el if
  if (pos5 == 1) {
    torre1.appendChild(tam5);
  }
  //Si pos 5 es igual a 2 hara el else if
  else if (pos5 == 2) {
    torre2.appendChild(tam5);
  }
  //Si pos 5 es igual a 3 hara el else if
  else if (pos5 == 3) {
    torre3.appendChild(tam5);
  }
}
//Variable para poder jugar
let jugar = setInterval(() => {
    generar();
    //Pedir los movimientos
    salida = prompt("Ingresa el numero de la torre de la cual se movera la primer pieza");
    llegada = prompt("Ingresa la torre a la cual se quiere mover la pieza");
    //Si es una llegada valida
    if (validLlegada(llegada) == true) {
      //si la torre es 1 hara el if
      if (salida == 1) {
        //Obtiene el elemnto de la pieza de arriba
        let fichaTorre1 = torre1.getElementsByTagName("div")[0];
        //valida que exista la ficha
        if (fichaTorre1 != undefined) {
          //la quitamos de la fila y actualizamos la posicion
          let ficha = fichaTorre1.classList[0];
          if (validar(ficha, llegada) == true) {
            torre1.removeChild(fichaTorre1);
            pos(ficha, llegada);
          }
          else {
            alert("Movimiento inválido");
          }
          generar();
        }
        else {
          alert("Torre vacia");
        }
      }
      //Si salida es igual a 2 hara el else if
      else if (salida == 2) {
        let fichaTorre2 = torre2.getElementsByTagName("div")[0];
        if (fichaTorre2 != undefined) {
          let ficha = fichaTorre2.classList[0];
          if (validar(ficha, llegada) == true) {
            torre2.removeChild(fichaTorre2);
            pos(ficha, llegada);
          }
          else {
            alert("Movimiento inválido");
          }
          generar();
        }
        else {
          alert("Torre vacia");
        }
      }
      //Si salida es igual a 3 hara el else if
      else if (salida == 3) {
        let fichaTorre3 = torre3.getElementsByTagName("div")[0];
        if (fichaTorre3 != undefined) {
          let ficha = fichaTorre3.classList[0];
          if (validar(ficha, llegada) == true) {
            torre3.removeChild(fichaTorre3);
            pos(ficha, llegada);
          }
          else {
            alert("Movimiento inválido");
          }
          generar();
        }
        else {
          alert("Torre vacia");
        }
      }
      else {
        alert("Ingresa una torre valida");
      }
      //si todas las fichas estan en la torre 2 gana
      if (pos1 == 2 && pos2 == 2 && pos3 == 2 && pos4 == 2 && pos5 == 2) {
        clearInterval(jugar);
        ganar();
        alert("Felicidades ganaste");
      }
      //si todas las fichas estan en la torre 3 gana
      if (pos1 == 3 && pos2 == 3 && pos3 == 3 && pos4 == 3 && pos5 == 3) {
        clearInterval(jugar);
        ganar();
        alert("Felicidades ganaste");
      }
    }
    else {
      alert("Ingresa una torre válida");
    }
}, 1000);
