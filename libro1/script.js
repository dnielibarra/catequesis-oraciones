// script.js

const oraciones = {
  cruz: "En el nombre del Padre, del Hijo y del Espíritu Santo. Amén.",
  padrenuestro: `Padre nuestro que estás en el cielo,
santificado sea tu Nombre;
venga a nosotros tu reino;
hágase tu voluntad en la tierra como en el cielo.
Danos hoy nuestro pan de cada día;
perdona nuestras ofensas,
como también nosotros perdonamos a los que nos ofenden;
no nos dejes caer en la tentación,
y líbranos del mal. Amén.`,
  avemaria: `Dios te salve, María,
llena eres de gracia,
el Señor es contigo.
Bendita tú eres entre todas las mujeres,
y bendito es el fruto de tu vientre, Jesús.
Santa María, Madre de Dios,
ruega por nosotros, pecadores,
ahora y en la hora de nuestra muerte. Amén.`,
  angel: `Ángel de la guarda,
mi dulce compañía,
no me desampares
ni de noche ni de día,
hasta que me pongas
en paz y alegría
con todos los santos,
Jesús, José y María. Amén.`,
  gloria: `Gloria al Padre, al Hijo y al Espíritu Santo.
Como era en el principio, ahora y siempre,
por los siglos de los siglos. Amén.`,
  credo: `Creo en un solo Dios, Padre todopoderoso,
Creador del cielo y de la tierra,
de todo lo visible y lo invisible...
(versión completa aquí)`,
  confieso: `Yo confieso ante Dios todopoderoso,
y ante ustedes, hermanos,
que he pecado mucho de pensamiento,
palabra, obra y omisión...
(versión completa aquí)`,
  consagracion: `Oh Señora mía, oh Madre mía,
yo me ofrezco enteramente a ti...
(versión completa aquí)`,
  mandamientos: `1. Amarás a Dios sobre todas las cosas
2. No tomarás el nombre de Dios en vano
...
10. No codiciarás los bienes ajenos.`,
  sacramentos: `1. Bautismo
2. Confirmación
3. Eucaristía
4. Penitencia
5. Unción de los enfermos
6. Orden sacerdotal
7. Matrimonio`,
  virtudesTeologales: `Fe, Esperanza y Caridad.`,
  virtudesCardinales: `Prudencia, Justicia, Fortaleza y Templanza.`,
  mandamientosIglesia: `1. Oír misa entera todos los domingos y fiestas de guardar...
(versión completa aquí)`,
  contriccion: `Dios mío, me arrepiento de todo corazón de haberte ofendido...
(versión corta)`,
  salve: `Dios te salve, Reina y Madre de misericordia...
(versión completa aquí)`,
  amparo: `Bajo tu amparo nos acogemos,
Santa Madre de Dios...
(versión completa aquí)`,
  alma: `Alma de Cristo, santifícame...
(versión completa aquí)`,
  comunion: `Creo, Jesús mío, que estás realmente presente...
(versión completa aquí)`,
  pecados: `1. Soberbia
2. Avaricia
3. Lujuria
4. Ira
5. Gula
6. Envidia
7. Pereza`,
  confesion: `1. Examen de conciencia
2. Dolor de los pecados
3. Propósito de enmienda
4. Confesión de los pecados al sacerdote
5. Cumplir la penitencia`
};

const botones = document.querySelectorAll('.oracion-btn');
const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-titulo');
const modalTexto = document.getElementById('modal-texto');
const cerrar = document.querySelector('.close');

botones.forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.getAttribute('data-key');
    const texto = oraciones[key];
    if (texto) {
      modalTitulo.textContent = btn.textContent;
      modalTexto.textContent = texto;
      modal.style.display = 'block';
    }
  });
});

cerrar.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
