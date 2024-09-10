document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
        password: /^.{4,12}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/
    };


    const usuario = document.getElementById('usuario').value;
    if (!expresiones.usuario.test(usuario)) {
        document.getElementById('errorUsuario').textContent = 'Usuario debe tener entre 4 y 16 caracteres alfanuméricos.';
        isValid = false;
    } else {
        document.getElementById('errorUsuario').textContent = '';
    }

    const nombre = document.getElementById('nombre').value;
    if (!expresiones.nombre.test(nombre)) {
        document.getElementById('errorNombre').textContent = 'Nombre debe tener entre 1 y 40 caracteres alfabéticos.';
        isValid = false;
    } else {
        document.getElementById('errorNombre').textContent = '';
    }

    const contrasena = document.getElementById('contrasena').value;
    if (!expresiones.password.test(contrasena)) {
        document.getElementById('errorContrasena').textContent = 'Contraseña debe tener entre 4 y 12 caracteres.';
        isValid = false;
    } else {
        document.getElementById('errorContrasena').textContent = '';
    }

    
    if (isValid) {
        this.submit();
    }
});