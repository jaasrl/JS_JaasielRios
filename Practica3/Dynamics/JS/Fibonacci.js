//Declarar la variable donde inician los numeros de Fibonacci
var fib = [0,1];
//Recibir los valores de largo y ancho
var largo = parseInt(prompt("Ingrese un numero mayor a 0 para el largo del caracol"));
var ancho = parseInt(prompt("Ingrese el un numero mayor a 0 para el ancho del caracol"));
//Validar que sean numeros los valores que se hayan mandado
if(Number.isNaN(largo) || Number.isNaN(ancho)) {
  //Mostrara el alert diciendo que el datos ingresados no son numeros
  alert("Los datos ingresados no son numeros");
}
else{
  //Si largo es mayor a 0 entrara al if
  if(largo > 0){
    //Si ancho es mayor a 0 entrara al if
    if (ancho > 0){
      //Declarar los numeros que habra en el caracol
      var total = largo * ancho;
      //Declarar las variables para moverse por el caracol
      var filaArriba = 1;
      var filaAbajo = largo;
      var colDerecha = ancho;
      var colIzquierda = -1;
      let fila = 0;
      let col = 0;
      //Declarar los numeros que tendra dentro el caracol por medio de un nuevo arreglo
      let caracol = new Array();
      //Recorrer hasta que i sea menor a total
      for (let i = 0; i < total; i++){
        //Si i es distinta de 1 y 0 hara el if
        if(i != 1 && i != 0){
          fib[i] = fib[i-1]+fib[i-2];
        }
      }
      //Declarar las dimensiones del caracol
      for (let i = 0; i < largo; i++){
        //Declarar un nuevo array
        caracol[i] = new Array();
        //Recorrer meientars j sea menor a ancho
        for (let j = 0; j < ancho; j++){
          caracol[i][j] = 0;
        }
      }
      //Insertar los numeros dentro del carcol
      let i = 0;
      //Recorrer mientras j sea menor a total
      for (let j = 0; i < total; j++){
        //Si se encuentra arriba y a la derecha insertara numeros hacia abajo
        if(col == colDerecha && fila == filaArriba){
          //Mientras fila sea menor a dilaAbajo
          while(fila < filaAbajo){
            caracol[fila][col] = fib[i];
            i++;
            fila++;
          }
          col--;
          fila--;
          filaAbajo--;
        }
        //Si se encuentra abajo y a la derecha insertara numeros a la izquierda
        else if(col == colDerecha-1 && fila == filaAbajo){
          //Mientras col sea mayor a colIzquierda
          while(col > colIzquierda){
            caracol[fila][col] = fib[i];
            i++;
            col--;
          }
          col++;
          fila--;
          colIzquierda++;
        }
        //Si se encuentra abajo y a la izquierda insertara numeros hacia arriba
        else if(col == colIzquierda && fila == filaAbajo-1){
          //Mientras fila sea mayor o igual a filaArriba
          while(fila >= filaArriba){
            caracol[fila][col] = fib[i];
            i++;
            fila--;
          }
          fila++;
          col++;
          filaArriba++;
        }
        //Si ese encuentra abajo y a la derecha insertara numeros hacia la izquierda
        else{
          //Mientras col sea menor a colDerecha
          while(col < colDerecha){
            caracol[fila][col] = fib[i];
            i++;
            col++;
          }
          fila++;
          col--;
          colDerecha--;
        }
      }
      //Para ver el largo que se pidio
      console.log("Largo:",largo);
      //Para ver el ancho que se pidio
      console.log("Ancho:",ancho);
      //Para poder ver nuestro caracol en la consola
      console.log(caracol);
      }
    //Si no entro al if (ancho > 0) hara el else
    else{
      //Mandar una alerta pidiendo que ingrese numeros mayores a 0
      alert("Ingresa numeros mayores a 0");
    }
  }
  //Si no entro al if (largo > 0) hara el else
  else{
    //Mandar una alerta pidiendo que ingrese numeros mayores a 0
    alert("Ingresa numeros mayores a 0");
  }
}
