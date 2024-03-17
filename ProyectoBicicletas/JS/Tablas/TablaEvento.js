
//Funcion para crear la tabla de eventos
export function tablaEvento(eventos) {
    // Inicializar la tabla con las etiquetas de encabezado
    var tabla = "<table><tr><th>Nombre</th><th>Descripción</th><th>Fecha de inicio</th><th>Acciones</th><th><a class='btn btn-success' href='../../../HTML/Formularios/Formulario_Evento/FormularioCrear.html'>Añadir</a></th></tr>";

    // Iterar sobre cada objeto de evento y construir las filas de la tabla
    eventos.forEach(evento => {
        tabla += "<tr>";
        tabla += "<td>" + evento['Nombre'] + "</td>"; 
        tabla += "<td>" + evento['Descripcion'] + "</td>"; 
        tabla += "<td>" + evento['Fecha_inicio'] + "</td>"; 
        tabla += "<td><button class='btn btn-danger' onclick='delete_Evento(" + evento['Id'] + ")'>Eliminar</button></td>"; 
        tabla += "<td><a class='btn btn-primary' href='../../../HTML/Formularios/Formulario_Evento/FormularioActualizar.html?id=" + evento['Id'] + "'>Actualizar</a></td>"; 
    });

    // Cerrar la etiqueta de la tabla
    tabla += "</table>";

    // Insertar la tabla en el contenedor especificado en el HTML
    document.getElementById("datos-container").innerHTML = tabla;
}
