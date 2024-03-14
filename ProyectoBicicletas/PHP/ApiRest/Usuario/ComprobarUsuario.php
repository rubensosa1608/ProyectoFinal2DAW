<?php

// Permitir acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");

require_once '../../Model/Usuario.php';

// Verificar si la solicitud es de tipo GET y si se proporcionaron el nombre de usuario y la contraseña
if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['nombre']) && isset($_GET['password'])) {
    // Llamar a la función para comprobar el usuario
    Usuario::comprobarUsuario($_GET['nombre'], $_GET['password']);
}

?>
