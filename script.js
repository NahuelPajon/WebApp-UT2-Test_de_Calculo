function generarPreguntaNivel1() {
    // let pregunta = "";
    // const digitos = "0123456789";
    //const operadores = "+-*/";
    // const indiceOperador = Math.floor(Math.random() * 4);
    // const operadorRandom = operadores[indiceOperador];
    let primerNum = Math.floor(Math.random() * (9) + 1);
    let segundoNum = Math.floor(Math.random() * (9) + 1);
    const operador = "+";
    let respuestas = [primerNum + segundoNum, primerNum - 3 + segundoNum, primerNum + 5 + segundoNum, primerNum - 8 + segundoNum];
    const pregunta = {
        enunciado: `${primerNum} ${operador} ${segundoNum}`,
        respuestas,
        correcta: 0
    };
}

function generarPreguntaNivel2() {
    let primerNum = Math.floor(Math.random() * (50) + 1);
    let segundoNum = Math.floor(Math.random() * (25) + 1);
    const operador = "+";
    let respuestas = [primerNum + segundoNum, primerNum - 3 + segundoNum, primerNum + 5 + segundoNum, primerNum - 8 + segundoNum];
    const pregunta = {
        enunciado: `${primerNum} ${operador} ${segundoNum}`,
        respuestas,
        correcta: 0
    };
}

function generarPreguntaNivel3() {
    let primerNum = getRandom(5, 500);
    let segundoNum = getRandom(1, 100);
    const operador = "+";
    let respuestas = [primerNum + segundoNum, primerNum - 3 + segundoNum, primerNum + 5 + segundoNum, primerNum - 8 + segundoNum];
    const pregunta = {
        enunciado: `${primerNum} ${operador} ${segundoNum}`,
        respuestas,
        correcta: 0
    };
}

function generarPreguntaNivel4() {
    let primerNum = getRandom(500, 1200);
    let segundoNum = getRandom(100, 500);
    const operador = "+";
    let correcta = primerNum + segundoNum;
    let respuestas = [correcta, primerNum + getRandom(25, 100) + segundoNum, primerNum - getRandom(25, 100) + segundoNum, primerNum - getRandom(25, 100) + segundoNum];
    const pregunta = {
        enunciado: `${primerNum} ${operador} ${segundoNum}`,
        respuestas,
        correcta: 0
    };
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
