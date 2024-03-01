export function tablaParticipante(participantes){
    var tabla = "<table><tr><th>Nombre</th><th>Apellidos</th><th>Email</th><th>Fecha de nacimiento</th><th>Bicicleta</th></tr>";

    participantes.forEach(participante => {
        tabla += "<tr>";
        tabla += "<td>" + participante['Nombre'] + "</td>";
        tabla += "<td>" + participante['Apellidos'] + "</td>";
        tabla += "<td>" + participante['Email'] + "</td>";
        tabla += "<td>" + participante['Fecha_nac'] + "</td>";
        tabla += "<td>" + participante['nombre_bicicleta'] + "</td>";
        tabla += "</tr>";
    });
    tabla += "</table>";
    document.getElementById("datos-container").innerHTML = tabla;
}