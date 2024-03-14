<?php

require_once '../../ConnectionDB/ConnectionDB.php';

class Evento {
    
    // Obtiene todos los eventos.
    public static function get_All_Evento() {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('SELECT * FROM evento');

        if ($sentencia->execute()) {
            $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($resultado);
        } else {
            echo "false";
        }
    }

    // Obtiene un evento por su id.
    public static function get_Evento_By_Id($id) {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('SELECT * FROM evento WHERE id=:id');
        $sentencia->bindParam(':id', $id);

        if ($sentencia->execute()) {
            $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($resultado);
        } else {
            echo "false";
        }
    }

    // Crea un nuevo evento.
    public static function create_Evento($nombre, $descripcion, $fecha_inicio) {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('INSERT INTO evento (nombre, descripcion, fecha_inicio) VALUES (:nombre, :descripcion, :fecha_inicio)');
        $sentencia->bindParam(':nombre', $nombre);
        $sentencia->bindParam(':descripcion', $descripcion);
        $sentencia->bindParam(':fecha_inicio', $fecha_inicio);

        if ($sentencia->execute()) {
            echo "true";
        } else {
            echo "false";
        }
    }

    // Elimina un evento por su id.
    public static function delete_Evento($id) {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('DELETE FROM evento WHERE id=:id');
        $sentencia->bindParam(':id', $id);

        if ($sentencia->execute()) {
            echo "true";
        } else {
            echo "false";
        }
    }

    // Actualiza un evento.
    public static function update_Evento($id, $nombre, $descripcion, $fecha_inicio) {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('UPDATE evento SET nombre=:nombre, descripcion=:descripcion, fecha_inicio=:fecha_inicio WHERE id=:id');
        $sentencia->bindParam(':nombre', $nombre);
        $sentencia->bindParam(':descripcion', $descripcion);
        $sentencia->bindParam(':fecha_inicio', $fecha_inicio);
        $sentencia->bindParam(':id', $id);

        if ($sentencia->execute()) {
            echo "true";
        } else {
            echo "false";
        }
    }
}

?>
