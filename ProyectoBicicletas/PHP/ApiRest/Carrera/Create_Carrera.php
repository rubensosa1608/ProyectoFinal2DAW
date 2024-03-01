<?php
    require_once('../../Model/Carrera.php');

    if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['nombre']) && isset($_GET['fecha_inicio']) && isset($_GET['ubicacion']) && isset($_GET['id_categoria_carrera']) && isset($_GET['id_evento'])){
        Carrera::create_Carrera($_GET['nombre'], $_GET['fecha_inicio'], $_GET['ubicacion'], $_GET['id_categoria_carrera'], $_GET['id_evento']);
    }

?>