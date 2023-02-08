/* Eduardo Cruz
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

/*
function mostrar(){
	let nombre;
	let edad;
	let mensaje;

	nombre = document.getElementById("txtIdNombre").value;
    edad = document.getElementById("txtIdEdad").value;
	
	// alert("Usted se llama " + nombre+ " y tiene " + edad + " años");
	mensaje = `Usted se llama ${nombre} y tiene ${edad} años`;
	alert(mensaje);
}
*/

/* Eduardo Cruz
Ejercicio 5.bis: se debe mostrar un mensaje:
"Perez, usted se llama jose y tiene 66 años" se debe obtener el apellido
de la manera que puedan
*/


function mostrar(){
	let nombre;
	let edad;
	let apellido;
	let mensaje;

	apellido = prompt("¿Cual es tu apellido?");


	nombre = document.getElementById("txtIdNombre").value;
    edad = document.getElementById("txtIdEdad").value;
	
	// alert("Usted se llama " + nombre+ " y tiene " + edad + " años");
	mensaje = `${apellido}, usted se llama ${nombre} y tiene ${edad} años`;
	alert(mensaje);
}

// https://onlinegdb.com/_h8S3gj5Z