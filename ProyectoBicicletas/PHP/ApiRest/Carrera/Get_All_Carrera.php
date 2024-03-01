<?php

    header("Access-Control-Allow-Origin: *");

    require_once('../../Model/Carrera.php');

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        Carrera::get_All_Carrera();
    }

?>