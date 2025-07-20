document.addEventListener("DOMContentLoaded", () => {
  // Elementos del modal de registro
  const modal = document.getElementById("modal-registro");
  const btnAbrir = document.getElementById("btn-registro");
  const btnCerrar = document.getElementById("cerrar-modal");
  const form = document.getElementById("form-registro");
  const msg = document.getElementById("msg-registro");

  // Funciones para abrir/cerrar modal
  const abrirModal = () => modal.classList.remove("hidden");
  const cerrarModal = () => {
    modal.classList.add("hidden");
    msg.textContent = "";
  };

  // Abrir modal al hacer click en "Registrarse"
  btnAbrir.addEventListener("click", (e) => {
    e.preventDefault();
    abrirModal();
  });

  // Cerrar modal al hacer click en la X
  btnCerrar.addEventListener("click", cerrarModal);

  // Cerrar modal con tecla ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarModal();
  });

  // Validación y feedback del formulario de registro
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form["nombre-registro"].value.trim();
    const email = form["email-registro"].value.trim();
    const pass = form["pass-registro"].value.trim();

    if (!nombre || !email || !pass) {
      mostrarMensaje("Completa todos los campos.", "red");
      return;
    }

    mostrarMensaje("Registro exitoso (simulado)", "green");
    form.reset();

    setTimeout(cerrarModal, 1500);
  });

  // Mostrar mensajes de feedback
  function mostrarMensaje(texto, color) {
    msg.textContent = texto;
    msg.style.color = color;
  }
});
