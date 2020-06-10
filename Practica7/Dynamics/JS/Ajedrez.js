//Obtenemos el body de nuestro html
let body = document.getElementsByTagName("body")[0];
//Obtenemos el numero que va a ser la dimension del tablero
let medida = parseInt(prompt("Ingrese un numero mayor a 0 para las medidas del tablero"));
//Si el dato ingresado no es un numero hara el if
  if(Number.isNaN(medida)){
    //Mandara una alerta diciendo que no es un numero
    alert("Dato invalido, ingresa un numero")
  }
  else{
    //Si medida es mayor a 0 entrara al if
    if(medida > 0){
      //Creamos una tabla y se la agregamos al body
      let tabla = document.createElement("table");
      body.appendChild(tabla);
      //Recooremos mientras i sea menor a la medida para generar el tablero
      for (let i = 0; i < medida; i++) {
        //Creamos una fila y se la agregamos a la tabla
        let fila = document.createElement("tr");
        tabla.appendChild(fila);
        //Si el modular de i entre 2 es 0 hara el if
        if (i % 2 == 0) {
          //Recorremos mientras j es menor a la medida para ir llenando las celdas
          for (let j = 0; j < medida; j++) {
            //Si el modular de j entre 2 es igual a 0 hara el if
            if (j % 2 == 0) {
              //Creamos una celda con el color menta definido en el css y la añadimos a la fila
              let menta = document.createElement("td");
              menta.classList.add("menta");
              fila.appendChild(menta);
            }
            //Si no hace el if (j % 2 == 0) hara el else
            else {
              //Creamos una celda con el color azul definido en el css y la añadimos a la fila
              let azul = document.createElement("td");
              azul.classList.add("azul");
              fila.appendChild(azul);
            }
          }
        }
        //Si no hace al if (i % 2 == 0) hara el else
        else {
          //Recorrera mientras j sea menor a medida
          for (let j = 0; j < medida; j++) {
            //Si el modular de la division de j entre 2 es 0 hara el if
            if (j % 2 == 0) {
              //Creamos una celda con el color axul definido en el css y la añadimos a la fila
              let azul = document.createElement("td");
              azul.classList.add("azul");
              fila.appendChild(azul);
            }
            //Si no hace el if(j % 2 == 0) hara el if
            else {
              //Creamos una celda con el color menta definido en el css y la añadimos a la fila
              let menta = document.createElement("td");
              menta.classList.add("menta");
              fila.appendChild(menta);
            }
          }
        }
      }
    }
    //Si no hace el if (medida > 0) hara el else
    else{
      //Mandara una alerta deiceindo que se ingrese un numero mayor a 0
      alert("Ingresa un numero mayor a 0");
    }
  }
