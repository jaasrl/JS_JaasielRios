//Recibimos el valor
let numero = parseInt(prompt("Ingrese un numero mayor a 0"));
  if(Number.isNaN(numero)) {
    //Mostrara el alert diciendo que el dato ingresados no es un numero
    alert("El dato ingresado no es un numero");
  }
  else{
    //Si numero es mayor que 0 hara el if
    if(numero > 0) {
      //Arreglo en el que se guardaran los numeros primos
      let primos = [];
      //Arreglo en el que se guardaran los factores
      let factores = [];
      //Buscamos los numeros primos hasta el numero ingresado
      for (let i = 2; i <= numero; i++) {
        //Declarar que a es igual a 0
        let a = 0;
        //Recorrer mientras k sea menor a i
        for (let k = 2; k < i; k++) {
          //Si el modular de i entre k es estrictamente igual a 0 hara el if
          if(i%k===0) {
            //a va a ir aumentando
            a++;
          }
        }
        //Si a es estrictamente igual a 0 hara el if
        if(a===0) {
          //Ir agregando a primos i al final
          primos.push(i);
        }
      }
      //Recorrer mientras i sea menor que primos.length
      for (var i = 0; i < primos.length; i++) {
        //Si el modular de primos es estrictamente igual a 0 entrara al if
        if(numero%primos[i]===0) {
          //Ir agregando a factores al ultimo primos[i]
          factores.push(primos[i]);
        }
      }
      //Mostrar el numero ingresado
      console.log("Su número es:", numero);
      //Mostrar los divisores primos del numero
      console.log("Sus factores primos son:", factores);
    }
    //Si no entra al if hara el else
    else {
      //Muestra en un alert el error
      alert("Ingrese un número mayor a 0");
    }
  }
