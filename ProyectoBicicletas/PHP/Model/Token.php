<?php

require_once('../../ConnectionDB/ConnectionDB.php');

class Token {

    // Obtiene todos los tokens.
    public static function get_All_Token() {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('SELECT * FROM token');

        if ($sentencia->execute()) {
            $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($resultado);
        } else {
            echo "false";
        }
    }

    // Genera un nuevo token.
    public static function generarToken() {
        // Aquí debes escribir la lógica para generar un nuevo token
        // Por ejemplo:
        $token = bin2hex(random_bytes(16)); // Genera un token aleatorio hexadecimal de 16 bytes
        return $token;
    }
}

?>
