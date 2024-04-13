
import { Conexion } from "../Conexion/Conexion.js";

/**
 * Clase que proporciona métodos para la generación y comprobación de tokens de usuario.
 */
export class Token {

    /**
     * Método para generar un token para el usuario con el ID especificado.
     * @param {number} id - El ID del usuario para el cual se generará el token.
     * @returns {Promise} Una promesa que resuelve con el token generado.
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
     * @param {number} $id - El ID del usuario.
     * @param {string} $token - El token a comprobar.
     * @param {string} $rutaIr - La ruta a la que se redirigirá si el token es válido.
     * @param {string} $rutaVolver - La ruta a la que se redirigirá si el token ha expirado.
     * @returns {void}
     */
    comprobar_Token($id, $token, $rutaIr = null, $rutaVolver = null){

        let datos = "&id_usuario=" + $id;
        let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Token/Get_All_Token_By_Id.php?${datos}`;
        var xhttp = Conexion.crearXMLHttpRequest("GET", url);
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let tokens = JSON.parse(this.responseText);

                //Recoro todos los tokens que me devuelve la query
                tokens.forEach(token => {

                    //Si el token es el mismo
                    if (token.Token == $token) {  
                        //Obtengo la fecha de hoy y las fechas de creacion y expiracion
                        let Nuevafecha = new Date();
                        let fechaCreacion = new Date(token.Fecha_creacion);
                        let fechaExpiracion = new Date(token.Fecha_expiracion);  

                        //Compruebo si fecha de hoy esta entre la fecha de creacion y la fecha de expiracion
                        if (Nuevafecha >= fechaCreacion  && Nuevafecha <= fechaExpiracion) {

                            if($rutaIr == null){
                            
                            }else{
                                window.location.href = $rutaIr;
                            }
                        }else{
                            alert("Su sesion ha expirado");
                            if($rutaVolver == null){
                            
                            }else{
                                window.location.href = "/ProyectoBicicletas/index.html";
                            }
                        }
                    }
                });

            }
        };

        xhttp.send();
    }

}