
//Funcion para crear la tabla de participantes
export function tablaParticipante(participantes) {
    // Inicializar la tabla con las etiquetas de encabezado
    var tabla = "<table><tr><th>Nombre</th><th>Apellidos</th><th>Email</th><th>Fecha de nacimiento</th><th>Bicicleta</th></tr>";

    // Iterar sobre cada objeto de participante y construir las filas de la tabla
    participantes.forEach(participante => {
        tabla += "<tr>";
        tabla += "<td>" + participante['Nombre'] + "</td>"; 
        tabla += "<td>" + participante['Apellidos'] + "</td>"; 
        tabla += "<td>" + participante['Email'] + "</td>"; 
        tabla += "<td>" + participante['Fecha_nac'] + "</td>"; 
        tabla += "<td>" + participante['nombre_bicicleta'] + "</td>";
        tabla += "</tr>";
    });

    // Cerrar la etiqueta de la tabla
    tabla += "</table>";

    // Insertar la tabla en el contenedor especificado en el HTML
    document.getElementById("datos-container").innerHTML = tabla;
}
