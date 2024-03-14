<?php

require_once '../../Model/Evento.php';

// Verifica si la solicitud es de tipo POST y si se proporcionaron todos los parámetros necesarios
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['nombre']) && isset($_GET['descripcion']) && isset($_GET['fecha_inicio'])) {
    // Llama a la función para crear un nuevo evento
    Evento::create_Evento($_GET['nombre'], $_GET['descripcion'], $_GET['fecha_inicio']);
}

?>
