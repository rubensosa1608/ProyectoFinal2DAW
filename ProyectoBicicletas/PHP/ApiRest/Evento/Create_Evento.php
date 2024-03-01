<?php
    require_once('../../Model/Evento.php');

    if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['nombre'])  && isset($_GET['descripcion']) && isset($_GET['fecha_inicio'])){
        Evento::create_Evento($_GET['nombre'], $_GET['descripcion'], $_GET['fecha_inicio']);
    }

?>