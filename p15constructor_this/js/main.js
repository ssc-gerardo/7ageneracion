//pedir al usuario la cantidad de koders a registrar
//por cada koder, pedir nombre, apellidos, calificación en html, calificación en css, calificación en js,
//generar un objeto del tipo Koder por cada koder registrado
//guardarlo en una colección que se llame KodersList
//pt2:
//agregar a nuestro constructor un método que permita obtener el promedio del koder

function KoderConstructor(name,lastName,phone,birthday) {
    this.name = name
    this.lastName = lastName,
    this.html = html,
    this.css = css
    this.js
}


var koder = {
    name : undefined,
    lastName : undefined,
    phone : undefined,
    birthday : undefined      
      
}

kodersObj= []

const objectProps = (kodersObj, matrix ) => {
    matrix.forEach(element => {
        element.forEach(element => {
            
        });
    });

    for (prop in obj){
        let propiedad = prompt(`escribe la propiedad ${prop} de koder`)
        obj[prop] = propiedad;
    }
    console.log(obj)
}

objectProps(koder);

frase4 = frase.replace(/-/gi,'');

var kodersMatrix = [
    [
        "Israel",
        "Salinas Martínez",
        "5543788096",
        "27-09-1989"
    ],
    [
        "David",
        "Cermeño Moranchel",
        "5512312345",
        "14-11-1995"
    ]
]
getShortenedData => DCM-ddmmaa
output "DCM-141195"


function KoderConstructor(params) {
    this.name = name
    this.lastName = lastName,
    this.phone = phone,
    this.birthday
}

function KoderConstructor(name,lastName,phone,birthday) {
    this.name = name
    this.lastName = lastName,
    this.phone = phone,
    this.birthday = birthday
    this.showFullname
}

var vervezas  = [
    [
    "",
    "",
    "" 
    ],
    [
    "",
    "",
    ""    
    ],
    [
        "",
        "",
        ""    
    ]
]

*/

/*---------practica 2--------------------*/
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
