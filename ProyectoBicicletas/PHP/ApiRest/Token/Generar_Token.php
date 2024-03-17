<?php

require_once '../../Model/Token.php';

// Verifica si la solicitud es de tipo POST y si se proporcionaron todos los parámetros necesarios
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['id_usuario'])) {
    // Llama a la función para crear un nuevo token.
    Token::generar_Token($_GET['id_usuario']);
}

?>