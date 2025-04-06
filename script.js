import {
  generarPreguntaNivel1,
  generarPreguntaNivel2,
  generarPreguntaNivel3,
  generarPreguntaNivel4,
  getRandom,
} from "./PreguntasNiveles.js";

let respuestaSeleccionada = null;

let contadorPreguntas = 0; // contador de preguntas
let preguntasHistorial = []; // array para guardar las preguntas generadas

document.addEventListener("DOMContentLoaded", () => {
  const botonSiguiente = document.getElementById("siguiente");

  cargarNuevaPregunta();

  botonSiguiente.addEventListener("click", () => {
    const { divPregunta } = preguntasRespuestasDocument();

    if (respuestaSeleccionada === null) return; // no se seleccionó nada

    const [num1, , num2] = divPregunta.textContent.split(" ");
    const correcta = parseInt(num1) + parseInt(num2);

    if (respuestaSeleccionada === correcta) {
      alert("¡Correcto!"); // TODO: agregar un <p> o <h3> para mostrar el mensaje en la pantalla
    } else {
      alert("Incorrecto. La respuesta correcta es: " + correcta); // TODO: agregar un <p> o <h3> para mostrar el mensaje en la pantalla
    }

    // limpiar y cargar nueva pregunta
    cargarNuevaPregunta();
  });
});

function mezclarRespuestas(preguntaCargar) {
  const { divPregunta, listaRespuestas } = preguntasRespuestasDocument();

  const respuestasShuffled = preguntaCargar.respuestas
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  divPregunta.textContent = preguntaCargar.enunciado;

  listaRespuestas.forEach((btn, index) => {
    btn.textContent = respuestasShuffled[index];
    btn.classList.remove("seleccionado"); // limpiar selección anterior
  });

  respuestaSeleccionada = null; // resetear
}

document.addEventListener("click", (event) => {
  const { listaRespuestas } = preguntasRespuestasDocument();
  const botonSiguiente = document.getElementById("siguiente");

  if (listaRespuestas.includes(event.target)) {
    // sacamos selección previa
    listaRespuestas.forEach((btn) => btn.classList.remove("seleccionado"));

    // se marca como seleccionada visualmente con css
    event.target.classList.add("seleccionado");

    // se guarda la respuesta seleccionada
    respuestaSeleccionada = parseInt(event.target.textContent);

    botonSiguiente.disabled = false; // habilitar el botón "Siguiente" para pasar a la siguiente pregunta
  }
});

function preguntasRespuestasDocument() {
  const divPregunta = document.getElementById("pregunta");
  const listaRespuestas = [
    document.getElementById("respuesta1"),
    document.getElementById("respuesta2"),
    document.getElementById("respuesta3"),
    document.getElementById("respuesta4"),
  ];

  return { divPregunta, listaRespuestas };
}

function cargarNuevaPregunta() {
  const preguntaCargar = generarPreguntaNivel1(); // más adelante podés alternar niveles4
  // TODO: que a medida que se avanza de nivel, se carguen preguntas más difíciles
  mezclarRespuestas(preguntaCargar);
  document.getElementById("siguiente").disabled = true;
//   contadorPreguntas++;
//   preguntasHistorial.push(preguntaCargar); // guardar pregunta en el historial
//   preguntaALista(); // agregar pregunta a la lista de preguntas
}

function preguntaALista() {
  let botonPregunta = document.createElement("button");
  botonPregunta.textContent = "Pregunta " + contadorPreguntas;
  botonPregunta.classList.add("boton-lista");
  botonPregunta.id = "boton" + contadorPreguntas;
  $("#listaPreguntasConBotones").appendChild(botonPregunta);
}
