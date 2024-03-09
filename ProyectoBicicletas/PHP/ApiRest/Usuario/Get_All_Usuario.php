<?php
header("Access-Control-Allow-Origin: *");

require_once('../../Model/Usuario.php');

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    Usuario::get_All_Usuario();
}