
function calcular() {
  const masa = parseFloat(document.getElementById("masa").value);
  const volumen = parseFloat(document.getElementById("volumen").value);
  const resultado = document.getElementById("resultado");

  if (!masa || !volumen || volumen <= 0) {
    resultado.innerText = "Introduce valores válidos.";
    return;
  }

  const densidad = masa / volumen;
  const densidadOro = 19.32;
  let mensaje = `Densidad calculada: ${densidad.toFixed(2)} g/cm³\n`;

  if (Math.abs(densidad - densidadOro) < 0.5) {
    mensaje += "Probablemente es oro puro.";
  } else {
    mensaje += "No parece ser oro puro.";
  }

  resultado.innerText = mensaje;
}
