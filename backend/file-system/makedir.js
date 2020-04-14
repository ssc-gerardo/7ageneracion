const fs = require('fs');

nombre = "carpeta_de_prueba"

fs.mkdir(nombre, { recursive: true }, (error) => {
    if (error) throw error;
    if (error){
        console.log("ya vlv")
        return
    }
    console.log(`ya está tu carpeta: ${nombre}`)
  });