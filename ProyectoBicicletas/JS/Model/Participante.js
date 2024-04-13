import { Conexion } from "../Conexion/Conexion.js";
import { tablaParticipante } from "../Tablas/TablaParticipante.js";

/**
 * Clase que representa a los participantes en eventos de bicicletas.
 */
export class Participante {
    
     /**
     * Método para obtener todos los participantes.
     * @returns {void}
     */
    get_All_Participante() {
        let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Participante/Get_All_Participante.php`;
        var container = document.querySelector('#datos-container');
        var xhttp = Conexion.crearXMLHttpRequest("GET", url);
       
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                var participantes = JSON.parse(this.responseText);

                tablaParticipante(participantes);
            }
        };

        xhttp.send();
    }
}
