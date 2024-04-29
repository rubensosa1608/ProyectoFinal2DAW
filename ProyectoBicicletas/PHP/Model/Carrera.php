<?php

require_once '../../ConnectionDB/ConnectionDB.php';

/**
 * Clase que gestiona las operaciones relacionadas con las carreras en la base de datos.
 */
class Carrera {

   /**
     * Obtiene todas las carreras de la base de datos.
     * @return void No devuelve ningún valor, pero imprime el resultado en formato JSON.
     */
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

    public static function get_All_Carrera_Evento($idEvento) {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('SELECT carrera.*
            FROM carrera
            WHERE id_evento = :idEvento');

        if ($sentencia->execute()) {
            $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($resultado);
        } else {
            echo "false";
        }
    }

    /**
     * Obtiene una carrera por su ID.
     * @param int $id El ID de la carrera a obtener.
     * @return void No devuelve ningún valor, pero imprime el resultado en formato JSON.
     */
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

     /**
     * Crea una nueva carrera en la base de datos.
     * @param string $nombre El nombre de la carrera.
     * @param string $fecha_inicio La fecha de inicio de la carrera.
     * @param string $ubicacion La ubicación de la carrera.
     * @param int $id_categoria_carrera El ID de la categoría de carrera.
     * @param int $id_evento El ID del evento asociado a la carrera.
     * @return void No devuelve ningún valor, pero maneja la creación de la carrera en la base de datos.
     */
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
         
        } else {
            echo "false";
        }
    }

   /**
     * Actualiza una carrera en la base de datos.
     * @param int $id El ID de la carrera a actualizar.
     * @param string $nombre El nuevo nombre de la carrera.
     * @param string $fecha_inicio La nueva fecha de inicio de la carrera.
     * @param string $ubicacion La nueva ubicación de la carrera.
     * @param int $id_categoria_carrera El nuevo ID de la categoría de carrera.
     * @param int $id_evento El nuevo ID del evento asociado a la carrera.
     * @return void No devuelve ningún valor, pero maneja la actualización de la carrera en la base de datos.
     */
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

    /**
     * Obtiene todas las carreras asociadas a un evento específico.
     * @param int $id_evento El ID del evento del que se desean obtener las carreras.
     * @return void No devuelve ningún valor, pero imprime el resultado en formato JSON.
     */
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
           
        } else {
            echo "false";
        }
    }

    public static function get_All_Carrera_By_Evento($id_evento){
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('SELECT *, evento.nombre AS nombre_evento, categoria_carrera.nombre AS nombre_categoria 
        FROM carrera 
        JOIN evento ON carrera.id_evento = evento.id 
        JOIN categoria_carrera ON carrera.id_categoria_carrera = categoria_carrera.id 
        WHERE id_evento = :id_evento');

        $sentencia->bindParam(':id_evento', $id_evento);

        if($sentencia->execute()){
            $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($resultado);
        }else{
            echo "false";
        }
    }
}



?>
