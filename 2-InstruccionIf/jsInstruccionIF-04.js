//Eduardo Cruz
function mostrar(){
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	// Si estoy dentro del rango
	if(edad >= 13 && edad <=17){
		alert("Sos un adolecente");
	}
	

	// Si no estoy afuera del rango
	//if(!(edad < 13 || edad > 17)){   //  if( ! (estoy afuera del rango) )
	//	alert("Sos un adolecente");  //  con el "!" invierto el valor 
	//}								 //   y estaria en el rango

}//FIN DE LA FUNCIÓN

/* Operadores logicos

Evalua operandos booleanos y saca como conclucion un operador booleano
trabaja con true o false y devuelbe como resultado true o false.
Las respuestas depende de las entradas(depende de los operandos)

sus operandos son booleno

					  boolean    operador	boolean
					  			  logico
					  ------		|       ------
					 operandos      V      operandos
	resultado tipo =>			 boolean

	primero resuelve las oepraciones relacionales (>= <=)
	despues la operacion logica (&& ||)
*/