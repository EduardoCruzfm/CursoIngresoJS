function mostrar()
{
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (edad <= 12) {
		alert("Sos un niño");
	}
	else if(edad >= 13 && edad <=17){
		alert("Sos un adolecente ");
	}else {
		alert("Sos mayor de edad");
	}



}//FIN DE LA FUNCIÓN  

/*
if (edad < 13) {
	alert("Es niño")
}
else if (edad < 18) {
	alert("Es adolecente")
}
else if (edad < 65) {
	alert("Es adulto")
}
else {
	alert("Anciano")
}
*/