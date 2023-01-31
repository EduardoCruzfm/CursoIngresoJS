/* Eduardo Cruz
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar(){
	let nuemroUno;
	let numeroDos;
	let resultado;

	nuemroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;	

	nuemroUno = parseInt(nuemroUno)
	numeroDos = parseInt(numeroDos)
	resultado = nuemroUno + numeroDos;

	alert(`La Suma es ${resultado}`);	
}

function restar(){
	let nuemroUno;
	let numeroDos;
	let resultado;

	nuemroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;	

	nuemroUno = parseInt(nuemroUno)
	numeroDos = parseInt(numeroDos)
	resultado = nuemroUno - numeroDos;
	// vemos si es de tipo string o number
	// alert("resultado es de tipo: " + typeof resultado);
	// alert("numero uno es de tipo: " + typeof nuemroUno);
	// alert("numero dos es de tipo: " + typeof numeroDos);

	alert(`La Resta es ${resultado}`);
}

function multiplicar(){ 
	let nuemroUno;
	let numeroDos;
	let resultado;

	nuemroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;	

	nuemroUno = parseInt(nuemroUno)
	numeroDos = parseInt(numeroDos)
	resultado = nuemroUno * numeroDos;

	alert(`El Producto es ${resultado}`);
}

function dividir(){
	let nuemroUno;
	let numeroDos;
	let resultado;

	nuemroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;	

	nuemroUno = parseInt(nuemroUno)
	numeroDos = parseInt(numeroDos)
	resultado = nuemroUno / numeroDos;

	alert(`El cociente es ${resultado}`);
}

