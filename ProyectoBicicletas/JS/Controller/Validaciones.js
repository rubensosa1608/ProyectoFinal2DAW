export class Validaciones {
    /**
     * Método para validar campos de inicio de sesión.
     * @param {string} username - El nombre de usuario introducido.
     * @param {string} password - La contraseña introducida.
     * @returns {boolean} - Devuelve true si los campos son válidos, de lo contrario devuelve false.
     */
    validarCamposLogin(username, password) {
        // Expresiones regulares para validar nombre de usuario y contraseña
        const usernameRegex = /^[a-zA-ZñÑ0-9_\s]+$/;
        const passwordRegex = /^[a-zA-ZñÑ0-9!@#$%^&*()_+]+$/;

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

    /**
     * Método para validar campos de eventos.
     * @param {string} nombre - El nombre del evento introducido.
     * @param {string} descripcion - La descripción del evento introducida.
     * @param {string} fecha_inicio - La fecha de inicio del evento introducida.
     * @returns {boolean} - Devuelve true si los campos son válidos, de lo contrario devuelve false.
     */
    validarCamposEventos(nombre, descripcion, fecha_inicio) {
        // Expresión regular para validar nombre del evento
        const nombreRegex = /^[a-zA-ZñÑ0-9_\s]+$/;

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
            errores.push('El nombre del evento debe tener entre 3 y 50 caracteres.');
        }

        // Validar longitud de la descripción del evento
        if (descripcion.length < 5 || descripcion.length > 300) {
            errores.push('La descripción del evento debe tener entre 5 y 300 caracteres.');
        }

        // Mostrar mensajes de error si los hay y devolver false
        if (errores.length > 0) {
            alert(errores.join('\n'));
            return false;
        }

        // Si no hay errores, devolver true
        return true;
    }

    /**
     * Método para validar campos de carreras.
     * @param {string} nombre - El nombre de la carrera introducido.
     * @param {string} fecha_inicio - La fecha de inicio de la carrera introducida.
     * @param {string} ubicacion - La ubicación de la carrera introducida.
     * @returns {boolean} - Devuelve true si los campos son válidos, de lo contrario devuelve false.
     */
    validarCamposCarreras(nombre, fecha_inicio, ubicacion) {
        // Expresión regular para validar nombre de la carrera
        const nombreRegex = /^[a-zA-ZñÑ0-9_\s]+$/;

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
            errores.push('El nombre del evento debe tener entre 3 y 50 caracteres.');
        }

        // Validar longitud de la ubicación de la carrera
        if (ubicacion.length < 5 || ubicacion.length > 100) {
            errores.push('La ubicación del evento debe tener entre 5 y 100 caracteres.');
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
