/**
 * Clase que proporciona métodos para establecer una conexión mediante XMLHttpRequest.
 */
export class Conexion {

    /**
     * Crea y devuelve un objeto XMLHttpRequest para realizar solicitudes HTTP.
     * 
     * @param {string} method - El método HTTP de la solicitud (GET, POST, etc.).
     * @param {string} url - La URL a la que se realizará la solicitud.
     * @returns {XMLHttpRequest} - El objeto XMLHttpRequest creado.
     */
    static crearXMLHttpRequest(method, url) {
        let xhttp = null;
        if (window.XMLHttpRequest || window.ActiveXObject) {
            if (window.ActiveXObject) {
                try {
                    xhttp = new ActiveXObject("Msxml2.XMLHTTP");
                    xhttp.open(method, url, true);
                } catch (exception) {
                    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    xhttp.open(method, url, true);
                }
            } else {
                xhttp = new XMLHttpRequest();
                xhttp.open(method, url, true);
            }
        } else {
            alert("Tu navegador no soporta XMLHTTP");
        }
        return xhttp;
    }
}
