/*var bmentorsName = [
    "Brenda Gonzales",
    "Shalem Solis",
    "Jorge Ochoa",
    "Rurick Maqueo",
    "Alex Cruz",
    "Daniel Ortega"
]
var bmentorsNameTrans=[]
bmentorsName.forEach(element => { 
    var iniciales=[element.split(" ")];
    console.log(iniciales[0])
    console.log(iniciales[1])
    //bmentorsNameTrans[element]=element  
});
*/

//Práctica:
//Crear una función ó funciones que permitan al usuario elegir 
//una operación básica, indicar 2 valores, y ejecutar la operación 
//seleccionada. Imprimir el resultado
//output: "La ${operacion} de los dos números que indicaste es: ${resultado}"

//pedir a al ususario mediante un prompt la operacion que quiere hacer
//pedir al usuario mediante un prompt los dos numeros
//elegir la funcion y aplicar la operacion
//output de la operacion

const adittion = (number1,number2) => {
    printFunctrion("suma",number1+number2)
}

const substraction = (number1,number2) => {
    printFunctrion("resta",number1-number2)
}

const multiplication =(number1,number2) => {
    printFunctrion("multiplicacion",number1*number2)
}

const division = (number1,number2) => {
    printFunctrion("división",number1/number2)
}

const printFunctrion = (opertation, result) =>{
    console.log(`La ${opertation} de los dos números que indicaste es: ${result}`)
}


var operation = prompt("Cual es la operacion que deseas hacer 1 = suma, 2 = resta, 3 = multiplicacion, 4 = division","0");

var numbera= prompt("Escribe el promer numero","1")
var numberb = prompt("Escribe el segundo numero ","2")

var number1 = Number(numbera);
var number2 = Number(numberb);

if (operation == 1){
    adittion(number1,number2)
} else if (operation == 2){
    substraction(number1,number2)
} else if (operation == 3){
    multiplication(number1,number2)
} else if (operation == 4){
    division(number1,number2)
} 
