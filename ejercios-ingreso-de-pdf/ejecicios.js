// Ejercicioscalcule el perímetro de una 
// circunferencia
// 1. Crear un programa que defina una variable llamada “variable”. Cargar la variable con el 
// valor 5. Imprimir la variable por pantalla.

var variable;
variable = 5;
console.log(variable);

// 2. Encontrar los errores en el siguiente programa:
// console.log("Hola mundo);
console.log("Hola mundo");

// 3. Crear un programa que defina tres variables llamadas “variable_a”, “variable_b” y 
// “variable_resultado”. Cargar las primeras dos con los valores numéricos 33 y 77. Sumar
// ambas variables y guardar el resultado en la variable “variable_resultado”. Imprimir el 
// resultado por pantalla.

var variable1;
var variable2;
var resultado;

variable1 = 33;
variable2 = 77;
resultado = variable1 + variable2;
console.log(resultado);

// 4. Crear un programa que defina 5 variables llamadas “a”,“b”...“e” y una sexta variable 
// llamada “promedio”. Cargar las 5 variables con valores y calcular el promedio de los 
// mismos. Imprimir el resultado por pantalla.

var a;
var b;
var c;
var d;
var e;
var promedio;

a = 7;
b = 8;
c = 9;
d = 10;
e = 6;
promedio = (a + b + c + d + e) / 5;
console.log(promedio);


// Ejercicios if/else & Switch
// 1. Crear un programa que defina las variables “nota1” y “nota2”. Asignarle valores a 
// ambas. Comparar si “nota1” es mayor a “nota2” e imprimir el resultado de la 
// comparación.

var nota1;
var nota2;

nota1 = 9;
nota2 = 8;

var comparación = nota1 > nota2;

if (comparación) {
    console.log(comparación);
    
} else{
    console.log(false);
};

// 2. Crear un programa que defina las variables “nota1” y “nota2”. Asignarle valores a 
// ambas. Comparar si “nota1” es mayor a “nota2” imprimir el mensaje “Nota1 es mayor” 
// o “Nota2 es mayor” según el resultado de la comparación.

let nota1 = 7;
let nota2 = 10;

if (nota1 > nota2) {
    console.log("Nota1 es mayor");   
} else {
    console.log("Nota2 es mayor");
};

// 3. Las puntuaciones de las películas se clasifican en: 
// ◦ 0 : mala
// ◦ 1 : regular
// ◦ 2 : buena
// ◦ 3 : muy buena
// ◦ 4 : excelente
//  Definir una variable llamada “puntuacion” y cargarla con un valor de 0 a 4. Imprimir la 
// clasificación de la película según el valor numérico

let puntuacion = 4 ;

switch (puntuacion) {

    case 0:
        console.log("Mala");
        break;

     case 1:
        console.log("Regular");
        break;

    case 2:
            console.log("Buena");
            break;

     case 3:
            console.log("Muy buena");
            break;
            
     case 4:
            console.log("Exelente");
            break;    

    default:
        break;
};


// WHILE
let contador = 0;
while (contador < 10) {
     console.log( " Numero :" + contador);
     contador ++;
    
}

// FOR
let contador1 = 0 ;

for (let index = 0; index < 10; index++) {
    
    console.log("numero :" + index);
    contador1++;
    
}


// FOR CON BREAK
let contador2 = 0 ;

for (let index = 0; index < 10; index++) {
    
    console.log("numero :" + index);
    contador2++;

    if(contador2 == 5){
        break;
    }
    
} 

// Ejercicios
// 1. Crear un programa que imprima una cuenta regresiva de 59 a 0.

let regresiva = 59;

while (regresiva >= 0) {
    console.log("Cuenta regresiva "+ regresiva);
    regresiva--;
    
}



// 2. Crear un programa que imprima los números pares de 0 a 100.



let numerosII = 0;

while (true){
    console.log("Numero: " + numerosII);
    numerosII++

    if (100 <= numerosII) {
        break;
    }
}


// 3. Se escribió un programa para imprimir todos los números de 100 a 0 inclusive, en 
// forma descendiente, pero el código contiene errores, encontrar los errores del programa
// y corregirlos:


        var numero;

        for (numero=100 ; numero>=0 ; numero--){

        console.log("numero:"+numero);
       
    }



// 4. Crear un programa que imprima los números de 0 a 100 indicando en cada uno de ellos
// si el número es divisible por 3 o no.

let numeros = 0;

while (numeros < 100) {
    let divisible = "";
    numeros++
    
    if (numeros % 3 === 0) {
        divisible = "Es divisible por 3";
    } else {
        divisible = "No divisible por 3";  
    }

    console.log(`Numero: ${numeros} ${divisible}`);
}




// 5. Indicar la diferencia en los siguientes programas. ¿Se comportan de igual forma? En el 
// caso de no ser así, indicar la diferencia y la forma de corregirlos para que ambos se 
// comporten de forma equivalente.

// Programa 1

var numero;
numero = 5;

while (numero > 0) { //para que se comporten igual a proggrama 2 
                      //hay que usar el comparador >=

    console.log("numero:"+numero);
    numero--;
}
//tenemos una variable con un dato tipo numero,con el ciclo while evalua la condicon.
//Mientras sea verdadera (true) la condicon se ejecutara y el codigo dentro del bloque,
//el ciclo se acabara gracias a numero-- que resta 1 por cada iteracion

// Programa 2

var numero;
numero = 5;

while (true) {

    console.log("numero:"+numero);
    numero--;

    if(numero < 0){ //para que se comporten igual a programa 1
                    //hay que usar el comparador <=
    break;
    }
}
//tenemos una variable con un dato tipo numero,con el ciclo while no estamos evaluando
//una condicion, la estamos forzando a que sea verdadera (true) entonces se ejecutaria
//el codigo  dentro del bloque. el numero-- resta un 1 en cada iteracion y el IF evita 
//un ciclo  infinito cuando se cumple la condicional ejecuta el BREAK




// Ejercicios funciones

// 1. Crear un programa que tenga una función que  llamada “calcularPerimetro” y 
// reciba el radio como argumento. Probar la función con todos los valores de 
// radios enteros entre 1 y 10 e imprimir los resultados por pantalla.


let radio = 0;
while (radio < 10) {

    radio++;
   function calcularPerimetro(radio) {

    let diametro = radio * 2;
    let perimetro = 3.14 * diametro;
    console.log(`radio: ${radio} resultado ${perimetro}`);
    
}
calcularPerimetro(radio) 

}





// 2. Crear un programa que tenga una función que calcule el máximo entre 3 números 
// enteros pasados como argumento y devuelva el mayor.


function numeroMaximo(num1, num2, num3){
    let maximo = 0;

    if(num1 > num2){
        maximo = num1;
    }
    else if(num2 > num1){
        maximo = num2;
    }
     if(num3 > maximo){
        maximo = num3;
    }
    console.log(maximo);
}
numeroMaximo(1,2,3);
numeroMaximo(4,2,3);
numeroMaximo(1,5,3);


// 3. Crear un programa que tenga una función que calcule el área tanto de rectángulos 
// como de triángulos, para ello, la función debe recibir 3 argumentos:
// ◦ “flagTriangulo” : si recibe “true” se indica que es un triangulo, si recibe “false”

// se indica que es un rectangulo.
// ◦ “base” : valor de la base del triangulo o rectángulo.
// ◦ “altura” : valor de la altura del triangulo o rectángulo.