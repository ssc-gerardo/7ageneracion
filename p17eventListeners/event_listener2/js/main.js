var kodersArray = [
]
const saveKoder = () => {
    let koderName = document.getElementById("koder-name").value;
    let koderLastName = document.getElementById("koder-last-name").value;
    let koderDeliveredPractices = document.getElementById("koder-delivered-practices").value;
    let koderAssistances = document.getElementById("koder-assistances").value;
    
    let koderObject = {koderName,koderLastName,koderDeliveredPractices,koderAssistances}
    
    console.log(koderObject)
    kodersArray.push(koderObject);
    printKoders();
    printCards();
}
const printKoders = () => {
    document.getElementById("koders-wrapper").innerHTML = ""
    kodersArray.forEach((koder,index) => {
        let koderFullName = koder.koderName + " " + koder.koderLastName;
        let koderAssistances = koder.koderAssistances;
        let koderDeliveredPractices = koder.koderDeliveredPractices;
        let currentContent = document.getElementById("koders-wrapper").innerHTML;  
        let newContent = `
        <div class="col-12 col-md-3">
            <tr id='koder-${index}'>
                <td>${index + 1}</td>
                <td><span class="text-uppercase">${koderFullName}</span></td>
                <td>${koderAssistances}</td>
                <td>${koderDeliveredPractices}</td>
                <td>
                    <div class='btn btn-danger' id='btn-delete'>Eliminar</div>
                </td>
            </tr>
        </div>
            `
        document.getElementById("koders-wrapper").innerHTML= currentContent + newContent;
    })
}
//var saveKoderBtn = document.getElementById("submit-button");
//saveKoderBtn.addEventListener("click",saveKoder)



const printCards = () => {
    document.getElementById("koders-cards").innerHTML = ""
    kodersArray.forEach((koder) => {
        let koderFullName = koder.koderName + " " + koder.koderLastName;
        let koderAssistances = koder.koderAssistances;
        let koderDeliveredPractices = koder.koderDeliveredPractices;
        let currentContent = document.getElementById("koders-cards").innerHTML;  
        let newContent = `
        <div class="card mt-3">
            <div class="card-body">
              <h5 class="card-title">${koderFullName}</h5>
        
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Prácticas entregadas: ${koderDeliveredPractices}v</li>
                  <li class="list-group-item">Asistencias: ${koderAssistances}</li>
                </ul>
        
              <div class="btn btn-danger mt-3 btn-block">Eliminar</div>
            </div>
        </div>
        `
        document.getElementById("koders-cards").innerHTML= currentContent + newContent;
    })
}
var saveKoderBtn = document.getElementById("submit-button");
saveKoderBtn.addEventListener("click",saveKoder)


var deleteButons = document.getElementsByClassName("btn-danger");

deleteButons.addEventListener("")