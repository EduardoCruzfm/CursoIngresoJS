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