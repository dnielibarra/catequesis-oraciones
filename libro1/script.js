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
de todo lo visible y lo invisible.
Creo en un solo Señor, Jesucristo, Hijo único de Dios,
nacido del Padre antes de todos los siglos:
Dios de Dios, Luz de Luz, Dios verdadero de Dios verdadero,
engendrado, no creado, de la misma naturaleza del Padre,
por quien todo fue hecho;
que por nosotros los hombres y por nuestra salvación
bajó del cielo,
y por obra del Espíritu Santo se encarnó de María, la Virgen,
y se hizo hombre;
y por nuestra causa fue crucificado en tiempos de Poncio Pilato;
padeció y fue sepultado,
y resucitó al tercer día, según las Escrituras,
y subió al cielo,
y está sentado a la derecha del Padre;
y de nuevo vendrá con gloria para juzgar a vivos y muertos,
y su reino no tendrá fin.
Creo en el Espíritu Santo, Señor y dador de vida,
que procede del Padre y del Hijo,
que con el Padre y el Hijo recibe una misma adoración y gloria,
y que habló por los profetas.
Creo en la Iglesia, que es una, santa, católica y apostólica.
Confieso que hay un solo bautismo para el perdón de los pecados.
Espero la resurrección de los muertos
y la vida del mundo futuro. Amén.`,

  confieso: `Yo confieso ante Dios todopoderoso,
y ante ustedes, hermanos,
que he pecado mucho de pensamiento,
palabra, obra y omisión:
por mi culpa, por mi culpa, por mi gran culpa.
Por eso ruego a Santa María, siempre Virgen,
a los ángeles, a los santos,
y a ustedes, hermanos,
que intercedan por mí ante Dios, nuestro Señor. Amén.`,

  consagracion: `Oh Señora mía, oh Madre mía,
yo me ofrezco enteramente a ti;
y en prueba de mi filial afecto,
te consagro en este día:
mis ojos, mis oídos, mi lengua y mi corazón,
en una palabra, todo mi ser.
Ya que soy todo tuyo,
¡Oh Madre de bondad!
guárdame y defiéndeme
como hijo y posesión tuya. Amén.`,

  mandamientos: `1. Amarás a Dios sobre todas las cosas.
2. No tomarás el nombre de Dios en vano.
3. Santificarás las fiestas.
4. Honrarás a tu padre y a tu madre.
5. No matarás.
6. No cometerás actos impuros.
7. No robarás.
8. No dirás falso testimonio ni mentirás.
9. No consentirás pensamientos ni deseos impuros.
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

  mandamientosIglesia: `1. Oír Misa entera todos los domingos y fiestas de guardar.
2. Confesar los pecados al menos una vez al año.
3. Comulgar al menos por Pascua de Resurrección.
4. Ayunar y abstenerse de comer carne cuando lo manda la Santa Madre Iglesia.
5. Ayudar a la Iglesia en sus necesidades.`,

  contriccion: `Dios mío, me arrepiento de todo corazón de haberte ofendido.
Propongo firmemente no volver a pecar
porque te amo sobre todas las cosas.
Dame tu gracia para cumplir mi propósito. Amén.`,

  salve: `Dios te salve, Reina y Madre de misericordia,
vida, dulzura y esperanza nuestra; Dios te salve.
A ti llamamos los desterrados hijos de Eva;
a ti suspiramos, gimiendo y llorando,
en este valle de lágrimas.
Ea, pues, Señora, abogada nuestra,
vuelve a nosotros esos tus ojos misericordiosos;
y después de este destierro,
muéstranos a Jesús, fruto bendito de tu vientre.
¡Oh clemente, oh piadosa, oh dulce Virgen María!
Ruega por nosotros, Santa Madre de Dios,
para que seamos dignos de alcanzar las promesas de Jesucristo. Amén.`,

  amparo: `Bajo tu amparo nos acogemos,
Santa Madre de Dios;
no desprecies las súplicas que te dirigimos en nuestras necesidades,
antes bien, líbranos de todo peligro,
¡oh Virgen gloriosa y bendita! Amén.`,

  alma: `Alma de Cristo, santifícame.
Cuerpo de Cristo, sálvame.
Sangre de Cristo, embriágame.
Agua del costado de Cristo, lávame.
Pasión de Cristo, confórtame.
¡Oh buen Jesús!, óyeme.
Dentro de tus llagas, escóndeme.
No permitas que me aparte de Ti.
Del maligno enemigo, defiéndeme.
En la hora de mi muerte, llámame,
y mándame ir a Ti,
para que con tus santos te alabe
por los siglos de los siglos. Amén.`,

  comunion: `Creo, Jesús mío, que estás real y verdaderamente en el cielo
y en el Santísimo Sacramento del Altar.
Te amo sobre todas las cosas
y deseo vivamente recibirte dentro de mi alma,
pero no pudiendo hacerlo ahora sacramentalmente,
ven al menos espiritualmente a mi corazón.
Y como si ya te hubiese recibido, te abrazo y me uno del todo a Ti.
No permitas, Señor, que jamás me aparte de Ti. Amén.`,

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

// Mostrar solo una sección de libro al hacer clic en el menú
const enlacesMenu = document.querySelectorAll('nav.menu a');
const secciones = document.querySelectorAll('.libro-section');

// Mostrar el primer libro por defecto (puedes cambiarlo)
document.getElementById('libro1').classList.add('activo');

// Agrega listeners a los links del menú
enlacesMenu.forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault();
    const objetivo = enlace.getAttribute('href').substring(1);

    secciones.forEach(sec => sec.classList.remove('activo'));

    const seccionMostrada = document.getElementById(objetivo);
    if (seccionMostrada) {
      seccionMostrada.classList.add('activo');
    }
  });
});

