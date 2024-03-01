
export function tablaEvento(eventos){
    var tabla = "<table><tr><th>Nombre</th><th>Descripción</th><th>Fecha de inicio</th><th>Acciones</th><th><a class='btn btn-success' href='../../../HTML/Formularios/Formulario_Evento/FormularioCrear.html'>Añadir<a/></th></tr>";

    eventos.forEach(evento => {
        tabla += "<tr>";
        tabla += "<td>" + evento['Nombre'] + "</td>";
        tabla += "<td>" + evento['Descripcion'] + "</td>";
        tabla += "<td>" + evento['Fecha_inicio'] + "</td>";
        tabla += "<td><button class='btn btn-danger' onclick='delete_Evento(" + evento['Id'] + ")'>Eliminar</button></td>";
        tabla += "<td><a class='btn btn-primary' href='../../../HTML/Formularios/Formulario_Evento/FormularioActualizar.html?id=" + evento['Id'] + "'>Actualizar</a></td>";6
        tabla += "</tr>";
    });
    tabla += "</table>";
    document.getElementById("datos-container").innerHTML = tabla;
}
