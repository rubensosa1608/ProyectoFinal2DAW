export class Validaciones {
    // Método para validar campos de inicio de sesión
    validarCamposLogin(username, password) {
        // Expresiones regulares para validar nombre de usuario y contraseña
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]+$/;

        // Array para almacenar mensajes de error
        let errores = [];

        // Validar si los campos están vacíos
        if (!username || !password) {
            errores.push('Por favor, completa ambos campos.');
        }

        // Validar longitud del nombre de usuario
        if (username.length < 3 || username.length > 20) {
            errores.push('El nombre de usuario debe tener entre 3 y 20 caracteres.');
        }

        // Validar longitud de la contraseña
        if (password.length < 5 || password.length > 20) {
            errores.push('La contraseña debe tener entre 5 y 20 caracteres.');
        }

        // Validar formato del nombre de usuario
        if (!usernameRegex.test(username)) {
            errores.push('El nombre de usuario solo puede contener letras, números y guiones bajos.');
        }

        // Validar formato de la contraseña
        if (!passwordRegex.test(password)) {
            errores.push('La contraseña solo puede contener letras, números y algunos caracteres especiales.');
        }

        // Mostrar mensajes de error si los hay y devolver false
        if (errores.length > 0) {
            alert(errores.join('\n'));
            return false;
        }

        // Si no hay errores, devolver true
        return true;
    }

    // Método para validar campos de eventos
    validarCamposEventos(nombre, descripcion, fecha_inicio) {
        // Expresión regular para validar nombre del evento
        const nombreRegex = /^[a-zA-Z0-9_\s]+$/;
   
        // Array para almacenar mensajes de error
        let errores = [];

        // Validar formato del nombre del evento
        if (!nombreRegex.test(nombre)) {
            errores.push('El nombre del evento solo puede contener letras, números y guiones bajos.');
        }

        // Validar si los campos están vacíos
        if (!nombre || !descripcion || !fecha_inicio) {
            errores.push('Por favor, completa todos los campos.');
        }

        // Validar longitud del nombre del evento
        if (nombre.length < 3 || nombre.length > 50) {
            errores.push('El nombre del evento debe tener entre 3 y 20 caracteres.');
        }

        // Validar longitud de la descripción del evento
        if (descripcion.length < 5 || descripcion.length > 300) {
            errores.push('La descripción del evento debe tener entre 10 y 300 caracteres.');
        }

        // Mostrar mensajes de error si los hay y devolver false
        if (errores.length > 0) {
            alert(errores.join('\n'));
            return false;
        }

        // Si no hay errores, devolver true
        return true;
    }

    // Método para validar campos de carreras
    validarCamposCarreras(nombre, fecha_inicio, ubicacion) {
        // Expresión regular para validar nombre de la carrera
        const nombreRegex = /^[a-zA-Z0-9_\s]+$/;

        // Array para almacenar mensajes de error
        let errores = [];

        // Validar formato del nombre de la carrera
        if (!nombreRegex.test(nombre)) {
            errores.push('El nombre del evento solo puede contener letras, números y guiones bajos.');
        }

        // Validar si los campos están vacíos
        if (!nombre || !ubicacion || !fecha_inicio) {
            errores.push('Por favor, completa todos los campos.');
        }

        // Validar longitud del nombre de la carrera
        if (nombre.length < 3 || nombre.length > 50) {
            errores.push('El nombre del evento debe tener entre 3 y 20 caracteres.');
        }

        // Validar longitud de la ubicación de la carrera
        if (ubicacion.length < 5 || ubicacion.length > 100) {
            errores.push('La ubicacion del evento debe tener entre 10 y 100 caracteres.');
        }

        // Mostrar mensajes de error si los hay y devolver false
        if (errores.length > 0) {
            alert(errores.join('\n'));
            return false;
        }

        // Si no hay errores, devolver true
        return true;
    }
}
