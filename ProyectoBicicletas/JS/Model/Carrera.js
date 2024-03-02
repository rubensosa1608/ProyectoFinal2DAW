
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

    create_Carrera(){
        
        var $nombre = document.querySelector('#nombre').value;
        var $fecha_inicio = document.querySelector('#fecha_inicio').value;
        var $ubicacion = document.querySelector('#ubicacion').value;
        var $id_categoria_carrera = document.querySelector('#categorias').value;
        var $id_eventos = document.querySelector('#eventos').value;

        let datos = "&nombre=" + $nombre + "&fecha_inicio=" + $fecha_inicio + "&ubicacion=" + $ubicacion + "&id_categoria_carrera=" + $id_categoria_carrera + "&id_evento=" + $id_eventos;
        let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Carrera/Create_Carrera.php?${datos}`;
        let xhttp = Conexion.crearXMLHttpRequest("POST", url);

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                console.log(this.responseText);
                if(this.responseText == "true"){
                    window.location.href = "../../Views/Carrera/Index.html";
                    alert("Carrera creado correctamente.");
                }else{
                    alert("Error al crear el carrera.");
                }
            }
        };

        xhttp.send();
    }

}

