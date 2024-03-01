<?php

// Manejar las solicitudes OPTIONS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    exit;
}


    require_once('../../Model/Carrera.php');

    if($_SERVER['REQUEST_METHOD'] == 'DELETE' && isset($_GET['id'])){
        Carrera::delete_Carrera($_GET['id']);
    }

?>