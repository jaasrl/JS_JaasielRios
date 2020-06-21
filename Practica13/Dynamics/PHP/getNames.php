<?php
include("config.php");
$conexion = connect();

$result = mysqli_query($conexion, "SELECT name FROM product");
$response = [];
while($row = mysqli_fetch_assoc($result))
{
	array_push($response, $row);
}
echo json_encode($response);
?>
