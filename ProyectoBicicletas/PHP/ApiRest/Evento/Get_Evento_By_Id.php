<?php

// Permitir acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");

require_once '../../Model/Evento.php';

// Verificar si la solicitud es de tipo GET y si se proporcionó el parámetro 'id'
if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['id'])) {
    // Llamar a la función para obtener un evento por su ID
    Evento::get_Evento_By_Id($_GET['id']);
}

?>
