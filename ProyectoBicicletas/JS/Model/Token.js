
import { Conexion } from "../Conexion/Conexion.js";

export class Token {
    
    generar_Token(id) {
        return new Promise((resolve, reject) => {
            let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Token/Generar_Token.php?id_usuario=${id}`;
            var xhttp = Conexion.crearXMLHttpRequest("POST", url);
    
            xhttp.onreadystatechange = function() {
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
    

}