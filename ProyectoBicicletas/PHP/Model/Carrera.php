<?php

require_once '../../ConnectionDB/ConnectionDB.php';

class Carrera {

    // Función que obtiene todas las carreras.
    public static function get_All_Carrera() {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('SELECT carrera.*, evento.nombre AS nombre_evento, categoria_carrera.nombre AS nombre_categoria
            FROM carrera
            JOIN evento ON carrera.id_evento = evento.id
            JOIN categoria_carrera ON carrera.id_categoria_carrera = categoria_carrera.id');

        if ($sentencia->execute()) {
            $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($resultado);
        } else {
            echo "false";
        }
    }

    // Función que obtiene una carrera por su id.
    public static function get_Carrera_By_Id($id) {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('SELECT * FROM carrera WHERE id=:id');
        $sentencia->bindParam(':id', $id);

        if ($sentencia->execute()) {
            $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($resultado);
        } else {
            echo "false";
        }
    }

    // Función que crea una nueva carrera.
    public static function create_Carrera($nombre, $fecha_inicio, $ubicacion, $id_categoria_carrera, $id_evento) {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('INSERT INTO carrera(nombre, fecha_inicio, ubicacion, id_categoria_carrera, id_evento)
            VALUES(:nombre, :fecha_inicio, :ubicacion, :id_categoria_carrera, :id_evento)');
        $sentencia->bindParam(':nombre', $nombre);
        $sentencia->bindParam(':fecha_inicio', $fecha_inicio);
        $sentencia->bindParam(':ubicacion', $ubicacion);
        $sentencia->bindParam(':id_categoria_carrera', $id_categoria_carrera);
        $sentencia->bindParam(':id_evento', $id_evento);

        if ($sentencia->execute()) {
            echo "true";
        } else {
            echo "false";
        }
    }

    // Función que elimina una carrera por su id.
    public static function delete_Carrera($id) {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('DELETE FROM carrera WHERE id=:id');
        $sentencia->bindParam(':id', $id);

        if ($sentencia->execute()) {
            echo "true";
        } else {
            echo "false";
        }
    }

    // Función que actualiza una carrera.
    public static function update_Carrera($id, $nombre, $fecha_inicio, $ubicacion, $id_categoria_carrera, $id_evento) {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('UPDATE carrera SET nombre=:nombre, fecha_inicio=:fecha_inicio, ubicacion=:ubicacion, id_categoria_carrera=:id_categoria_carrera, id_evento=:id_evento WHERE id=:id');
        $sentencia->bindParam(':nombre', $nombre);
        $sentencia->bindParam(':fecha_inicio', $fecha_inicio);
        $sentencia->bindParam(':ubicacion', $ubicacion);
        $sentencia->bindParam(':id_categoria_carrera', $id_categoria_carrera);
        $sentencia->bindParam(':id_evento', $id_evento);
        $sentencia->bindParam(':id', $id);

        if ($sentencia->execute()) {
            echo "true";
        } else {
            echo "false";
        }
    }
}

?>
