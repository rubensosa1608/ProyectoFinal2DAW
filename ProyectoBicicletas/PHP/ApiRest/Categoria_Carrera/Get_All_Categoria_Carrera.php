<?php

header("Access-Control-Allow-Origin: *");

require_once '../../Model/Categoria_Carrera.php';

// Verifica si la solicitud es de tipo GET
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Llama a la función para obtener todas las categorías de carrera
    Categoria_Carrera::get_All_Categoria_Carrera();
}

?>
