//crear una función que pida al usuario las propiedades nombre {name}, apellido{lastName}, 
//edad{age} y teléfono{phone} de un koder y crear un objeto {koderObject} con esos datos


var koder = {
    name : undefined,
    lastName : undefined,
    age : undefined,
    phone : undefined        
}

const objectProps = (obj) => {
    for (prop in obj){
        let propiedad = prompt(`escribe la propiedad ${prop} de koder`)
        obj[prop] = propiedad;
    }
    console.log(obj)
}

objectProps(koder);

//pedir al usuario la cantidad de koders a registrar
//por cada koder, pedir nombre, apellidos, calificación en html, calificación en css, calificación en js,
//generar un objeto del tipo Koder por cada koder registrado
//guardarlo en una colección que se llame KodersList
//pt2:
//agregar a nuestro constructor un método que permita obtener el promedio del koder


/*---------practica 2--------------------*/





function Koder(nombre,apellidos,htmlScore, cssScore, jsScore){
    this.nombre = nombre
    this.apellidos = apellidos
    this.htmlScore = htmlScore
    this.cssScore = cssScore
    this.jsScore = jsScore
    
    this.promedio = function(){

        console.log(`El promedio del Koder ${nombre} es ${(this.htmlScore + this.cssScore + this.jsScore)/3}`)
        
    }
}




function Botana(nombre,tipo,sabor, tamano,precio){
    this.nombre = nombre
    this.tipo = tipo
    this.sabor = sabor
    this.tamano = tamano
    this.precio = precio
    
    this.slogan = function(){

        console.log(`En la compra de tus papas ${this.nombre} llevate una cheve`)
        
    }
}


var botanaBook =[]

var coleccionDeBotanas = []

const crearCerveza = (libroDeRecetas) => {
    libroDeRecetas.forEach(receta => {
        let nuevaCerveza = Cerveza(...receta)
        coleccionDeCervezas.push(nuevaCerveza)
    });
}

const pedirRecetas = () => {
    let cuantasRecetas = prompt("cuantas recetas?")
    parseInt(cuantasRecetas)
    var i;
    for (i=0; i < cuantasRecetas ; i++){
        let recetaName = prompt("¿Cual es el nombre de la botana?")
        let recetaType = prompt("¿Cual es el tipo de la botana?")
        let recetaFlavour = prompt("¿Cual es el sabor de la botana?")
        let recetaSize = prompt("¿Cual es el tamaño de la botana?")
        let recetaPrice = prompt ("¿Cuanto cuesta la botana")
        var receta = [recetaName,recetaType,recetaFlavour,recetaSize, recetaPrice]
        botanaBook.push(receta);
    }
    console.log(botanaBook)
}

const crearBotana = (recetaBook) => {
    recetaBook.forEach(receta => {
        let nuevaBotana = new Botana(...receta);
        coleccionDeBotanas.push(nuevaBotana);
    });
    console.log(coleccionDeBotanas)
}
