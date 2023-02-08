//Eduardo Cruz
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
// se puede usar "condición ? expr1 : expr2"


}//FIN DE LA FUNCIÓN  
/*
let mensaje;

if (edad >= 18){
	mensaje = "es mayor de edad";
}else if(edad >= 13){           //por que descartamos arriba qeu no son mayores
 mensaje = "es adolecente";	
}else {
	mensaje = "ES un niño";
}

alert(mensaje);

usamos una sola salida en ves de varios alert()
*/

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