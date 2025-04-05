import {
  generarPreguntaNivel1,
  generarPreguntaNivel2,
  generarPreguntaNivel3,
  generarPreguntaNivel4,
  getRandom,
} from "./PreguntasNiveles.js";

document.addEventListener("DOMContentLoaded", () => {
  const preguntaCargar = generarPreguntaNivel1();

  mezclarRespuestas(preguntaCargar);
});

function mezclarRespuestas(preguntaCargar) {
  const { divPregunta, listaRespuestas } = preguntasRespuestasDocument();

  const respuestasShuffled = preguntaCargar.respuestas
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  divPregunta.textContent = preguntaCargar.enunciado;
  listaRespuestas.forEach((div, index) => {
    div.textContent = respuestasShuffled[index];
  });
}

document.addEventListener("click", CargarYVerificarRespuesta);

function CargarYVerificarRespuesta(event) {
  const { divPregunta, listaRespuestas } = preguntasRespuestasDocument();

  if (
    event.target === listaRespuestas[0] ||
    event.target === listaRespuestas[1] ||
    event.target === listaRespuestas[2] ||
    event.target === listaRespuestas[3]
  ) {
    const respuestaSeleccionada = parseInt(event.target.textContent);
    const correcta =
      parseInt(divPregunta.textContent.split(" ")[0]) +
      parseInt(divPregunta.textContent.split(" ")[2]);
    if (respuestaSeleccionada === correcta) {
      alert("¡Correcto!"); // TODO: agregar un <p> o <h3> para mostrar el mensaje en la pantalla
    } else {
      alert("Incorrecto. La respuesta correcta es: " + correcta); // TODO: agregar un <p> o <h3> para mostrar el mensaje en la pantalla
    }
  }
}

function preguntasRespuestasDocument() {
  const divPregunta = document.getElementById("pregunta");
  const divRespuesta1 = document.getElementById("respuesta1");
  const divRespuesta2 = document.getElementById("respuesta2");
  const divRespuesta3 = document.getElementById("respuesta3");
  const divRespuesta4 = document.getElementById("respuesta4");

  const listaRespuestas = [
    divRespuesta1,
    divRespuesta2,
    divRespuesta3,
    divRespuesta4,
  ];

  return {
    divPregunta,
    listaRespuestas,
  };
}
