
import { Conexion } from "../Conexion/Conexion.js";
import { tablaCarrera } from "../Tablas/TablaCarrera.js";

export class Carrera{

    get_All_Carrera(){

        let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Carrera/Get_All_Carrera.php`;
        var container = document.querySelector('#datos-container');
        var xhttp = Conexion.crearXMLHttpRequest("GET", url);
       
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                console.log(this.responseText);
                var carreras = JSON.parse(this.responseText);

                tablaCarrera(carreras);

            }
        };

        xhttp.send();

    }
   
    delete_Carrera($id){

        let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Carrera/Delete_Carrera.php?id=${$id}`;
        let xhttp = Conexion.crearXMLHttpRequest("DELETE", url);

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                console.log(this.responseText);
                if(this.responseText == "true"){
                    alert("Carrera eliminada correctamente.");
                    window.location.reload();
                }else{
                    alert("Error al eliminar la carrera.");
                }
            }
        };

        xhttp.send();
    }

}

