<?php
$nombre = $_GET("nombre");
echo "hola" + $nombre;

$nombre = $POST("nombre");
$metodo = $POST("metodo");
echo "hola" + $nombre + " " +$metodo;

?>