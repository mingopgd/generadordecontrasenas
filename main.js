let cantidad = document.getElementById('cantidad');
let botón = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');
let botónLimpiar = document.getElementById('limpiar');
let mensajeFortaleza = document.getElementById('mensajeFortaleza'); // Seleccionamos el elemento del mensaje

const cadenaCaracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"#$%&*+,-./:;<=>?@^~';

botón.addEventListener('click', generar);
botónLimpiar.addEventListener('click', limpiarCampo);

function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8) {
        mensajeFortaleza.textContent = "La cantidad de caracteres tiene que ser mayor que 8"; // Mostramos el mensaje
        mensajeFortaleza.style.color = "red"; // Color de advertencia
        return;
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    contraseña.value = password;
    validarFortaleza(password);  // Llamamos a la función de validación de fortaleza
}

// Función para limpiar el campo de la contraseña
function limpiarCampo() {
    contraseña.value = '';
    mensajeFortaleza.textContent = '';  // Limpiamos también el mensaje de fortaleza
}

// Función para validar la fortaleza de la contraseña
function validarFortaleza(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[!"#$%&'*+,-./:;<=>?@^~]/.test(password);

    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
        mensajeFortaleza.textContent = "¡Contraseña fuerte!";
        mensajeFortaleza.style.color = "green"; // Cambiamos el color para indicar fortaleza
    } else if ((tieneMayuscula || tieneMinuscula) && tieneNumero) {
        mensajeFortaleza.textContent = "Contraseña moderada. Considera agregar caracteres especiales.";
        mensajeFortaleza.style.color = "orange";
    } else {
        mensajeFortaleza.textContent = "Contraseña débil. Agrega mayúsculas, números y caracteres especiales.";
        mensajeFortaleza.style.color = "red";
    }
}