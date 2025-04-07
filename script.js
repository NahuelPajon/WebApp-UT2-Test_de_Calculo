let preguntas = [];
let nivel = 1;
let totalPreguntasRespondidas = 0;
const preguntasPorNivel = 5;
let preguntaActual = 0;
let yaRespondida = false;
const operadores = "+-*/";

document.addEventListener("DOMContentLoaded", () => {
  cargarNuevaPregunta();

  document.querySelector(".siguiente").addEventListener("click", () => {
    if (!yaRespondida) return;

    const siguienteIndex = preguntaActual + 1;

    if (siguienteIndex < preguntas.length) {
      mostrarPregunta(preguntas[siguienteIndex], siguienteIndex);
      return;
    }

    totalPreguntasRespondidas++;
    if (totalPreguntasRespondidas % preguntasPorNivel === 0) {
      nivel = Math.min(nivel + 1, 4);
    }

    cargarNuevaPregunta();
  });
});

function cargarNuevaPregunta() {
  const pregunta = generarPreguntaPorNivel(nivel);
  preguntas.push(pregunta);
  const nuevaIndex = preguntas.length - 1;
  mostrarPregunta(pregunta, nuevaIndex);
  agregarAlSidebar(nuevaIndex);
}

function mostrarPregunta(pregunta, index) {
  preguntaActual = index;
  yaRespondida = pregunta.respondida || false;

  document.getElementById("pregunta").textContent = `Pregunta ${index + 1}: ${
    pregunta.enunciado
  }`;

  pregunta.respuestas.forEach((respuesta, i) => {
    const boton = document.querySelector(`.respuesta${i + 1}`);
    boton.textContent = respuesta;
    boton.className = `respuesta${i + 1}`;

    if (yaRespondida) {
      boton.disabled = true;
      if (i === pregunta.seleccionada) {
        boton.classList.add(
          pregunta.correcta === i ? "correcta" : "incorrecta"
        );
      }
    } else {
      boton.disabled = false;
      boton.onclick = () => responder(pregunta, i);
    }
  });

  if (yaRespondida) {
    activarBotonSiguiente();
  } else {
    desactivarBotonSiguiente();
  }
}

function responder(pregunta, seleccion) {
  if (yaRespondida) return;

  yaRespondida = true;
  pregunta.respondida = true;
  pregunta.seleccionada = seleccion;

  const correcta = pregunta.correcta;

  for (let i = 0; i < 4; i++) {
    const btn = document.querySelector(`.respuesta${i + 1}`);
    btn.disabled = true;

    if (i === correcta) {
      btn.classList.add("correcta");
    }
    if (i === seleccion && i !== correcta) {
      btn.classList.add("incorrecta");
    }
  }

  actualizarEstadoSidebar(preguntas.length - 1, correcta === seleccion);
  activarBotonSiguiente();
}

function agregarAlSidebar(index) {
  if (document.getElementById(`sidebar-${index}`)) return;

  const lista = document.querySelector(".listaPreguntas ul");
  const li = document.createElement("li");
  const boton = document.createElement("button");

  boton.textContent = `Pregunta ${index + 1}`;
  boton.id = `sidebar-${index}`;

  boton.addEventListener("click", () => {
    mostrarPregunta(preguntas[index], index);
  });

  li.appendChild(boton);
  lista.appendChild(li);
}

function actualizarEstadoSidebar(index, correcto) {
  const boton = document.getElementById(`sidebar-${index}`);
  if (!boton) return;
  boton.textContent = `Pregunta ${index + 1} ${correcto ? "✔️" : "❌"}`;
}

function activarBotonSiguiente() {
  document.querySelector(".siguiente").disabled = false;
}

function desactivarBotonSiguiente() {
  document.querySelector(".siguiente").disabled = true;
}

function generarPreguntaPorNivel(nivel) {
  switch (nivel) {
    case 1:
      return generarPreguntaNivel1();
    case 2:
      return generarPreguntaNivel2();
    case 3:
      return generarPreguntaNivel3();
    case 4:
      return generarPreguntaNivel4();
  }
}

function generarPreguntaNivel1() {
    let a = getRandom(1, 9), b = getRandom(1, 9);
    const operadores = ['+', '-'];
    let posOperador = getRandom(0, 1);
    return crearPregunta(a, b, operadores[posOperador]);
}

function generarPreguntaNivel2() {
    let a = getRandom(10, 50), b = getRandom(10, 25);
    const operadores = ['+', '-', '*'];
    let posOperador = getRandom(0, 2);
    return crearPregunta(a, b, operadores[posOperador]);
}

function generarPreguntaNivel3() {
    let a = getRandom(50, 500), b = getRandom(25, 100);
    const operadores = ['+', '-', '*', '/'];
    let posOperador = getRandom(0, 3);
    return crearPregunta(a, b, operadores[posOperador]);
}

function generarPreguntaNivel4() {
    let a = getRandom(500, 1200), b = getRandom(100, 300);
    const operadores = ['+', '-', '*', '/', '**', '%'];
    let posOperador = getRandom(0, 5);
    return crearPregunta(a, b, operadores[posOperador]);
}

function crearPregunta(a, b, operador) {
    const correcta = a + b;
    let respuestas = [
        correcta,
        correcta + getRandom(1, 10),
        correcta - getRandom(1, 10),
        correcta + getRandom(10, 20),
    ];

  respuestas = mezclarArray(respuestas);
  return {
    enunciado: `${a} ${operador} ${b}`,
    respuestas,
    correcta: respuestas.indexOf(correcta),
  };
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mezclarArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
