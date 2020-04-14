const fs = require('fs')
fs.appendFile('write.txt', 'esto es algo extra','utf8', (error) => {
    if (error){
        console.log("ya vlv")
        return
    }
    console.log('Ya se actualizo este pedo!');
});