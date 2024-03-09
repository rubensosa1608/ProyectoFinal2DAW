<?php
    require_once('../../ConnectionDB/ConnectionDB.php');

    class Categoria_Carrera{
        
        public static function get_All_Categoria_Carrera(){
            $datebase = new ConnectionDB();
            $conexion = $datebase->getConnect();

            $sentencia = $conexion->prepare('SELECT * FROM categoria_carrera');

            if($sentencia->execute()){

                $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);

                echo json_encode($resultado);
            }else{
                echo false;
            }

        }
        
    }

?>