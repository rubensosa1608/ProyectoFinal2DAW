
import { Conexion } from "../Conexion/Conexion.js";

export class Categoria_Carrera{


    get_All_Categoria_Carrera(){
        return new Promise((resolve, reject) => {
            let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Categoria_Carrera/Get_All_Categoria_Carrera.php`;
    
            var xhttp = Conexion.crearXMLHttpRequest("GET", url);
    
            xhttp.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    console.log(this.responseText);
                    var categorias = JSON.parse(this.responseText);
                    resolve(categorias);
                } else if (this.readyState == 4) {
                    reject(new Error('No se pudo obtener la lista de categorías de carrera.'));
                }
            }
            xhttp.send();
        });
    }

}