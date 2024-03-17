<?php

require_once('../../ConnectionDB/ConnectionDB.php');

class Usuario {

    // Obtiene todos los usuarios
    public static function getAllUsuarios() {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();    

        $sentencia = $conexion->prepare('SELECT * FROM usuario');

        if ($sentencia->execute()) {
            $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($resultado);
        } else {
            echo "false";
        }
    }

    // Comprueba si el usuario existe
    public static function comprobarUsuario($nombre, $password) {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();    

        $sentencia = $conexion->prepare('SELECT * FROM usuario WHERE nombre = :nombre');
        $sentencia->bindParam(':nombre', $nombre);

        if ($sentencia->execute()) {
            $usuarioData = $sentencia->fetch(PDO::FETCH_ASSOC);
            if ($usuarioData['Contraseña'] == $password) {
                echo $usuarioData['Id'] . "," . "true";
            } else {
                echo "false";
            }
        }
    }
}

?>
