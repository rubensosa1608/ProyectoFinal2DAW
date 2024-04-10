<?php

header("Access-Control-Allow-Origin: *");

require_once '../../Model/Carrera.php';

// Verifica si la solicitud es de tipo GET y si se proporcionó el parámetro 'id'
if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['id_evento'])) {
    // Llama a la función para obtener una carrera por su ID
    Carrera::get_All_Carrera_By_Evento($_GET['id_evento']);
}

?>
