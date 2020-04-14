const fs = require('fs')

nombre = "Carpeta_de_prueba/archivo4"


fs.writeFile(nombre,'escribiendo archivos','utf8',(error) => {
    if (error){
        console.log("ya vlv")
        return
    }
    console.log('termino todo chido')
})

fs.readFile(nombre,'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })