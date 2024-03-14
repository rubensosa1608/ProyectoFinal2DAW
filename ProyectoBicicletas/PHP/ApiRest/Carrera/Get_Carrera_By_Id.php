<?php

header("Access-Control-Allow-Origin: *");

require_once '../../Model/Carrera.php';

// Verifica si la solicitud es de tipo GET y si se proporcionó el parámetro 'id'
if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['id'])) {
    // Llama a la función para obtener una carrera por su ID
    Carrera::get_Carrera_By_Id($_GET['id']);
}

?>
