const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    password: /^.{4,12}$/,
};

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "username":
            validarCampo(expresiones.usuario, e.target, 'username');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            break;
    }
};

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    if (!expresiones.usuario.test(formulario.username.value) || !expresiones.password.test(formulario.password.value)) {
        e.preventDefault();
        alert('Por favor, rellena los campos correctamente.');
    }
});

