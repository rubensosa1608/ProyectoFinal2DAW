<?php

require_once('../../ConnectionDB/ConnectionDB.php');

class Usuario{

    public static function get_All_Usuario(){
        
        $database = new ConnectionDB();
        $conexion = $database->getConnect();    

        $sentencia = $conexion->prepare('SELECT * FROM usuario');

        if($sentencia->execute()){
            
            $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode($resultado);
        }else{
            echo "false";
        }

    }

    public static function comprobarUsuario($nombre, $password){
        $database = new ConnectionDB();
        $conexion = $database->getConnect();    
    
        $sentencia = $conexion->prepare('SELECT * FROM usuario WHERE nombre = :nombre');
        $sentencia->bindParam(':nombre', $nombre);
        
        if($sentencia->execute()){
            $usuarioData = $sentencia->fetch(PDO::FETCH_ASSOC);

            if($usuarioData['Contraseña'] == $password){
                echo "true";
            }else{
                echo "false";
            }
        }
    }

}