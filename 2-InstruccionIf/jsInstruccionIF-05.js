//Eduardo Cruz
function mostrar(){
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if(edad >= 1 && edad <= 12){
		alert("NO sos un adolecente");
	}else if (edad >= 18){
		alert("NO sos un adolecente");
	}
/* Condicion que es verdadera para los valores de edad que estan por 
debajo o por encima del rango [13,7] */

//    (Pregunto si estoy afuera del rango)
	//if(edad < 13 || edad > 17){
	//	alert("NO sos un adolecente");
	//}

//    (Pregunto si no estoy adentro del rango) 
//	  aveces se resultara mas facil la contraintuituva
	//if(!(edad >= 13 && edad <=17)){
	//	alert("NO sos un adolecente")
	//}
 
}//FIN DE LA FUNCIÓN