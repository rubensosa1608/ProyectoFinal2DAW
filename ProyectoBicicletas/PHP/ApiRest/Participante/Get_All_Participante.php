<?php
header("Access-Control-Allow-Origin: *");

    require_once('../../Model/Participante.php');

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        Participante::get_All_Participante();
    }

?>