document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu-horizontal");

  // Verifica que existan los elementos antes de añadir el listener
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.forms["frm"];
  const mensaje = document.getElementById("mensajeEnviado");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = form.elements["fname"].value.trim();
    const apellido = form.elements["apellidos"].value.trim();
    const email = form.elements["email"].value.trim();
    const telefono = form.elements["telefono"].value.trim();

    if (!nombre || !apellido || !email || !telefono) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Por favor, ingrese un correo válido.");
      return;
    }

    if (!validateTelefono(telefono)) {
      alert("Por favor, ingrese un teléfono válido (solo números).");
      return;
    }

    const confirmar = confirm(
      "Está a punto de enviar el formulario. ¿Desea continuar?"
    );
    if (!confirmar) return;

    mensaje.style.display = "block";

    form.reset();

    setTimeout(() => {
      mensaje.style.display = "none";
    }, 5000);
  });

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    return re.test(email.toLowerCase());
  }

  function validateTelefono(telefono) {
    const re = /^[0-9]{7,15}$/; // solo dígitos, de 7 a 15 números (ajusta si quieres)
    return re.test(telefono);
  }
});
