<?php

require_once('../../ConnectionDB/ConnectionDB.php');

/**
 * Clase que gestiona las operaciones relacionadas con los usuarios en la base de datos.
 */
class Usuario {

      /**
     * Obtiene todos los usuarios almacenados en la base de datos.
     * @return void No devuelve ningún valor, pero imprime el resultado en formato JSON.
     */
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

      /**
     * Comprueba si un usuario existe en la base de datos y verifica su contraseña.
     * @param string $nombre El nombre de usuario.
     * @param string $password La contraseña del usuario.
     * @return void No devuelve ningún valor, pero imprime el resultado.
     */
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
