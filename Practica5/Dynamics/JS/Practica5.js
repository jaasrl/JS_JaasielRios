//Recibir el mensaje a validar
let mensaje = prompt("Ingresa un mensaje");
//Regex que busca dentro de la etiqueta script si equisde aparezca al menos 5 veces
let r1 = /<script>((.*(equisde).*){5,})<\/script>/;
//Regex que busca dentro de la etiqueta script y que  equisde aparezca menos de 5 veces
let r2 = /((<script>.*<\/script>)|(.*(equisde).*){5,})/;
//Variable para revisar el mensaje con el regex numero 1
let checa1 = mensaje.search(r1);
//Si revision es mayor o igual a 0 hara el if
if(checa1 >=0) {
    //Manda una alerta diciendo que es el ciberterrorista
    alert("Oso oso mentiroso, vete lejos antes de que te lanze mis calcetines olor a queso.");
}
//Si no hace el if hara el else
else {
    //Variable para revisar el mensaje con el regex numero 2
    let checa2 = mensaje.search(r2);
    //Si revision2 es mayor o igual a 0 hara el if
    if(checa2 >= 0) {
        //Manda una alerta a los aliados del FBI
        alert("¿Bob?\n ¿Wade?")
    }
}
