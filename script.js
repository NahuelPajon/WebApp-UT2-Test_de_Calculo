document.addEventListener("DOMContentLoaded", () => {
    const preguntaCargar = generarPreguntaNivel1();
    const divPregunta = document.getElementById("pregunta");
    divPregunta.textContent = preguntaCargar.enunciado;
});
  

function generarPreguntaNivel1() {
    // let pregunta = "";
    // const digitos = "0123456789";
    //const operadores = "+-*/";
    // const indiceOperador = Math.floor(Math.random() * 4);
    // const operadorRandom = operadores[indiceOperador];
    let primerNum = Math.floor(Math.random() * (9) + 1);
    let segundoNum = Math.floor(Math.random() * (9) + 1);
    const correcta = primerNum + segundoNum;
    let minima = correcta - 5;
    let maxima = correcta + 5;
    const operador = "+";
    let respuestas = [correcta, getRandom(minima, maxima), getRandom(minima, maxima), getRandom(minima, maxima)];
    const pregunta = {
        enunciado: `${primerNum} ${operador} ${segundoNum}`,
        respuestas,
        correcta: 0
    };

    return pregunta;
}

function generarPreguntaNivel2() {
    let primerNum = Math.floor(Math.random() * (50) + 1);
    let segundoNum = Math.floor(Math.random() * (25) + 1);
    const correcta = primerNum + segundoNum;
    let minima = correcta - 7;
    let maxima = correcta + 7;
    const operador = "+";
    let respuestas = [correcta, getRandom(minima, maxima), getRandom(minima, maxima), getRandom(minima, maxima)];
    const pregunta = {
        enunciado: `${primerNum} ${operador} ${segundoNum}`,
        respuestas,
        correcta: 0
    };
}

function generarPreguntaNivel3() {
    let primerNum = getRandom(5, 500);
    let segundoNum = getRandom(1, 100);
    const correcta = primerNum + segundoNum;
    let minima = correcta - 15;
    let maxima = correcta + 15;
    const operador = "+";
    let respuestas = [correcta, getRandom(minima, maxima), getRandom(minima, maxima), getRandom(minima, maxima)];
    const pregunta = {
        enunciado: `${primerNum} ${operador} ${segundoNum}`,
        respuestas,
        correcta: 0
    };
}

function generarPreguntaNivel4() {
    let primerNum = getRandom(500, 1200);
    let segundoNum = getRandom(100, 500);
    const correcta = primerNum + segundoNum;
    let minima = correcta - 50;
    let maxima = correcta + 50;
    const operador = "+";
    let respuestas = [correcta, getRandom(minima, maxima), getRandom(minima, maxima), getRandom(minima, maxima)];
    const pregunta = {
        enunciado: `${primerNum} ${operador} ${segundoNum}`,
        respuestas,
        correcta: 0
    };
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
