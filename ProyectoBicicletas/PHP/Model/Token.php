<?php

require_once('../../ConnectionDB/ConnectionDB.php');

class Token {

    // Obtiene todos los tokens.
    public static function get_All_Token_By_Id($id) {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('SELECT * FROM token where id_usuario = :id ORDER BY fecha_creacion ASC');
        $sentencia->bindParam(':id', $id);

        if ($sentencia->execute()) {
            $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($resultado);
        } else {
            echo "false";
        }
    }

    // Genera un nuevo token.
    public static function generar_Token($id) {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        // Creación de un token.
        $token = bin2hex(random_bytes(40));

        $fecha_creacion = date('Y-m-d H:i:s');
        $fecha_expiracion = date('Y-m-d H:i:s', strtotime('+3 day'));

        $sentencia = $conexion->prepare('INSERT INTO token (id_usuario, token, fecha_creacion, fecha_expiracion) 
        VALUES (:id_usuario, :token, :fecha_creacion, :fecha_expiracion)');
        $sentencia->bindParam(':id_usuario', $id);
        $sentencia->bindParam(':token', $token);
        $sentencia->bindParam(':fecha_creacion', $fecha_creacion);
        $sentencia->bindParam(':fecha_expiracion', $fecha_expiracion);

        if ($sentencia->execute()) {
            echo $token;
        } else {
            echo "false";
        }
    }
}

?>
