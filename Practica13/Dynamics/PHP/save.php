<?php
/*****************************
 * Recibe un POST con las
 * llaves name, dispon y tipo
 *****************************/
include('config.php');

function saveProducts()
{
	$con = connect();
	return mysqli_query($con,"INSERT INTO product (name, disponibilidad, tipo) VALUES ('$_POST[name]', $_POST[dispon], $_POST[tipo])");
}

echo json_encode(saveProducts());
