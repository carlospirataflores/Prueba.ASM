function downloadExcel() {
    // Puedes agregar lógica personalizada para descargar el archivo si es necesario
    alert('Descargar CSV');
  }
  
  function displayCSV() {
    var excelObject = document.getElementById('excelObject');
    
    // Cambia el nombre del archivo CSV según sea necesario
    var csvFilePath = 'FARE.csv';
  
    // Hacemos una solicitud AJAX para cargar el contenido del archivo CSV
    var xhr = new XMLHttpRequest();
    xhr.open('GET', csvFilePath, true);
  
    xhr.onload = function () {
      if (xhr.status === 200) {
        // El contenido del archivo CSV
        var csvContent = xhr.responseText;
  
        // Mostramos el contenido en el iframe
        excelObject.srcdoc = '<style>body{margin: 0;}</style><iframe style="width: 100%; height: 100%;" srcdoc="<pre>' + csvContent + '</pre>" frameborder="0"></iframe>';
      }
    };
  
    xhr.send();
  }
  
  // Llamamos a la función para mostrar el contenido del CSV cuando se carga la página
  displayCSV();
  
  
  
  
  