/* Eduardo Cruz
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar(){
	let nuemroUno;
	let numeroDos;
	let resultado;

	// nuemroUno = document.getElementById("txtIdNumeroUno").value;
	// numeroDos = document.getElementById("txtIdNumeroDos").value;	

	nuemroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	// resultado = nuemroUno + numeroDos;

	resultado = `La Suma es ${nuemroUno + numeroDos}`;
	alert(resultado);	
}

function restar(){
	let nuemroUno;
	let numeroDos;
	let resultado;

	// nuemroUno = ;
	// numeroDos = ;	

	nuemroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	// resultado = nuemroUno - numeroDos;

	resultado = `La Resta es ${nuemroUno - numeroDos}`;
	// vemos si es de tipo string o number
	// alert("resultado es de tipo: " + typeof resultado);
	// alert("numero uno es de tipo: " + typeof nuemroUno);
	// alert("numero dos es de tipo: " + typeof numeroDos);

	alert(resultado);
}

function multiplicar(){ 
	let nuemroUno;
	let numeroDos;
	let resultado;

	// nuemroUno = ;
	// numeroDos = ;	

	nuemroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	// resultado = nuemroUno * numeroDos;
	resultado = `El Producto es ${nuemroUno * numeroDos}`;

	alert(resultado);
}

function dividir(){
	let nuemroUno;
	let numeroDos;
	let resultado;

	// nuemroUno = ;
	// numeroDos = ;	

	nuemroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	// resultado = nuemroUno / numeroDos;
	resultado = `El cociente es ${nuemroUno / numeroDos}`;

	alert(resultado);
}

