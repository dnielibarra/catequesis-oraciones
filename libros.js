document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav.menu a");
  const secciones = document.querySelectorAll("section.libro");

  function mostrarLibro(id) {
    secciones.forEach(sec => {
      sec.classList.remove("activo");
    });

    const activo = document.getElementById(id);
    if (activo) {
      activo.classList.add("activo");
    }
  }

  // Activar libro al hacer clic en menú
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.getAttribute("href").substring(1); // quitar el #
      mostrarLibro(id);
      history.replaceState(null, "", "#" + id); // actualiza la URL sin recargar
    });
  });

  // Mostrar libro desde hash al cargar la página
  const hash = location.hash.replace("#", "");
  if (hash && document.getElementById(hash)) {
    mostrarLibro(hash);
  } else {
    mostrarLibro("libro1"); // por defecto
  }
});
