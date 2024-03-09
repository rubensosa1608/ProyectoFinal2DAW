<?php
    require_once('../../ConnectionDB/ConnectionDB.php');

    class Participante{
        
        public static function get_All_Participante(){
            $database = new ConnectionDB();
            $conexion = $database->getConnect();

            $sentencia = $conexion->prepare('SELECT participante.*, bicicleta.modelo AS nombre_bicicleta FROM participante
            JOIN bicicleta ON participante.id_bicicleta = bicicleta.id');

            if($sentencia->execute()){

                $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);

                echo json_encode($resultado);
            }else{
                return false;
            }
        }
        
    }
