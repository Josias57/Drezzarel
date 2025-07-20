document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-registro");
  const btnAbrir = document.getElementById("btn-registro");
  const btnCerrar = document.getElementById("cerrar-modal");
  const form = document.getElementById("form-registro");
  const msg = document.getElementById("msg-registro");

  const abrirModal = () => modal.classList.remove("hidden");
  const cerrarModal = () => modal.classList.add("hidden");

  btnAbrir.addEventListener("click", (e) => {
    e.preventDefault();
    abrirModal();
  });

  btnCerrar.addEventListener("click", cerrarModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarModal();
  });

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

  function mostrarMensaje(texto, color) {
    msg.textContent = texto;
    msg.style.color = color;
  }
});
