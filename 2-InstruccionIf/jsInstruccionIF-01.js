/*Ejercicio 1bis: 
/con if
pedir a una persona que fue de vaciones , 
la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento 
hata 80km/h= lento 
hasta 100= buen ritmo
hasta 120= ahi de la ley 
mas = eso no se hace/ 
*/ 


/*Ejercicio 1 bis bis:
con if
ingresar el nombre y los datos requeridos para calcular el IMC , 
e informar a la persona si es:
Bajo peso <18.5
Peso normal 18,5-24.9
Preobesidad 25-26.9
Obesidad I 27-29.9
Obesidad II 30-34.9
Obesidad III >40
 */

















// Eduardo Cruz
function mostrar(){
	//tomo la edad
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (edad === 15) {
		alert("Niña bonita");
	}else {
		alert("Elije otro numero");
	}

}//FIN DE LA FUNCIÓN

/* Operadores relacionales

 Son operadores que me relacionan un operando con otro operando

== igual
!= distinto
> mayor que
< menor que
>= mayor o igual
<= menor o igual
									
					  number     operador	number
					  string			    string
					  ------		|       ------
					 operandos      V      operandos
	resultado tipo =>			  boolean
*/