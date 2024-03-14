<?php

// Manejar las solicitudes OPTIONS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    exit;
}

require_once '../../Model/Carrera.php';

// Verifica si la solicitud es de tipo DELETE y si se proporcionó el parámetro 'id'
if ($_SERVER['REQUEST_METHOD'] == 'DELETE' && isset($_GET['id'])) {
    // Llama a la función para eliminar una carrera
    Carrera::delete_Carrera($_GET['id']);
}

?>
