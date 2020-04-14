//pedir al usuario la cantidad de koders a registar
//pedir tantos nombres de koder como el usuario haya indicado
//guardar cada nombre de cada koder en una colección
//de cada Koder imprimir únicamente el primer nombre


// Declarar variable registerNumber y asignarle el valor de un prompt
// Declarar la variable codersN y parsear la variable registerNUmber a number
//Declarar la variable i
//Declarar el array codersNames
//construir for que recorra la variable i de 0 a codersN
//en cada iteracion del for guardar en la posicion i de l array codersN el mensaje recibido de un prompt
//imprimir la primera posicion del array codersNames

var registerNumber

registerNumber = prompt("Escriba la cantidad de koders a registrar","3")

var codersN

codersN= Number(registerNumber)

var i;

var codersNames=[];

for ( i=0; i<codersN; i++){
    codersNames.push(prompt(`Escriba el nombre del coder numero ${i}`,"Nombre"));
}

codersNames.forEach(element => console.log(element.split(" ", 1)));


console.log(codersNames);
console.log(`El nombre del primer coder es ${codersNames[0]}`)



//Práctica:
//Crear una función ó funciones que permitan al usuario elegir 
//una operación básica, indicar 2 valores, y ejecutar la operación 
//seleccionada. Imprimir el resultado
//output: "La ${operacion} de los dos números que indicaste es: ${resultado}"

