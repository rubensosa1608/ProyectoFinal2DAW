
import { Conexion } from "../Conexion/Conexion.js";

export class Token {

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

    comprobar_Token($id, $token, $ruta = null) {

        let datos = "&id_usuario=" + $id;
        let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Token/Get_All_Token_By_Id.php?${datos}`;
        var xhttp = Conexion.crearXMLHttpRequest("GET", url);
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let tokens = JSON.parse(this.responseText);
            
                //Obtengo la fecha de hoy
                let Nuevafecha = new Date();

                //Recoro todos los tokens que me devuelve la query
                tokens.forEach(token => {
                    let fechaCreacion = new Date(token.Fecha_creacion);
                    let fechaExpiracion = new Date(token.Fecha_expiracion);

                    //Si el token es el mismo
                    if (token.Token == $token) {              
                        //Compruebo si fecha de hoy esta entre la fecha de creacion y la fecha de expiracion
                        if (Nuevafecha >= fechaCreacion  && Nuevafecha <= fechaExpiracion) {

                            if(!$ruta == null){
                            window.location.href = $ruta;
                            }else{

                            }
                        }else{
                            alert("Su sesion ha expirado");
                            window.location.href = "/ProyectoBicicletas/index.html";
                        }
                    }
                });

            }
        };

        xhttp.send();
    }

}