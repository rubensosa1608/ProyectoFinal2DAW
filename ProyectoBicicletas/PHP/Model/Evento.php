<?php

require_once '../../ConnectionDB/ConnectionDB.php';

/**
 * Clase que gestiona las operaciones relacionadas con los eventos en la base de datos.
 */
class Evento {
    
       /**
     * Obtiene todos los eventos.
     * @return void No devuelve ningún valor, pero imprime el resultado en formato JSON.
     */
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

    /**
     * Obtiene un evento por su ID.
     * @param int $id El ID del evento que se desea obtener.
     * @return void No devuelve ningún valor, pero imprime el resultado en formato JSON.
     */
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

      /**
     * Crea un nuevo evento.
     * @param string $nombre El nombre del evento.
     * @param string $descripcion La descripción del evento.
     * @param string $fecha_inicio La fecha de inicio del evento.
     * @return void No devuelve ningún valor, pero realiza la operación de creación en la base de datos.
     */
    public static function create_Evento($nombre, $descripcion, $fecha_inicio) {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('INSERT INTO evento (nombre, descripcion, fecha_inicio) VALUES (:nombre, :descripcion, :fecha_inicio)');
        $sentencia->bindParam(':nombre', $nombre);
        $sentencia->bindParam(':descripcion', $descripcion);
        $sentencia->bindParam(':fecha_inicio', $fecha_inicio);

        if ($sentencia->execute()) {
           
        } else {
            echo "false";
        }
    }

      /**
     * Elimina un evento por su ID.
     * @param int $id El ID del evento que se desea eliminar.
     * @return void No devuelve ningún valor, pero realiza la operación de eliminación en la base de datos.
     */
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

    
    /**
     * Actualiza un evento.
     * @param int $id El ID del evento que se desea actualizar.
     * @param string $nombre El nuevo nombre del evento.
     * @param string $descripcion La nueva descripción del evento.
     * @param string $fecha_inicio La nueva fecha de inicio del evento.
     * @return void No devuelve ningún valor, pero realiza la operación de actualización en la base de datos.
     */
    public static function update_Evento($id, $nombre, $descripcion, $fecha_inicio) {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('UPDATE evento SET nombre=:nombre, descripcion=:descripcion, fecha_inicio=:fecha_inicio WHERE id=:id');
        $sentencia->bindParam(':nombre', $nombre);
        $sentencia->bindParam(':descripcion', $descripcion);
        $sentencia->bindParam(':fecha_inicio', $fecha_inicio);
        $sentencia->bindParam(':id', $id);

        if ($sentencia->execute()) {
         
        } else {
            echo "false";
        }
    }
}

?>
