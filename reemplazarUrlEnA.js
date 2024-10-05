function reemplazarUrlEnA() {
  // Obtén la hoja activa
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Obtén el rango de la columna A con los valores
  var rangoA = hoja.getRange('A1:A' + hoja.getLastRow());
  var valoresA = rangoA.getValues();
  
  // Recorre los valores de la columna A y realiza el reemplazo
  for (var i = 0; i < valoresA.length; i++) {
    var textoOriginal = valoresA[i][0];
    
    // Realiza el reemplazo si la celda no está vacía
    if (textoOriginal && textoOriginal.includes('')) {
      var nuevoTexto = textoOriginal.replace('', '');
      
      // Escribe el nuevo texto en la columna B
      hoja.getRange(i + 1, 2).setValue(nuevoTexto); // Columna B es la 2da columna
    }
  }
}
