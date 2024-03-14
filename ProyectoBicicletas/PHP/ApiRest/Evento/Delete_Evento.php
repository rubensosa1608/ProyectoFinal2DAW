<?php

// Manejar las solicitudes OPTIONS para permitir CORS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    exit;
}

// Permitir acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");

require_once '../../Model/Evento.php';

// Verificar si la solicitud es de tipo DELETE y si se proporcionó el parámetro 'id'
if ($_SERVER['REQUEST_METHOD'] == 'DELETE' && isset($_GET['id'])) {
    // Llamar a la función para eliminar un evento por su ID
    Evento::delete_Evento($_GET['id']);
}

?>
