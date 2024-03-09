export function tablaCarrera(carreras){
    var tabla = "<table><tr><th>Nombre</th><th>fecha de inicio</th><th>Ubicación</th><th>Categoria de carrera</th><th>Evento</th><th>Acciones</th><th><a class='btn btn-success' href='../../../HTML/Formularios/Formulario_Carrera/FormularioCrear.html'>Añadir<a/></th></tr>";

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
    tabla += "</table>";
    document.getElementById("datos-containerCarrera").innerHTML = tabla;
}