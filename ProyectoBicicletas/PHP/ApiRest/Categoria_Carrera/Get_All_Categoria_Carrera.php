<?php

    header("Access-Control-Allow-Origin: *");
    
    require_once('../../Model/Categoria_Carrera.php');

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        Categoria_Carrera::get_All_Categoria_Carrera();
    }

?>