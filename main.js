const cantidad = document.getElementById('cantidad');
const boton = document.getElementById('generar');
const contraseña = document.getElementById('contraseña');
const clearButton = document.getElementById('clear');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

boton.addEventListener('click', generar);
clearButton.addEventListener('click', function() {
  contraseña.value = '';
});

function generar() {
  const numeroDigitado = parseInt(cantidad.value);
  
  if (numeroDigitado < 8) {
    alert("La cantidad de caracteres tiene que ser mayor a 8");
    return;
  }
  
  let password = '';
  for (let i = 0; i < numeroDigitado; i++) {
    const caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
    password += caracterAleatorio;
  }
  
  const passwordStrength = validatePasswordStrength(password);
  
  if (passwordStrength === 'weak') {
    alert("La contraseña es débil. Por favor, inténtelo de nuevo.");
  } else {
    contraseña.value = password;
  }
}

function validatePasswordStrength(password) {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()]/.test(password);
  
  if (hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {
    return 'strong';
  } else {
    return 'weak';
  }
}