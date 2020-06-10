//Obtener el body de nuestro html
let body = document.getElementsByTagName("body")[0];
//Crear un div el cual sera nuestro contenedor
let contenedor = document.createElement("div");
//Creamos nuestros elementos
let grande = document.createElement("h1");
let cursoWeb = document.createElement("h2");
let mediano = document.createElement("h2");
let italicas = document.createElement("i");
let jelou = document.createElement("h3");
let chiquito = document.createElement("h3");
//les asignamos las clases a nuestros elementos
contenedor.classList.add("contenedor");
grande.classList.add("blue");
mediano.classList.add("blue");
jelou.classList.add("red");
//Ponemos el texto que aparecera en cada uno de nuestros elementos
grande.innerText = "Soy el más grande...";
cursoWeb.innerText = "Curso Web 2020";
italicas.innerText = "Mediano";
jelou.innerText = "Jelou";
chiquito.innerText = "Estoy medio chiquito :(";
//Agregamos nuestro contendor al body de nuestro pagina html
body.appendChild(contenedor);
//Agregamos las italicas a nuestro elemento mediano
mediano.appendChild(italicas);
//Agregamos todos los elementos a nuestro contenedor
contenedor.prepend(grande, cursoWeb, mediano, jelou, chiquito);
