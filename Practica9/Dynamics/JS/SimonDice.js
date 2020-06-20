//Funcion para hacer 5 veces de manera sincronica
function jugar(callback) {
  setTimeout(() => {
    callback();
    juegos++;
    setTimeout(() => {
      callback();
      juegos++;
      setTimeout(() => {
      callback();
      juegos++;
      setTimeout(() => {
        callback();
        juegos++;
        setTimeout(() => {
          callback();
          juegos++;
          //Si fin es igual a false hara el if
          if (fin == false) {
            //Mostrara en consola y con alert
            console.log("Ganaste Simón está feliz");
            alert("Ganaste Simón está feliz");
          }
          //Si no hizo el if hara el else
          else {
            //Mostrara en consola y con alert
            console.log("Simón está triste, te has equivocado :c");
            alert("Simón está triste, te has equivocado :c")
          }
          }, 100)
        }, 100)
      }, 100)
    }, 100)
  }, 100);
}
//Declarar las varibles
let fin = false;
let numeros = [];
let juegos = 1;
for (var i = 0; i < 5; i++) {
    numeros.push(Math.round(Math.random() * 10));
}
//LLamar la funcion jugar para poder jugar
jugar(() => {
    //Si no se ha equivocado hara el if
    if (fin === false) {
        //Alert que mostrara el nuevo  numero
        alert("El numero " + juegos + " es: " + numeros[juegos - 1]);
        //Pedira los numeros que se llevan hasta el momento
        for (var i = 0; i < juegos; i++) {
            let recibir = prompt("Ingrese el numero " + (i + 1));
            if (recibir != numeros[i]) {
                fin = true;
            }
        }
    }
});
