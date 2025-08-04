// oraciones.js

const oraciones = {
  cruz: {
    titulo: "Señal de la Cruz",
    texto: "Por la señal de la Santa Cruz,\nde nuestros enemigos líbranos Señor Dios nuestro.\nEn el nombre del Padre, del Hijo y del Espíritu Santo. Amén."
  },
  padrenuestro: {
    titulo: "Padre Nuestro",
    texto: "Padre nuestro que estás en el cielo,\nsantificado sea tu Nombre;\nvenga a nosotros tu reino;\nhágase tu voluntad en la tierra como en el cielo.\nDanos hoy nuestro pan de cada día;\nperdona nuestras ofensas,\ncomo también nosotros perdonamos a los que nos ofenden;\nno nos dejes caer en la tentación\ny líbranos del mal. Amén."
  },
  avemaria: {
    titulo: "Ave María",
    texto: "Dios te salve, María, llena eres de gracia,\nel Señor es contigo.\nBendita tú eres entre todas las mujeres,\ny bendito es el fruto de tu vientre, Jesús.\nSanta María, Madre de Dios,\nruega por nosotros pecadores,\nahora y en la hora de nuestra muerte. Amén."
  },
  angel: {
    titulo: "Ángel de la Guarda",
    texto: "Ángel de mi guarda,\ndulce compañía,\nno me desampares\nni de noche ni de día.\nNo me dejes solo,\nque me perdería.\nHasta que descanse\nen los brazos de Jesús, José y María. Amén."
  },
  gloria: {
    titulo: "Gloria al Padre",
    texto: "Gloria al Padre, y al Hijo, y al Espíritu Santo.\nComo era en el principio, ahora y siempre,\npor los siglos de los siglos. Amén."
  },
  credo: {
    titulo: "Credo Niceno-Constantinopolitano",
    texto: "Creo en un solo Dios, Padre todopoderoso,\nCreador del cielo y de la tierra, de todo lo visible y lo invisible.\nCreo en un solo Señor, Jesucristo, Hijo único de Dios,\nnacido del Padre antes de todos los siglos: Dios de Dios, Luz de Luz,\nDios verdadero de Dios verdadero, engendrado, no creado,\nde la misma naturaleza del Padre, por quien todo fue hecho;\nque por nosotros, los hombres, y por nuestra salvación bajó del cielo,\ny por obra del Espíritu Santo se encarnó de María, la Virgen,\ny se hizo hombre;\ny por nuestra causa fue crucificado en tiempos de Poncio Pilato;\npadeció y fue sepultado, y resucitó al tercer día, según las Escrituras,\ny subió al cielo, y está sentado a la derecha del Padre;\ny de nuevo vendrá con gloria para juzgar a vivos y muertos,\ny su reino no tendrá fin.\nCreo en el Espíritu Santo, Señor y dador de vida,\nque procede del Padre y del Hijo,\nque con el Padre y el Hijo recibe una misma adoración y gloria,\ny que habló por los profetas.\nCreo en la Iglesia, que es una, santa, católica y apostólica.\nConfieso que hay un solo Bautismo para el perdón de los pecados.\nEspero la resurrección de los muertos y la vida del mundo futuro. Amén."
  },
  confieso: {
    titulo: "Yo Confieso",
    texto: "Yo confieso ante Dios todopoderoso,\ny ante ustedes, hermanos,\nque he pecado mucho de pensamiento, palabra, obra y omisión.\nPor mi culpa, por mi culpa, por mi gran culpa.\nPor eso ruego a Santa María, siempre Virgen,\na los ángeles, a los santos y a ustedes, hermanos,\nque intercedan por mí ante Dios, nuestro Señor. Amén."
  },
  consagracion: {
    titulo: "Consagración a la Virgen",
    texto: "Oh Señora mía, oh Madre mía,\nyo me ofrezco enteramente a ti;\ny en prueba de mi filial afecto\nte consagro en este día,\nmis ojos, mis oídos, mi lengua y mi corazón;\nen una palabra, todo mi ser.\nYa que soy todo tuyo,\no me dejes, Madre mía. Amén."
  },
  actocorto: {
    titulo: "Acto de Contrición (corto)",
    texto: "Jesús, mi Señor y Redentor,\nyo me arrepiento de todos los pecados que he cometido\nporque con ellos he ofendido a un Dios tan bueno.\nPropongo firmemente no volver a pecar\ny confío en que por tu infinita misericordia\nme has de conceder el perdón de mis culpas\ny me has de llevar a la vida eterna. Amén."
  },
  salve: {
    titulo: "Salve Regina",
    texto: "Dios te salve, Reina y Madre de misericordia,\nvida, dulzura y esperanza nuestra; Dios te salve.\nA ti llamamos los desterrados hijos de Eva,\na ti suspiramos, gimiendo y llorando,\nen este valle de lágrimas.\nEa, pues, Señora, abogada nuestra,\nvuelve a nosotros esos tus ojos misericordiosos.\nY después de este destierro, muéstranos a Jesús,\nfruto bendito de tu vientre.\n¡Oh clemente, oh piadosa, oh dulce Virgen María!\nRuega por nosotros, Santa Madre de Dios,\npara que seamos dignos de alcanzar las promesas de Jesucristo. Amén."
  },
  amparo: {
    titulo: "Bajo tu Amparo",
    texto: "Bajo tu amparo nos acogemos,\nSanta Madre de Dios;\nno deseches las súplicas que te dirigimos\nen nuestras necesidades,\nsino líbranos siempre de todo peligro,\noh Virgen gloriosa y bendita. Amén."
  },
  // El resto de oraciones faltantes se pueden continuar aquí...
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
