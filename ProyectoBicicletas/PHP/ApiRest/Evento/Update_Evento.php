<?php

require_once '../../Model/Evento.php';

// Verifica si la solicitud es de tipo PUT y si se proporcionaron todos los parámetros necesarios
if ($_SERVER['REQUEST_METHOD'] == 'PUT'
    && isset($_GET['id']) && isset($_GET['nombre']) && isset($_GET['descripcion']) && isset($_GET['fecha_inicio'])
) {
    // Llama a la función para actualizar un evento
    Evento::update_Evento($_GET['id'], $_GET['nombre'], $_GET['descripcion'], $_GET['fecha_inicio']);
}

?>
