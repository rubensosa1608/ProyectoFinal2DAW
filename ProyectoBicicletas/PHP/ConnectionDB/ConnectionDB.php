<?php

/**
 * Clase para gestionar la conexión a la base de datos.
 */
class ConnectionDB {
    
    private const HOST = "localhost";
    private const USER = "root";
    private const PASSWORD = "";
    private const DATABASE = "carrerasbicicletas";

    
    /**
     * Obtiene una conexión a la base de datos.
     * @return PDO|null Retorna un objeto PDO si la conexión fue exitosa, de lo contrario retorna null.
     */
    public function getConnect(): ?PDO {
        $hostDB = "mysql:host=" . self::HOST . ";dbname=" . self::DATABASE;

        try {
            $connection = new PDO($hostDB, self::USER, self::PASSWORD);
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $connection;

        } catch(PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }
}

?>
