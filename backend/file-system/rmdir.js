const fs = require('fs')


nombre = "carpeta_de_prueba"
fs.rmdir(nombre, (error) => {
    if (error){
        console.log("ya vlv")
        return
    }
    console.log(`ya se borro tu carpeta: ${nombre}`);
  });