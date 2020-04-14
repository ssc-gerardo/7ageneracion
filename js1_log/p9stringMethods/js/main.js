// tener los valores de x y de y y compararlos, si x>y  mostrar msje
//si x<y mostrar mensaje que lo indique 

//Algoritmo 
/*
var x = 5
var y = 4

var diferencia = (x<y)? console.log("x es menor") : console.log("y es menor");
console.log("diferencia",diferencia);
var diferencia = (x<y)? console.log("x es menor") : console.log("y es menor");

if (x>y){
    console.log("x es mayor")

}
else if (x<y){
    console.log("y es mayor")
}
else{
    console.log("x es igual a y")
}

// saber si el resultado de una multiplicacion es par o non
//se declaran las variables 
//se multiplican
//se verifica si el resultado es par o non 
//se imprime mensaje 

var mult = x*y;

console.log("el resultado de x*y=", mult);
console.log(mult%2)
if ((mult % 2) == 0){
    console.log("el resultado es par");
} 
else{
    console.log("el resultado es non")
}


var esPar = ((mult % 2) == 0)? console.log("el resultado es par") : console.log("el resultado es non")

var tomadaDePrompt = prompt("como te llamas","guapo")

console.log(tomadaDePrompt)
*/

/* 
Calcular el area de un circulo, 
recibir un numero en la parte del usuario y calcular el area de un circulo  cuyo radio sea idual al numero proporcionado 
*/



//declamos PI y asignamos 3.141632
//declaramos radio 
//asignar a radio el valor obtenido de un prompt
//cambiar de string a Number para poder hacer operaciones
//declaramos area, y realizamos operacion para sacar el area y la asignamos a area
//verificar con if si se recibio el radio,si es  0 mostrar mensaje no se recibio radio 
// y si no imprimir area y radio

var PI;

PI = 3.141632

var radio;

radio = prompt("Cual es el radio de tu circulo","0")

radioN = Number(radio)

var area = PI * (radioN*radioN)

if (radioN == 0){
    console.log("No se recibio un radio");
} else {
    console.log(`se recibio el radio ${radio} y su area es ${area}`)
}