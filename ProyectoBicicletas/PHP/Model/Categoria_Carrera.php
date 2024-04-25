<?php

require_once '../../ConnectionDB/ConnectionDB.php';

/**
 * Clase que gestiona las operaciones relacionadas con las categorías de carrera en la base de datos.
 */
class Categoria_Carrera {
    
    /**
     * Obtiene todas las categorías de carrera.
     * @return void No devuelve ningún valor, pero imprime el resultado en formato JSON.
     */
    public static function get_All_Categoria_Carrera() {
        $database = new ConnectionDB();
        $conexion = $database->getConnect();

        $sentencia = $conexion->prepare('SELECT * FROM categoria_carrera');

        if ($sentencia->execute()) {
            $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($resultado);
        } else {
            echo "false";
        }
    }
}

?>
