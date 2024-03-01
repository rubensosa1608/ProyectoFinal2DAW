<?php

header("Access-Control-Allow-Origin: *");

require_once('../../Model/Carrera.php');

if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['id'])){
    Carrera::get_Carrera_By_Id($_GET['id']);
}

?>