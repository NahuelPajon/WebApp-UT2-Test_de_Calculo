document.addEventListener("DOMContentLoaded", () => {
  const preguntaCargar = generarPreguntaNivel1();
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

  // mezclar respuestas
  const respuestasShuffled = preguntaCargar.respuestas
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  divPregunta.textContent = preguntaCargar.enunciado;
  listaRespuestas.forEach((div, index) => {
    div.textContent = respuestasShuffled[index];
  });
});

document.addEventListener("click", CargarYVerificarRespuesta);

function CargarYVerificarRespuesta(event) {
  const divPregunta = document.getElementById("pregunta");
  const divRespuesta1 = document.getElementById("respuesta1");
  const divRespuesta2 = document.getElementById("respuesta2");
  const divRespuesta3 = document.getElementById("respuesta3");
  const divRespuesta4 = document.getElementById("respuesta4");

  if (
    event.target === divRespuesta1 ||
    event.target === divRespuesta2 ||
    event.target === divRespuesta3 ||
    event.target === divRespuesta4
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

function generarPreguntaNivel1() {
  // let pregunta = "";
  // const digitos = "0123456789";
  //const operadores = "+-*/";
  // const indiceOperador = Math.floor(Math.random() * 4);
  // const operadorRandom = operadores[indiceOperador];
  let primerNum = Math.floor(Math.random() * 9 + 1);
  let segundoNum = Math.floor(Math.random() * 9 + 1);
  const correcta = primerNum + segundoNum;
  let minima = correcta - 10;
  let maxima = correcta + 10;
  const operador = "+";
  let respuestas = [
    correcta,
    getRandom(minima, maxima),
    getRandom(minima, maxima),
    getRandom(minima, maxima),
  ];
  const pregunta = {
    enunciado: `${primerNum} ${operador} ${segundoNum}`,
    respuestas,
    correcta: 0,
  };

  return pregunta;
}

function generarPreguntaNivel2() {
  let primerNum = Math.floor(Math.random() * 50 + 1);
  let segundoNum = Math.floor(Math.random() * 25 + 1);
  const correcta = primerNum + segundoNum;
  let minima = correcta - 15;
  let maxima = correcta + 15;
  const operador = "+";
  let respuestas = [
    correcta,
    getRandom(minima, maxima),
    getRandom(minima, maxima),
    getRandom(minima, maxima),
  ];
  const pregunta = {
    enunciado: `${primerNum} ${operador} ${segundoNum}`,
    respuestas,
    correcta: 0,
  };
}

function generarPreguntaNivel3() {
  let primerNum = getRandom(5, 500);
  let segundoNum = getRandom(1, 100);
  const correcta = primerNum + segundoNum;
  let minima = correcta - 20;
  let maxima = correcta + 20;
  const operador = "+";
  let respuestas = [
    correcta,
    getRandom(minima, maxima),
    getRandom(minima, maxima),
    getRandom(minima, maxima),
  ];
  const pregunta = {
    enunciado: `${primerNum} ${operador} ${segundoNum}`,
    respuestas,
    correcta: 0,
  };
}

function generarPreguntaNivel4() {
  let primerNum = getRandom(500, 1200);
  let segundoNum = getRandom(100, 500);
  const correcta = primerNum + segundoNum;
  let minima = correcta - 50;
  let maxima = correcta + 50;
  const operador = "+";
  let respuestas = [
    correcta,
    getRandom(minima, maxima),
    getRandom(minima, maxima),
    getRandom(minima, maxima),
  ];
  const pregunta = {
    enunciado: `${primerNum} ${operador} ${segundoNum}`,
    respuestas,
    correcta: 0,
  };
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
