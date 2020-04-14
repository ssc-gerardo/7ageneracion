/*var KodersQANTITY = prompt("cuantos koders")

KodersQANTITY = parseInt(KodersQANTITY);

var i;

var KoderNames = [];

for (let i = 0; i <KodersQANTITY; i++) {
    let KoderName = prompt(`ingnresa el nombre del coder ${i}`)
    KoderNames.push(KoderName)
}

const */

//ptarea


var kodersDb = [{
    name: "Eddy Alexander",
    lastName: "Ruiz Álvarez",
    deliveredPractices: 9,
    totalAssistance: 22
}, {
    name: "Iván",
    lastName: "Pedraza Sanchéz",
    deliveredPractices: 12,
    totalAssistance: 25
}, {
    name: "Mauricio",
    lastName: "López Suarez",
    deliveredPractices: 13,
    totalAssistance: 18
}, {
    name: "Xabier Enrique",
    lastName: "Hernández Hernández",
    deliveredPractices: 8,
    totalAssistance: 22
}, {
    name: "Raquel Monserrat",
    lastName: "Cruz Torres",
    deliveredPractices: 15,
    totalAssistance: 19
}, {
    name: "Etnar Uriel",
    lastName: "Sánchez González",
    deliveredPractices: 3,
    totalAssistance: 15
}, {
    name: "Gabriela Elvira",
    lastName: "Camarillo Luna",
    deliveredPractices: 10,
    totalAssistance: 18
}, {
    name: "Ana Marcela",
    lastName: "Casasola López",
    deliveredPractices: 15,
    totalAssistance: 24
}, {
    name: "Evelyn Fernanda",
    lastName: "Palacios Vera",
    deliveredPractices: 8,
    totalAssistance: 18
}, {
    name: "Víctor Octavio",
    lastName: "Torres Jimenez",
    deliveredPractices: 11,
    totalAssistance: 16
}]




var filterByPractices = kodersDb.filter((koder) => {
    return koder.deliveredPractices < 10
})

console.log(filterByPractices)

var filterByAsisstance = kodersDb.filter((koder) => {
    return koder.totalAssistance < 20
})


console.log(filterByAsisstance)


var totalPractices = kodersDb.reduce((accum,koder)=>{
    return accum += koder.deliveredPractices
},0)

console.log(totalPractices)

 var practicesAverge = totalPractices /kodersDb.length

console.log(practicesAverge)


var totalAssistances = kodersDb.reduce((total,koder) => {
    return  total += koder.totalAssistance
},0)

var assistancesAverage = totalAssistances / kodersDb.length

console.log(assistancesAverage)

filterByPractices.forEach((koder,index) => {
    let koderRow = document.createElement("tr");
    let koderNumberCell =  document.createElement("td");
    let koderNameCell = document.createElement("td");
    let koderPracticesCell = document.createElement("td");

    let koderNumberText = document.createTextNode( index + 1 );
    let koderNameText = document.createTextNode( koder.name + " " +  koder.lastName );
    let koderPracticesText = document.createTextNode(koder.deliveredPractices)

    koderNumberCell.appendChild(koderNumberText);
    koderNameCell.appendChild(koderNameText);
    koderPracticesCell.appendChild(koderPracticesText);

    koderRow.appendChild(koderNumberCell)
    koderRow.appendChild(koderNameCell)
    koderRow.appendChild(koderPracticesCell)

    let practicesContainer = document.getElementById("practices-container")
    practicesContainer.appendChild(koderRow)
})


filterByAsisstance.forEach((koder,index) => {
    let koderRow = document.createElement("tr");
    let koderNumberCell =  document.createElement("td");
    let koderNameCell = document.createElement("td");
    let koderAsistanceCell = document.createElement("td");

    let koderNumberText = document.createTextNode( index + 1 );
    let koderNameText = document.createTextNode( koder.name + " " +  koder.lastName );
    let koderAsistanceText = document.createTextNode(koder.totalAssistance)

    koderNumberCell.appendChild(koderNumberText);
    koderNameCell.appendChild(koderNameText);
    koderAsistanceCell.appendChild(koderAsistanceText);

    koderRow.appendChild(koderNumberCell)
    koderRow.appendChild(koderNameCell)
    koderRow.appendChild(koderAsistanceCell)

    let AsistanceContainer = document.getElementById("assistances-container")
    AsistanceContainer.appendChild(koderRow)
})


var practicesAverageContainer = document.getElementById("practices-average");
var practicesAverageText = document.createTextNode(practicesAverge)

practicesAverageContainer.appendChild(practicesAverageText)


var asistanceAverageContainer = document.getElementById("assistance-average");
var asistanceAverageText = document.createTextNode(assistancesAverage);

asistanceAverageContainer.appendChild(asistanceAverageText);
