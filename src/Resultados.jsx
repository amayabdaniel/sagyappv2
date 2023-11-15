import React from 'react';

function Resultados({ medidorRecomendado }) {
  if (!medidorRecomendado) {
    return <p>No hay recomendaciones disponibles.</p>;
  }

  return (
    <div className="resultados">
      <h2>Recomendación de Medidor</h2>
      <ul>
        <li><strong>Instrumento:</strong> {medidorRecomendado.instrumento}</li>
      </ul>
    </div>
  );
}

export default Resultados;