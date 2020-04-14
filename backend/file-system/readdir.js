const fs = require('fs');



fs.readdir('carpeta_de_prueba','utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })