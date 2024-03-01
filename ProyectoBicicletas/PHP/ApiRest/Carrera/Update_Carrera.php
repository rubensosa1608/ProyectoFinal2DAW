<?php
    require_once('../../Model/Carrera.php');

    if($_SERVER['REQUEST_METHOD'] == 'PUT'
    && isset($_GET['id']) && isset($_GET['nombre']) && isset($_GET['fecha_inicio']) && isset($_GET['ubicacion']) && isset($_GET['id_categoria_carrera']) && isset($_GET['id_evento'])
    ){
        Carrera::update_Carrera($_GET['id'], $_GET['nombre'], $_GET['fecha_inicio'], $_GET['ubicacion'], $_GET['id_categoria_carrera'], $_GET['id_evento']);
       
    }

?>