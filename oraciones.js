
const oraciones = {
  cruz: { titulo: "Señal de la Cruz", texto: "Por la señal..." },
  padrenuestro: { titulo: "Padre Nuestro", texto: "Padre nuestro..." },
  angel: { titulo: "Ángel de la Guarda", texto: "Ángel de mi guarda..." },
  avemaria: { titulo: "Ave María", texto: "Dios te salve María..." }
};

function abrirModal(clave) {
  const modal = document.getElementById("modal");
  const data = oraciones[clave];
  document.getElementById("modal-titulo").textContent = data.titulo;
  document.getElementById("modal-texto").textContent = data.texto;
  modal.style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".oracion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      abrirModal(btn.dataset.key);
    });
  });

  const secciones = document.querySelectorAll("section");
  const links = document.querySelectorAll("nav.menu a");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      secciones.forEach(sec => {
        sec.style.display = sec.id === targetId ? "block" : "none";
      });
    });
  });

  // Mostrar solo la primera sección
  secciones.forEach((sec, i) => {
    sec.style.display = i === 0 ? "block" : "none";
  });
});
