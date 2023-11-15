const preguntas = [
  {
    categoria: "tipoFlujo",
    titulo: "Tipo de Flujo a Medir",
    explicacion: "Elija el tipo de flujo que necesita medir, como agua, electricidad o gas.",
    opciones: [
      { textoRespuesta: "Agua", valor: "agua" },
      { textoRespuesta: "Electricidad", valor: "electricidad" },
      { textoRespuesta: "Gas", valor: "gas" },
    ],
  },
  {
    categoria: "precision",
    titulo: "Nivel de Precisión Requerido",
    explicacion: "explicacion 2",
    opciones: [
      { textoRespuesta: "Alta precisión", rango: { min: 7, max: 10 } },
      { textoRespuesta: "Precisión estándar", rango: { min: 0, max: 6 } },
    ],
  },
  {
    categoria: "presupuesto",
    titulo: "Rango de Presupuesto",
    explicacion: "explicacion 3",
    opciones: [
      { textoRespuesta: "Económico", rango: { min: 7, max: 10 } },
      { textoRespuesta: "Moderado", rango: { min: 4, max: 6 } },
      { textoRespuesta: "Premium", rango: { min: 0, max: 3 } },
    ],
  },
  {
    categoria: "soporte",
    titulo: "Cobertura de Soporte Posventa",
    explicacion: "explicacion 4",
    opciones: [
      {
        textoRespuesta: "Cobertura alta",
        rango: { min: 7, max: 10 },
      },
      {
        textoRespuesta: "Cobertura estándar",
        rango: { min: 0, max: 6 },
      },
    ],
  },
  {
    categoria: "disponibilidad",
    titulo: "Disponibilidad en el mercado",
    explicacion: "explicacion 5",
    opciones: [
      {
        textoRespuesta: "Disponibilidad inmediata",
        rango: { min: 7, max: 10 },
      },
      {
        textoRespuesta: "Disponibilidad estándar",
        rango: { min: 0, max: 6 },
      },
    ],
  },
  {
    categoria: "certificacion",
    titulo: "Certificación",
    explicacion: "explicacion 6",
    opciones: [
      {
        textoRespuesta: "Internacional",
        rango: { min: 7, max: 10 },
      },
      {
        textoRespuesta: "Nacional",
        rango: { min: 0, max: 6 },
      },
    ],
  },
  {
    categoria: "tecnologia",
    titulo: "Tecnología de Medición",
    explicacion: "explicacion 7",
    opciones: [
      { textoRespuesta: "Tecnología alta", rango: { min: 7, max: 10 } },
      {
        textoRespuesta: "Tecnología estándar",
        rango: { min: 0, max: 6 },
      },
    ],
  },
];

export default preguntas;
