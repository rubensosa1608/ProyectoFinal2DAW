<?php

require_once '../../Model/Carrera.php';

// Verifica si la solicitud es de tipo PUT y si se proporcionaron todos los parámetros necesarios
if ($_SERVER['REQUEST_METHOD'] == 'PUT'
    && isset($_GET['id']) && isset($_GET['nombre']) && isset($_GET['fecha_inicio']) && isset($_GET['ubicacion']) && isset($_GET['id_categoria_carrera']) && isset($_GET['id_evento'])
) {
    // Llama a la función para actualizar una carrera
    Carrera::update_Carrera($_GET['id'], $_GET['nombre'], $_GET['fecha_inicio'], $_GET['ubicacion'], $_GET['id_categoria_carrera'], $_GET['id_evento']);
}

?>
