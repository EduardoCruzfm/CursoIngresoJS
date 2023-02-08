/* Eduardo Cruz
Ejercicio 8.bis: Ingresar dos numeros por id
Se pide:
mostrar por alert:
a) La suma de los dos numeros
b) El promedio de los numeros
c) El modulo de los numeros (el primero en modulo del segundo)
*/


function SacarResto(){
	let numUno;
	let numDos;
	let suma;
	let promedio;
	let mensajeUno;
	let mensajeDos;
	let mensajeTres;
	
	numUno = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDivisor").value);	

	suma = numUno + numDos;
	mensajeUno = `La suma es ${suma}`;
	alert(mensajeUno);

	promedio = (numUno + numDos) / 2;
	mensajeDos =`El promedio es ${promedio}`;
	alert(mensajeDos);

	modulo = numUno % numDos;
	mensajeTres =`El modulo es ${modulo}`;
	alert(mensajeTres);
	
} 
// https://onlinegdb.com/P8gDhc1rw















/* Eduardo Cruz
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

/*
function SacarResto(){
	let dividendo;
	let divisor;
	let resultado;
	// Es el numero que se va a dividir
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	// Es el numeropor el cual se divide
	divisor = document.getElementById("txtIdNumeroDivisor").value;	

	dividendo = parseInt(dividendo)
	divisor = parseInt(divisor)
	resultado = `El Resto es ${dividendo % divisor}`;

	alert(resultado);
	
}*/
/* Operador aritmeticos ( +, - , * , / , % (operador modulo / resto))

									|
									V
					  number     operador	number
					  ------		|       ------
					 operandos      V      operandos
	resultado tipo =>			  number


			Dividendo |__  Divisor 				
			  Resto %      Cociente				

			9 |__ 3
modulo	--> 0     3

			9 |__ 2      Agregar una coma y bajar un cero es llevar ala 
			10    4.5    minima expresion y no es resto del que estamos hablando. 
						 cuando el cociente tiene decimales frenamos

			9 |__ 2	     Lo que estamos buscando
		-->	1	  4


   Prioridad de operadores

   + Prioridad
			()
			* / %

   - Prioridad
			+ -

let x = 40;
let y = 20;
let z = 10;
let resultado;
resultado = x + y * z; 	
 separamos en terminos, da 240 priemro (y * z) despues + x
 
 alert(resultado)
 
 
   + -
let x = 40;
let y = 20;
let z = 10;
let resultado;
resultado = x * y /z; 
 el orden o afecta el resultado(son operaciones inversas)
 al tener 2 operadores de la misma prioridad de ejecuta de izquieda a derecha
 
 Si quiero que resuelva primero x + y y despues z usamos ()

let x = 40;
let y = 20;
let z = 10;
let resultado;
resultado = (x + y) * z; 
 Asi forzamos que se ejecute lo que esta dentro de parentesis
 los parentesis tiene la maxima prioridad


let x = 40;
let y = 20;
let z = 10;
let resultado;
resultado = ((x + y) / y) * z; 
 En este caso se resuelve de adentro hacia afuera
*/