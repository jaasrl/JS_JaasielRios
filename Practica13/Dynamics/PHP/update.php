<?php
include("config.php");
$conexion = connect();
function update() {
    $tipo = $_POST['tipo-editar'];
    $valor = $_POST['valor-editar'];
    $producto = $_POST['producto-editar'];
    $query = mysqli_query($conexion, "UPDATE product SET ".$tipo." = '".$valor."' WHERE name = '".$producto."'");
    return $query;
}
echo json_encode(update());
?>
