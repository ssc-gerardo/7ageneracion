const fs = require('fs')

fs.unlink('write.txt', (error) => {
    if (error){
        console.log("ya vlv")
        return
    }
    console.log('write.txt was deleted');
  });