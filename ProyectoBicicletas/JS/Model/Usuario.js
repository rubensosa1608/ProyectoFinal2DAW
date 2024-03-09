import { Validaciones } from "./Validaciones.js";
import { Conexion } from "../Conexion/Conexion.js";
export class Usuario{

    ComprobarUsuario(){
        
        var username = document.querySelector('#username').value;
        var password =document.querySelector('#password').value;

        const validaciones = new Validaciones();

        if (!validaciones.validarCamposLogin(username, password)) {
            return;
        }

        let datos = "&nombre=" + username + "&password=" + password;
        let url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Usuario/ComprobarUsuario.php?${datos}`;
        var xhttp = Conexion.crearXMLHttpRequest("GET", url);

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                console.log(this.responseText);
                if(this.responseText == "true"){
                    alert("Iniciando sesión");
                    window.location.href = "HTML/Views/Welcome/welcome.html";
                }else{
                    alert("Error al iniciar sesión");
                }
            }
        };

        xhttp.send();
    }

}