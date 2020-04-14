const fs = require('fs');

var files_list =[]

var carpeta = "carpeta_de_prueba"

fs.readdir(carpeta,'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    //console.log(data)
    data.forEach(element => {
        //console.log(element)
        files_list.push(String(element))
    });
    
    console.log("lista de archivos :"+files_list)

    borra()
})

const borra = () => {
    files_list.forEach(element => {
        actualFile = carpeta+"/"+element
        //console.log(actualFile)
        fs.unlink(actualFile, (error) => {
            if (error){
                console.log("ya vlv")
                return
            }
            console.log(`ya se borro: ${actualFile}`);
          });
    });
    borra_carpeta()
}

const borra_carpeta = () => {
    fs.rmdir(carpeta, (error) => {
        if (error){
            console.log("ya vlv")
            return
        }
        console.log(`ya se borro tu carpeta: ${carpeta}`);
    });
}