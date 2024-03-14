<?php

header("Access-Control-Allow-Origin: *");

require_once '../../Model/Carrera.php';

// Verifica si la solicitud es de tipo GET
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Llama a la función para obtener todas las carreras
    Carrera::get_All_Carrera();
}

?>
