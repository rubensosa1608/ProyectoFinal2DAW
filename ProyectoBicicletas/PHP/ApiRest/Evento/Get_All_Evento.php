<?php
header("Access-Control-Allow-Origin: *");

require_once('../../Model/Evento.php');

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    Evento::get_All_Evento();
}
?>