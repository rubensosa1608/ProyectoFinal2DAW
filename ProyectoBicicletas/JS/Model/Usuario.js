import { Validaciones } from "./Validaciones.js";
import { Conexion } from "../Conexion/Conexion.js";
import { Token } from "./Token.js";

/**
 * Clase que gestiona las acciones relacionadas con los usuarios.
 */
export class Usuario {

    /**
     * Método para comprobar las credenciales del usuario al iniciar sesión.
     * @returns {void}
     */
    ComprobarUsuario() {
        // Obtener los valores de usuario y contraseña del formulario
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        // Crear una instancia de la clase Validaciones
        const validaciones = new Validaciones();

        // Validar los campos de inicio de sesión
        if (!validaciones.validarCamposLogin(username, password)) {
            return;
        }

        // Construir los datos para enviar al servidor
        const datos = `&nombre=${username}&password=${password}`;
        const url = `http://localhost/ProyectoBicicletas/PHP/ApiRest/Usuario/ComprobarUsuario.php?${datos}`;

        // Crear una solicitud XMLHttpRequest
        const xhttp = Conexion.crearXMLHttpRequest("GET", url);

        // Manejar la respuesta de la solicitud
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {

                let respuesta = this.responseText.split(",");

                // Si la respuesta es "true", redirigir al usuario a la página de bienvenida
                if (respuesta[1] === "true") {

                    // Crear una instancia de la clase Token y generar el token
                    const token = new Token();
                    token.generar_Token(respuesta[0])
                        .then(token => {

                            const dataUser = {
                                userID: respuesta[0],
                                userToken: token
                            };

                            // Convierte el objeto en una cadena JSON
                            const jsonData = JSON.stringify(dataUser);

                            // Almacena la cadena JSON en sessionStorage
                            sessionStorage.setItem('userData', jsonData);

                        })
                        .catch(error => {
                            console.error('Error al generar el token:', error.message);
                        });

                        window.location.href = "HTML/Views/Welcome/welcome.html";
                        alert("Iniciando sesión");

                } else {
                    alert("Error al iniciar sesión");
                }
            }
        };

        // Enviar la solicitud
        xhttp.send();
    }

    /**
     * Método para cerrar la sesión del usuario.
     * @returns {void}
     */
    logout(){
        sessionStorage.removeItem('userData');
        window.location.href = "/ProyectoBicicletas/index.html";
        alert("Has cerrado la sesión");
    }
}
