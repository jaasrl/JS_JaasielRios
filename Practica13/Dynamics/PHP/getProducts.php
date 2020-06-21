<?php
/***********************************
 * Devuelve todas las coincidencias
 * de un producto que se les pasan
 * por_GET['name']
 ***********************************/
include('config.php');

function getProducts($name, $value)
{
	$con = connect();
	if ($_GET['tipo'] == "n") {
		$result = mysqli_query($con,"SELECT product.id, product.name, product.disponibilidad, tipo.name AS tipo FROM product JOIN tipo ON product.tipo=tipo.id WHERE UPPER(product.name) LIKE UPPER('%$name%')");
	}
	else {
		$result = mysqli_query($con,"SELECT product.id, product.name, product.disponibilidad, tipo.name AS tipo FROM product JOIN tipo ON product.tipo=tipo.id WHERE UPPER(product.name) LIKE UPPER('%$name%') AND product.tipo = ".$value."");
	}
	$response = [];
	while($row = mysqli_fetch_assoc($result))
	{
		array_push($response, $row);
	}

	return $response;
}

if (isset($_GET['name'])&& isset($_GET['tipo'])) {
	getProducts($_GET['name'], $_GET['tipo']);
	echo json_encode(getProducts($_GET['name'],$_GET['tipo']));
}
else
	echo json_encode(1);
