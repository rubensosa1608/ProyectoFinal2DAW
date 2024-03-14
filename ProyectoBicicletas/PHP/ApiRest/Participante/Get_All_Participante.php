<?php

// Permitir acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");

require_once '../../Model/Participante.php';

// Verificar si la solicitud es de tipo GET
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Llamar a la función para obtener todos los participantes
    Participante::get_All_Participante();
}

?>
