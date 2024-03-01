<?php
    require_once('../../Model/Evento.php');

    if($_SERVER['REQUEST_METHOD'] == 'PUT'
    && isset($_GET['id']) && isset($_GET['nombre'])  && isset($_GET['descripcion']) && isset($_GET['fecha_inicio'])
    ){
        Evento::update_Evento($_GET['id'], $_GET['nombre'],  $_GET['descripcion'], $_GET['fecha_inicio']);
       
    }

?>