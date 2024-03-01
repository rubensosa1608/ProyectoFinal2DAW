<?php

// Manejar las solicitudes OPTIONS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    exit;
}

// Permitir acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");

require_once('../../Model/Evento.php');

if($_SERVER['REQUEST_METHOD'] == 'DELETE' && isset($_GET['id'])){
    Evento::delete_Evento($_GET['id']);
}

?>
