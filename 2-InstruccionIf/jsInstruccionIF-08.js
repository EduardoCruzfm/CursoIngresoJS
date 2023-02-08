/*Eduardo Cruz
 Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
  NO HACER NADA, pero si no es asi, y es soltero y no es menor, mostrar 
  el siguiente mensaje: 'Es soltero y no es menor.'*/

function mostrar(){
	//tomo la edad  
	let edad;
	let estadoCivil;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if(estadoCivil === "Soltero" && edad >= 18){
		mensaje = "Es soltero y no es menor.";
		alert(mensaje);
	}
}
//FIN DE LA FUNCIÓN

// Otras formas
/*
if(estadoCivil === "Soltero" && edad > 17)

if(estadoCivil === "Soltero" && !(edad < 18))
estado = a soltero			y     lo opuesto (menor a 18)	

if(!(edad < 18 || estadoCivil != "Soltero"))
*/