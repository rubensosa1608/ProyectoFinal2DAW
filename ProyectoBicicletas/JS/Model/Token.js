
import { Conexion } from "../Conexion/Conexion.js";

export class Token {
    
    generar_Token($id){

        let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Token/Generar_Token.php?id_usuario=${$id}`;
        var xhttp = Conexion.crearXMLHttpRequest("POST", url);

        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
            }
        };

        xhttp.send();
    }

}