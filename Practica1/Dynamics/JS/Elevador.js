//Recibimos los valores
let a = parseInt(prompt("Ingrese el elevador A"));
let b = parseInt(prompt("Ingrese el elevador B"));
let gama = parseInt(prompt("Ingrese la posición de Gama"));
//Validar que los datos del prompt sean numeros si mo son numeros entrara al if
  if(Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(gama)) {
    //Mostrara el alert diciendo que los datos ingresados no son numeros
    alert("Los datos ingresados no son numeros");
  }
  //Sino hizo el if hara el else
  else {
    //Mostrar los varoleres de las variables a, b y gama en la consola
    console.log("Elevador A:", a);
    console.log("Elevador B:", b);
    console.log("Posicion Gama:", gama);
    //Si gama es mayor que a entrara el if
    if(gama>a) {
      //valorA sera el valor de gama menos a
      valorA = gama-a;
    }
    //Sino hace el if entrara al else
    else {
      //valorA sera el valor de a menos gama
      valorA = a-gama;
    }
    //Si gama es mayor que b entrara al if
    if(gama>b) {
      //valorB sera el valor obtenido de gama menos b
      valorB = gama-b;
    }
    //Si no hace le if entrara al else
    else {
      //valorB sera el valor de b menos gama
      valorB = b-gama;
    }
    //si el valorA es mayor que el valorB entrara al if
    if(valorA > valorB) {
      //Mostrar el resultado en la consola
      console.log("Gama, el elvador B esta mas cerca de tu piso.");
      //Dara una alerta de que el elevador mas cercano es el B
      alert("Gama, el elvador B esta mas cerca de tu piso.");
    }
    //Si no entra al if verificara con else if si valorA es menor que valorB y entrara
    else if (valorA < valorB) {
      //Mostrar el resultado en la consola
      console.log("Gama, el elvador A esta mas cerca de tu piso.");
      //Dara una alerta de que el elevador mas cercano es el A
      alert("Gama, el elvador A esta mas cerca de tu piso.");
    }
    //Sino entro al else if entara al else
    else {
      //Mostrar el resultado en la consola
      console.log("Gama, ambos elevadores estan a la misma distancia de ti.");
      //Dara una alerta diciendo que los dos elevadores estan a la misma distancia
      alert("Gama, ambos elevadores estan a la misma distancia de ti.");
    }
  }
