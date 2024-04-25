import { Validaciones } from "./Validaciones.js";
import { Conexion } from "../Conexion/Conexion.js";
import { tablaCarrera } from "../Tablas/TablaCarrera.js";

/**
 * Clase que representa una carrera y proporciona métodos para interactuar con ella.
 */
export class Carrera {

    /**
     * Método para obtener todas las carreras.
     */
    get_All_Carrera() {
        let url = "http://localhost/ProyectoBicicletas/PHP/ApiRest/Carrera/Get_All_Carrera.php";
        let container = document.querySelector('#datos-container');
        let xhttp = Conexion.crearXMLHttpRequest("GET", url);

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
                let carreras = JSON.parse(this.responseText);
                tablaCarrera(carreras);
            }
        };

        xhttp.send();
    }

    /**
     * Método para obtener una carrera por su ID.
     * 
     * @param {number} id - El ID de la carrera a obtener.
     * @returns {Promise} - Una promesa que se resuelve con la carrera obtenida o se rechaza con un error.
     */
    get_Carrera_By_Id(id) {
        return new Promise((resolve, reject) => {
            let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Carrera/Get_Carrera_By_Id.php?id=${id}`;
            let xhttp = Conexion.crearXMLHttpRequest("GET", url);

            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        console.log(this.responseText);
                        let carrera = JSON.parse(this.responseText);
                        resolve(carrera);
                    } else {
                        reject(new Error('Error al obtener la carrera por ID'));
                    }
                }
            };
            xhttp.send();
        });
    }

    /**
     * Método para eliminar una carrera.
     * 
     * @param {number} id - El ID de la carrera a eliminar.
     */
    delete_Carrera(id) {
        let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Carrera/Delete_Carrera.php?id=${id}`;
        let xhttp = Conexion.crearXMLHttpRequest("DELETE", url);

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
                if (this.responseText === "true") {
                    alert("Carrera eliminada correctamente.");
                    window.location.reload();
                } else {
                    alert("Error al eliminar la carrera.");
                }
            }
        };

        xhttp.send();
    }

    /**
     * Método para crear una nueva carrera.
     */
    create_Carrera() {
        // Obtener datos del formulario
        let $nombre = document.querySelector('#nombre').value;
        let $fecha_inicio = document.querySelector('#fecha_inicio').value;
        let $ubicacion = document.querySelector('#ubicacion').value;
        let $id_categoria_carrera = document.querySelector('#categorias').value;
        let $id_eventos = document.querySelector('#eventos').value;

        let validaciones = new Validaciones();

        // Validar campos del formulario
        if (!validaciones.validarCamposCarreras($nombre, $fecha_inicio, $ubicacion)) {
            return;
        }
        
        // Construir datos para la solicitud
        let datos = `&nombre=${$nombre}&fecha_inicio=${$fecha_inicio}&ubicacion=${$ubicacion}&id_categoria_carrera=${$id_categoria_carrera}&id_evento=${$id_eventos}`;
        let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Carrera/Create_Carrera.php?${datos}`;
        let xhttp = Conexion.crearXMLHttpRequest("POST", url);

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
                var response = JSON.parse(this.responseText);
                if (response.success) {
                    window.location.href = "../../Views/Carrera/Index.html";
                    alert("Carrera creada correctamente.");
                } else {
                    // Mostrar errores
                    var errorMessage = "Error al crear la carrera:\n";
                    for (var i = 0; i < response.errors.length; i++) {
                        errorMessage += response.errors[i] + "\n";
                    }
                    alert(errorMessage);
                }
            }
        };

        xhttp.send();
    }

    /**
     * Método para actualizar una carrera.
     * 
     * @param {number} $id - El ID de la carrera a actualizar.
     */
    update_Carrera($id) {
        // Obtener datos del formulario
        let $nombre = document.querySelector('#nombre').value;
        let $ubicacion = document.querySelector('#ubicacion').value;
        let $fecha_inicio = document.querySelector('#fecha_inicio').value;
        let $id_categoria_carrera = document.querySelector('#categorias').value;
        let $id_eventos = document.querySelector('#eventos').value;

        let validaciones = new Validaciones();

        // Validar campos del formulario
        if (!validaciones.validarCamposCarreras($nombre, $fecha_inicio, $ubicacion)) {
            return;
        }

        // Construir datos para la solicitud
        let datos = `&nombre=${$nombre}&fecha_inicio=${$fecha_inicio}&ubicacion=${$ubicacion}&id_categoria_carrera=${$id_categoria_carrera}&id_evento=${$id_eventos}&id=${$id}`;
        let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Carrera/Update_Carrera.php?${datos}`;
        let xhttp = Conexion.crearXMLHttpRequest("PUT", url);

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
                var response = JSON.parse(this.responseText);
                if (response.success) {
                    window.location.href = "../../Views/Carrera/Index.html";
                    alert("Carrera actualizada correctamente.");
                } else {
                   // Mostrar errores
                   var errorMessage = "Error al actualizar la carrera:\n";
                   for (var i = 0; i < response.errors.length; i++) {
                       errorMessage += response.errors[i] + "\n";
                   }
                   alert(errorMessage);
                }
            }
        };
        xhttp.send();
    }

    /**
     * Método para obtener todas las carreras de un evento.
     * 
     * @param {number} $id - El ID del evento del que se desean obtener las carreras.
     * @returns {Promise} - Una promesa que se resuelve con el número de carreras obtenidas o se rechaza con un error.
     */
    get_All_Carrera_By_Evento($id){
        return new Promise((resolve, reject) => {
            let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Carrera/Get_All_Carrera_By_Evento.php?id_evento=${$id}`;
            let xhttp = Conexion.crearXMLHttpRequest("GET", url);

            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        console.log(this.responseText);
                        let carrera = JSON.parse(this.responseText);
                        let numeroCarreras = Object.keys(carrera).length;

                        resolve(numeroCarreras);
                        
                    } else {
                        reject(new Error('Error al obtener carreras'));
                    }
                }
            };
            xhttp.send();
        });
    }
}
