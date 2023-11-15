import React from "react";

const Recomendaciones = ({ medidorRecomendado }) => {
  return (
    <div className="recomendaciones">
      <h2>Recomendación de Medidor</h2>
      {medidorRecomendado ? (
        <p>
          El medidor recomendado para ti es: {medidorRecomendado.instrumento}
        </p>
      ) : (
        <p>No se encontró una recomendación basada en tus respuestas.</p>
      )}
      {/* Botón para reiniciar el cuestionario (si es necesario) */}
    </div>
  );
};

export default Recomendaciones;
