function completarUrl() {
  // Obtén la hoja activa
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Obtén el rango de la columna A con los valores
  var rangoA = hoja.getRange('A1:A' + hoja.getLastRow());
  var valoresA = rangoA.getValues();
  
  // Recorre los valores de la columna A y completa la URL en la columna B
  for (var i = 0; i < valoresA.length; i++) {
    var endpoint = valoresA[i][0];
    
    // Verifica si el endpoint no está vacío
    if (endpoint) {
      var urlCompleta = 'https://recreus.myshopify.com/' + endpoint;
      
      // Escribe la URL completa en la columna B
      hoja.getRange(i + 1, 2).setValue(urlCompleta); // Columna B es la 2da columna
    }
  }
}
