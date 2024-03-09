
export class Validaciones {

    validarCamposLogin(username, password) {

        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]+$/;

        let errores = [];

        if (!username || !password) {
            errores.push('Por favor, completa ambos campos.');
        }

        if (username.length < 3 || username.length > 20) {
            errores.push('El nombre de usuario debe tener entre 3 y 20 caracteres.');
        }

        if (password.length < 6 || password.length > 20) {
            errores.push('La contraseña debe tener entre 6 y 20 caracteres.');
        }

        if (!usernameRegex.test(username)) {
            errores.push('El nombre de usuario solo puede contener letras, números y guiones bajos.');
        }

        if (!passwordRegex.test(password)) {
            errores.push('La contraseña solo puede contener letras, números y algunos caracteres especiales.');
        }

        if (errores.length > 0) {
            alert(errores.join('\n'));
            return false;
        }

        return true;
    }

    validarCamposEventos(nombre, descripcion, fecha_inicio) {
        const nombreRegex = /^[a-zA-Z0-9_\s]+$/;
   
        let errores = [];

        if (!nombreRegex.test(nombre)) {
            errores.push('El nombre del evento solo puede contener letras, números y guiones bajos.');
        }

        if (!nombre || !descripcion || !fecha_inicio) {
            errores.push('Por favor, completa todos los campos.');
        }

        if (nombre.length < 3 || nombre.length > 20) {
            errores.push('El nombre del evento debe tener entre 3 y 20 caracteres.');
        }

        if (descripcion.length < 10 || descripcion.length > 100) {
            errores.push('La descripción del evento debe tener entre 10 y 100 caracteres.');
        }

        if (errores.length > 0) {
            alert(errores.join('\n'));
            return false;
        }

        return true;
    }

    validarCamposCarreras(nombre, fecha_inicio, ubicacion){

        const nombreRegex = /^[a-zA-Z0-9_\s]+$/;

        let errores = [];

        if (!nombreRegex.test(nombre)) {
            errores.push('El nombre del evento solo puede contener letras, números y guiones bajos.');
        }

        if (!nombre || !ubicacion || !fecha_inicio) {
            errores.push('Por favor, completa todos los campos.');
        }

        if (nombre.length < 3 || nombre.length > 20) {
            errores.push('El nombre del evento debe tener entre 3 y 20 caracteres.');
        }

        if (ubicacion.length < 10 || ubicacion.length > 100) {
            errores.push('La ubicacion del evento debe tener entre 10 y 100 caracteres.');
        }

        if (errores.length > 0) {
            alert(errores.join('\n'));
            return false;
        }

        return true;
    }



}