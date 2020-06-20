//Funcion para poder jugar
function jugar() {
  //Para mostrar los numeros
  alert("El numero " + juegos + " es: " + numeros[juegos - 1]);
  //Pide todos los numeros hasta los juegos que se lleva
  for (var i = 0; i < juegos; i++) {
    let recibir = prompt("Ingrese el numero " + (i + 1));
    if (recibir != numeros[i]) {
      fin = true;
    }
  }
  //Para poder avanzar al siguiente numero
  juegos++;
  //Si escribio un numero mal hara el if
  if (fin === true) {
    reject();
  }
};

//Declarar variables
let numeros = [];
for (var i = 0; i < 5; i++) {
    numeros.push(Math.round(Math.random() * 10));
}
let juegos = 1;
let fin = false;
//Declarar la promesa
let juego = new Promise((resolve, reject) => {
  //Si fin es igual al else hara el if
  if (fin == false) {
    resolve();
  }
  //Si no hace el if hara el else
  else {
    reject();
  }
});
//Resolvemos la promesa o vemos su error
juego.then(() => {
  jugar();
}).then(() => {
  jugar();
}).then(() => {
  jugar();
}).then(() => {
  jugar();
}).then(() => {
  jugar();
}).then(() => {
  console.log("Ganaste Simón está feliz");
  alert("Ganaste Simón está feliz")
}).catch(() => {
  console.log("Simón está triste, te has equivocado :c")
  alert("Simón está triste, te has equivocado :c")
})
