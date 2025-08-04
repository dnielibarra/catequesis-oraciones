const oraciones = {
  cruz: {
    titulo: "Señal de la Cruz",
    texto: "Por la señal de la Santa Cruz,\nde nuestros enemigos líbranos Señor Dios nuestro.\nEn el nombre del Padre, del Hijo y del Espíritu Santo. Amén."
  },
  padrenuestro: {
    titulo: "Padre Nuestro",
    texto: "Padre nuestro que estás en el cielo,\nsantificado sea tu Nombre;\nvenga a nosotros tu reino;\nhágase tu voluntad en la tierra como en el cielo.\nDanos hoy nuestro pan de cada día;\nperdona nuestras ofensas,\ncomo también nosotros perdonamos a los que nos ofenden;\nno nos dejes caer en la tentación\ny líbranos del mal. Amén."
  },
  angel: {
    titulo: "Ángel de la Guarda",
    texto: "Ángel de mi guarda,\ndulce compañía,\nno me desampares\nni de noche ni de día.\nNo me dejes solo,\nque me perdería.\nHasta que descanse\nen los brazos de Jesús, José y María. Amén."
  }
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

// Swipe para ocultar
let startX = 0;
let isSwiping = false;
let currentItem = null;

function startSwipe(e) {
  isSwiping = true;
  currentItem = e.target.closest('.oracion-btn');
  startX = e.touches ? e.touches[0].clientX : e.clientX;
}

function moveSwipe(e) {
  if (!isSwiping || !currentItem) return;
  let currentX = e.touches ? e.touches[0].clientX : e.clientX;
  let diffX = currentX - startX;
  currentItem.style.transform = `translateX(${diffX}px)`;
}

function endSwipe(e) {
  if (!isSwiping || !currentItem) return;
  let endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
  let diffX = endX - startX;

  if (Math.abs(diffX) > 100) {
    currentItem.classList.add('oculto');
  } else {
    currentItem.style.transform = 'translateX(0)';
    if (Math.abs(diffX) < 10) {
      abrirModal(currentItem.getAttribute('data-key'));
    }
  }

  isSwiping = false;
  currentItem = null;
}

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) cerrarModal();
};
