function mostrar(){
	//tomo la edad  
	let edad;
	let estadoCivil;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if(estadoCivil === "Soltero" && edad >= 18){
		alert("Es soltero y no es menor.");
	}
}//FIN DE LA FUNCIÓN

// Otras formas
/*
if(estadoCivil === "Soltero" && edad > 17)

if(estadoCivil === "Soltero" && !(edad < 18))
estado = a soltero			y     lo opuesto (menor a 18)	

if(!(edad < 18 || estadoCivil != "Soltero"))
*/