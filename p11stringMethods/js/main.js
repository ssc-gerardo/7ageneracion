//Práctica 1
//obtener el nombre completo del usuario e indicarle cuántos caracteres tiene su nombre
//Práctica 2
//obtener el nombre completo del usuario
//Contar cuántos caracteres tiene
//si su nombre tiene menos de 15 caracteres, indicarle mediante un mensaje que su nombre es mmuy corto
//si tiene más de 15 caracteres indicarle que su nombre es muy largo
//Práctica 3
//obtener el nombre completo del usuario
//contar cuántas vocales tiene

/*decalarar variable name y asignar mediante un prompt al no*/
/*
var str = "Hello world, welcome to the universe.";
var nindex = str.indexOf("o");
console.log(nindex)

nombre = prompt("Cual es el radio de tu circulo","Nombre")

var n = nombre.length;

console.log(`La longitud del nombre: ${nombre} es ${n}` );

if (n<15){
    console.log(`La longitud del nombre: ${nombre} es ${n} y es menor a 15 caracteres` );
} else {
    console.log(`La longitud del nombre: ${nombre} es ${n} y es mayor a 15 caracteres` );
}

var vocales= ["a","e","i","o","u"]
var concurrenciaVocales=[0,0,0,0,0]

for (voc in nombre){
    if (nombre[voc]=="a"){
        concurrenciaVocales[0]= concurrenciaVocales[0] +1 
    } else if (nombre[voc]=="e"){
        concurrenciaVocales[1]= concurrenciaVocales[1] +1
    }else if (nombre[voc]=="i"){
        concurrenciaVocales[2]= concurrenciaVocales[2] +1
    }else if (nombre[voc]=="o") {
        concurrenciaVocales[3]= concurrenciaVocales[3] +1
    }else if (nombre[voc]=="u") {
        concurrenciaVocales[4]= concurrenciaVocales[4] +1
    }
}
 console.log(concurrenciaVocales)
*/
/*
String.prototype.countVowels = function()
{
var vowels = this.match(/[aeiou]/gi);
return (vowels === null) ? 0 : vowels.length;
}
*/
/*
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
}*/


/*

Recibir una palabra del usuario, y formar una nueva palabra usando las dos primeras
 y las dos últimas letras de esa palabra. 
 
 Si la palabra tiene menos de 5 caracteres, enviar un mensaje de error al usuario 
 indicándoselo 
 
pedir al usuario nombre y edad, y mostar un mensaje que diga "hola, 
soy {nombre} y tengo {edad} años" 

Del texto "Cada estudiante tiene su ritmo,
cada estudiante tiene su talento, y cada estudiante complementa al estudiante que 
tiene a su lado" 

Contar cuántas veces se usa la palabra "estudiante" y reemplazar
todas las coincidencias por la palabra "Koder", y mostrar el mensaje de nuevo al usuario*/

//

//Se define la variable word
//A la variable word se le asigna el valor obtenido del metodo prompt con el mensaje Escribe tu palabra y el valor por default palabra 
//Se define la variable countCharWord y se le asigna la longitud de la palabra word
//Se aplica la condicion si countCharWord es menor a 5 caracteres : se muestra un mensaje de error
//Si la palabra no es menor a 5 caracteres : 
//se define la variable firstWord y se le asigna las dos ultimas letras de la palabra word
// se define la variable secondtWord y se le asigna las dos primeras letras de la palabra word
//se define la variable newWord y se le asigna el valor de la concatenacion de las variables firstWord y secondWord 
//se muestra el valor de newWord

var word = prompt("Escribe tu palabra","palabra")

var countCharWord = word.length;

if (countCharWord <5){
    console.error(`La longitud de la palabra es menor a 5 caracteres` );
} else {
    var firstWord = word.substring(countCharWord -2, countCharWord);
    var secondWord = word.substring(0, 2);
    console.log(firstWord);
    console.log(secondWord);
    var newWord = firstWord.concat(secondWord);
    console.log(`This is my new word : ${newWord}`);
}

//Se define la variable name y se le asigna el valor obtenido del metodo prompt
//Se define la variable age y se le asigna el valor obtenido del metodo prompt
//Se muestra un mensaje con la edad y el nombre obtenidos 
//Se define la variable textToAnalize 
//

var name = prompt("Escribe tu nombre","Nombre")

var age = prompt("Escribe tu edad","Edad")

console.log(`Hola soy ${name} y tengo ${age} años`)

var textToAnalize = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"

var res = textToAnalize.replace(/estudiante/g, "Koder");

var count = (textToAnalize.match(/estudiante/g) || []).length;

console.log(`La palabra estudiante aparece ${count} veces`);

console.log(res);



//var str = "Hello world!";
/*var firstWord = word.substring(countCharWord -2, countCharWord);
var secondWord = word.substring(0, 2);
console.log(firstWord);
console.log(secondWord);

var newWord = firstWord.concat(secondWord);

console.log(`This is my new word : ${newWord}`);
*/
/*
console.log(`La longitud del nombre: ${nombre} es ${n}` );

if (countCharWord <5){
    console.log(`La longitud del nombre: ${nombre} es ${n} y es menor a 15 caracteres` );
} else {
    console.log(`La longitud del nombre: ${nombre} es ${n} y es mayor a 15 caracteres` );
}

radioN = Number(radio) */