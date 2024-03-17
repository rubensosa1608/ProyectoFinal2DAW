import { Validaciones } from "./Validaciones.js";
import { Conexion } from "../Conexion/Conexion.js";

export class Evento {
    // Método para obtener todos los eventos
    get_All_Evento() {
        return new Promise((resolve, reject) => {
            let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Evento/Get_All_Evento.php`;
            var xhttp = Conexion.crearXMLHttpRequest("GET", url);
    
            xhttp.onreadystatechange = function() {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        var eventos = JSON.parse(this.responseText);
                        resolve(eventos);
                    } else {
                        reject(new Error('Error al obtener eventos'));
                    }
                }
            };
    
            xhttp.send();
        });
    }

    // Método para obtener un evento por su ID
    get_Evento_By_Id(id) {
        return new Promise((resolve, reject) => {
            let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Evento/Get_Evento_By_Id.php?id=${id}`;
            var xhttp = Conexion.crearXMLHttpRequest("GET", url);
    
            xhttp.onreadystatechange = function() {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        console.log(this.responseText);
                        var evento = JSON.parse(this.responseText);
                        resolve(evento);
                    } else {
                        reject(new Error('Error al obtener el evento por ID'));
                    }
                }
            };
            xhttp.send();
        });
    }

    // Método para eliminar un evento
    delete_Evento($id) {
        let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Evento/Delete_Evento.php?id=${$id}`;
        let xhttp = Conexion.crearXMLHttpRequest("DELETE", url);

        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
                if (this.responseText === "true") {
                    alert("Evento eliminado correctamente.");
                    window.location.reload();
                } else {
                    alert("Error al eliminar el evento.");
                }
            }
        };

        xhttp.send();
    }

    // Método para crear un evento
    create_Evento() {
        var $nombre = document.querySelector('#nombre').value;
        var $descripcion = document.querySelector('#descripcion').value;
        var $fecha_inicio = document.querySelector('#fecha_inicio').value;

        var validaciones = new Validaciones();

        // Validación de los campos del evento
        if (!validaciones.validarCamposEventos($nombre, $descripcion, $fecha_inicio)) {
            return;
        }

        // Crear los datos a enviar
        let datos = "&nombre=" + $nombre + "&descripcion=" + $descripcion + "&fecha_inicio=" + $fecha_inicio;
        let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Evento/Create_Evento.php?${datos}`;
        let xhttp = Conexion.crearXMLHttpRequest("POST", url);

        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
                if (this.responseText === "true") {
                    window.location.href = "../../Views/Evento/Index.html";
                    alert("Evento creado correctamente.");
                } else {
                    alert("Error al crear el evento.");
                }
            }
        };

        xhttp.send();
    }

    // Método para actualizar un evento
    update_Evento($id) {
        var $nombre = document.querySelector('#nombre').value;
        var $descripcion = document.querySelector('#descripcion').value;
        var $fecha_inicio = document.querySelector('#fecha_inicio').value;

        var validaciones = new Validaciones();

        // Validación de los campos del evento
        if (!validaciones.validarCamposEventos($nombre, $descripcion, $fecha_inicio)) {
            return;
        }

        // Crear los datos a enviar
        let datos = "&nombre=" + $nombre + "&descripcion=" + $descripcion + "&fecha_inicio=" + $fecha_inicio + "&id=" + $id;

        let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Evento/Update_Evento.php?${datos}`;

        let xhttp = Conexion.crearXMLHttpRequest("PUT", url);

        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);

                if (this.responseText === "true") {
                    window.location.href = "../../Views/Evento/Index.html";
                    alert("Evento actualizado correctamente.");
                } else {
                    alert("Error al actualizar el evento.");
                }
            }
        };
        xhttp.send();
    }
}
