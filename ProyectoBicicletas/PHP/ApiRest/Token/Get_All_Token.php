<?php
header("Access-Control-Allow-Origin: *");

require_once('../../Model/Token.php');

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    Token::get_All_Token();
}