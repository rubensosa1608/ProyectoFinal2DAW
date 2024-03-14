export class Conexion {

    // Función para crear el objeto XMLHttpRequest.
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
