
//Funcion para crear la tabla de carreras
export function tablaCarrera(carreras) {
    // Inicializar la tabla con las etiquetas de encabezado
    var tabla = "<table><tr><th>Nombre</th><th>Fecha de inicio</th><th>Ubicación</th><th>Categoria de carrera</th><th>Evento</th><th>Acciones</th><th><a class='btn btn-success' href='../../../HTML/Formularios/Formulario_Carrera/FormularioCrear.html'>Añadir</a></th></tr>";

    // Iterar sobre cada objeto de carrera y construir las filas de la tabla
    carreras.forEach(carrera => {
        tabla += "<tr>";
        tabla += "<td>" + carrera['Nombre'] + "</td>"; 
        tabla += "<td>" + carrera['Fecha_inicio'] + "</td>"; 
        tabla += "<td>" + carrera['Ubicacion'] + "</td>"; 
        tabla += "<td>" + carrera['nombre_categoria'] + "</td>"; 
        tabla += "<td>" + carrera['nombre_evento'] + "</td>"; 
        tabla += "<td><button class='btn btn-danger' onclick='delete_Carrera(" + carrera['Id'] + ")'>Eliminar</button></td>"; 
        tabla += "<td><a class='btn btn-primary' href='../../../HTML/Formularios/Formulario_Carrera/FormularioActualizar.html?id=" + carrera['Id'] + "'>Actualizar</a></td>"; 
        tabla += "</tr>";
    });

    // Cerrar la etiqueta de la tabla
    tabla += "</table>";

    // Insertar la tabla en el contenedor especificado en el HTML
    document.getElementById("datos-containerCarrera").innerHTML = tabla;
}
