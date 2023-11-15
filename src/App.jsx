// App.jsx
import React, { useState, useEffect } from 'react';
import preguntas from './preguntas';
import { medidores } from './medidores';
import Resultados from './Resultados';

function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestasUsuario, setRespuestasUsuario] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [medidorRecomendado, setMedidorRecomendado] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    if (isFinished) {
      calcularRecomendaciones();
    }
  }, [isFinished, respuestasUsuario]);

  function handleAnswerSubmit(opcion) {
    const categoria = preguntas[preguntaActual].categoria;
    setRespuestasUsuario((prev) => ({
      ...prev,
      [categoria]: opcion,
    }));

    if (preguntaActual === preguntas.length - 1) {
      setIsFinished(true);
    } else {
      setPreguntaActual((current) => current + 1);
    }
    console.log('Respuestas del usuario:', respuestasUsuario);
  }

  function calcularRecomendaciones() {
    const tipoFlujoSeleccionado = respuestasUsuario.tipoFlujo.valor;
    const medidoresFiltrados = medidores[tipoFlujoSeleccionado];

    // Calculamos el valor total basado en las respuestas del usuario
    const valorTotal = Object.values(respuestasUsuario).slice(1) // ignorar la primera pregunta
      .reduce((total, current) => total + ((current.rango.min + current.rango.max) / 2), 0);

    // Encontrar el medidor con un valor ponderado más cercano al valorTotal
    const recomendacion = medidoresFiltrados.reduce((prev, current) => {
      const diferenciaActual = Math.abs(current.ponderado - valorTotal);
      const diferenciaPrev = Math.abs(prev.ponderado - valorTotal);
      return diferenciaActual < diferenciaPrev ? current : prev;
    }, medidoresFiltrados[0]); // iniciar con el primer medidor

    setMedidorRecomendado(recomendacion);

    console.log('Medidor recomendado:', recomendacion);
  }

  // Renderizado de preguntas y opciones de respuesta
  const pregunta = preguntas[preguntaActual];
  const renderizarOpciones = () => {
    return pregunta.opciones.map((opcion) => (
      <button
        key={opcion.valor}
        onClick={() => handleAnswerSubmit(opcion)}
        disabled={isFinished}
      >
        {opcion.textoRespuesta}
      </button>
    ));
  };

  function handlePrevQuestion() {
    if (preguntaActual > 0) {
      setPreguntaActual(preguntaActual - 1);
    }
  }

  function handleNextQuestion() {
    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
    }
  }

  const toggleExplanation = () => setShowExplanation(prev => !prev);

  return (
    <div className="app">
      {isFinished ? (
        <Resultados medidorRecomendado={medidorRecomendado} />
      ) : (
        <div className="pregunta-actual">
          <h2>{pregunta.titulo}</h2>
          <button
            className="boton-explicacion"
            onClick={toggleExplanation}
          >
            ?
          </button>
          {showExplanation && <p>{pregunta.explicacion}</p>}
          {renderizarOpciones()}
          <div className="navegacion">
            <button
              className="boton-navegacion"
              disabled={preguntaActual === 0}
              onClick={handlePrevQuestion}
            >
              ←
            </button>
            <button
              className="boton-navegacion"
              disabled={preguntaActual === preguntas.length - 1}
              onClick={handleNextQuestion}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );

}

export default App;
