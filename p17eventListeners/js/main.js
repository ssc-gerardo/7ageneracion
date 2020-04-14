
/*Teniendo el array kodersDb, realizar las siguientes operaciones:
6.- En el elemento con el id "assistances-container" insertar una fila por cada koder obtenido en el paso 2, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{asistencias del koder}</td>
</tr>
***Notas***
Recordemos que podemos acceder a alguna propiedad de un objeto y asignar su valor a una variable con la sintaxis:
    var someVar = objeto.propiedad
Podemos crear contenido dinámico insertando variables mediante la sintaxis
    ${someVar}
así que podemos crear un elemento html con contenido dinámico de la siguiente forma:
var someObject = {
    songName = "Lago en el cielo",
    author = "Gustavo Cerati"
}
var mySong = someObject.songName;
var songAuthor = someObject.author;
var someElement = document.createElement("p");
-(con esto obtenemos un elemento <p></p>)
var someText = document.createTextNode(`Mi canción es ${mySong} y el autor es ${songAuthor}`)
-(con esto obtenemos un nodo de texto que dice "Mi canción es Lago en el cielo y el autor es Gustavo Cerati")
y después podemos crear un nodo completo:
someElement.appendChild(someText)
-(con esto obtenemos <p>Mi canción es Lago en el cielo y el autor es Gustavo Cerati</p>)
Happy Hacking!!!
*/
const kodersDb = [{
    name: "Armando",
    lastName: "Cortés Dominguez",
    deliveredPractices: 9,
    totalAssistance: 22
}, {
    name: "Sandra Paola",
    lastName: "Ramírez Hernández",
    deliveredPractices: 12,
    totalAssistance: 25
}, {
    name: "Iván Eduardo",
    lastName: "Sánchez Sánchez",
    deliveredPractices: 13,
    totalAssistance: 18
}, {
    name: "Leopoldo",
    lastName: "Ávila Luna",
    deliveredPractices: 8,
    totalAssistance: 22
}, {
    name: "Aurora",
    lastName: "Sánchez Guerrero",
    deliveredPractices: 15,
    totalAssistance: 19
}, {
    name: "Verónica",
    lastName: "de la Torre Hernández",
    deliveredPractices: 3,
    totalAssistance: 15
}, {
    name: "Grabriel",
    lastName: "Chávez Aguirre",
    deliveredPractices: 10,
    totalAssistance: 18
}, {
    name: "Berenice",
    lastName: "Ventura Esquiliano",
    deliveredPractices: 15,
    totalAssistance: 24
}, {
    name: "David Alejandro",
    lastName: "Martínez Hernández",
    deliveredPractices: 8,
    totalAssistance: 18
}, {
    name: "Hagen Isaac",
    lastName: "San Juan Martínez",
    deliveredPractices: 11,
    totalAssistance: 16
}]
//1.- Obtener a todos los koders cuyas practicas entregadas (deliveredPractices) sea menor a 10
//*filter
var filteredByPractices = kodersDb.filter(koder => koder.deliveredPractices < 10)
console.log(filteredByPractices)
//2.- Obtener a todos los koders cuya asistencia (totalAssistance) sea menor a 20
//*filter
var filteredByAssistance = kodersDb.filter(koder => koder.totalAssistance < 20)
console.log(filteredByAssistance)
//3.- Obtener el promedio general de prácticas entregadas
//*reduce
var totalPractices = kodersDb.reduce((accum,koder) => {
    return accum += koder.deliveredPractices
},0)
var practicesAverage = totalPractices / kodersDb.length
console.log(practicesAverage)
//4.- Obtener el promedio general de asistencias
//*reduce
var totalAssistances = kodersDb.reduce((total,koder) => {
    return total += koder.totalAssistance
},0)
var assitancesAverage = totalAssistances / kodersDb.length
console.log(assitancesAverage)
/*5.- En el elemento con el id "practices-container" insertar una fila por cada koder obtenido en el paso 1, debería tener la siguiente estructura:
.forEach*/
filteredByPractices.forEach((koder,index) => {
    let koderRow = document.createElement("tr");
    let koderNumberCell = document.createElement("td");
    let koderNumberText = document.createTextNode(index + 1);
    let koderNameCell = document.createElement("td");
    let koderNameText = document.createTextNode(`${koder.name} ${koder.lastName}`);
    let koderPracticesCell = document.createElement("td");
    let koderPracticesText = document.createTextNode(koder.deliveredPractices);
    koderNumberCell.appendChild(koderNumberText)
    koderNameCell.appendChild(koderNameText)
    koderPracticesCell.appendChild(koderPracticesText)
    koderRow.appendChild(koderNumberCell)
    koderRow.appendChild(koderNameCell)
    koderRow.appendChild(koderPracticesCell)
    let practicesContainer = document.getElementById("practices-container")
    practicesContainer.appendChild(koderRow)
})
/*6.- En el elemento con el id "assistances-container" insertar una fila por cada koder obtenido en el paso 2, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{asistencias del koder}</td>
</tr>*/
filteredByAssistance.forEach((koder,index) => {
    let koderRow = document.createElement("tr");
    let koderNumberCell = document.createElement("td");
    let koderNumberText = document.createTextNode(index + 1);
    let koderNameCell = document.createElement("td");
    let koderNameText = document.createTextNode(`${koder.name} ${koder.lastName}`);
    let koderassitancesCell = document.createElement("td");
    let koderassitancesText = document.createTextNode(koder.totalAssistance);
    koderNumberCell.appendChild(koderNumberText)
    koderNameCell.appendChild(koderNameText)
    koderassitancesCell.appendChild(koderassitancesText)
    koderRow.appendChild(koderNumberCell)
    koderRow.appendChild(koderNameCell)
    koderRow.appendChild(koderassitancesCell)
    let assitancesContainer = document.getElementById("assistances-container")
    assitancesContainer.appendChild(koderRow)
})
/*7.- En el elemento con el id "practices-average", mostrar el promedio general de prácticas entregadas obtenido en el paso 3*/
//practicesAverage
var practicesAverageContainer = document.getElementById("practices-average");
var practicesAverageText = document.createTextNode(practicesAverage)
practicesAverageContainer.appendChild(practicesAverageText)
/*8.- En el elemento con el id "assistance-average", mostrar el promedio general de asistencias entregadas obtenido en el paso 4*/
var assistanceAverageContainer = document.getElementById("assistance-average");
var assistanceAverageText = document.createTextNode(assitancesAverage)
assistanceAverageContainer.appendChild(assistanceAverageText)
/*seleccionamos el elemento html que va a escuchar algo*/
var addKoderButton = document.getElementById("submit-button");
/*le decimos al elemento cual es evento que va a escuchar y qué es lo que hará cuando el evento suceda*/
addKoderButton.addEventListener("click",() => {
    
    //2.- Con los datos, crear un objeto
    //3.- Agregar ese objeto a mi array
    //alert("hola a todos los koders!!!!")
    //1.- obtener los datos del formulario
    let name = document.getElementById("koder-name").value
    let lastName = document.getElementById("koder-last-name").value
    let deliveredPractices = parseInt(document.getElementById("koder-delivered-practices").value)
    let totalAssistance = parseInt(document.getElementById("koder-assistances").value)
    let koderObject = {name,lastName,deliveredPractices,totalAssistance}
    console.log(koderObject)
    kodersDb.push(koderObject)
    console.log(kodersDb)
})
var firstInput = document.getElementById("koder-name");
firstInput.addEventListener("focus",()=>{
    alert("aquí debe ir el nombre del koder")
})
