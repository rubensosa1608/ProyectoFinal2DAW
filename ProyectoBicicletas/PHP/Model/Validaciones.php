<?php

/**
 * Clase que contiene métodos para validar campos de eventos y carreras.
 */
class Validaciones{

    /**
    * Método para validar campos de eventos.
    * @param string $nombre El nombre del evento a validar.
    * @param string $descripcion La descripción del evento a validar.
    * @param string $fecha_inicio La fecha de inicio del evento a validar.
    * @return mixed Retorna un array de errores si los hay, de lo contrario devuelve true.
    */
function validarCamposEventos($nombre, $descripcion, $fecha_inicio) {
    // Expresión regular para validar nombre del evento
    $nombreRegex = '/^[a-zA-ZñÑ0-9_\s]+$/';

    // Array para almacenar mensajes de error
    $errores = [];

    // Validar formato del nombre del evento
    if (!preg_match($nombreRegex, $nombre)) {
        $errores[] = 'El nombre del evento solo puede contener letras, números y guiones bajos.';
    }

    // Validar si los campos están vacíos
    if (empty($nombre) || empty($descripcion) || empty($fecha_inicio)) {
        $errores[] = 'Por favor, completa todos los campos.';
    }

    // Validar longitud del nombre del evento
    if (strlen($nombre) < 3 || strlen($nombre) > 50) {
        $errores[] = 'El nombre del evento debe tener entre 3 y 50 caracteres.';
    }

    // Validar longitud de la descripción del evento
    if (strlen($descripcion) < 5 || strlen($descripcion) > 100) {
        $errores[] = 'La descripción del evento debe tener entre 5 y 100 caracteres.';
    }

    // Mostrar mensajes de error si los hay y devolver false
    if (count($errores) > 0) {
        return $errores;
    }

    // Si no hay errores, devolver true
    return true;
}

/**
    * Método para validar campos de carreras.
    * @param string $nombre El nombre de la carrera a validar.
    * @param string $fecha_inicio La fecha de inicio de la carrera a validar.
    * @param string $ubicacion La ubicación de la carrera a validar.
    * @return mixed Retorna un array de errores si los hay, de lo contrario devuelve true.
    */
function validarCamposCarreras($nombre, $fecha_inicio, $ubicacion) {
    // Expresión regular para validar nombre de la carrera
    $nombreRegex = '/^[a-zA-ZñÑ0-9_\s]+$/';

    // Array para almacenar mensajes de error
    $errores = [];

    // Validar formato del nombre de la carrera
    if (!preg_match($nombreRegex, $nombre)) {
        $errores[] = 'El nombre del evento solo puede contener letras, números y guiones bajos.';
    }

    // Validar si los campos están vacíos
    if (empty($nombre) || empty($ubicacion) || empty($fecha_inicio)) {
        $errores[] = 'Por favor, completa todos los campos.';
    }

    // Validar longitud del nombre de la carrera
    if (strlen($nombre) < 3 || strlen($nombre) > 50) {
        $errores[] = 'El nombre del evento debe tener entre 3 y 50 caracteres.';
    }

    // Validar longitud de la ubicación de la carrera
    if (strlen($ubicacion) < 5 || strlen($ubicacion) > 100) {
        $errores[] = 'La ubicacion del evento debe tener entre 5 y 100 caracteres.';
    }

     // Mostrar mensajes de error si los hay y devolver false
     if (count($errores) > 0) {
        return $errores;
    }
    // Si no hay errores, devolver true
    return true;
}

}

?>
