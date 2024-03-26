<?php

require_once '../../Model/Carrera.php';
require_once '../../Model/Validaciones.php';

// Verifica que la solicitud sea de tipo POST y que se hayan enviado todos los parámetros necesarios
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['nombre']) && isset($_GET['fecha_inicio']) && isset($_GET['ubicacion']) && isset($_GET['id_categoria_carrera']) && isset($_GET['id_evento'])) {

    $validaciones = new Validaciones();

      // Validar campos de carreras
      $errores = $validaciones->validarCamposCarreras($_GET['nombre'], $_GET['fecha_inicio'], $_GET['ubicacion']);

      // Si hay errores, devolverlos como JSON
      if ($errores !== true) {
          echo json_encode(array("success" => false, "errors" => $errores));
          return;
      } else {
          // Llama a la función para crear una carrera
          Carrera::create_Carrera($_GET['nombre'], $_GET['fecha_inicio'], $_GET['ubicacion'], $_GET['id_categoria_carrera'], $_GET['id_evento']);
          echo json_encode(array("success" => true));
      }
}
