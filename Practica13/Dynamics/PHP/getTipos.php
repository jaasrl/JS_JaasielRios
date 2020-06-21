<?php
/***********************************
 * Devuelve un arreglo con todos
 * los tipos de productos existentes
 * en la base de datos
 ***********************************/
include('config.php');

function getTipos()
{
	$con = connect();
	$result = mysqli_query($con, "SELECT * FROM  tipo");
	$response = [];
	while($row = mysqli_fetch_assoc($result))
	{
		array_push($response, $row);
	}

	return $response;
}

echo json_encode(getTipos());