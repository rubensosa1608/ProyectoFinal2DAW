<?php

require_once('../../ConnectionDB/ConnectionDB.php');

class Token{

    public static function get_All_Token(){
        
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('SELECT * FROM token');

        if($sentencia->execute()){
            
            $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode($resultado);
        }else{

            echo "false";
        }
    }

    public static function generarToken(){
        
    }
}