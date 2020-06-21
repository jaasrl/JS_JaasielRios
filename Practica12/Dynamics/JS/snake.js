//Declara las variables
let campo = document.getElementById("campo");
let largo = 20;
campo.style.width = (largo * 20) + "px";
let serpiente = document.createElement("div");
serpiente.classList.add("serpiente");
let arraySerpiente = [0];
let posicion = 0;
let fila = 0;
let direccion = 2;
let velocidad = 500;
let manzana = null;
let cuadroManzana = document.createElement("div");
cuadroManzana.classList.add("fruta");
let body = document.getElementsByTagName("body")[0];
let arriba = document.getElementById("arriba");
//Evento que pasar al dar click a arriba
arriba.addEventListener("click", () => {
    if (direccion != 3) {
        direccion = 1;
    }
});
let abajo = document.getElementById("abajo");
//Evento que pasara al dar click a abajo
abajo.addEventListener("click", () => {
    if (direccion != 1) {
        direccion = 3;
    }
});
let izquierda = document.getElementById("izquierda");
//Evento que sucedera al dar click a la izquierda
izquierda.addEventListener("click", () => {
    if (direccion != 2) {
        direccion = 4;
    }
});
let derecha = document.getElementById("derecha");
//Evento que sucedera al dar click a la derecha
derecha.addEventListener("click", () => {
    if (direccion != 4) {
        direccion = 2;
    }
});
generar();
//Funcion para generar el campo
function generar() {
    if (campo.getElementsByTagName("div").length != 0) {
        for (let i = 0; i < largo * largo; i++) {
            campo.removeChild(campo.childNodes[0])
        }
    }
    for (let i = 0; i < largo * largo; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        campo.appendChild(pixel);
    }
    for (valor of arraySerpiente) {
        let serpiente = document.createElement("div");
        serpiente.classList.add("serpiente");
        campo.replaceChild(serpiente, campo.getElementsByTagName("div")[valor]);
    }
    if (manzana != null) {
        campo.replaceChild(cuadroManzana, campo.getElementsByTagName("div")[manzana]);
    }
}
//Funcion para poder comer
function comer() {
    if (manzana === posicion) {
        arraySerpiente.push(posicion);
        manzana = null;
        velocidad = velocidad * 0.98;
    }
}
//Funcion para validar el fin del juego
function validarEndGame() {
    if (arraySerpiente.length > 1) {
        for (let i = 1; i < arraySerpiente.length; i++) {
            if (posicion == arraySerpiente[i]) {
                endGame();
            }
        }
    }
}
//Funcion para terminar el juego
function endGame() {
    clearInterval(jugar);
    let go = document.createElement("div");
    go.classList.add("gameover");
    go.innerText = "¡Game Over!";
    body.removeChild(campo);
    body.appendChild(go);
    body.removeChild(body.getElementsByClassName("botones")[0]);
}
//Funcion para moverse
function mover(dir) {
    let cant = undefined;
    if (dir == 1) {
        if (fila == 0) {
            cant = largo * (largo - 1);
            fila = largo - 1;
            posicion = (largo * (largo - 1)) + posicion;
        } else {
            cant = largo * -1;
            fila--;
            posicion = posicion - (largo * 1);
        }
        arraySerpiente.unshift(posicion);
        arraySerpiente.pop();
    } else if (dir == 2) {
        if (posicion == (fila * largo) + (largo - 1)) {
            cant = -1 * (largo - 1);
            posicion = posicion - (largo - 1);
        } else {
            cant = 1;
            posicion = posicion + 1;
        }
        arraySerpiente.unshift(posicion);
        arraySerpiente.pop();
    } else if (dir == 3) {
        if (fila == largo - 1) {
            cant = -1 * (largo * (largo - 1));
            posicion = posicion - largo * (largo - 1);
            fila = 0;
        } else {
            cant = largo;
            fila++;
            posicion = posicion + largo;
        }
        arraySerpiente.unshift(posicion);
        arraySerpiente.pop();
    } else if (dir == 4) {
        if (posicion % largo == 0 || posicion == 0) {
            cant = largo - 1;
            posicion = posicion + (largo - 1)
        } else {
            cant = -1;
            posicion = posicion - 1;
        }
        arraySerpiente.unshift(posicion);
        arraySerpiente.pop();
    }
    return cant;
}

let jugar = setInterval(juego, velocidad);
//Funcion para el juego
function juego() {
    mover(direccion);
    validarEndGame();
    comer();
    generar();
}
//Un set time out para generar las manzanas
setTimeout(() => {
    manzana = Math.floor(Math.random() * (largo * largo));
    let fruta = setInterval(() => {
        if (manzana == null) {
            console.log("manzana")
            manzana = Math.floor(Math.random() * (largo * largo));
        }
    }, 30000);
}, 10000);
