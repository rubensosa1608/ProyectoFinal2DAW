<?php

require_once '../../Model/Evento.php';
require_once '../../Model/Validaciones.php';

// Verifica si la solicitud es de tipo POST y si se proporcionaron todos los parámetros necesarios
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['nombre']) && isset($_GET['descripcion']) && isset($_GET['fecha_inicio'])) {
    $validaciones = new Validaciones();

    // Validar campos de carreras
    $errores = $validaciones->validarCamposEventos($_GET['nombre'], $_GET['descripcion'], $_GET['fecha_inicio']);

    // Si hay errores, devolverlos como JSON
    if ($errores !== true) {
        echo json_encode(array("success" => false, "errors" => $errores));
        return;
    } else {
        // Llama a la función para crear una carrera
        Evento::create_Evento($_GET['nombre'], $_GET['descripcion'], $_GET['fecha_inicio']);
        echo json_encode(array("success" => true));
    }
}

?>
