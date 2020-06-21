//Funcion para obtener los nombres
function getName() {
    return "name=" + document.getElementById("clave").value;
}
//Funcion para obtener los tipos
function getTipo() {
    return "tipo=" + document.getElementById("tipos-productos").value;
}
//Funcion para obtener los productos
function getProducts() {
    fetch(`Dynamics/PHP/getProducts.php?${getName()}&${getTipo()}`, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        let table = document.getElementById('table-content');
        table.innerHTML = "";

        data.forEach(element => {
            let new_td = document.createElement("tr");
            new_td.innerHTML = `<td>${element.id}</td><td>${element.name}</td><td>${element.disponibilidad}</td><td>${element.tipo}</td>`;
            table.appendChild(new_td);
        });
    })
}
//Funcion para obtener los tipos
function getTipos() {
    fetch("Dynamics/PHP/getTipos.php").then((response) => {
        return response.json();
    }).then((data) => {
        let select = document.getElementById("tipos-productos");
        data.forEach((element) => {
            let option = document.createElement("option");
            option.value = element.id;
            option.innerText = element.name;
            select.appendChild(option);
        })
    })
}
//Funcion para obtener los nombres
function getNames() {
    fetch("Dynamics/PHP/getNames.php").then((response) => {
        return response.json();
    }).then((data) => {
        let select = document.getElementById("producto-editar");
        data.forEach((element) => {
            let option = document.createElement("option");
            option.value = element.name;
            option.innerText = element.name;
            select.appendChild(option);
        })
    })
}
//Funcion para actualizar los productos
function updateProduct() {
    let data = new FormData(document.getElementById('form-editar'));
    fetch("Dynamics/PHP/update.php", {
        method: "POST",
        body: data
    }).then((response) => {
        return response.json();
    }).then((data) => {
        document.getElementById('mensaje').innerText = "Elemento editado";
    }).catch((error) => {
        document.getElementById('mensaje').innerText = error;
        document.getElementById('form-editar').reset();
    })
}
getTipos();
getNames();
document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    getProducts();
})

document.getElementById('form-editar').addEventListener("submit", (e) => {
    e.preventDefault();
    updateProduct();
})
