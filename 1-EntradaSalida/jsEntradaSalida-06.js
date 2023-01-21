/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar(){
	let nuemroUno;
	let numeroDos;
	let resultado;
	nuemroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	nuemroUno = parseInt(nuemroUno)
	numeroDos = parseInt(numeroDos)
	resultado = nuemroUno + numeroDos;

	alert(resultado);
}

// parseInt(parsear) es convertir algo de tipo no numerico en numerico
/* Castear es converti un tipo de 

dato numerico en otro tipo de dato numerico 
ejemplo:
converitr un numero entero en un flotante.

parseFloat convertir un dato de tipo cadena a decimales */