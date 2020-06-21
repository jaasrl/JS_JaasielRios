//Agregamos los <option> con los tipos de productos
fetch('Dynamics/PHP/getTipos.php')
    .then((response) => {
        return response.json();
    }).then((data) => {
        let select = document.getElementById('tipo');
        data.forEach(element => {
            let new_option = document.createElement("option");
            new_option.value = element.id;
            new_option.innerText = element.name;
            select.appendChild(new_option);
        });
    });

//Funcion que se encarga de hacer la petición para guardar los datos
function saveDataAsync() {
    let data = new FormData(document.getElementById('miForm'));
    fetch('Dynamics/PHP/save.php', {
            method: 'POST',
            body: data
        })
        .then((response) => {
            return response.json();
        }).then((data) => {
            document.getElementById('mensaje').innerText = "Elemento creado con exito";
            document.getElementById('miForm').reset();
        }).catch((error) => {
            document.getElementById('mensaje').innerText = "Error:" + error;
        })
}

//Añadimos un manejador de eventos para cuando el formulario se envíe
document.getElementById('miForm').addEventListener('submit', (e) => {
    e.preventDefault();
    saveDataAsync();
})
