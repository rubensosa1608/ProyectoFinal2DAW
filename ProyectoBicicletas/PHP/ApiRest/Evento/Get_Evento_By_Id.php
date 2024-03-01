<?php

header("Access-Control-Allow-Origin: *");

require_once('../../Model/Evento.php');

if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['id'])){
    Evento::get_Evento_By_Id($_GET['id']);
}

?>