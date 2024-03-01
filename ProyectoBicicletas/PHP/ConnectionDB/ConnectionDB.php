<?php

    class ConnectionDB {
        
        private $host = "localhost";
        private $user = "root";
        private $password = "";
        private $database = "carrerasbicicletas";

        public function getConnect() {
            $hostDB = "mysql:host=".$this->host.";dbname=".$this->database.";";

            try{
                $connection = new PDO($hostDB, $this->user, $this->password);
                $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $connection;

            } catch(PDOException $e) {
                die("Error: " . $e->getMessage());
            }
        }
    }

?>