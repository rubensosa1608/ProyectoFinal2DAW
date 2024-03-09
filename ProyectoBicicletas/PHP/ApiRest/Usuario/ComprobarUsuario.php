<?php
header("Access-Control-Allow-Origin: *");

require_once('../../Model/Usuario.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['nombre']) && isset($_GET['password'])) {

    $usuario = Usuario::comprobarUsuario($_GET['nombre'], $_GET['password']);
    
}
