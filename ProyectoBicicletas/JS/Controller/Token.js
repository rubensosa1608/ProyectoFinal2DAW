import { Conexion } from "../Conexion/Conexion.js";

/**
 * Clase que proporciona métodos para generar y comprobar tokens de usuario.
 */
export class Token {

    /**
     * Método para generar un token para un usuario.
     * 
     * @param {number} id - El ID del usuario para el que se generará el token.
     * @returns {Promise} - Una promesa que se resuelve con el token generado o se rechaza con un error.
     */
    generar_Token(id) {
        return new Promise((resolve, reject) => {
            let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Token/Generar_Token.php?id_usuario=${id}`;
            var xhttp = Conexion.crearXMLHttpRequest("POST", url);

            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    let token = this.responseText;
                    resolve(token); // Resuelve la promesa con el token
                } else if (this.readyState === 4) {
                    reject(new Error('Error en la solicitud')); // Rechaza la promesa con un error
                }
            };

            xhttp.send();
        });
    }

    /**
     * Método para comprobar la validez de un token para un usuario.
     * 
     * @param {number} $id - El ID del usuario.
     * @param {string} $token - El token a comprobar.
     * @param {string} $rutaIr - La ruta a la que redirigir si el token es válido (opcional).
     * @param {string} $rutaVolver - La ruta a la que redirigir si el token ha expirado (opcional).
     */
    comprobar_Token($id, $token, $rutaIr = null, $rutaVolver = null) {
        let datos = "&id_usuario=" + $id;
        let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Token/Get_All_Token_By_Id.php?${datos}`;
        var xhttp = Conexion.crearXMLHttpRequest("GET", url);
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let tokens = JSON.parse(this.responseText);
                let tokenEncontrado = false;
    
                // Recorro todos los tokens que devuelve la consulta
                tokens.forEach(token => {
                    // Si el token es el mismo
                    if (token.Token == $token) {
                        // Obtengo la fecha de hoy y las fechas de creación y expiración
                        let Nuevafecha = new Date();
                        let fechaCreacion = new Date(token.Fecha_creacion);
                        let fechaExpiracion = new Date(token.Fecha_expiracion);
    
                        // Compruebo si la fecha de hoy está entre la fecha de creación y la fecha de expiración
                        if (Nuevafecha >= fechaCreacion && Nuevafecha <= fechaExpiracion) {
                            if ($rutaIr != null) {
                                window.location.href = $rutaIr;
                            }
                        } else {
                            alert("Su sesión ha expirado");
                            if ($rutaVolver == null) {
                                // No se especificó una ruta de redirección en caso de expiración
                            } else {
                                window.location.href = $rutaVolver;
                            }
                        }
                        tokenEncontrado = true; // Se encontró el token
                    }
                });
                if (!tokenEncontrado) {
                    alert("Su Token de sesion no existe");
                    if ($rutaVolver != null) {
                        // No se especificó una ruta de redirección en caso de expiración
                        window.location.href = $rutaVolver;
                    }
                }
            }
        };
    
        xhttp.send();
    }

}
